package com.skt.upon.controller;

import com.skt.upon.controller.health.UponDemoHealthIndicator;
import org.springframework.boot.actuate.health.Health;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


/**
 * HealthCheck API
 */
@RestController
public class HealthCheckRestController {
    private final UponDemoHealthIndicator uponDemoHealthIndicator;

    public HealthCheckRestController(UponDemoHealthIndicator uponDemoHealthIndicator) {
        this.uponDemoHealthIndicator = uponDemoHealthIndicator;
    }

    @GetMapping("/actuator/health")
    public Health health() {
        return uponDemoHealthIndicator.health();
    }
}
