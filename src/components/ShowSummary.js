import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ShowSummary = ({ show }) => {
  return (
    <View>
      <View style={styles.section}>
        <Text style={styles.title}>Summary</Text>
        <Text>
          {show.summary
            ? show.summary.replace(/<[^>]*>/g, "")
            : "Not available"}
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Genres</Text>
        <Text>
          {show.genres && show.genres.join(", ") !== ""
            ? show.genres.join(", ")
            : "Not available"}
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Schedule</Text>
        <Text>
          {show.schedule &&
          show.schedule.days.join(", ") !== "" &&
          show.schedule.time !== ""
            ? `${show.schedule.days.join(", ")} at ${show.schedule.time}`
            : "Not available"}
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Network</Text>
        <Text>{show.network ? show.network.name : "Not available"}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Language</Text>
        <Text>{show.language ? show.language : "Not available"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    borderTopWidth: 1,
    borderColor: "#D3D3D3",
    paddingVertical: 7,
    paddingHorizontal: 15
  },
  title: {
    fontSize: 17,
    fontWeight: "bold"
  }
});

export { ShowSummary };
