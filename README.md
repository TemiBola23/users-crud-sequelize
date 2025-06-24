# Users CRUD API

## Requirements
- Docker
- (Or) PostgreSQL & Node.js

## Setup

### With Docker
```bash
git clone <repo>
cd users-crud-sequelize
docker-compose up --build
```

### Without Docker
```bash
npm install
# Ensure Postgres is running and DB is created:
createdb usersdb
psql usersdb < schema.sql
npm start
```

## API Examples
- POST: /api/users
- GET: /api/users
- GET: /api/users/:id
- PUT: /api/users/:id
- DELETE: /api/users/:id
