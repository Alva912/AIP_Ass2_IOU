# **AIP Assignment 2 IOU Web App**

### This is a web app to track favors betwwen a small group of people.

# Start

## DBMS (db server):

```bash
/usr/lib/postgresql/12/bin/postgres -D ./pgdb/ -k ''
```

## Interactive shell (db client):

```bash
psql -d aip-iou-db -h localhost -p 5432 -U aip-iou-dbuser
```

## Start React and Express (web server):

```bash
npm start
```

This will start server and front at the same time using [concurrently](https://www.npmjs.com/package/concurrently).

See package.json file under the project root directory.

# Database Usage

## Generate a new table or model ([example](https://medium.com/swlh/set-up-an-express-api-using-sequelize-and-postgresql-70d8c03cf928)):

```bash
sequelize model:generate --name User --attributes username:string,email:string,password:string
```

Modify attributes in `/migration/file` if it has a many to many relationship:

```javascript
userId: {
   type: Sequelize.INTEGER,
   onDelete: "CASCADE",
   references: {
   model: "User",
   key: "id",
   as: "userId", }
},
```

## Set up the tables in the database and check db:

```bash
sequelize db:migrate
```

```pgsql
\dt
```

This will generate a model file under `/models` and corresponding migration file under `/migrations`.

Note in the migration file, sequelize will automatically add a `s` after every table name.

## Create the seeder files for the database and seed db:

```bash
sequelize seed:generate –-name users

sequelize db:seed:all
```

```pgsql
\dt
```

Now it's time to develop our core [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) API in `/controllers/tableName.js`


# Group Members:

- **Jiahua Li**
  - 13507912@student.uts.edu.au
  - lijahua912@gmail.com

# Changelog:

`2020-10-02`

- Init

`2020-10-07`

- Seperate front-end code in [React](https://reactjs.org/) Components

`2020-10-08`

- Implement [reactstrap](https://reactstrap.github.io/) library/module
- Add user log in page

`2020-10-15`

- Implement [sequelize](https://sequelize.org/) ORM
- Test local development environment database connection
- Add user sign up page

`2020-10-16`

- Generate a table _Users_ in db