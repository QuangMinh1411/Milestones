package com.heaven.studentsystem.service;

import com.heaven.studentsystem.model.Student;

import java.util.List;

public interface StudentService {
    Student saveStudent(Student student);
    List<Student> getAllStudents();
}
