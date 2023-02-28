CREATE TABLE Products(
   id INTEGER,
   name TEXT,
   quantity INTEGER,
   description TEXT,
   price NUMERIC(15,2)  ,
   PRIMARY KEY(id)
);

CREATE TABLE Categories(
   id INTEGER,
   name TEXT,
   PRIMARY KEY(id)
);

CREATE TABLE Users(
   id INTEGER,
   firstname TEXT,
   lastname TEXT,
   mail TEXT,
   address TEXT,
   password TEXT,
   PRIMARY KEY(id)
);

CREATE TABLE Orders(
   id_1 INTEGER,
   id INTEGER,
   orders_date NUMERIC,
   total_price NUMERIC(15,2)  ,
   PRIMARY KEY(id_1, id),
   FOREIGN KEY(id_1) REFERENCES Users(id)
);

CREATE TABLE Products_Categories(
   id INTEGER,
   id_1 INTEGER,
   PRIMARY KEY(id, id_1),
   FOREIGN KEY(id) REFERENCES Products(id),
   FOREIGN KEY(id_1) REFERENCES Categories(id)
);

CREATE TABLE Product_Orders(
   id INTEGER,
   id_2 INTEGER,
   id_1 INTEGER,
   PRIMARY KEY(id, id_2, id_1),
   FOREIGN KEY(id) REFERENCES Products(id),
   FOREIGN KEY(id_2, id_1) REFERENCES Orders(id_1, id)
);
