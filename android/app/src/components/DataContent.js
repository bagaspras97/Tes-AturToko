import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const DataContent = (props) => {
  return (
    <View style={{ backgroundColor: "#f8f8f8", flex: 1, flexDirection: "row" }}>
      <View style={styles.content}>
        <View style={styles.contentTop}>
          <Text style={styles.title}>{props.title1}</Text>
          <Text
            style={{
              fontSize: 17,
              color: "gray",
              paddingTop: 70,
              paddingLeft: 15,
            }}
          >
            {props.label1}
          </Text>
          <View style={styles.flexView}>
            <Image source={require("../img/3.png")} style={styles.imgLeft} />
            <Text style={styles.valueRightLeft}>{props.value1}</Text>
          </View>
        </View>
        <Text style={styles.labelLeft}>{props.label2}</Text>
        <View style={styles.flexView}>
          <Image source={require("../img/7.png")} style={styles.imgLeft} />
          <Text style={styles.valueRightLeft}>{props.value2}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.contentTop}>
          <Text style={styles.title}>{props.title2}</Text>

          <Text style={styles.labelMid}>{props.label3}</Text>

          <View style={styles.flexView}>
            <Image source={require("../img/4.png")} style={styles.imgMid} />
            <Text style={styles.valueMid}>{props.value3}</Text>
          </View>

          <Text style={styles.labelMid}>{props.label4}</Text>
          <View style={styles.flexView}>
            <Image source={require("../img/5.png")} style={styles.imgMid} />
            <Text style={styles.valueMid}>{props.value4}</Text>
          </View>
        </View>
        <Text style={styles.labelMid}>{props.label5}</Text>
        <View style={styles.flexView}>
          <Image
            source={require("../img/4.png")}
            style={{ marginLeft: 70, marginTop: 10, height: 60, width: 60 }}
          />
          <Text style={styles.valueMid}>{props.value5}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.contentTop}>
          <Text style={styles.title}>{props.title2}</Text>
          <Text style={{ fontSize: 17, paddingTop: 70, paddingLeft: 15 }}>
            {props.label6}
          </Text>
          <View style={styles.flexView}>
            <Image source={require("../img/6.png")} style={styles.imgRight} />
            <Text style={styles.valueRightLeft}>{props.value6}</Text>
          </View>
        </View>
        <Text style={styles.labelRight}>{props.label7}</Text>
        <View style={styles.flexView}>
          <Image source={require("../img/8.png")} style={styles.imgRight} />
          <Text style={styles.valueRightLeft}>{props.value7}</Text>
        </View>
      </View>
    </View>
  );
};

export default DataContent;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    margin: 7,
    marginBottom: 0,
    backgroundColor: "white",
    borderRadius: 35,
    borderWidth: 1,
    borderColor: "#c4c4c4",
  },
  title: {
    fontSize: 20,
    color: "red",
    top: 15,
    left: 25,
    fontWeight: "600",
  },
  contentTop: {
    height: 320,
    borderBottomWidth: 1,
    borderBottomColor: "#c4c4c4",
  },
  flexView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  labelLeft: {
    fontSize: 17,
    color: "gray",
    paddingTop: 20,
    paddingLeft: 15,
    width: 300,
  },
  labelMid: {
    fontSize: 17,
    textAlign: "center",
    paddingTop: 30,
    paddingLeft: 15,
    width: 200,
  },
  labelRight: {
    fontSize: 17,
    color: "gray",
    paddingTop: 30,
    paddingLeft: 10,
    width: 200,
    textAlign: "center",
  },
  valueRightLeft: {
    fontSize: 40,
    paddingTop: 27,
    paddingRight: 30,
    fontWeight: "700",
  },
  valueMid: {
    fontSize: 27,
    fontWeight: "700",
    paddingTop: 17,
    paddingRight: 30,
  },
  imgLeft: {
    marginLeft: 30,
    marginTop: 15,
    height: 85,
    width: 85,
  },
  imgMid: {
    marginLeft: 78,
    marginTop: 10,
    height: 60,
    width: 60,
  },
  imgRight: {
    marginLeft: 60,
    marginTop: 20,
    height: 85,
    width: 85,
  },
});
