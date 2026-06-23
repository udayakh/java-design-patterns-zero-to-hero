package com.patterns.structural.adapter;

public class StripePaymentAdapter implements PaymentProcessor {
    private StripeApi stripeApi;

    public StripePaymentAdapter(StripeApi stripeApi) {
        this.stripeApi = stripeApi;
    }


    @Override
    public void pay(double amount) {
        long cents = Math.round(amount * 100);
        stripeApi.makePayment(cents, "USD");
    }
}
