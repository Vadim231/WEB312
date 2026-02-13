package com.example.demo.model;

public class Car {
    public int id;
    public String model;
    public int brandId;

    public Car(int id, String model, int brandId) {
        this.id = id;
        this.model = model;
        this.brandId = brandId;
    }

    public int getBrandId() { return brandId; }
    public void setBrandId(int brandId) {this.brandId = brandId; }
    public String getModel() {return model;}
    public void setModel(String model) {this.model = model;}
    public int getId() { return id;}
    public void setId(int id) {this.id = id; }
}
