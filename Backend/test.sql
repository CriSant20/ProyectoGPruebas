-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 24-06-2024 a las 05:31:16
-- Versión del servidor: 8.3.0
-- Versión de PHP: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `test`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cargos`
--

DROP TABLE IF EXISTS `cargos`;
CREATE TABLE IF NOT EXISTS `cargos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `seccionCargo` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Estado` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cargos`
--

INSERT INTO `cargos` (`id`, `Nombre`, `seccionCargo`, `Estado`, `createdAt`, `updatedAt`) VALUES
(1, 'Presidente', 'Junta Directiva', 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(2, 'Vicepresidente', 'Junta Directiva', 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(3, 'Secretario', 'Junta Directiva', 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(4, 'Tesorero', 'Junta Directiva', 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(5, 'Director de Eventos', 'Comité de Eventos', 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(6, 'Director de Comunicación', 'Comité de Comunicación', 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(7, 'Coordinador de Proyectos', 'Comité de Proyectos', 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(8, 'Responsable de Marketing', 'Comité de Marketing', 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(9, 'Representante de Relaciones Públicas', 'Comité de Relaciones Públicas', 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(10, 'Coordinador de Voluntarios', 'Comité de Voluntariado', 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clubs`
--

DROP TABLE IF EXISTS `clubs`;
CREATE TABLE IF NOT EXISTS `clubs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `NombreClub` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Encargado` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `id_detalle_club` int NOT NULL,
  `Estado` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_detalle_club` (`id_detalle_club`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clubs`
--

INSERT INTO `clubs` (`id`, `NombreClub`, `Encargado`, `id_detalle_club`, `Estado`, `createdAt`, `updatedAt`) VALUES
(1, 'Club de Informática', 'Juan Pérez', 1, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(2, 'Club de Administración', 'María García', 2, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(3, 'Club de Derecho', 'Pedro López', 3, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(4, 'Club de Psicología', 'Ana Martínez', 4, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(5, 'Club de Medicina', 'David Sánchez', 5, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(6, 'Club de Arquitectura', 'Laura Rodríguez', 6, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(7, 'Club de Contabilidad', 'Javier Hernández', 7, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(8, 'Club de Ciencias Políticas', 'Lucía Gómez', 8, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(9, 'Club de Ingeniería Civil', 'Carlos Torres', 9, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(10, 'Club de Biología', 'Sofía Díaz', 10, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalleclubs`
--

DROP TABLE IF EXISTS `detalleclubs`;
CREATE TABLE IF NOT EXISTS `detalleclubs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_estudiantes` int NOT NULL,
  `id_cargo` int NOT NULL,
  `Estado` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_cargo` (`id_cargo`),
  KEY `id_estudiantes` (`id_estudiantes`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `detalleclubs`
--

INSERT INTO `detalleclubs` (`id`, `id_estudiantes`, `id_cargo`, `Estado`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(2, 2, 2, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(3, 3, 3, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(4, 4, 4, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(5, 5, 5, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(6, 6, 6, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(7, 7, 7, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(8, 8, 8, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(9, 9, 9, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(10, 10, 10, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalleeventos`
--

DROP TABLE IF EXISTS `detalleeventos`;
CREATE TABLE IF NOT EXISTS `detalleeventos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `NombreTipoEvento` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `detalleeventos`
--

INSERT INTO `detalleeventos` (`id`, `NombreTipoEvento`, `createdAt`, `updatedAt`) VALUES
(2, 'Evento de Networking', '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(3, 'Conferencia sobre Tecnología', '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(4, 'Feria de Innovación Empresarial', '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(5, 'Taller de Marketing Digital', '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(6, 'Curso de Desarrollo Web', '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(7, 'Charla sobre Sostenibilidad', '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(8, 'Exposición de Arte Contemporáneo', '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(9, 'Festival de Cine Independiente', '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(10, 'Competencia de Startups', '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(11, 'Hackathon de Programación', '2024-06-24 02:40:23', '2024-06-24 02:40:23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detallepagoeventos`
--

DROP TABLE IF EXISTS `detallepagoeventos`;
CREATE TABLE IF NOT EXISTS `detallepagoeventos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_usuarios` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_usuarios` (`id_usuarios`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `detallepagoeventos`
--

INSERT INTO `detallepagoeventos` (`id`, `id_usuarios`, `createdAt`, `updatedAt`) VALUES
(2, 2, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(3, 3, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(4, 4, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(5, 5, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(6, 6, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(7, 7, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(8, 8, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(9, 9, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(10, 10, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(11, 11, '2024-06-24 02:40:23', '2024-06-24 02:40:23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detallepagoexternos`
--

DROP TABLE IF EXISTS `detallepagoexternos`;
CREATE TABLE IF NOT EXISTS `detallepagoexternos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Detalle` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Estado` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `detallepagoexternos`
--

INSERT INTO `detallepagoexternos` (`id`, `Detalle`, `Estado`, `createdAt`, `updatedAt`) VALUES
(12, 'Pago Externo 1', 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(13, 'Pago Externo 2', 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(14, 'Pago Externo 3', 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(15, 'Pago Externo 4', 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(16, 'Pago Externo 5', 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(17, 'Pago Externo 6', 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(18, 'Pago Externo 7', 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(19, 'Pago Externo 8', 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(20, 'Pago Externo 9', 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(21, 'Pago Externo 10', 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalleprojectos`
--

DROP TABLE IF EXISTS `detalleprojectos`;
CREATE TABLE IF NOT EXISTS `detalleprojectos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_clubs` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_clubs` (`id_clubs`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `detalleprojectos`
--

INSERT INTO `detalleprojectos` (`id`, `id_clubs`, `createdAt`, `updatedAt`) VALUES
(1, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(2, 2, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(3, 3, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(4, 4, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(5, 5, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(6, 6, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(7, 7, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(8, 8, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(9, 9, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(10, 10, '2024-06-24 02:40:23', '2024-06-24 02:40:23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiantes`
--

DROP TABLE IF EXISTS `estudiantes`;
CREATE TABLE IF NOT EXISTS `estudiantes` (
  `id` int NOT NULL,
  `Nombre` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Apellido` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Edad` int NOT NULL,
  `Carrera` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Semestre` int NOT NULL,
  `id_Cargo` int NOT NULL,
  `Estado` tinyint(1) NOT NULL,
  `Cedula` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Correo` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Contrasena` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_Cargo` (`id_Cargo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estudiantes`
--

INSERT INTO `estudiantes` (`id`, `Nombre`, `Apellido`, `Edad`, `Carrera`, `Semestre`, `id_Cargo`, `Estado`, `Cedula`, `Correo`, `Contrasena`, `createdAt`, `updatedAt`) VALUES
(1, 'Juan', 'Pérez', 20, 'Ingeniería Informática', 3, 1, 1, '1234567890', 'juan.perez@example.com', 'contrasena123', '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(2, 'María', 'García', 21, 'Administración de Empresas', 4, 2, 1, '0987654321', 'maria.garcia@example.com', 'clave456', '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(3, 'Pedro', 'López', 22, 'Derecho', 5, 3, 1, '1357924680', 'pedro.lopez@example.com', 'password789', '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(4, 'Ana', 'Martínez', 23, 'Psicología', 6, 4, 1, '2468013579', 'ana.martinez@example.com', 'securepassword', '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(5, 'David', 'Sánchez', 24, 'Medicina', 7, 5, 1, '9876543210', 'david.sanchez@example.com', 'pass123word', '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(6, 'Laura', 'Rodríguez', 25, 'Arquitectura', 8, 6, 1, '0123456789', 'laura.rodriguez@example.com', 'qwertyuiop', '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(7, 'Javier', 'Hernández', 26, 'Contabilidad', 9, 7, 1, '9876543210', 'javier.hernandez@example.com', 'asdfghjkl', '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(8, 'Lucía', 'Gómez', 27, 'Ciencias Políticas', 10, 8, 1, '1357924680', 'lucia.gomez@example.com', 'zxcvbnm', '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(9, 'Carlos', 'Torres', 28, 'Ingeniería Civil', 11, 9, 1, '0246813579', 'carlos.torres@example.com', '123456789', '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(10, 'Sofía', 'Díaz', 29, 'Biología', 12, 10, 1, '9870123456', 'sofia.diaz@example.com', 'password123', '2024-06-24 02:40:23', '2024-06-24 02:40:23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--

DROP TABLE IF EXISTS `eventos`;
CREATE TABLE IF NOT EXISTS `eventos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `NombreEvento` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `id_tipo_Evento` int DEFAULT NULL,
  `Estado` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_tipo_Evento` (`id_tipo_Evento`)
) ENGINE=InnoDB AUTO_INCREMENT=426 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `eventos`
--

INSERT INTO `eventos` (`id`, `NombreEvento`, `id_tipo_Evento`, `Estado`, `createdAt`, `updatedAt`) VALUES
(416, 'Evento de Lanzamiento de Producto', 2, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(417, 'Charla sobre Inteligencia Artificial', 3, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(418, 'Feria de Innovación Tecnológica', 4, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(419, 'Taller de Fotografía Digital', 5, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(420, 'Curso de Marketing Online', 6, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(421, 'Exposición de Arte Moderno', 7, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(422, 'Festival de Música Indie', 8, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(423, 'Competencia de Innovación Social', 9, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(424, 'Hackathon de Desarrollo Web', 10, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(425, 'Conferencia de Emprendimiento', 11, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `miembros`
--

DROP TABLE IF EXISTS `miembros`;
CREATE TABLE IF NOT EXISTS `miembros` (
  `id_Miembro` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Apellido` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Edad` int NOT NULL,
  `Semestre` int NOT NULL,
  `Carrera` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Rol` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `IdClubs` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_Miembro`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `miembros`
--

INSERT INTO `miembros` (`id_Miembro`, `Nombre`, `Apellido`, `Edad`, `Semestre`, `Carrera`, `Rol`, `IdClubs`, `createdAt`, `updatedAt`) VALUES
(1, 'Luis', 'González', 22, 4, 'Ingeniería Informática', 'Presidente', 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(2, 'Ana', 'Martínez', 21, 3, 'Administración de Empresas', 'Secretaria', 2, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(3, 'Juan', 'Sánchez', 23, 5, 'Derecho', 'Tesorero', 3, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(4, 'María', 'López', 20, 2, 'Psicología', 'Vocal', 4, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(5, 'Pedro', 'Gómez', 24, 6, 'Medicina', 'Coordinador', 5, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(6, 'Laura', 'Hernández', 25, 7, 'Arquitectura', 'Vocal', 6, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(7, 'Javier', 'Díaz', 26, 8, 'Contabilidad', 'Secretario', 7, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(8, 'Lucía', 'Torres', 27, 9, 'Ciencias Políticas', 'Presidente', 8, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(9, 'Carlos', 'García', 28, 10, 'Ingeniería Civil', 'Coordinador', 9, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(10, 'Sofía', 'Martín', 29, 11, 'Biología', 'Tesorero', 10, '2024-06-24 02:40:23', '2024-06-24 02:40:23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagoseventos`
--

DROP TABLE IF EXISTS `pagoseventos`;
CREATE TABLE IF NOT EXISTS `pagoseventos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_evento` int DEFAULT NULL,
  `fechaEvento` datetime DEFAULT NULL,
  `id_detalle_pago` int DEFAULT NULL,
  `Estado` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_evento` (`id_evento`),
  KEY `id_detalle_pago` (`id_detalle_pago`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pagoseventos`
--

INSERT INTO `pagoseventos` (`id`, `id_evento`, `fechaEvento`, `id_detalle_pago`, `Estado`, `createdAt`, `updatedAt`) VALUES
(2, 416, '2024-06-25 10:00:00', 2, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(3, 417, '2024-06-26 11:00:00', 3, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(4, 418, '2024-06-27 12:00:00', 4, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(5, 419, '2024-06-28 13:00:00', 5, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(6, 420, '2024-06-29 14:00:00', 6, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(7, 421, '2024-06-30 15:00:00', 7, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(8, 422, '2024-07-01 16:00:00', 8, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(9, 423, '2024-07-02 17:00:00', 9, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(10, 424, '2024-07-03 18:00:00', 10, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(11, 425, '2024-07-04 19:00:00', 11, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagosexternos`
--

DROP TABLE IF EXISTS `pagosexternos`;
CREATE TABLE IF NOT EXISTS `pagosexternos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_evento` int DEFAULT NULL,
  `fechaEvento` datetime DEFAULT NULL,
  `id_detalle_pago` int DEFAULT NULL,
  `Estado` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_evento` (`id_evento`),
  KEY `id_detalle_pago` (`id_detalle_pago`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pagosexternos`
--

INSERT INTO `pagosexternos` (`id`, `id_evento`, `fechaEvento`, `id_detalle_pago`, `Estado`, `createdAt`, `updatedAt`) VALUES
(2, 416, '2024-06-25 10:00:00', 12, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(3, 417, '2024-06-26 11:00:00', 13, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(4, 418, '2024-06-27 12:00:00', 14, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(5, 419, '2024-06-28 13:00:00', 15, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(6, 420, '2024-06-29 14:00:00', 16, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(7, 421, '2024-06-30 15:00:00', 17, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(8, 422, '2024-07-01 16:00:00', 18, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(9, 423, '2024-07-02 17:00:00', 19, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(10, 424, '2024-07-03 18:00:00', 20, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(11, 425, '2024-07-04 19:00:00', 21, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `projectos`
--

DROP TABLE IF EXISTS `projectos`;
CREATE TABLE IF NOT EXISTS `projectos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Encargado` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `id_detalle_proyectos` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_detalle_proyectos` (`id_detalle_proyectos`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `projectos`
--

INSERT INTO `projectos` (`id`, `Nombre`, `Encargado`, `id_detalle_proyectos`, `createdAt`, `updatedAt`) VALUES
(1, 'Proyecto de Desarrollo Web', 'Alejandro Pérez', 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(2, 'Proyecto de Marketing Digital', 'María Rodríguez', 2, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(3, 'Proyecto de Investigación Científica', 'Juan García', 3, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(4, 'Proyecto de Innovación Tecnológica', 'Laura Martínez', 4, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(5, 'Proyecto de Desarrollo Sostenible', 'Carlos López', 5, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(6, 'Proyecto de Arquitectura Sustentable', 'Ana Gómez', 6, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(7, 'Proyecto de Contabilidad Financiera', 'Pedro Hernández', 7, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(8, 'Proyecto de Política Internacional', 'Lucía Díaz', 8, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(9, 'Proyecto de Ingeniería Civil', 'Sofía Torres', 9, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(10, 'Proyecto de Biología Marina', 'Javier Martín', 10, '2024-06-24 02:40:23', '2024-06-24 02:40:23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareas`
--

DROP TABLE IF EXISTS `tareas`;
CREATE TABLE IF NOT EXISTS `tareas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `id_estudiante` int DEFAULT NULL,
  `id_club` int DEFAULT NULL,
  `descripcionTarea` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Estado` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_club` (`id_club`),
  KEY `id_estudiante` (`id_estudiante`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Apellido` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Edad` int NOT NULL,
  `Organizacion` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `id_evento` int NOT NULL,
  `Equipo` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Pagos` decimal(10,2) NOT NULL,
  `Estado` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_evento` (`id_evento`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `Nombre`, `Apellido`, `Edad`, `Organizacion`, `id_evento`, `Equipo`, `Pagos`, `Estado`, `createdAt`, `updatedAt`) VALUES
(2, 'Juan', 'Pérez', 28, 'Empresa A', 416, 'Equipo A', 150.00, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(3, 'María', 'García', 25, 'Empresa B', 417, 'Equipo B', 120.00, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(4, 'Luis', 'Martínez', 30, 'Empresa C', 418, 'Equipo C', 180.00, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(5, 'Ana', 'López', 27, 'Empresa D', 419, 'Equipo D', 130.00, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(6, 'Carlos', 'Gómez', 32, 'Empresa E', 420, 'Equipo E', 200.00, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(7, 'Laura', 'Hernández', 29, 'Empresa F', 421, 'Equipo F', 140.00, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(8, 'Pedro', 'Díaz', 26, 'Empresa G', 422, 'Equipo G', 110.00, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(9, 'Sofía', 'Torres', 31, 'Empresa H', 423, 'Equipo H', 170.00, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(10, 'Javier', 'Ruiz', 28, 'Empresa I', 424, 'Equipo I', 160.00, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23'),
(11, 'Marina', 'Vargas', 33, 'Empresa J', 425, 'Equipo J', 190.00, 1, '2024-06-24 02:40:23', '2024-06-24 02:40:23');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `clubs`
--
ALTER TABLE `clubs`
  ADD CONSTRAINT `clubs_ibfk_1` FOREIGN KEY (`id_detalle_club`) REFERENCES `detalleclubs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `detalleclubs`
--
ALTER TABLE `detalleclubs`
  ADD CONSTRAINT `detalleclubs_ibfk_1` FOREIGN KEY (`id_cargo`) REFERENCES `cargos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `detalleclubs_ibfk_2` FOREIGN KEY (`id_estudiantes`) REFERENCES `estudiantes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `detallepagoeventos`
--
ALTER TABLE `detallepagoeventos`
  ADD CONSTRAINT `detallepagoeventos_ibfk_1` FOREIGN KEY (`id_usuarios`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `detalleprojectos`
--
ALTER TABLE `detalleprojectos`
  ADD CONSTRAINT `detalleprojectos_ibfk_1` FOREIGN KEY (`id_clubs`) REFERENCES `clubs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `estudiantes`
--
ALTER TABLE `estudiantes`
  ADD CONSTRAINT `estudiantes_ibfk_1` FOREIGN KEY (`id_Cargo`) REFERENCES `cargos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD CONSTRAINT `eventos_ibfk_1` FOREIGN KEY (`id_tipo_Evento`) REFERENCES `detalleeventos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `pagoseventos`
--
ALTER TABLE `pagoseventos`
  ADD CONSTRAINT `pagoseventos_ibfk_1` FOREIGN KEY (`id_evento`) REFERENCES `eventos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pagoseventos_ibfk_2` FOREIGN KEY (`id_detalle_pago`) REFERENCES `detallepagoeventos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `pagosexternos`
--
ALTER TABLE `pagosexternos`
  ADD CONSTRAINT `pagosexternos_ibfk_1` FOREIGN KEY (`id_evento`) REFERENCES `eventos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pagosexternos_ibfk_2` FOREIGN KEY (`id_detalle_pago`) REFERENCES `detallepagoexternos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `projectos`
--
ALTER TABLE `projectos`
  ADD CONSTRAINT `projectos_ibfk_1` FOREIGN KEY (`id_detalle_proyectos`) REFERENCES `detalleprojectos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD CONSTRAINT `tareas_ibfk_1` FOREIGN KEY (`id_club`) REFERENCES `clubs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tareas_ibfk_2` FOREIGN KEY (`id_estudiante`) REFERENCES `estudiantes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_evento`) REFERENCES `eventos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
