import React from 'react';
import { Component } from 'react';
import { View } from 'react-native';
import ArticleList from './components/ArticleList'
import { article } from '../../models/article';
import { fetchAllarticles } from '../MainPage/service';

interface State {
  refreshing: boolean,
  articles: Array<article>
}

interface Props { }

export default class MainPage extends Component<Props, State>{

  constructor(props: Props) {
    super(props)
    this.state = {
      articles: [],
      refreshing: false
    }
  }

  componentDidMount() {
    this.loadData()
  }

  loadData = () => {
    this.setState({
      refreshing: true
    }, () => {
      fetchAllarticles().then((data: Array<article>) => this.setState({
        refreshing: false,
        articles: data
      })).catch(e => {
        console.log(e)
        this.setState({
          refreshing: false
        })
      })
    })

  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white', marginHorizontal: 16, marginTop: 16 }}>
        <ArticleList articles={this.state.articles} refreshing={this.state.refreshing} onRefresh={this.loadData} />
      </View>
    )
  }
}