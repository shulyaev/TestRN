import React from "react";
import { View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { ShowImage, ShowTitle, ShowRating } from "../components";

const ShowCard = ({ show, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <ShowImage image={show.image} />
        <ShowTitle title={show.name} />
        <ShowRating rating={show.rating.average} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#D3D3D3",
    padding: 5,
    margin: 3,
    marginHorizontal: Dimensions.get("screen").width / 17,
    backgroundColor: "white"
  }
});

export { ShowCard };
