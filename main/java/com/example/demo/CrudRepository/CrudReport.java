package com.example.demo.CrudRepository;


import com.example.demo.Model.report;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface CrudReport extends CrudRepository<report,Long> {
    ArrayList<report> findAllByName(String name);
}
