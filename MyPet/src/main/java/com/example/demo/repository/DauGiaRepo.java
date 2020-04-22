package com.example.demo.repository;

import com.example.demo.model.DauGia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface DauGiaRepo extends JpaRepository<DauGia,Long> {

    @Query(value = "SELECT * FROM dau_gia where group_id= ?1 ",nativeQuery = true)
    public Collection<DauGia> find_auction_by_IdGroup(Long groupId);

    @Query(value = "SELECT MAX(gia_mua) FROM dau_gia_chu_nhan where dau_gia_id= ?1 ",nativeQuery = true)
    public Long maxMoney(Long dau_gia_id);

    @Query(value = "INSERT INTO dau_gia_chu_nhan(gia_mua,dau_gia_id,chu_nhan_id) VALUES (:money,:dau_gia_id,:chu_nhan_id)",nativeQuery = true)
    public void updateGiaByChuNhanId(@Param("chu_nhan_id") Long chu_nhan_id, @Param("money") Long money, @Param("dau_gia_id") Long dau_gia_id);
}
