import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StatusBar as BarStatus,
  Alert,
  FlatList,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const data = [
  {
    id: 1,
    titile: "data1",
  },
  {
    id: 2,
    titile: "data2",
  },
  {
    id: 3,
    titile: "data3",
  },
];
const App = () => {
  const [text, setText] = useState("");
  const [value, setValue] = useState("");
  const [arrayValue, setArrayValue] = useState([]);

  // const storeValue = () => {
  //   if (text) {
  //     AsyncStorage.setItem("token", text);
  //     setText(null);
  //     Alert.alert("Value Saved");
  //   } else {
  //     Alert.alert("You need to write something.");
  //   }
  // };

  // const getValue = () => {
  //   AsyncStorage.getItem("token").then((value) => {
  //     setValue(value);
  //   });
  // };

  const storeArray = () => {
    AsyncStorage.setItem("array", JSON.stringify(data))
      .then((json) => console.log("Success"))
      .catch((error) => console.log("error"));
  };

  const getArray = () => {
    AsyncStorage.getItem("array")
      .then((req) => JSON.parse(req))
      .then((json) => setArrayValue(json))
      .catch((error) => console.log("ERROR"));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: BarStatus.currentHeight }}>
        <Text style={{ textAlign: "center", fontSize: 30 }}>
          AsyncStorage Example
        </Text>
        <TextInput
          placeholder="Enter Text"
          value={text}
          onChangeText={(val) => setText(val)}
          style={{
            padding: 20,
            marginVertical: 20,
            marginHorizontal: 5,
            borderWidth: 1,
            borderColor: "grey",
          }}
        />
        <TouchableOpacity
          onPress={storeArray}
          style={{ backgroundColor: "yellow", padding: 20, margin: 20 }}
        >
          <Text style={{ textAlign: "center" }}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={getArray}
          style={{ backgroundColor: "yellow", padding: 20, margin: 20 }}
        >
          <Text style={{ textAlign: "center" }}>Get Value</Text>
        </TouchableOpacity>

        <View style={{ padding: 20, marginVertical: 20 }}>
          <Text style={{ fontSize: 20, textAlign: "center" }}>
            Value Display:{" "}
            {
              // <FlatList
              //   data={arrayValue}
              //   renderItem={({ item }) => {
              //     <View style={{ backgroundColor: "red" }}>
              //       <Text>{console.log(item.titile)}</Text>
              //     </View>;
              //   }}
              //   keyExtractor={(key) => key.id.toString()}
              // />

              arrayValue.map((item, id) => (
                <View key={id}>
                  <Text>{console.log(item.titile)}</Text>
                </View>
              ))
            }
          </Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
