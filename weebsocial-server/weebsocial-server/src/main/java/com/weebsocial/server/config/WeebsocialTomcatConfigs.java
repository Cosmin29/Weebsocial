package com.weebsocial.server.config;

import org.apache.catalina.Context;
import org.apache.tomcat.util.descriptor.web.ContextResource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.boot.web.embedded.tomcat.TomcatWebServer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
public class WeebsocialTomcatConfigs {
    @Value("${embeded.tomcat.datasource.driverclassname}")
    String driverClassName;

    @Value("${embeded.tomcat.datasource.url}")
    String url;

    @Value("${embeded.tomcat.datasource.username}")
    String username;

    @Value("${embeded.tomcat.datasource.password}")
    String password;

    @Value("${spring.datasource.jndi-name}")
    String jndiName;


    @Bean
    public TomcatServletWebServerFactory tomcatFactory() {

        return new TomcatServletWebServerFactory() {

            @Override
            public TomcatWebServer getTomcatWebServer(org.apache.catalina.startup.Tomcat tomcat) {
                tomcat.enableNaming();
                return super.getTomcatWebServer(tomcat);
            }

            @Override
            protected void postProcessContext(Context context) {
                ContextResource resource = new ContextResource();

                resource.setType(DataSource.class.getName());
                resource.setName(jndiName);
                resource.setProperty("factory", "org.apache.tomcat.jdbc.pool.DataSourceFactory");
                resource.setProperty("driverClassName", driverClassName);
                resource.setProperty("url", url);
                resource.setProperty("username", username);
                resource.setProperty("password", password);

                context.getNamingResources().addResource(resource);

            }
        };
    }

}
