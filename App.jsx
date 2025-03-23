/**
 * My To Do List App
 *
 * @format
 */

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Platform,
} from "react-native";

import { useState } from "react";

import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

function App() {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  // create a function named addTask that will handle adding new tasks to the list:
  const addTask = (task) => {
    // Implement the logic to add a new task
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        {/* Pass the addTask function as a prop to the ToDoForm component */}
        <ToDoForm addTask={addTask} />
        <ToDoList tasks={tasks} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  safeArea: {
    flex: 1,
  },
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  completed: {
    backgroundColor: "#e0e0e0",
  },
  taskText: {
    fontSize: 16,
  },
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

export default App;
