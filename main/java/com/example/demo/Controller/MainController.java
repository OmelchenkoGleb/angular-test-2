package com.example.demo.Controller;

import com.example.demo.Model.TeachersFile;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class MainController {
//    @GetMapping("/")
//    public ResponseEntity<TeachersFile> get(){
//        return ResponseEntity.ok(new TeachersFile("Gleb Omelchenko", 0.0));
//    }

//    @PostMapping("/post")
//    public ResponseEntity<TeachersFile> post(@RequestBody TeachersFile student){
//
//
//        System.out.println(student.getName() + student.getCost());
//        student.setName(student.getName()+"new");
//        student.setCost(10.0);
//        return ResponseEntity.ok(student);
//    }
}
