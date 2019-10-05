package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Collection;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity

public class DongVat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    private String tenDV;
    @NotBlank
    private float giaTien;
    @Size(max = 100)
    private  String tinhTrangSucKhoe;
    @NotBlank

    private boolean gioiTinh;
    @NotBlank
    @Size(max = 500)
    private String thongTinCoBan;
    @NotBlank
    private String url;
    @ManyToOne
    @JoinColumn
    @JsonIgnore
    @NonNull
    private  LoaiDongVat loaiDongVat;
    @ManyToOne
    @JoinColumn
    @JsonIgnore
    @NonNull
    private  ChuNhan chuNhan;

    @OneToOne(mappedBy = "dongVat")
    private DauGia dauGia;



}
