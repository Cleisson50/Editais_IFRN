import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import filter from "lodash.filter";

const Edital = [
  {
    id: "1",
    title: "Edital Nº 11/1111",
  },
  {
    id: "2",
    title: "Edital Nº 22/2222",
  },
  {
    id: "3",
    title: "Edital Nº 33/3333",
  },
  {
    id: "4",
    title: "Edital Nº 44/4444",
  },

];

const Item = ({ title }) => {
  return (
    <View>
      <Pressable style={style.btn}>
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
};

const renderItem = ({ item }) => <Item title={item.title} />;
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: Edital,
      error: null,
      searchValue: "",
    };
    this.arrayholder = Edital;
  }

  searchFunction = (text) => {
    const updatedData = this.arrayholder.filter((item) => {
      const item_data = `${item.title.toUpperCase()})`;
      const text_data = text.toUpperCase();
      return item_data.indexOf(text_data) > -1;
    });
    this.setState({ data: updatedData, searchValue: text });
  };

  render() {
    return (
      <View style={style.campus}>
        <SearchBar
          placeholder="Pesquise"
          lightTheme
          round
          value={this.state.searchValue}
          onChangeText={(text) => this.searchFunction(text)}
          autoCorrect={false}
        />
        <FlatList
          data={this.state.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}


export default Search;
const style = StyleSheet.create({
  campus: {
    backgroundColor: '#8FBC8F',
    flex: 1,
  },
  btn: {
    margin: 10,
    textAlign: 'center',
    padding: 15,
    borderRadius: 30,
    backgroundColor: '#008B8B'
  }
})

