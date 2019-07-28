import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { ShowCard } from "./ShowCard";

const ShowList = ({ shows, onPress, onEndReached = () => {} }) => {
  return (
    <FlatList
      style={styles.showList}
      data={shows}
      renderItem={({ item }) => (
        <ShowCard key={item.id} show={item} onPress={() => onPress(item)} />
      )}
      keyExtractor={show => show.id.toString()}
      onEndReached={() => {
        onEndReached();
      }}
      onEndReachedThreshold={0}
    />
  );
};

const styles = StyleSheet.create({
  showList: {
    backgroundColor: "#D3D3D3"
  }
});

export { ShowList };
