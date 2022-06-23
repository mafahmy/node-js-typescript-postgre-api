CREATE DATABASE API1;
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);
INSERT INTO users (name, email)
VALUES ('JOE','JOE@GMAIL.COM'),
        ('RYAN', 'RYAN@GMAIL.COM');
    