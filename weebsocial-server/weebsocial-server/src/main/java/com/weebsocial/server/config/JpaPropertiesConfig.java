package com.weebsocial.server.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties( prefix = "hibernate")
public class JpaPropertiesConfig {

    private String default_schema;

    public String getDefault_schema() {return default_schema;}

    public void setDefault_schema(String default_schema) {this.default_schema = default_schema;}
}
