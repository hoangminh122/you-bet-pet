package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Set;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class NhomDongVat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    private  String tenNhom;

    @NotBlank
    @Size(max = 300)
    private  String moTaDacDiem;

    @OneToMany(mappedBy = "nhomDongVat",cascade = CascadeType.ALL)
    private Set<LoaiDongVat>  loaiDongVats;

}
