import React from 'react';
import { Component } from 'react';
import { View } from 'react-native';
import { ArticleItem } from './components/ArticleItem'

const test = {
  imgUrl: 'https://orangebox.pek3b.qingstor.com/1548696680020_headimgfiles.jpg',
  title: '笔胜于剑——比特币白皮书的印证',
  description: '译者注：我并不完全赞同Erik Voorhees对法币的态度，作者把法币和加密货币完全对立到水火不相容，似乎更多把法币当'
}

export default class MainPage extends Component{
    render() {
      return <ArticleItem article={test} />
    }
}