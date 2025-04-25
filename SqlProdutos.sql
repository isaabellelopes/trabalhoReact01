-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: crud
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `descricao` varchar(200) NOT NULL,
  `preco` float NOT NULL,
  `peso` float NOT NULL,
  `dataValidade` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (1,'Small Cotton Hat','Boston\'s most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles',742,0.709528,'2043-04-27T19:55:22.432'),(2,'Handcrafted Granite Gloves','Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',989,0.0212068,'1999-04-13T19:09:13.989'),(3,'Practical Frozen Computer','The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',403,0.887182,'2069-06-13T19:45:19.258'),(4,'Unbranded Granite Car','Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',720,0.131017,'1990-11-02T22:02:22.797'),(5,'Incredible Concrete Bike','The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',665,0.912652,'2038-03-25T12:20:50.751'),(6,'Refined Concrete Pants','The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',809,0.610605,'2072-02-10T22:23:07.773'),(7,'Sleek Frozen Gloves','Boston\'s most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles',457,0.268803,'2028-02-06T22:27:28.997'),(8,'Recycled Fresh Fish','Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',79,0.526897,'2017-08-19T09:13:27.222'),(9,'Ergonomic Concrete Ball','The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',919,0.00911688,'2000-06-09T14:23:58.838'),(10,'Luxurious Granite Tuna','New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',336,0.793016,'2039-10-25T00:26:00.069'),(11,'Electronic Wooden Pants','Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',656,0.974697,'2017-08-25T13:47:13.659'),(12,'Small Steel Sausages','Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',336,0.398908,'2040-09-18T22:11:11.535'),(13,'Intelligent Bronze Bike','New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',885,0.698373,'2020-06-06T15:37:49.050'),(14,'Handcrafted Cotton Chair','New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',461,0.203696,'2033-07-04T13:56:52.445'),(15,'Licensed Plastic Gloves','The Football Is Good For Training And Recreational Purposes',142,0.945849,'2076-07-03T20:28:41.545'),(16,'Incredible Metal Keyboard','The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100\\% Natural Ingredients',764,0.186874,'2043-11-01T03:19:16.556'),(17,'Small Fresh Computer','Boston\'s most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles',195,0.711634,'2032-06-27T06:34:56.964'),(18,'Licensed Plastic Table','New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',428,0.0322125,'1994-02-24T15:29:53.219'),(19,'Elegant Wooden Ball','Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',158,0.866651,'2063-01-23T13:25:46.674'),(20,'Ergonomic Concrete Sausages','Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',37,0.798122,'2081-06-30T22:14:07.483'),(30,'Teste de produto-editado','Teste de descrição',9.4,1,'2025-04-30');
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-25 13:04:07
