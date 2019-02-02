import React from 'react';
import { Animated, Alert, Image, TouchableOpacity, Button, FlatList , View, Text} from 'react-native';
import {Header} from 'react-native-elements';

// Import getNews function from news.js
import { getNews } from './src/news';
// We'll get to this one later
import Article from './src/components/Article';

import { createStackNavigator} from 'react-navigation';
import Sports from './Sports';
import Entertainment from './Entertainment';
import Technology from './Technology';
import Business from './Business';



export  class Home extends React.Component {
  static navigationOptions = {

    title: 'Home',
    headerTitleStyle: {
      fontWeight: 'bold',
      // : 'center',
      color : '#ecf0f1',
      fontSize : 30
    },
    headerStyle: {
    backgroundColor: '#2c3e50',
    borderBottomWidth : 1,
    borderColor : '#78e08f'
  },

  };

  /*constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);
  }
  // Called after a component is mounted
  componentDidMount() {
    this.fetchNews();
   }

  fetchNews() {
    getNews()
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
    },
      () => this.fetchNews()
    );
  }
*/

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.ButtonView}>
        <View style = {styles.sports}>
          <TouchableOpacity
            style = {styles.buttonsports}
            //title = "Sports News"
            onPress = { () => this.props.navigation.navigate('Sports')}>
            <Text style = {styles.text}> Sports News </Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.Entertainment}>
          <TouchableOpacity
            style = {styles.buttonentertainment}
            //title = "Sports News"
            onPress = { () => this.props.navigation.navigate('Entertainment')}>
              <Text style = {styles.text}> Entertainment news </Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.Technology}>
          <TouchableOpacity
            style = {styles.buttontech}
            //title = "Sports News"
            onPress = { () => this.props.navigation.navigate('Technology')}>
              <Text style = {styles.text}> Technology news </Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.Business}>
          <TouchableOpacity
            style = {styles.buttonebusiness}
            //title = "Sports News"
            onPress = { () => this.props.navigation.navigate('Business')}>
              <Text style = {styles.text}> Business news </Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
  );
  }
}
export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator />

    );
  }
}
const AppStackNavigator = createStackNavigator ({
  HomePage : Home,
  Sports : Sports,
  Entertainment : Entertainment,
  Technology : Technology,
  Business : Business
});

const styles = {
  container : {
    flex :1 ,
    backgroundColor : '#0a3d62',
    flexDirection : 'column'
  },
  sports : {
    flex : 1,
    backgroundColor : '#82ccdd',
    alignItems : 'stretch',
    alignContent : 'stretch'
    //flexDirection : 'column'
  },
  Entertainment : {
    flex : 1,
  },
  Technology : {
    flex : 1,
  },
  Business : {
    flex : 1,
  },
  ButtonView : {
    flex :1,
    //padding : 20,
    flexDirection : 'column'
  },
  buttonsports : {
    flex: 1,
    //flexWrap : 'wrap',
    //height : 60,
    //borderRadius : 50,
    borderColor : '#f53b57',
    //borderWidth : 1,
    justifyContent : 'center',
    alignItems : 'center',
    //marginBottom : 10,
    backgroundColor : '#82ccdd'
  },
  buttonentertainment : {
    flex : 1,
    //height : 60,
    //borderRadius : 50,
    borderColor : '#f53b57',
    //borderWidth : 1,
    justifyContent : 'center',
    alignItems : 'center',
    //marginBottom : 10,
    backgroundColor : '#60a3bc'
  },
  buttontech : {
    flex : 1,
    //height : 60,
    //borderRadius : 50,
    //borderColor : '#f53b57',
    //borderWidth : 1,
    justifyContent : 'center',
    alignItems : 'center',
    //marginBottom : 10,
    backgroundColor : '#3c6382'
  },
  buttonebusiness: {
    flex : 1,
    //height : 60,
    //borderRadius : 50,
    borderColor : '#f53b57',
    //borderWidth : 1,
    justifyContent : 'center',
    alignItems : 'center',
    //marginBottom : 10,
    backgroundColor : '#0a3d62'
  },
  text : {
    color : '#ecf0f1',
    fontSize : 25
  }
}
