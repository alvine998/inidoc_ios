import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import RoundedButton from '../RoundedButton';

const Footers = ({backgroundColor, rightButtonLabel = false, rightButtonPress = false}) => {
    const windowWodth = useWindowDimensions().width;
    const HEIGHT = windowWodth * 0.21;
    const FOOTER_PADDING = windowWodth * 0.1;
    
    return(
        <View
            style={{
                flexDirection:'row',
                justifyContent:'flex-end',
                height: HEIGHT,
                backgroundColor,
                opacity:0.6,
                alignItems:'center',
                paddingHorizontal: FOOTER_PADDING
            }}
        >
            <RoundedButton label={rightButtonLabel} onPress={rightButtonPress}/>
        </View>
    );
}

export default Footers;