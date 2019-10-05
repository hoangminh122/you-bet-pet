package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.io.Serializable;

@Entity
@Getter
@Setter
public class DauGia_ChuNhan implements Serializable {
    @Id
    @ManyToOne
    @JsonIgnore
    @JoinColumn
    private DauGia dauGia;

    @Id
    @ManyToOne
    @JsonIgnore
    @JoinColumn
    private ChuNhan chuNhan;

    private float giaMua;

}
