package com.example.demo.repository;

import com.example.demo.model.ChuNhan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface ChuNhanRepo extends JpaRepository<ChuNhan,Long> {
    @Query(value = "SELECT * FROM chu_nhan where email= ?1 AND pass_word= ?2 ",nativeQuery = true)
    public Collection<ChuNhan> postLogin(String email,String pass_word);
}
