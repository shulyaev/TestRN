import React, { Component } from "react";
import { ScrollView } from "react-native";
import { ShowImage, ShowRating, ShowSummary } from "../components";

class ShowScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return { title: navigation.state.params.show.name };
  };

  render() {
    const { show } = this.props.navigation.state.params;
    return (
      <ScrollView>
        <ShowImage image={show.image} />
        <ShowRating rating={show.rating.average} />
        <ShowSummary show={show} />
      </ScrollView>
    );
  }
}

export { ShowScreen };
