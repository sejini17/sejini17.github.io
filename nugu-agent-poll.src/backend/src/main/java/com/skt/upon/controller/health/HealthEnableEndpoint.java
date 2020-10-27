package com.skt.upon.controller.health;

import org.springframework.boot.actuate.endpoint.annotation.WriteOperation;
import org.springframework.boot.actuate.endpoint.web.annotation.WebEndpoint;
import org.springframework.stereotype.Component;


@Component
@WebEndpoint(id = "health.enable")
public class HealthEnableEndpoint {

    @WriteOperation
    public String enable() {
        UponDemoHealthIndicator.enable();
        return "OK";
    }
}

