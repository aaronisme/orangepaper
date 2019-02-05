import React from 'react';
import { PureComponent } from 'react';
import { View } from 'react-native';
import ArticleList from './components/ArticleList'
import { article } from '../../models/article';
import { fetchAllarticles } from '../MainPage/service';

interface State {
  refreshing: boolean,
  articles: Array<article>
}

interface Props { 
  componentId: string
}

export default class MainPage extends PureComponent<Props, State>{

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
        this.setState({
          refreshing: false
        })
      })
    })

  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fafafa', paddingHorizontal: 16, paddingTop: 16 }}>
        <ArticleList articles={this.state.articles} refreshing={this.state.refreshing} onRefresh={this.loadData} componentId={this.props.componentId}/>
      </View>
    )
  }
}