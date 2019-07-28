import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";

const ShowImage = ({ image }) => {
  let imageToShow = {};

  if (image === null) {
    imageToShow = {
      uri:
        "https://s3-ap-southeast-1.amazonaws.com/silverscreen-photos/1534489151m000001.jpg"
    };
  } else {
    imageToShow = {
      uri: image.original
    };
  }

  return (
    <Image style={styles.image} source={imageToShow} resizeMode="stretch" />
  );
};

const styles = StyleSheet.create({
  image: {
    height: Dimensions.get("screen").height / 1.7
  }
});

export { ShowImage };
