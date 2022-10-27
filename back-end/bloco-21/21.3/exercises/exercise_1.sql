/* 
 A zoo needs a database to store information about its animals. The information
 to be stored about each animal is:
 
 - Name;
 
 - Species;
 
 - Sex;
 
 - Age;
 
 - Location.
 
 Each animal also has **multiple** caregivers, and each caregiver can be
 responsible for more than one animal. In addition, each caregiver has **one**
 manager, and each manager can be responsible for more than one caregiver.
 */
CREATE DATABASE IF NOT EXISTS zoo;

USE zoo;

CREATE TABLE IF NOT EXISTS animals (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  specie VARCHAR(255) NOT NULL,
  sex VARCHAR(255) NOT NULL,
  age INT NOT NULL,
  location VARCHAR(255) NOT NULL,
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS managers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS caregivers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  manager_id INT NOT NULL,
  FOREIGN KEY (manager_id) REFERENCES managers(id)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS animals_caregivers (
  animal_id INT NOT NULL,
  caregiver_id INT NOT NULL,
  PRIMARY KEY (animal_id, caregiver_id),
  FOREIGN KEY (animal_id) REFERENCES animals(id),
  FOREIGN KEY (caregiver_id) REFERENCES caregivers(id)
) ENGINE = InnoDB;