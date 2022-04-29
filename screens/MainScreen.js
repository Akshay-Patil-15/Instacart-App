// import { StatusBar } from "expo-status-bar";
//import {
//useDimensions,
//useDeviceOrientation,
//} from "@react-native-community/hooks";
//import { range } from "express/lib/request";
//import mysql from "mysql";
import React, { useState } from "react";

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

export default function MainScreen({
  navigation,
  setResult,
  setFields,
  setTime,
}) {
  const [database, setDatabase] = useState("");
  const [databasetype, setDatabaseType] = useState("");
  const [query, setquery] = useState(``);
  //const [result, setResult] = useState([]);
  //172.25.153.118 - RU Wireless Secure
  //192.168.1.166. - Home
  // 108.35.167.12 - Mac public IP address - Busch Student Center
  // 34.235.89.161 - EC2
  // 172.25.222.78 - RU Wireless Secure - College Ave Library

  const fetch_results = () => {
    return fetch("http://172.25.222.78:3000/api/fetch_results", {
      method: "POST",
      cache: "no-cache",
      headers: {
        content_type: "application/json",
      },
      body: JSON.stringify({
        query: query,
        database: database,
        databasetype: databasetype,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if (json.status === "Done") {
          console.log("Connected", json.result);
          setResult(json.result);
          setFields(json.fields);
          setTime(json.time);
          navigation.navigate("ResultScreen");
          //setUserID(user)
          //history.push('/auth/main');
        }
      })
      .catch((error) => {
        console.error(error);
      });
    //console.log("Fetch records working");
  };
  console.log(query);
  console.log(database);
  console.log(databasetype);
  return (
    <View style={styles.container}>
      <View style={styles.textInputView}>
        <TextInput
          placeholder={"Tap to enter SQL query"}
          keyboardType={"default"}
          width={"100%"}
          style={styles.textInput}
          multiline={true}
          onChangeText={setquery}
        />
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>Select a Database System</Text>
      </View>
      <View style={styles.dbButtonView}>
        <View style={styles.dbButton}>
          <TouchableOpacity>
            <Text
              style={styles.dbButtonText}
              onPress={() => setDatabase("RDS")}
            >
              RDS
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dbButton}>
          <TouchableOpacity>
            <Text
              style={styles.dbButtonText}
              onPress={() => setDatabase("Redshift")}
            >
              Redshift
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>Select a Database</Text>
      </View>
      <View style={styles.dbTypeButtonView}>
        <View style={styles.dbTypeButton}>
          <TouchableOpacity>
            <Text
              style={styles.dbTypeButtonText}
              onPress={() => setDatabaseType("InstaCart")}
            >
              InstaCart
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dbTypeButton}>
          <TouchableOpacity>
            <Text
              style={styles.dbTypeButtonText}
              onPress={() => setDatabaseType("Challenger")}
            >
              Challenger
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={fetch_results}>
          <Text style={styles.buttonText}>Fetch Records</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
//278840342059917
const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingHorizontal: 20,
    height: "100%",
    //backgroundColor: "#219ebc",
  },

  textInputView: {
    flexWrap: "wrap",
    borderColor: "#023047",
    borderWidth: 5,
    borderRadius: 20,
  },

  textInput: {
    padding: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "#023047",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    //borderRadius: 20,
    flexWrap: "wrap",
    //borderWidth: 5,
    //borderColor: "023047",
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },

  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#023047",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 5,
  },

  dbButtonView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
    marginBottom: 10,
    height: 100,
    marginTop: 10,
    //flex: 1,
  },

  dbButton: {
    width: 160,
    height: 80,
    backgroundColor: "#fb8500",
    padding: 16,
    borderRadius: 20,
    //position: "relative",
    //justifyContent: "center",
    marginBottom: 10,
    //flexDirection: "row",
    //flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  dbButtonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    //position: "relative",
    //justifyContent: "center",
    //alignItems: "center",
    textAlign: "center",
  },

  dbTypeButtonView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
  },

  dbTypeButton: {
    width: 160,
    height: 80,
    backgroundColor: "#52b788",
    padding: 16,
    borderRadius: 20,
    //position: "relative",
    //justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    //flexDirection: "row",
    //flex: 1,
  },

  dbTypeButtonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    //position: "relative",
    //justifyContent: "center",
    //alignItems: "center",
    // flexDirection: "row",
    // flexWrap: "wrap",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
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
