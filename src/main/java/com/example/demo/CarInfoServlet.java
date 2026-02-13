package com.example.demo;

import com.example.demo.model.Car;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

@WebServlet(name = "carInfoServlet", value = "/carinfo-servlet")
public class CarInfoServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String model = req.getParameter("model");
        System.out.println(model);
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            String url = "jdbc:mysql://localhost:3306/javadb1";
            String user = "root";
            String pas = "root";
            //Подключаемся
            Connection conn = DriverManager.getConnection(url,user,pas);
            //Выполняем запрос
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM Cars WHERE model='"+model+"'");
            if(rs.next()){
                Car car = new Car(
                        rs.getInt("id"),
                        rs.getString("model"),
                        rs.getInt("brandId")
                );
                req.setAttribute("car",car);
            }
            RequestDispatcher dispatcher = req.getRequestDispatcher("/carInfo.jsp");
            dispatcher.forward(req,resp);
            //закрываем соединения
            rs.close();
            stmt.close();
            conn.close();
        }catch (Exception e){
            System.out.println(e+"\n"+e.getMessage());
        }
    }
}
