package com.example.demo.CrudRepository;



import com.example.demo.Model.Teachers;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface CrudTeachers extends CrudRepository<Teachers,Long> {
    List<Teachers> findAll();
}
