package com.patterns.structural.adapter;

public class AdapterDemo {
    public static void main(String[] args) {
        StripeApi stripeApi = new StripeApi();
        PaymentProcessor stripePaymentAdapter = new StripePaymentAdapter(stripeApi);

        double amount = 50.0;
        stripePaymentAdapter.pay(amount);
    }
}
