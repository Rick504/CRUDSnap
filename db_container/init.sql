CREATE TABLE "users" (
    id SERIAL,
    "userName" VARCHAR(45) UNIQUE NOT NULL,
    "email" VARCHAR(50) UNIQUE NOT NULL,
    "password" VARCHAR(150) NOT null,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY(id)
);
-- INSERT INTO users (name) VALUES ('John'), ('Jane'), ('Bob');
