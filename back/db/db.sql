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
   is_admin BOOLEAN DEFAULT FALSE,
   PRIMARY KEY(id)
);

CREATE TABLE Orders(
   id_users INTEGER,
   id INTEGER,
   orders_date NUMERIC,
   total_price NUMERIC(15,2)  ,
   status TEXT,
   PRIMARY KEY(id_users, id),
   FOREIGN KEY(id_users) REFERENCES Users(id)
);

CREATE TABLE Products_Categories(
   id_products INTEGER,
   id_categories INTEGER,
   PRIMARY KEY(id_products, id_categories),
   FOREIGN KEY(id_products) REFERENCES Products(id),
   FOREIGN KEY(id_categories) REFERENCES Categories(id)
);

CREATE TABLE Product_Orders(
   id_products INTEGER,
   id_users INTEGER,
   id_orders INTEGER,
   quantity INTEGER,
   PRIMARY KEY(id_products, id_users, id_orders),
   FOREIGN KEY(id_products) REFERENCES Products(id),
   FOREIGN KEY(id_users, id_orders) REFERENCES Orders(id_users, id)
);