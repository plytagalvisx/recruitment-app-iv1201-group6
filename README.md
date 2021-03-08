# IV1201-Group6

This repository contains the code for project in IV1201 "Recruitment Application", which is a web based Single Page application used for recruiting new applicants for job applications.

The project is built using React JS as the frontend framework, which focuses on the Presenter-View paradigm. Node JS/Express.js is used as the backend framework for the server, which in turn uses the routes API to handle HTTP requests/responses from the frontend. Sequelize is used as an ORM tool for the database integration and data migration in this project with MySQL as the database management system.

## Demo version of the Recruitment Web Application

[Link](insert link here) to running version of our web app.

## Backend Installation and Configuration

After you clone the repository, you can start by installing dependencies for the application from project root and start running the application server:

```bash
npm install
npm start
```

Or you can use nodemon utility tool to automatically restart the application when file changes in the directory:

```bash
npm run dev
```

In that case, the application server starts listening on http://localhost:3004.

## Frontend Installation and Configuration

To run React development server, go to react-app directory, install the required dependencies for the frontend and start running the application:

```bash
npm install
npm start
```

The React application will be hosted on http://localhost:3000

All the route API endpoint calls from the backend will be proxied to the frontend on http://localhost:3000.

## Data Migration with Sequelize-CLI

To initialize the data migration process, configure the path for the old database and run the following script command:

```bash
npm run database2:migration:seed:procedure
npm start
```

The environment variables are used in the application development to store configuration data such as your database credentials. This makes it possible to connect to the database in order to store and modify data in it. The configuration files (in our case, the config.json and configDB2.js files) are hidden in the server directory.

Example for the config.json file can look like this (Where Database1 is your new database version. Meanwhile, Database2 is the old database version):

```bash
{
  "development": {
    "databases": {
      "Database1": {
        "username": "",
        "password": "",
        "database": "",
        "host": "",
        "dialect": ""
      },
      "Database2": {
        "username": "",
        "password": "",
        "database": "",
        "host": "",
        "dialect": ""
      }
    }
  },
  "Database1": {
    "username": "",
    "password": "",
    "database": "",
    "host": "",
    "dialect": ""
  },
  "Database2": {
    "username": "",
    "password": "",
    "database": "",
    "host": "",
    "dialect": ""
  },
  "test": {
    "username": "",
    "password": "",
    "database": "",
    "host": "",
    "dialect": ""
  },
  "production": {
    "username": "",
    "password": "",
    "database": "",
    "host": "",
    "dialect": ""
  }
}
```

The use of configDB2.js file is that we need to define and access the config path for the migration and seed files. For instance, the .sequelize-database2 file defines the paths for the existing models, migration and seed files (for the old database version). The config path as a parameter inside .sequelize-database2 file represents the path that the migration and seeding process resolves to during execution. It does this by associating/connecting the configDB2.js file, which in turn references the required information about the database (Database2) in the config.json file.

Example for the configDB2.js file can look like this:

```javascript
const _ = require("lodash");
const config = require("./config.json");
const defaultConfig = config.development;
const environment = process.env.NODE_ENV || "development";
const environmentConfig = config[environment];
const finalConfig = _.merge(defaultConfig, environmentConfig);

module.exports = finalConfig.databases.Database2;
```

## Web API Routes Endpoints

The method fetch() within the handleSubmit() methods that exist for each Presenter component in the frontend, is called to send the HTTP request to the server side in the backend. As a result, the HTTP response is sent from the targeted API route endpoint on the server side back to the client side, and displays it in the View component on the frontend.

The following describes methods of the application API endpoints:

| HTTP Verb | API Endpoint         | Frontend URL | Description                                                                 |
| :-------- | :------------------- | :----------- | :-------------------------------------------------------------------------- |
| POST      | api/registerUser     | /register    | Registers a new user and checks if the user already exists in the database. |
| POST      | api/login            | /login       | Authenticates an existing user with unique email.                           |
| POST      | api/setAuthorization | /            | Sets/Changes authorization level of an authenticated user.                  |

## New Database Structure

MySQL is used as the database management system in this project. Example of database **users** table (model) structure:

```javascript
const User = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  authorization: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});
```
