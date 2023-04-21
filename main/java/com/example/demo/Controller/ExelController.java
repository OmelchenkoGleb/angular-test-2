package com.example.demo.Controller;

import com.example.demo.DAO.DBDao;
import com.example.demo.DAO.ExelParser;
import com.example.demo.Model.Responseee;
import com.example.demo.Model.TeachersFile;
import com.example.demo.Model.Teachers;
import com.example.demo.Model.all_data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Controller
public class ExelController {

    @Autowired
    DBDao dbDao;
    @Autowired
    ExelParser exelParser;

    @PostMapping("/loadteachers")
    public ResponseEntity<List<Teachers>> deleteteachers(@RequestParam("file") MultipartFile multipartFile){
        try {
            ArrayList<Teachers> datalist = exelParser.parsertecher(multipartFile);
            dbDao.savedataTeacherslist(datalist);
            return ResponseEntity.ok(dbDao.getTeachers());
        } catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }

    @PostMapping("/loadthings")
    public ResponseEntity<Responseee> loadthings(@RequestParam("file") MultipartFile things,
                                                 @RequestParam("semestr11") int semestr11,
                                                 @RequestParam("semestr12") int semestr12,
                                                 @RequestParam("semestr21") int semestr21,
                                                 @RequestParam("semestr22") int semestr22){
        try {
            ArrayList<all_data> datalist = exelParser.parser(things, semestr11, semestr12, semestr21, semestr22);
            dbDao.savedatalist(datalist);
            return ResponseEntity.ok(new Responseee("Завантаження пройшло успішно"));
        } catch (Exception e){
            System.out.println(e.getMessage());
            return ResponseEntity.ok(new Responseee("Завантаження пройшло не успішно"));
        }
    }
}
