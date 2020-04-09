/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import DataHeader from "./android/app/src/components/DataHeader";
import DataContent from "./android/app/src/components/DataContent";
import data1 from "./sumberData1.json";
import data2 from "./sumberData2.json";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu",
});

export default class App extends Component {
  componentDidMount() {
    console.log(data1.data);
    console.log(data2.data[0].stats[0].label);
  }

  render() {
    return (
      <>
        <DataHeader
          total={data1.data.total}
          reg={data1.data.registered}
          unReg={data1.data.unregistered}
          src={data1.data.for_src}
          srcCoach={data1.data.for_src_coach}
          delta={data1.data.delta_last_week}
        />
        <DataContent
          title1={data2.data[0].title}
          title2={data2.data[1].title}
          title3={data2.data[2].title}
          label1={data2.data[0].stats[0].label}
          label2={data2.data[0].stats[1].label}
          label3={data2.data[1].stats[0].label}
          label4={data2.data[1].stats[1].label}
          label5={data2.data[1].stats[2].label}
          label6={data2.data[2].stats[0].label}
          label7={data2.data[2].stats[1].label}
          value1={data2.data[0].stats[0].value}
          value2={data2.data[0].stats[1].value}
          value3={data2.data[1].stats[0].value}
          value4={data2.data[1].stats[1].value}
          value5={data2.data[1].stats[2].value}
          value6={data2.data[2].stats[0].value}
          value7={data2.data[2].stats[1].value}
        />
      </>
    );
  }
}
