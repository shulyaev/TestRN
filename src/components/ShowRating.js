import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import StarRating from "react-native-star-rating";

const ShowRating = ({ rating }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.starsContainer}>
        <StarRating
          disabled={true}
          maxStars={10}
          rating={rating}
          fullStarColor={"#CFB53B"}
          halfStarColor={"#CFB53B"}
          emptyStarColor={"#CFB53B"}
          starSize={Dimensions.get("screen").width / 15}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.testStyle}>{rating ? rating : "0.0"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    margin: 2,
    padding: 5
  },
  starsContainer: {
    flex: 5,
    alignItems: "center",
    borderRightWidth: 0.5,
    borderColor: "#D3D3D3"
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    borderLeftWidth: 0.5,
    borderColor: "#D3D3D3"
  },
  testStyle: {
    fontSize: Dimensions.get("screen").width / 19,
    fontWeight: "bold"
  }
});

export { ShowRating };
