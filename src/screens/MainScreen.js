import React, { Component } from "react";
import { View } from "react-native";
import { ShowList } from "../components";
import axios from "axios";
import Icon from "react-native-vector-icons/Feather";

class MainScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Shows App",
      headerRight: (
        <Icon
          style={{ paddingRight: 15, color: "grey" }}
          onPress={() => navigation.navigate("SearchScreen")}
          name="search"
          size={25}
        />
      )
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      shows: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios
      .get(`http://api.tvmaze.com/shows?page=${this.state.page}`)
      .then(response =>
        this.setState({
          shows: [...this.state.shows, ...response.data]
        })
      )
      .catch(error => {
        console.log(error.response);
      });
  }

  render() {
    return (
      <View>
        <ShowList
          shows={this.state.shows}
          onPress={item =>
            this.props.navigation.navigate("ShowScreen", { show: item })
          }
          onEndReached={() => {
            this.setState({ page: this.state.page + 1 }, () =>
              this.fetchData()
            );
          }}
        />
      </View>
    );
  }
}

export { MainScreen };
