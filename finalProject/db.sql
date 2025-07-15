CREATE TABLE categories (
    id INT NOT NULL,
    category VARCHAR(45) DEFAULT NULL,
    parent_category_id INT DEFAULT NULL,
    PRIMARY KEY (id)
)

insert into categories(id, category, parent_category_id) values  (1, 'Men', null),  (2, 'Women', null),  (3, 'Kids', null),  (4, 'Casual Wear', 1), (5, 'Party Wear', 2), (6, 'Foot Wear', 2), (7, 'Accessories', 3)


CREATE TABLE products (
    id INT NOT NULL,
    product_name VARCHAR(45) DEFAULT NULL,
    product_description VARCHAR(100) DEFAULT NULL,
    price DECIMAL(10 , 0 ) DEFAULT NULL,
    ratings INT DEFAULT NULL,
    category_id INT DEFAULT NULL,
    product_img VARCHAR(45),
    PRIMARY KEY (id),
    KEY FK_Products_Categories_id (category_id),
    CONSTRAINT FK_Products_Categories FOREIGN KEY (category_id)
        REFERENCES categories (id)
        ON UPDATE CASCADE ON DELETE CASCADE
)


insert into products(id, product_name, product_description, price, ratings, category_id, product_img) values
(1, 'Jacket', 'description', 100, 5, 5, 'sweater'),
(2, 'Purse', 'description', 200, 3, 7, 'sweater'),
(3, 'Dress', 'description', 300, 4, 5, 'sweater'),
(4, 'Denim Jeans', 'description', 100, 4, 4, 'sweater'),
(5, 'Laced boots', 'description', 170, 4, 6, 'sweater'),
(6, 'Back pack', 'description', 50, 5, 7, 'sweater'),
(7, 'Earrings', 'description', 10, 4, 7, 'sweater'),
(8, 'Scarf', 'description', 20, 4, 7, 'sweater'),
(9, 'Boots', 'description', 100, 4, 6, 'sweater')