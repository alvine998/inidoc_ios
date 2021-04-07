import { Icon } from 'native-base';
import React from 'react';
import { Text, View } from 'react-native';
import normalize from 'react-native-normalize';

const Pager = ({backgroundColor, iconName, title}) => {
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor}}>
            <Icon type="FontAwesome5" name={iconName} style={{color:'white'}} />
            <View style={{marginTop:normalize(16)}}>
                <Text style={{fontSize:normalize(24), fontWeight:'bold', color:'white'}}>
                    {title}
                </Text>
            </View>
        </View>
    );
}

export default Pager;