package com.patterns.structural.adapter.charger;

public class EuropeanSocketAdapter implements IndianPlug {
    private EuropeanSocket europeanSocket;

    public EuropeanSocketAdapter(EuropeanSocket europeanSocket) {
        this.europeanSocket = europeanSocket;
    }

    @Override
    public void supplyPower() {
        europeanSocket.provideElectricity();
        System.out.println("Adapter converts European socket to Indian plug");
    }
    
}
