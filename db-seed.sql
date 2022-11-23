-- Create Table --
CREATE TABLE employees
(
    id SERIAL,
    name text,
    title text,
    CONSTRAINT employees_pkey PRIMARY KEY (id)
);

INSERT INTO employees (name, title) VALUES
    ('Rizqi Adnan', 'DevOps Engineer'),
    ('Abe Tanu', 'Backend Engineer'),
    ('Andre Maulana', 'Frontend Engineer');