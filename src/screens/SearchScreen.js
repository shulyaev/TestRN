import React, { Component } from "react";
import { View, TextInput, ActivityIndicator } from "react-native";
import { ShowList } from "../components";
import Icon from "react-native-vector-icons/Feather";
import axios from "axios";

//Variables for search request cancelation
const CancelToken = axios.CancelToken;
let cancel = () => {};

class SearchScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <TextInput
          style={{ flex: 1, fontSize: 18 }}
          onChangeText={navigation.getParam("onChangeText")}
          value={navigation.getParam("searchText")}
          placeholder="Search"
          autoCapitalize="none"
          autoCorrect={false}
        />
      ),
      headerLeft: (
        <Icon
          style={{ paddingLeft: 15, color: "grey" }}
          onPress={() => navigation.goBack()}
          name="arrow-left"
          size={25}
        />
      )
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      shows: [],
      loading: false
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      onChangeText: searchText =>
        this.setState({ searchText }, () => this.fetchSearch()),
      searchText: () => this.state.searchText
    });
  }

  fetchSearch() {
    //Cancel all previus search requests if they are wasn't resolved yet
    cancel();

    this.setState({ loading: true });

    axios
      .get(
        `http://api.tvmaze.com/search/shows?q=${this.state.searchText
          .split(" ")
          .join("%20")}`,
        {
          cancelToken: new CancelToken(function executor(c) {
            cancel = c;
          })
        }
      )
      .then(response => {
        this.setState({
          shows: Object.values(response.data).map(elem => elem.show),
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const content = this.state.loading ? (
      <ActivityIndicator size="large" />
    ) : (
      <ShowList
        shows={this.state.shows}
        onPress={item =>
          this.props.navigation.navigate("ShowScreen", { show: item })
        }
      />
    );

    return <View>{content}</View>;
  }
}

export { SearchScreen };
