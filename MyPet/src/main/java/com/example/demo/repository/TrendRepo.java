package com.example.demo.repository;

import com.example.demo.model.DongVat;
import com.example.demo.model.Trend;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;
@Repository
public interface TrendRepo extends JpaRepository<Trend,Long> {


}
