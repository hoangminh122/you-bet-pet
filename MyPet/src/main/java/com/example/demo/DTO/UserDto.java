package com.example.demo.DTO;

public class UserDto {
    private String email;
    private String password;
    private String tenChuNhan;
    private String userName;
    private String diaChi;
    private int sdt;
    public String getDiaChi() {
        return diaChi;
    }

    public void setDiaChi(String diaChi) {
        this.diaChi = diaChi;
    }

    public int getSdt() {
        return sdt;
    }

    public void setSdt(int sdt) {
        this.sdt = sdt;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getTenChuNhan() {
        return tenChuNhan;
    }

    public void setTenChuNhan(String tenChuNhan) {
        this.tenChuNhan = tenChuNhan;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
