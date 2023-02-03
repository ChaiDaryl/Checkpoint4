

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

      INSERT INTO product

        (id, imp_url, prodname, price, quantity, prod_type)
      VALUES
        (1, "https://free-png.gisoft.ca/img2/food/pomme-de-terre.png", "Pomme-de-Terre", 0.75, 125, 1),
        (2, "https://free-png.gisoft.ca/img2/food/poivron-pourpre-1.png", "Poivron-pourpre", 1.25, 123, 1),
        (3, "https://free-png.gisoft.ca/img2/food/piment-chili.png", "piment-chili", 1.75, 58, 1),
        (4, "https://free-png.gisoft.ca/img2/food/fenouil.png", "fenouil", 0.99, 100, 1),
        (6, "https://free-png.gisoft.ca/img2/food/tomate-rouge-2.png", "Tomate-rouge", 1.25, 225, 1),
        (7, "https://free-png.gisoft.ca/img2/food/echalottes.png", "Echalottes", 0.65, 175, 1),
        (8, "https://free-png.gisoft.ca/img2/food/chou-fleur-jaune.png", "Chou-fleur", 1.55, 75, 1),
        (9, "https://free-png.gisoft.ca/img2/food/chou-fleur-vert.png", "Chou-fleur-vert", 1.45, 215, 1),
        (10, "https://free-png.gisoft.ca/img2/food/chou.png", "Chou", 0.45, 175, 1),
        (11, "https://free-png.gisoft.ca/img2/food/celeri.png", "Celeri", 1.45, 115, 1),
        (12, "https://free-png.gisoft.ca/img2/food/asperges.png", "Asperges", 0.65, 210, 1),
        (13, "https://free-png.gisoft.ca/img2/food/artichaut.png", "Artichaut", 0.65, 210, 1);


      INSERT INTO user
        (id, firstname, lastname, email, hashedPassword, is_admin)
      VALUES
        (1, "User", "Lambda", "qsdf@rty.iu", "$argon2id$v=19$m=65536,t=5,p=1$/+nDdfBWsOCGqFC0AjKgxA$Tdt+u0nH96TSCbtkz12XjO8ocovLsZOfLO7jxkIIiqY", 0),
        (2, "utilisateur", "banale", "blabla@bla.bl", "$argon2id$v=19$m=65536,t=5,p=1$28l58K/i0xYaUDn+jMbdvg$lR+BL3hp+zloP/LkyksHxWXx6W+7L4n/L3UQC/5eBp8", 0),
        (3, "admin", "banale", "bloubkou@blou.blou", "$argon2id$v=19$m=65536,t=5,p=1$jdwri40d28aCOtCxtuMRbg$SnFpRKpRcynOjQ+alrw+caFVe4ml7b/yMkKhtpoqK2E", 1);


      INSERT INTO business
        (id, busname, prodmake, recap)
      VALUES
        (1, "Patate en folie", "Pomme de terre", "Pomme de terre,Pomme de terre, Patate" ),
        (2, "Le Choux c'est chou", "Choux", "chouchoute ton choux !" ),
        (3, "Les Artichaut archi chaud", "Artichaut", "blabla bla bla !" );