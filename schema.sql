CREATE TABLE datauser (
    iduser int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20),
    email    VARCHAR(20) UNIQUE,
    password VARCHAR(100) NOT NULL,
    phone BIGINT,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE dataowner (
    idowner int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    phone BIGINT,
    companyname VARCHAR(20),
    email    VARCHAR(20) UNIQUE ,
    password VARCHAR(100) NOT NULL,
    location  VARCHAR(20),
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE officedata (
   office_id int NOT NULL AUTO_INCREMENT  ,
   PRIMARY KEY (office_id),
   Discription   VARCHAR(150),
   Vip_wifi BOOLEAN,
  location VARCHAR(20),
    coffeeandtea BOOLEAN,
    conditioning BOOLEAN,
    ele BOOLEAN,
    water BOOLEAN,
   
    imgUrl VARCHAR(150),
    price int,
     email VARCHAR(50),
     reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );
  CREATE TABLE bookingdata (
   booking_id int NOT NULL AUTO_INCREMENT ,
   PRIMARY KEY (booking_id),
   startdate date ,
   enddate date, 
   emailuser VARCHAR(50),
    emailowner VARCHAR(50)
  );
  