CREATE TABLE datauser (
    iduser int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20),
    email    VARCHAR(20),
    password VARCHAR(100) NOT NULL,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE dataowner (
    idowner int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20),
    companyname VARCHAR(20),
    email    VARCHAR(20),
    password VARCHAR(100) NOT NULL,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE officedata (
   office_id int NOT NULL AUTO_INCREMENT ,
   PRIMARY KEY (office_id),
   photo  VARCHAR(50),
   discribe VARCHAR(100),
   city     VARCHAR(10),
    price int NOT NULL,
      idowner int,
    FOREIGN KEY(idowner) 
    REFERENCES dataowner(idowner)
  );
  CREATE TABLE bookingdata (
   booking_id int NOT NULL AUTO_INCREMENT ,
   PRIMARY KEY (booking_id),
   startdate date ,
   enddate date,
    idowner int,
    FOREIGN KEY(idowner) 
    REFERENCES dataowner(idowner),
     office_id int,
    FOREIGN KEY(office_id) 
    REFERENCES officedata(office_id),
     iduser int,
    FOREIGN KEY(iduser) 
    REFERENCES datauser(iduser)
  );
  