package com.patterns.structural.adapter;

public class StripeApi {
    public void makePayment(long amountInCents, String currency) {
    System.out.println("Stripe charged " + amountInCents + " " + currency + " cents");
}
}
