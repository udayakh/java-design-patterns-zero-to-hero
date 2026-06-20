package com.patterns.creational.abstractfactory;

public interface CarFactory {
    CarInterior createInterior();
    CarExterior createExterior();
}