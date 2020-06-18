USE anima_newsletter;

CREATE TABLE NEWS (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title TEXT,
    author TEXT,
    content TEXT,
    creation_date BIGINT UNSIGNED,
    UUID TEXT
);

INSERT INTO NEWS (title, author, content, creation_date, UUID)
 VALUES
 ("Mon perso il est nul", "Hugo", "Jsuis pas content mon perso il est nul, epuis il fait pas de degat, epuis je sert a rien, epuis jsuis pas content", 4, "123e4567-e89b-12d3-a456-426614174000"),
 ("J ai un early de merde", "Lucas", "J ai vraiment un early de merde, je pu du fion", 1, "123e4567-e89b-12d3-a456-426614174001"),
 ("Comment j ai controlle Nhorus sans qu il le sache", "Romain", "Personne a jamais remarque MDR", 5 , "123e4567-e89b-12d3-a456-426614174002"),
 ("Le 84", "Nhorus", "Ca fait perdre une jambe .... ", 6, "123e4567-e89b-12d3-a456-426614174003");

