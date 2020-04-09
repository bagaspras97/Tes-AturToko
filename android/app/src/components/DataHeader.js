import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const DataHeader = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.title1}>
            <Text style={{ fontSize: 22, color: "red", fontWeight: "700" }}>
              SRC
            </Text>
            <Text style={{ fontSize: 22, color: "red", fontWeight: "700" }}>
              Reg. AYO
            </Text>
            <Text style={{ fontSize: 22, color: "red", fontWeight: "700" }}>
              Unreg. AYO
            </Text>
          </View>
          <View style={styles.titik}>
            <Text style={styles.titik2}>:</Text>
            <Text style={styles.titik2}>:</Text>
            <Text style={styles.titik2}>:</Text>
          </View>
          <View>
            <Text
              style={{
                paddingTop: 19,
                fontSize: 22,
                paddingLeft: 10,
                fontWeight: "600",
                width: 100,
              }}
            >
              {props.total}
            </Text>

            <Text style={styles.dataReg}>{props.reg}</Text>
            <Text style={styles.dataReg}>{props.unReg}</Text>
            <View
              style={{
                flexDirection: "row",
                position: "relative",
                left: 43,
                top: -85,
              }}
            >
              <Image
                style={{
                  height: 17,
                  width: 17,
                }}
                source={require("../img/triangle.png")}
              />
              <Text style={{ color: "green", fontSize: 17, paddingLeft: 5 }}>
                {props.delta} vs LW
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>Misi Untuk SRC</Text>
        <Image
          source={require("../img/1.png")}
          style={{ marginLeft: 40, marginTop: 10 }}
        />
        <Text style={styles.src}>{props.src}</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Misi Untuk SRC Coach</Text>
        <Image
          source={require("../img/2.png")}
          style={{ marginLeft: 40, marginTop: 10 }}
        />
        <Text style={styles.src}>{props.srcCoach}</Text>
      </View>
    </View>
  );
};

export default DataHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 140,
    backgroundColor: "#f8f8f8",
  },
  header: {
    backgroundColor: "white",
    margin: 7,
    marginTop: 0,
    flex: 1,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: "#c4c4c4",
  },
  header2: {
    flexDirection: "row",
  },

  title1: {
    width: 130,
    padding: 5,
    top: 15,
    left: 30,
    fontSize: 35,
  },
  titik: {
    paddingLeft: 33,
    paddingTop: 18,
  },
  titik2: {
    fontSize: 22,
    color: "red",
    fontWeight: "700",
  },
  title: {
    color: "gray",
    fontSize: 20,
    fontWeight: "700",
    paddingLeft: 40,
    paddingTop: 30,
  },
  dataReg: {
    fontSize: 20,
    fontWeight: "600",
    paddingLeft: 10,
    paddingTop: 3,
  },
  src: {
    fontSize: 28,
    fontWeight: "700",
    left: 250,
    top: -35,
  },
});
