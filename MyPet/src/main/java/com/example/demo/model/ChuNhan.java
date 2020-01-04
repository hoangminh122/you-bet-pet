package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.omg.CORBA.PRIVATE_MEMBER;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;
import java.util.Set;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
public class ChuNhan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Size(max = 50)
//    @NotBlank(message = "Ten khong duoc trong")
    private String tenChuNhan;
    @NotNull
    @Column(unique = true)
    private int sdt;
    @NotBlank
    @Column(unique = true)
    private String userName;


    @Column(unique = true)
    @NotBlank
    private String email;

    @NotBlank
    private String passWord;
    @Size(max =50)

    @NotBlank
    private  String diaChi;
    private boolean gioiTinh;
    @OneToMany(mappedBy = "chuNhan",cascade = CascadeType.ALL)
    private Set<DongVat> dongVats;

//    @ManyToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
//   @JoinTable(name = "DauGia_ChuNhan",
//           joinColumns = @JoinColumn(name = "chuNhan_id"),
//           inverseJoinColumns = @JoinColumn(name = "dauGia_id"),
//
//   )
//    private List<DauGia>  dauGias;

    @OneToMany(mappedBy = "dauGia",cascade = CascadeType.ALL)
    private List<DauGia_ChuNhan> dauGia_chuNhans;

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "chuNhan")
    private List<User_Role> userRoses;


}
