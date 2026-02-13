<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <form action="car" method="post">
        <input type="text" name="model">
        <select name="brandId">
            <c:forEach items="${brands}" var="brand">
                <option value="${brand.id}">${brand.name}</option>
            </c:forEach>
        </select>
        <input type="submit" name="add" value="Добавить">
    </form>
    <ul>
        <c:forEach items="${brands}" var="brand">
            <li>${brand.name}
                <c:forEach items="${cars}" var="car">
                    <c:if test="${car.brandId==brand.id}">
                        <ul>
                            <li>
                                <a href="carinfo-servlet?model=${car.model}">${car.model}</a>
                                <form action="car" method="post">
                                    <input type="text" name="carId" value="${car.id}" hidden>
                                    <input type="submit" name="delete" value="Удалить">
                                </form>
                            </li>
                        </ul>
                    </c:if>
                </c:forEach>
            </li>
        </c:forEach>
    </ul>
<%--  Выведите брэнд и под ним список его моделей  --%>
</body>
</html>
