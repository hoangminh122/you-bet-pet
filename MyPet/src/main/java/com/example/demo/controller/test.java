package com.example.demo.controller;

import java.util.Calendar;

import static java.lang.Math.pow;

public class test {

    public static void main(String[] args) {
        float begin = System.currentTimeMillis();
       long demN=0,s=0,u;
       long n=23,m=122,k;
       k=n;
       while(n!=0){
           n=n/10;
           demN=demN+1;

       }
       for(u=k;u<=m;u=u+100){
           if((u-k)%((long)pow(10,demN))==0){
               s=s+1;
           }
       }

        System.out.println(s);
        float begin1 = System.currentTimeMillis();
        System.out.println((begin1-begin)*10000);//7

    }
}
