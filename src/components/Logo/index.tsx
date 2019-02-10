import React from 'react';
import { Image } from 'react-native'

interface props {
    style?: object,
}


const defaultStyle = {
    width: 100,
    height: 47,
}

const Logo: React.SFC<props> = ({ style = defaultStyle }: props) => <Image style={style} source={require('./logo.png')} />
export default Logo