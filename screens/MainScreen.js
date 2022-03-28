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
  const [query, setquery] = useState(``);
  //const [result, setResult] = useState([]);
  //172.25.153.118 - RU Wireless Secure
  //192.168.1.166. - Home

  const fetch_results = () => {
    return fetch("http://192.168.1.166:3000/api/fetch_results", {
      method: "POST",
      cache: "no-cache",
      headers: {
        content_type: "application/json",
      },
      body: JSON.stringify({ query: query, database: database }),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if (json.status === "Done") {
          console.log("Connected to Amazon RDS", json.result);
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
        <Text style={styles.titleText}>Select a Database</Text>
      </View>
      <View style={styles.dbButtonView}>
        <View style={styles.dbButton}>
          <TouchableOpacity>
            <Text
              style={styles.dbButtonText}
              onPress={() => setDatabase("RDS")}
            >
              Amazon RDS
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dbButton}>
          <TouchableOpacity>
            <Text
              style={styles.dbButtonText}
              onPress={() => setDatabase("Redshift")}
            >
              Amazon Redshift
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
    marginTop: 40,
    marginBottom: 30,
  },

  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#023047",
    justifyContent: "center",
    alignItems: "center",
  },

  dbButtonView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
    marginBottom: 30,
    flex: 1,
  },

  dbButton: {
    width: "40%",
    height: "40%",
    backgroundColor: "#fb8500",
    padding: 16,
    borderRadius: 20,
    //position: "relative",
    //justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    //flexDirection: "row",
    //flex: 1,
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
