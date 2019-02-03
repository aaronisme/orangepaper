import React from 'react';
import { View, Image, Text } from 'react-native';
import format from 'date-fns/format';

interface Props {
    article: {
        imageUrl: string,
        title: string,
        description: string
        createdTime: Date,
    }
}



const ArticleItem: React.SFC<Props> = ({ article }) => {
    return (
        <View style={{
            marginBottom: 15,
            borderRadius: 5,
            backgroundColor: 'white',
            shadowRadius: 5,
            shadowColor: '#EFF0F1',
            shadowOpacity: 1,
            shadowOffset: {
                width: 0,
                height: 5
            },
            elevation: 3
        }}>
            <Image source={{ uri: article.imageUrl }} style={{
                width: '100%', height: 220,
            }} />
            <View style={{flexDirection:'row', alignItems: 'flex-start'}}>
                <Text style={{ fontSize: 14, paddingVertical: 10, width: '84%' }}>{article.title}</Text>
                <Text style={{ color: '#A6A6A6', fontSize: 10, width: '15%', paddingTop: 10, textAlign: 'right'}}>{`${format(article.createdTime, 'YY/MM/DD')}`}</Text>
            </View>

            <Text style={{ color: '#A6A6A6', fontSize: 12, paddingTop: 5, paddingBottom: 10 }}>{article.description}</Text>
        </View>
    )
}

export default ArticleItem