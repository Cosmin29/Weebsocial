package com.weebsocial.server.config;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jndi.JndiObjectFactoryBean;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;
//import ro.siveco.internship2022.domain.repository.BaseRepositoryImpl;

import javax.naming.NamingException;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceContext;
import javax.sql.DataSource;
import java.util.Properties;

@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(
//        basePackageClasses = { MyEntityRepository.class },
        //repositoryBaseClass = BaseRepositoryImpl.class,
        transactionManagerRef = "dsTransactionManager",
        entityManagerFactoryRef = "dsEntityManagerFactory"
)public class DataSourceConfig {

    @Value("${spring.datasource.jndi-name}")
    private String databasePropertiesJndiName;


/*    @Value("${spring.datasource.driver-class-name}")
    private String driverClassname;
    @Value("${spring.datasource.url}")
    private String url;
    @Value("${spring.datasource.username}")
    private String username;
    @Value("${spring.datasource.password}")
    private String password;*/


    /*
        @Bean(name = "dsDataSource")
        public DataSource dataSource(
                    //@Qualifier("dataSourceProperties")
                    DataSourceProperties dataSourceProperties
        )
        {
            return DataSourceBuilder.create()
                    .url(dataSourceProperties.getUrl())
                    .username(dataSourceProperties.getUsername())
                    .password(dataSourceProperties.getPassword())
                    .driverClassName(dataSourceProperties.getDriverClassName())
                    .build();
        }
    */
    @Bean(name = "dsDataSource", destroyMethod = "")
    public DataSource jndiDataSource() throws IllegalArgumentException, NamingException {
        JndiObjectFactoryBean bean = new JndiObjectFactoryBean();
        bean.setJndiName("java:comp/env/" + databasePropertiesJndiName);
        bean.setProxyInterface(DataSource.class);
        bean.setLookupOnStartup(false);
        bean.afterPropertiesSet();
        return (DataSource) bean.getObject();
    }

    @Bean(name = "dsEntityManagerFactory")
    @PersistenceContext(unitName = "dsPersistenceUnit")
    public EntityManagerFactory entityManagerFactory(
            JpaPropertiesConfig jpaConfig,
            @Qualifier("dsDataSource") DataSource dataSource,
            @Qualifier("dsJpaVendorAdapter") JpaVendorAdapter jpaVendorAdapter
    )
    {
        LocalContainerEntityManagerFactoryBean factoryBean = new LocalContainerEntityManagerFactoryBean();
        factoryBean.setDataSource(dataSource);

        Properties jpaPropertiesP = new Properties();
        jpaPropertiesP.setProperty("hibernate.default_schema",jpaConfig.getDefault_schema());
        factoryBean.setJpaProperties(jpaPropertiesP);
        factoryBean.setJpaVendorAdapter(jpaVendorAdapter);
        factoryBean.setPackagesToScan("com.weebsocial.server.domain");
        factoryBean.setPersistenceUnitName("dsPersistenceUnit");
        factoryBean.afterPropertiesSet();
        return (EntityManagerFactory) factoryBean.getObject();
    }

    @Bean(name="dsJpaVendorAdapter")
    public JpaVendorAdapter hibernateJpaVendorAdapter(){
        HibernateJpaVendorAdapter hibernateJpaVendorAdapter = new HibernateJpaVendorAdapter();

        hibernateJpaVendorAdapter.setShowSql(true);
        hibernateJpaVendorAdapter.setGenerateDdl(true);
        hibernateJpaVendorAdapter.setDatabasePlatform("org.hibernate.dialect.PostgreSQLDialect");

        return hibernateJpaVendorAdapter;
    }

    @Bean(name = "dsTransactionManager")
    public PlatformTransactionManager transactionManager(@Qualifier("dsEntityManagerFactory") EntityManagerFactory entityManagerFactory)
    {
        JpaTransactionManager txManager = new JpaTransactionManager();
        txManager.setEntityManagerFactory((jakarta.persistence.EntityManagerFactory) entityManagerFactory);
        return txManager;
    }

    @Bean
    public JdbcTemplate jdbcTemplate(DataSource dataSource) {
        return new JdbcTemplate(dataSource);
    }

    /*
    @Bean
    public LocalSessionFactoryBean sessionFactory() {
        LocalSessionFactoryBean sessionFactory = new LocalSessionFactoryBean();
        sessionFactory.setDataSource(dataSource());
        sessionFactory.setPackagesToScan(
                new String[]{"ro.simavi.internship.domain"});
        sessionFactory.setHibernateProperties(hibernateProperties());

        return sessionFactory;
    }

    private final Properties hibernateProperties() {
        Properties hibernateProperties = new Properties();
        hibernateProperties.setProperty("hibernate.hbm2ddl.auto", "none");
        hibernateProperties.setProperty("hibernate.dialect", "org.hibernate.dialect.PostgreSQL82Dialect");
        hibernateProperties.setProperty("hibernate.show_sql", "true");
        hibernateProperties.setProperty("hibernate.format_sql", "true");
        hibernateProperties.setProperty("hibernate.default_schema", "practica");

        return hibernateProperties;
    }

    @Bean
    public DataSource dataSource() {
        BasicDataSource dataSource = new BasicDataSource();
        dataSource.setDriverClassName(driverClassname);
        dataSource.setUrl(url);
        dataSource.setUsername(username);
        dataSource.setPassword(password);

        return dataSource;
    }
    */
}
