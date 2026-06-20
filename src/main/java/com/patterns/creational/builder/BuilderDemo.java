package com.patterns.creational.builder;

import java.util.Arrays;

public class BuilderDemo {
    public static void main(String[] args) {
        Student student = new StudentBuilder()
                .setRollNumber(1)
                .setAge(20)
                .setName("John Doe")
                .setBranch("Computer Science")
                .setFatherName("Robert Doe")
                .setMotherName("Jane Doe")
                .setMobileNo("1234567890")
                .setEmailId("johndoe@example.com")
                .setSubjects(Arrays.asList("Math", "Physics", "Chemistry"))
                .build();

        System.out.println("Student Details:");
        System.out.println("Roll Number: " + student.rollNumber);
        System.out.println("Age: " + student.age);
        System.out.println("Name: " + student.name);
        System.out.println("Branch: " + student.branch);
        System.out.println("Father's Name: " + student.fatherName);
        System.out.println("Mother's Name: " + student.motherName);
        System.out.println("Mobile Number: " + student.mobileNo);
        System.out.println("Email ID: " + student.emailId);
        System.out.println("Subjects: " + student.subjects);
    }
}
