package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class DauGia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    private float tienMax;
    @NotBlank
    private boolean giaoBan;

    @NotBlank
    private Long groupId;

    @OneToOne()
    @NotNull
//    @JsonIgnore
    @JoinColumn(name ="dongVat_id",nullable = false, unique = true)
    private DongVat dongVat;
                                                                      
//    @ManyToMany(mappedBy = "dauGias")
//
//    private List<ChuNhan> chuNhans;

    @OneToMany(mappedBy = "chuNhan",cascade = CascadeType.ALL)
   private  List<DauGia_ChuNhan> dauGia_chuNhans;

    @OneToOne(fetch = FetchType.LAZY)
    @NotNull
    @JsonIgnore
    @JoinColumn(name ="trend_id",nullable = false, unique = true)
    private Trend trend;
}
