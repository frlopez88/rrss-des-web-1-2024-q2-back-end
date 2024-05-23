-- Active: 1698945600332@@127.0.0.1@5432@rrss
create table  tbl_usuario
(
    nombre_usuario varchar(20) primary key,
    nombre varchar(200), 
    apellido varchar(200),
    correo varchar(100),
    contrasena varchar(20),
    fecha_creacion TIMESTAMP default current_timestamp,
    activo bool default true
);

