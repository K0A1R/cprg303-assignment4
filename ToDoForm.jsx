import React from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";

// Destructure the addTask function passed from the App component:
function ToDoForm({ addTask }) {
  return (
    <SafeAreaView>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Add a new task..." />
        <Button title="Add" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;
