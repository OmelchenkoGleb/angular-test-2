package com.example.demo.Controller;

import com.example.demo.DAO.DBDao;
import com.example.demo.Model.Responseee;
import com.example.demo.Model.Teachers;
import com.example.demo.Model.all_data;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class DBController {

    @Autowired
    DBDao dbDao;

    @GetMapping("/deletethings")
    public ResponseEntity<Responseee> deletethings(){
        try {
            dbDao.deleteAllData();
            return ResponseEntity.ok(new Responseee("Видалення пройшло успішно"));
        } catch (Exception e){
            return ResponseEntity.ok(new Responseee("Видалення пройшло не успішно"));
        }
    }
    @GetMapping("/deleteteachers")
    public ResponseEntity<List<Teachers>> deleteteachers(){
        try {
            dbDao.deleteAllTeachers();
            return ResponseEntity.ok(dbDao.getTeachers());
        } catch (Exception e){
            return null;
        }
    }

    @GetMapping("/getteachers")
    public ResponseEntity<List<Teachers>> getteachers(){
        try {
            return ResponseEntity.ok(dbDao.getTeachers());
        } catch (Exception e){
            System.out.println("!!!!!!!! "+e);
            return null;
        }
    }

    @PostMapping("/deleteteacher")
    public ResponseEntity<List<Teachers>> deleteteacher(@RequestParam("id") double id){
        try {
            dbDao.deleteOneTeacher((long) id);
            return ResponseEntity.ok(dbDao.getTeachers());
        } catch (Exception e){
            System.out.println("!!!!!!!! "+e);
            return null;
        }
    }

    @PostMapping("/addteacher")
    public ResponseEntity<List<Teachers>> addteacher(@RequestBody Teachers teacher){
        try {
            dbDao.updateTeacher(teacher);
            return ResponseEntity.ok(dbDao.getTeachers());
        } catch (Exception e){
            System.out.println("!!!!!!!! "+e);
            return null;
        }
    }





    @GetMapping("/getall_dataSemestr1")
    public ResponseEntity<List<all_data>> getall_data(){
        try {
//            ObjectMapper objectMapper = new ObjectMapper();
//            String jsonString = objectMapper.writeValueAsString(dbDao.getSemestr(1));
//            System.out.println(jsonString);
//
//            dbDao.getSemestr(1).forEach(x->{
//                if (x.getTeachers() != null) {
//                    System.out.println();
//                    System.out.println(x.getTeachers());
//                }
//            });
            return ResponseEntity.ok(dbDao.getSemestr(1));
        } catch (Exception e){
            System.out.println("!!!!!!!! "+e);
            return null;
        }
    }
}
