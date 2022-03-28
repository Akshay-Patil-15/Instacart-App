// import { StatusBar } from "expo-status-bar";
//import {
//useDimensions,
//useDeviceOrientation,
//} from "@react-native-community/hooks";
//import { range } from "express/lib/request";
//import mysql from "mysql";
import React from "react";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from "react-native-table-component";

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
  ScrollView,
} from "react-native";

export default function ResultScreen({ navigation, result, fields, time }) {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Results</Text>
      </View>
      <View style={styles.table}>
        <Text style={styles.tableText}>{result.length} records fetched</Text>
        <Text style={styles.tableText}>Time: {time} seconds</Text>
      </View>
      {/* <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: "https://media.istockphoto.com/vectors/the-goal-is-to-fight-for-success-iconvector-vector-id1166757369?b=1&k=20&m=1166757369&s=170667a&w=0&h=mRSONoU1Ag4Qv3PcPtx-cKDG_p2DkHsshiJl7wyQmAg=",
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View> */}

      <View style={styles.bannerContainer}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{ borderWidth: 1, borderColor: "#fefae0" }}>
              <Row
                data={fields}
                style={styles.header}
                textStyle={styles.headertext}
              />
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{ borderWidth: 3, borderColor: "#023047" }}>
                {result.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    style={[
                      styles.row,
                      index % 2 && { backgroundColor: "#fefae0" },
                    ]}
                    textStyle={styles.datatext}
                  />
                ))}
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>

      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Text style={styles.buttonText}>Done</Text>
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

  banner: {
    height: 300,
    width: "100%",
  },

  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    //width:'100%'
    flex: 1,
  },

  header: {
    height: 50,
    backgroundColor: "#023047",
    //borderTopLeftRadius: 20,
    //borderTopRightRadius: 20,
  },

  headertext: {
    textAlign: "center",
    //fontWeight: "100",
    //fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    //marginBottom: 5,
  },

  datatext: {
    textAlign: "center",
    //fontWeight: "100",
    //fontSize: 14,
    fontWeight: "bold",
    color: "#023047",
    //marginBottom: 5,
  },

  dataWrapper: {
    marginTop: -1,
  },

  row: {
    height: 40,
    backgroundColor: "#bcb8b1",
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
