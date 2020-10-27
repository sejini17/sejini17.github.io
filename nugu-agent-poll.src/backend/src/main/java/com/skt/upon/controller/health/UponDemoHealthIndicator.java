package com.skt.upon.controller.health;

import org.springframework.boot.actuate.health.Health;
import org.springframework.boot.actuate.health.HealthIndicator;
import org.springframework.stereotype.Component;


@Component
public class UponDemoHealthIndicator implements HealthIndicator {

    private static Health health = new Health.Builder().up().build();

    static void enable() {
        health = new Health.Builder().up().build();
    }

    static void disable() {
        health = new Health.Builder().down().build();
    }

    @Override
    public Health health() {
        return checkHealth();
    }

    private Health checkHealth() {
        return health;
    }
}
