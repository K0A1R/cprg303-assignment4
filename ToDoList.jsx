import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Pressable,
  View,
  Text,
  StyleSheet,
} from "react-native";

function ToDoList({ tasks }) {
  return (
    <SafeAreaView>
      <ScrollView>
        {tasks.map((task, index) => (
          <Pressable key={index}>
            <View style={styles.task}>
              <Text>{task}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  completed: {
    backgroundColor: "e0e0e0",
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
