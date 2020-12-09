DROP TABLE IF EXISTS Teacher CASCADE;
CREATE TABLE Teacher (
     ID SERIAL PRIMARY KEY,
     FirstName varchar(255) NOT NULL,
     LastName varchar(255) NOT NULL,
     Login varchar(255) UNIQUE NOT NULL,
     Password varchar(255) NOT NULL,
     IdClass INT REFERENCES Class(ID)
);
INSERT INTO Teacher (FirstName,LastName,Login,Password,IdClass)
VALUES
('Antoine','Lambert','ant.lamb.al@gmail.com','$2b$10$Wkx2BKSmDJ2gj.mQiivWCOy7B5FxWotyvrX1D4uX4Ma2MpSaRn.TK',1),
('Antoine','Dumont','antoine@gmail.com','$2b$10$yzm9ReqMyLPZ4zBbuTUoPeeDRnCe1zCcM/OMGgOOv0P7.vSSMdDqq',2),
('Thomas','Martin','thomasMartin@gmail.com','$2b$10$yzm9ReqMyLPZ4zBbuTUoPeeDRnCe1zCcM/OMGgOOv0P7.vSSMdDqq',1),
('Jean','doe','jeandoe@gmail.com','$2b$10$yzm9ReqMyLPZ4zBbuTUoPeeDRnCe1zCcM/OMGgOOv0P7.vSSMdDqq',1);


DROP TABLE IF EXISTS SchoolSubject CASCADE;
CREATE TABLE SchoolSubject(
    ID SERIAL PRIMARY KEY,
    Name Varchar(255) NOT NULL
);
INSERT INTO SchoolSubject(Name)
VALUES
('Français'),
('Mathémathiques');

DROP TABLE IF EXISTS Category CASCADE;
CREATE TABLE Category(
    ID SERIAL PRIMARY KEY,
    Name Varchar(255) NOT NULL,
    IdSubject INT REFERENCES SchoolSubject(ID)
);
INSERT INTO Category(Name, IdSubject)
VALUES
('Grammaire',1),
('Congugaison',1),
('Géométrie',2);

DROP TABLE IF EXISTS Class CASCADE;
CREATE TABLE Class (
    ID SERIAL PRIMARY KEY,
    Year int NOT NULL,
    Letter varchar(255) NOT NULL,
    UNIQUE (Year,Letter)
);
INSERT INTO Class (Year,Letter)
VALUES
(1,'A'),
(1,'B'),
(2,'C');


DROP TABLE IF EXISTS Event CASCADE;
CREATE TABLE Event(
    ID SERIAL PRIMARY KEY,
    Name varchar(255) NOT NULL,
    Date DATE NOT NULL,
    Description varchar(255),
    IdClass INT REFERENCES Class(ID)
);
INSERT INTO Event(Name, Date, Description, IdClass)
VALUES
('Piscine','2020-12-20','Prendre Maillot De Bain',1),
('Sortie au musée','2020-12-30','Avec son masque',1),
('Piscine','2020-12-26','Prendre Maillot De Bain',1);


DROP TABLE IF EXISTS Pupil CASCADE;
CREATE TABLE Pupil(
    ID SERIAL PRIMARY KEY,
    Login varchar(255) UNIQUE NOT NULL,
    Password varchar(255) NOT NULL,
    FirstName varchar(255) NOT NULL,
    LastName varchar(255) NOT NULL,
    Birthdate DATE NOT NULL,
    IdClass INT REFERENCES Class(ID) NOT NULL
);
INSERT INTO Pupil(Login, Password, FirstName, LastName, Birthdate, IdClass)
VALUES
('AntoineLambert','$2b$10$Wkx2BKSmDJ2gj.mQiivWCOy7B5FxWotyvrX1D4uX4Ma2MpSaRn.TK','Antoine','Lambert','16-09-1997',1),
('AntoineDumont','$2b$10$Wkx2BKSmDJ2gj.mQiivWCOy7B5FxWotyvrX1D4uX4Ma2MpSaRn.TK','Antoine','Dumont','02-04-1995',1);

DROP TABLE IF EXISTS Tutor CASCADE;
CREATE TABLE Tutor(
    ID SERIAL PRIMARY KEY,
    Login varchar(255) UNIQUE NOT NULL,
    Password varchar(255) NOT NULL,
    FirstName varchar(255) NOT NULL,
    LastName varchar(255) NOT NULL,
    PhoneNumber varchar(255) NOT NULL
);
INSERT INTO Tutor(Login, Password, FirstName, LastName, PhoneNumber)
VALUES
('ant@gmail.com','$2b$10$Wkx2BKSmDJ2gj.mQiivWCOy7B5FxWotyvrX1D4uX4Ma2MpSaRn.TK','Antoine','Lambert','0032498194975');

DROP TABLE IF EXISTS Responsible CASCADE;
CREATE TABLE Responsible(
    ID SERIAL PRIMARY KEY,
    IdPupil INT REFERENCES Tutor(ID) NOT NULL,
    IdResponsible INT REFERENCES Responsible(ID) NOT NULL
);
INSERT INTO Responsible(IdPupil,IdResponsible)
VALUES
(1,1);


DROP TABLE IF EXISTS Task CASCADE;
CREATE TABLE Task(
    ID SERIAL PRIMARY KEY,
    Title Varchar(255) NOT NULL,
    Type Varchar(255),
    Date DATE NOT NULL,
    IdSubject INT REFERENCES Category(ID) NOT NULL,
    IdClass INT REFERENCES Class(ID) NOT NULL
);
INSERT INTO Task(Title, Date, IdSubject, IdClass)
VALUES
('tache de test','2020-11-30',1,1);

DROP TABLE IF EXISTS Test CASCADE;
CREATE TABLE Test(
    ID SERIAL PRIMARY KEY,
    Title Varchar(255) NOT NULL,
    MaxValue INT NOT NULL,
    Date DATE NOT NULL,
    IdSubject INT REFERENCES Category(ID) NOT NULL,
    IdClass INT REFERENCES Class(ID)
);
INSERT INTO Test(Title, MaxValue,Date, IdSubject, IdClass)
VALUES
('Verbes en -ER',20,'2020-12-07',1,1);


DROP TABLE IF EXISTS TestResult CASCADE;
CREATE TABLE TestResult(
    ID SERIAL PRIMARY KEY,
    Result INT,
    note Varchar(255),
    IdTest INT REFERENCES Test(ID),
    IdPupil INT REFERENCES Pupil(ID)
);
INSERT INTO TestResult(Result, note, IdTest, IdPupil)
VALUES
(10,'Bof bof lol',1,1);