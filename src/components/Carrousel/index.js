import React from 'react';
import { Image, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { banner1 } from '../../assets';

const data = [
    {
        key:1,
        image:''
    }
]

_renderItem = ({item, index}) => {
    return(
        <View>
            <Image source={banner1} />
        </View>
    );
}

const Carrousel = () => {
    return(
        <View>
            <Carousel
             ref={(c) => {this._carousel = c}}
             data={}
            />
        </View>
    );
}

export default Carrousel;