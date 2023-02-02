

DROP TABLE IF EXISTS user;
CREATE TABLE user
(
  id INT PRIMARY KEY NOT NULL
  AUTO_INCREMENT,
    firstname varchar
  (255) NOT NULL,
    lastname varchar
  (255) NOT NULL,
    email varchar
  (255) UNIQUE NOT NULL,     
    hashedPassword varchar
  (255) NOT NULL,
  is_admin TINYINT NULL DEFAULT '0'   
);


  DROP TABLE IF EXISTS product;
  CREATE TABLE product
  (
    id INT PRIMARY KEY NOT NULL
    AUTO_INCREMENT,
    imp_url varchar
    (255) NOT NULL,
  prodname varchar
    (255) NOT NULL,
  price DECIMAL
    (20,2) NULL DEFAULT NULL,
  quantity int
    (0) NULL DEFAULT NULL,
  prod_type TINYINT
    (0) NULL
    
);


    DROP TABLE IF EXISTS business;
    CREATE TABLE business
    (
      id INT PRIMARY KEY NOT NULL
      AUTO_INCREMENT,
  busname varchar
      (255) NOT NULL,
  prodmake varchar
      (255) NOT NULL,
  recap varchar
      (255) NOT NULL
  
);






