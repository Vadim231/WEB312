package com.example.demo;

//Языки - Ярослав
//Арт-объекты - Ирина
//Бургеры - Леонид
//Вино - Игорь
//Гостиницы - Аня
//Достопримечательности - Артем

import java.io.*;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.*;

import com.example.demo.model.Brand;
import com.example.demo.model.Car;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet(name = "helloServlet", value = "/hello-servlet")
public class HelloServlet extends HttpServlet {

    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            String url = "jdbc:mysql://localhost:3306/javadb1";
            String user = "root";
            String pas = "root";
            //Подключаемся
            Connection conn = DriverManager.getConnection(url,user,pas);
            //Выполняем запрос
            Statement stmt = conn.createStatement();
            Statement stmt2 = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM Brands");
            ResultSet rs2 = stmt2.executeQuery("SELECT * FROM Cars");

            List<Brand> brands = new ArrayList<>();
            List<Car> cars = new ArrayList<>();
            while(rs.next()){
                brands.add(
                        new Brand(
                                rs.getInt("id"),
                                rs.getString("name")
                        )
                );
            }
            while(rs2.next()){
                cars.add(
                    new Car(
                            rs2.getInt("id"),
                            rs2.getString("model"),
                            rs2.getInt("brandId")
                    )
                );
            }
            //отправляем на jsp
            //Список -> json

            request.setAttribute("brands",brands);
            request.setAttribute("cars",cars);
            RequestDispatcher dispatcher = request.getRequestDispatcher("/cars.jsp");
            dispatcher.forward(request,response);
            //закрываем соединения
            rs.close();
            rs2.close();
            stmt.close();
            stmt2.close();
            conn.close();
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }
}