import { Header, Left } from 'native-base';
import React, { Component } from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import normalize from 'react-native-normalize';

class VerifyPhone extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            phone:'',
            timer:''
         };
    }
    render() {
        return (
                <View>
                    <Header iosBarStyle={"light-content"} style={{backgroundColor:'#299BD7'}}>
                        <Left>
                            <Text style={{color:'white', fontSize:normalize(22)}}>Verifikasi nomor telepon anda</Text>
                        </Left>
                    </Header>
                    <View style={{padding:normalize(20)}}>
                        <Text style={{fontSize:normalize(15)}}>
                            Masukkan kode 6 digit yang kami kirimkan ke {this.state.phone}
                        </Text>
                        <View style={{paddingTop:normalize(10), alignItems:'center'}}>
                            <View style={{flexDirection:'row'}}>
                                <TextInput
                                    maxLength={1}
                                    placeholder="-"
                                    autoFocus={true}
                                    placeholderTextColor="black"
                                    style={{fontSize:normalize(24)}}    
                                />
                                <TextInput
                                    maxLength={1}
                                    placeholder="-"
                                    placeholderTextColor="black"
                                    style={{fontSize:normalize(24), marginLeft:normalize(10)}}    
                                />
                                <TextInput
                                    maxLength={1}
                                    placeholder="-"
                                    placeholderTextColor="black"
                                    style={{fontSize:normalize(24), marginLeft:normalize(10)}}    
                                />
                                <TextInput
                                    maxLength={1}
                                    placeholder="-"
                                    placeholderTextColor="black"
                                    style={{fontSize:normalize(24), marginLeft:normalize(10)}}    
                                />
                                <TextInput
                                    maxLength={1}
                                    placeholder="-"
                                    placeholderTextColor="black"
                                    style={{fontSize:normalize(24), marginLeft:normalize(10)}}    
                                />
                                <TextInput
                                    maxLength={1}
                                    placeholder="-"
                                    placeholderTextColor="black"
                                    style={{fontSize:normalize(24), marginLeft:normalize(10)}}    
                                />
                            </View>
                            <View style={{borderBottomWidth:1, width:normalize(330), borderBottomColor:"blue", paddingTop:normalize(10)}} />
                            <View style={{paddingTop:normalize(20)}}>
                                <Text style={{color:'#808080'}}>
                                    Kirimkan ulang kode dalam {this.state.timer}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
        );
    }
}

export default VerifyPhone;