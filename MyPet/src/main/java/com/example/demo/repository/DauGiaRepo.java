package com.example.demo.repository;

import com.example.demo.model.DauGia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DauGiaRepo extends JpaRepository<DauGia,Long> {
}
