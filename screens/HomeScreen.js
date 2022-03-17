// import { StatusBar } from "expo-status-bar";
//import {
//useDimensions,
//useDeviceOrientation,
//} from "@react-native-community/hooks";
//import { range } from "express/lib/request";
//import mysql from "mysql";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableNativeFeedback,
  Button,
  Alert,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import mysql from "mysql";
export default function HomeScreen({ navigation }) {
  const connection = mysql.createPool({
    host: "proj1.cijjjogzpczd.us-east-1.rds.amazonaws.com", // Your connection adress (localhost).
    user: "admin", // Your database's username.
    password: "rdsadminPASS", // Your database's password.
    database: "proj1_db", // Your database's name.
  });
  function handlePress() {
    connection.getConnection(function (err, connection) {
      console.log("connected", connection);
      connection.query(
        "SELECT * FROM company",
        function (error, results, fields) {
          if (error) throw error;

          console.log(results);
        }
      );
    });
    //  navigation.navigate("MainScreen")
  }
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>CS 527</Text>
        <Text style={styles.titleText}>Database Systems for Data Science</Text>
      </View>
      <View style={styles.table}>
        <Text style={styles.tableText}>Adithya Shrivastava - as6352</Text>
        <Text style={styles.tableText}>Aditya Atkari - aca132</Text>
        <Text style={styles.tableText}>Akshay Patil - avp119</Text>
        <Text style={styles.tableText}>Jeffery Chen - jc2426</Text>
        <Text style={styles.tableText}>Mark Chen - mc2115</Text>
        <Text style={styles.tableText}>Sanchit Thakur st976</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/online-wishes-list-concept-illustration_114360-3900.jpg?size=338&ext=jpg",
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          onPress={handlePress}
          // style={styles.button}
        >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
//278840342059917
const styles = StyleSheet.create({
  container: {
    //padding: 40,
    paddingHorizontal: 20,
    height: "100%",
    //backgroundColor: "#219ebc",
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#023047",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  banner: {
    height: 300,
    width: 300,
  },

  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  table: {
    margin: 5,
    //borderWidth: 5,
    //borderColor: "black",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#023047",
  },

  tableText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },

  button: {
    width: "100%",
    backgroundColor: "#023047",
    padding: 16,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 10,
  },

  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});
