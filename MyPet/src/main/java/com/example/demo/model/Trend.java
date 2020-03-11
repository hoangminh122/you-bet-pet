package com.example.demo.model;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
public class Trend {
    @Id
    private Long id;
    @Size(min = 0,max = 10)
    private  int level;

    @OneToOne(mappedBy = "trend")
   private DauGia daugia;
}
