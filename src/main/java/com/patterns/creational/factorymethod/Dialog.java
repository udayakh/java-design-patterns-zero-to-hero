package com.patterns.creational.factorymethod;

public abstract class Dialog {
    // Factory method
    public abstract Button createButton();

    // Other methods that use the factory method
    public void renderWindow() {
        // Call the factory method to create a Button object
        Button okButton = createButton();
        okButton.render();
        okButton.onClick();
    }
}
