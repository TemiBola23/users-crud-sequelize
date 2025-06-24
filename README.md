# Users CRUD API

## Requirements
- Docker
- (Or) PostgreSQL & Node.js

## Setup

### With Docker
```bash
git clone https://github.com/TemiBola23/users-crud-sequelize.git
cd users-crud-sequelize
docker-compose up --build

Access API at http://localhost:5000/api/users

Without Docker

npm install
# Ensure Postgres is running and DB is created:
createdb usersdb
# Run SQL:
psql usersdb < schema.sql
npm start

DB Schema

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  age INTEGER
);

API Examples

Create user


curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice","email":"alice@example.com","age":30}'

Get all users: curl http://localhost:5000/api/users

Get user by ID: curl http://localhost:5000/api/users/1

Update user:


curl -X PUT http://localhost:5000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice","email":"alice@example.com","age":31}'

Delete user:


curl -X DELETE http://localhost:5000/api/users/1


