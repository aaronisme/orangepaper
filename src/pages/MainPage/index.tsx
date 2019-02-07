import React from 'react';
import { PureComponent } from 'react';
import { View } from 'react-native';
import ArticleList from './components/ArticleList'
import { article } from '../../models/article';
import { fetchAllarticles } from '../MainPage/service';
import { withAlert, withAlertProps } from '../../components/hoc'

interface State {
  refreshing: boolean,
  articles: Array<article>
}

interface Props { 
  componentId: string
}

class MainPage extends PureComponent<Props & withAlertProps, State>{

  constructor(props: Props & withAlertProps) {
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
        this.props.showAlert('error', 'oops,网络出了点状况,请稍后再试')
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

export default withAlert(MainPage)