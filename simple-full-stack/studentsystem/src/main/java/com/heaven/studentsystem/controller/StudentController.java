package com.heaven.studentsystem.controller;

import com.heaven.studentsystem.model.Student;
import com.heaven.studentsystem.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/student")
@RequiredArgsConstructor
public class StudentController {
    private final StudentService service;

    @PostMapping("/add")
    public ResponseEntity<?> add(@RequestBody Student student){
        var savedStudent = service.saveStudent(student);
        return ResponseEntity.ok(savedStudent);
    }

    @GetMapping
    public ResponseEntity<?> getAll(){
        return ResponseEntity.ok(service.getAllStudents());
    }

}
