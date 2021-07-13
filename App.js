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
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const [text, setText] = useState("");
  const [value, setValue] = useState("");

  const storeValue = () => {
    if (text) {
      AsyncStorage.setItem("token", text);
      setText(null);
      Alert.alert("Value Saved");
    } else {
      Alert.alert("You need to write something.");
    }
  };

  const getValue = () => {
    AsyncStorage.getItem("token").then((value) => {
      setValue(value);
    });
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
          onPress={storeValue}
          style={{ backgroundColor: "yellow", padding: 20, margin: 20 }}
        >
          <Text style={{ textAlign: "center" }}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={getValue}
          style={{ backgroundColor: "yellow", padding: 20, margin: 20 }}
        >
          <Text style={{ textAlign: "center" }}>Get Value</Text>
        </TouchableOpacity>

        <View style={{ padding: 20, marginVertical: 20 }}>
          <Text style={{ fontSize: 20, textAlign: "center" }}>
            Value Display: {value}
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
