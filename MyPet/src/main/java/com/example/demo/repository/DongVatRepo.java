package com.example.demo.repository;

import com.example.demo.model.DongVat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.stream.Collectors;

@Repository
public interface DongVatRepo extends JpaRepository<DongVat,Long> {
    @Query(value = "SELECT * FROM dong_vat ",nativeQuery = true)
    public Collection<DongVat> findDongVat_trend();
    @Query(value ="SELECT * FROM dong_vat WHERE is_new=1  AND is_rick_kid=0",nativeQuery = true)
    public Collection<DongVat> findHotEnimalNomal();
    @Query(value ="SELECT * FROM dong_vat WHERE is_new=1  AND is_rick_kid=1",nativeQuery = true)
    public Collection<DongVat> findRickKidEnimal();
    @Query(value ="SELECT * FROM dong_vat WHERE tendv LIKE %?1%",nativeQuery = true)
    public Collection<DongVat> searchEnimalByName(String name);
    @Query(value ="SELECT * FROM dong_vat WHERE loai_dong_vat_id=?1",nativeQuery = true)
    public Collection<DongVat> findEnimalSameType(Long id);

    Collection<DongVat> findAllById(Long id);
}
