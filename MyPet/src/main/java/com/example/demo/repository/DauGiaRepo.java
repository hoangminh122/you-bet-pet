package com.example.demo.repository;

import com.example.demo.model.DauGia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface DauGiaRepo extends JpaRepository<DauGia, Long> {

    @Query(value = "SELECT * FROM dau_gia where giao_ban= ?1 ", nativeQuery = true)
    public Collection<DauGia> find_auction_by_IdGroup(Long groupId);
}
