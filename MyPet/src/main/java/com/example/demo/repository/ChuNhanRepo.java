package com.example.demo.repository;

import com.example.demo.model.ChuNhan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChuNhanRepo extends JpaRepository<ChuNhan,Long> {
}
