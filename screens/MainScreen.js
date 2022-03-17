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

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.textInputView}>
        <TextInput
          placeholder={"Tap to enter query"}
          keyboardType={"default"}
          width={"100%"}
          style={styles.textInput}
          multiline={true}
        />
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>Select a Database</Text>
      </View>
      <View style={styles.dbButtonView}>
        <View style={styles.dbButton}>
          <TouchableOpacity>
            <Text style={styles.dbButtonText}>Amazon RDS</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dbButton}>
          <TouchableOpacity>
            <Text style={styles.dbButtonText}>Amazon Redshift</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate("ResultScreen")}>
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
  },

  textInput: {
    padding: 20,
    fontSize: 40,
    fontWeight: "bold",
    color: "#023047",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 20,
    flexWrap: "wrap",
    borderWidth: 5,
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
