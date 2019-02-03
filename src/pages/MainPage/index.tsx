import React from 'react';
import { Component } from 'react';
import { ScrollView } from 'react-native';
import ArticleList from './components/ArticleList'
import { article } from '../../models/article';
import { fetchAllarticles } from '../MainPage/service';

interface State {
  articles: Array<article>
}

interface Props { }

export default class MainPage extends Component<Props, State>{

  constructor(props: Props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    fetchAllarticles().then((data: Array<article>) => this.setState({
      articles: data
    }))
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: 'white', marginHorizontal: 16, marginTop: 16}} showsVerticalScrollIndicator={false}>
        <ArticleList articles={this.state.articles} />
      </ScrollView>
    )
  }
}