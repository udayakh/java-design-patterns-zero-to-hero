package com.patterns.creational.singleton;

public class AppConfig {

    // TODO 1: Add a private static field to hold the single instance
    private static AppConfig instance;


    // TODO 2: Make the constructor private so nobody can call new AppConfig()
    private AppConfig() { }

    // TODO 3: Add a public static getInstance() method
    //         - If instance is null, create it (use synchronized to be thread-safe)
    //         - Return the instance

    public static synchronized AppConfig getInstance(){
        if(instance==null){
            instance= new AppConfig();
        }
        return instance;
    }
    // TODO 4: Add a private String appName field with getter and setter

    private String appName;
    public void setAppName(String appName){
        this.appName= appName;
    }
    public String getAppName(){
        return appName;
    }
}
