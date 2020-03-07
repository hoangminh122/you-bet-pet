package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class LoaiDongVat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn
    @JsonIgnore
    @NonNull
    private NhomDongVat nhomDongVat;
    @NotBlank
    private String tenLoai;
    @NotBlank
    @Size(max = 400)
    @NotNull
    private String moTaDacDiem;

    @OneToMany(mappedBy = "loaiDongVat", cascade = CascadeType.ALL)
    private Set<DongVat> DongVats;
}
