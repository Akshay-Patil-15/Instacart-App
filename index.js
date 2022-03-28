import mysql from "mysql";
// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
const connection = mysql.createPool({
  host: "localhost", // Your connection adress (localhost).
  user: "root", // Your database's username.
  password: "", // Your database's password.
  database: "my_db", // Your database's name.
});

// Starting our app.
const app = express();

// Creating a GET route that returns data from the 'users' table.
app.get("/results", function (req, res) {
  // Connecting to the database.
  connection.getConnection(function (err, connection) {
    // Executing the MySQL query (select all data from the 'users' table).
    connection.query(
      "SELECT * FROM company",
      function (error, results, fields) {
        // If some error occurs, we throw an error.
        if (error) throw error;

        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.send(results);
      }
    );
  });
});

// Starting our server.
app.listen(3000, () => {
  console.log("Go to http://localhost:3000/results so you can see the data.");
});
