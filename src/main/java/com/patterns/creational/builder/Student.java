package com.patterns.creational.builder;

import java.util.List;

public class Student {

    // mandatory fields
    int rollNumber;
    int age;
    String name;
    String branch;
    // optional fields
    String fatherName;
    String motherName;
    List<String> subjects;
    String mobileNo;
    String emailId;

    protected Student(StudentBuilder studentBuilder) {
        this.rollNumber = studentBuilder.rollNumber;
        this.age = studentBuilder.age;
        this.name = studentBuilder.name;
        this.branch = studentBuilder.branch;
        this.fatherName = studentBuilder.fatherName;
        this.motherName = studentBuilder.motherName;
        this.subjects = studentBuilder.subjects;
        this.mobileNo = studentBuilder.mobileNo;
        this.emailId = studentBuilder.emailId;
    }
}
