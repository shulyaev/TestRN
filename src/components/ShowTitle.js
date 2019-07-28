import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ShowTitle = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.testStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 5,
    margin: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#D3D3D3"
  },
  testStyle: {
    fontSize: 20
  }
});

export { ShowTitle };
