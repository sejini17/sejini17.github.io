package com.skt.upon.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import lombok.extern.slf4j.Slf4j;

@Profile("dev | stg")
@Slf4j
@Configuration
public class WebMvcConfig implements WebMvcConfigurer{

    @Value("${resource.static}")
    private String resourceStaticPath;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        log.info("resourceStaticPath : " + resourceStaticPath);
        registry
            .addResourceHandler("/**")
                .addResourceLocations("file://" + resourceStaticPath)
                // .setCachePeriod(0)
                ;
    }
}