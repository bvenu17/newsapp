import React from 'react';
import { Alert, Button, FlatList , View, Text} from 'react-native';
import {Header} from 'react-native-elements';

// Import getNews function from news.js
import { getNews } from './src/newsbusiness';
// We'll get to this one later
import Article from './src/components/Article';


export default class Business extends React.Component {
  static navigationOptions = {

    title: 'Business',
    headerTitleStyle: {
      fontWeight: 'bold',
      // : 'center',
      color : '#f1f2f6',
      fontSize : 30
    },
    headerStyle: {
    backgroundColor: '#2c3e50',
  },

  };
  constructor(props) {
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


  render() {
    return (
      <View style = {styles.container}>
        <FlatList
          data={this.state.articles}
          renderItem={({ item }) => <Article article={item} />}
          keyExtractor={item => item.url}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh.bind(this)}
        />
      </View>
  );
  }
}

const styles = {
  container : {
    flex :1 ,
    backgroundColor : '#0a3d62'
  },
  header : {
    backgroundColor : '#2c2c54'
  },
  button : {
    flex : 1
  },
  flat : {
    flex : 3
  }
}
