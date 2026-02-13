package com.example.demo;

import com.example.demo.model.Brand;
import com.example.demo.model.Car;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@WebServlet(name = "car", value = "/car")
public class CarServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        if(req.getParameter("add")!=null){
            String model = req.getParameter("model");
            int brandId = Integer.parseInt(req.getParameter("brandId"));
            try{
                Class.forName("com.mysql.cj.jdbc.Driver");
                String url = "jdbc:mysql://localhost:3306/javadb1";
                String user = "root";
                String pas = "root";
                Connection conn = DriverManager.getConnection(url,user,pas);

                String sql = "Insert into cars(model,brandId) values (?,?)";
                PreparedStatement pstmt = conn.prepareStatement(sql);
                pstmt.setString(1,model);
                pstmt.setInt(2,brandId);
                pstmt.executeUpdate();
                pstmt.close();
                conn.close();

                resp.sendRedirect("hello-servlet");
            }catch (Exception e){
                System.out.println(e.getMessage());
            }
        }
        if(req.getParameter("delete")!=null){
            int carId =Integer.parseInt(req.getParameter("carId"));
            try{
                Class.forName("com.mysql.cj.jdbc.Driver");
                String url = "jdbc:mysql://localhost:3306/javadb1";
                String user = "root";
                String pas = "root";
                Connection conn = DriverManager.getConnection(url,user,pas);
                String sql = "delete from cars where id=?";
                PreparedStatement pstmt = conn.prepareStatement(sql);
                pstmt.setInt(1,carId);
                pstmt.executeUpdate();
                pstmt.close();
                conn.close();
                resp.sendRedirect("hello-servlet");
            }catch (Exception e){
                System.out.println(e.getMessage());
            }
        }
    }
}
