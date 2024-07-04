<%@ page  pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"  %>
<%
    String hello= request.getParameter("IP").trim();
    out.println(hello);
%>