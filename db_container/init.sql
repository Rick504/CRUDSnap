CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);
INSERT INTO users (name) VALUES ('John'), ('Jane'), ('Bob');
