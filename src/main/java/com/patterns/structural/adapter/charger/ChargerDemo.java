package com.patterns.structural.adapter.charger;

public class ChargerDemo {
    public static void main(String[] args) {
        EuropeanSocket europeanSocket = new EuropeanSocket();
        IndianPlug indianPlugAdapter = new EuropeanSocketAdapter(europeanSocket);

        System.out.println("Using Indian plug to get power from European socket:");
        indianPlugAdapter.supplyPower();
    }
}
