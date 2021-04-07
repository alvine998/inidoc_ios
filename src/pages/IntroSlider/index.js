import ViewPager from '@react-native-community/viewpager';
import React from 'react';
import { View } from 'react-native';
import Footers from '../../components/Footer';
import { Pager } from '../../components/Pager';

const IntroSlider = () => {
    return(
        <View style={{flex:1}}>
            <ViewPager style={{flex:1}}>
                <View key="1">
                    <Pager
                        backgroundColor="#299BD7"
                        iconName="edit"
                        title="Welcome Home"
                    />
                    <Footers
                        backgroundColor="#299BD7"
                        rightButtonLabel="Lanjut"
                        rightButtonPress={() => true}
                    />
                </View>
                <View key="2">
                    <Pager
                        backgroundColor="#299BD7"
                        iconName="chevron-left"
                        title="Welcome Here"
                    />
                    <Footers
                        backgroundColor="#299BD7"
                        rightButtonLabel="Lanjut"
                        rightButtonPress={() => true}
                    />
                </View>
            </ViewPager>
        </View>
    );
}

export default IntroSlider;