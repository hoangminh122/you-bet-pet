package com.example.demo.repository;

import com.example.demo.model.ChuNhan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ChuNhanRepo extends JpaRepository<ChuNhan,Long> {
    @Query(value = "SELECT * FROM chu_nhan where email= ?1 ",nativeQuery = true)
    public ChuNhan findByEmail(String email);
}
