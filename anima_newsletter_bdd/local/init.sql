USE anima_newsletter;

CREATE TABLE NEWS (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title TEXT,
    author TEXT,
    content TEXT,
    creation_date BIGINT UNSIGNED,
    UUID TEXT
);

CREATE TABLE ITEMS (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name TEXT,
    description TEXT,
    UUID TEXT
);

CREATE TABLE INVENTAIRE (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name TEXT,
    description TEXT,
    UUID TEXT
);

CREATE TABLE INVENTAIRE_LIST (
    id_inv INT NOT NULL,
    id_item INT NOT NULL,
    FOREIGN KEY (id_inv) REFERENCES ITEMS(id),
    FOREIGN KEY (id_item) REFERENCES INVENTAIRE(id),
    PRIMARY KEY(id_inv, id_item)
);

INSERT INTO ITEMS(name, description, UUID)
VALUES
("potion de vie", "ca rends de la vie", "123e4567-e89b-12d3-a456-426614174003"),
("potion de mane", "ca rends de la mana", "123e4567-e89b-12d3-a456-426614174004"),
("potion de poussage de jambe droite", "Je connais quelqu'un qui aurait aime avoir cette arme", "123e4567-e89b-12d3-a456-426614174005");

INSERT INTO NEWS (title, author, content, creation_date, UUID)
 VALUES
 ("Mon perso il est nul", "Hugo", "Jsuis pas content mon perso il est nul, epuis il fait pas de degat, epuis je sert a rien, epuis jsuis pas content", 4, "123e4567-e89b-12d3-a456-426614174000"),
 ("J ai un early de merde", "Lucas", "J ai vraiment un early de merde, je pu du fion", 1, "123e4567-e89b-12d3-a456-426614174001"),
 ("Comment j ai controlle Nhorus sans qu il le sache", "Romain", "Personne a jamais remarque MDR", 5 , "123e4567-e89b-12d3-a456-426614174002"),
 ("Le 84", "Nhorus", "Ca fait perdre une jambe .... ", 6, "123e4567-e89b-12d3-a456-426614174003");
 
 INSERT INTO INVENTAIRE(name, description, UUID)
VALUES
("Mon invent", "il est a moi", "123e4567-e89b-12d3-a456-426614174003");
