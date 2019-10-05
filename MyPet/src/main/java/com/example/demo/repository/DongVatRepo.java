package com.example.demo.repository;

import com.example.demo.model.DongVat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface DongVatRepo extends JpaRepository<DongVat,Long> {
    @Query(value = "SELECT * FROM dong_vat ",nativeQuery = true)
    public Collection<DongVat> findDongVat_trend();
}
