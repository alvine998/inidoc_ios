import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';

const RoundedButton = ({label, onPress}) => {
    return(
        <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}} onPress={onPress}>
            <Text style={{fontSize:normalize(22), color:'white', fontWeight:'bold'}}>
                {label}
            </Text>
        </TouchableOpacity>
    );
}

export default RoundedButton;