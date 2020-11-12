DROP TABLE IF EXISTS Teacher CASCADE;

CREATE TABLE Teacher (
    idTeacher integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    firstname varchar,
    lastname varchar,
    login varchar NOT NULL UNIQUE,
    password varchar NOT NULL
);

INSERT INTO Teacher (firstname,lastname,login,password) VALUES
('Antoine', 'Lambert', 'ant.lamb.al@gmail.com', 'test'),
('Antoine', 'Dumont', 'dudu@gmail.com', 'test1'),
('Test', 'Test', 'test@gmail.com', 'test');

