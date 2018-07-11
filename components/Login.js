import React from 'react';
import {View, Text, StyleSheet, WebView,} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
  webViewContainer: {
      height: 350,
   },
});

export default class extends React.Component {
  static onEnter = () => {
    Actions.refresh({
      title: 'Login!',
      rightTitle: 'rightTitle',
      onRight: () => {},
    });
  };

onNavigationStateChange(event) {
  console.log(event.url);
}

  render() {
    const title = this.props.title || 'No Title';
    const data = this.props.data || 'No Data';
    console.log("Login RENDER");
    return (

        <View style = {styles.webViewContainer}>
           <WebView
              source = {{ uri:'https://www.google.com/' }}
              onNavigationStateChange={this.onNavigationStateChange.bind(this)}
           />
           <Text>Login page 1</Text>
           <Text>Title: {title}</Text>
           <Text>Data: {data}</Text>
           <Button onPress={() => Actions.loginModal2({data: "Custom data2", title: "Custom title2"})}>Login 2</Button>
           <Button onPress={() => Actions.refresh({title: "Changed title", data: "Changed data"})}>Change title</Button>
           <Button onPress={Actions.pop}>Back</Button>
        </View>

    );
  }
}
