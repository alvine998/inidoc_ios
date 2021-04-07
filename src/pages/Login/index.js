import { Button, Header, Icon, Left, Picker } from 'native-base';
import React, { Component } from 'react';
import normalize from 'react-native-normalize';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import { styles } from './style';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selected:'key1',
            phone:''
         };
         this.onValueChange = this.onValueChange.bind(this);
         this.handlePhone = this.handlePhone.bind(this);
    }
    onValueChange(event) {
        this.setState({selected: event})
    }
    handlePhone(event){
        this.setState({phone: event})
    }
    render() {
        return (
            <SafeAreaView>
                <Header style={{backgroundColor:'#299BD7'}}>
                    <Left>
                        <Text style={styles.title}>Masukkan nomor telepon anda</Text>
                    </Left>
                </Header>
                <View style={styles.center}>
                    <View style={{flexDirection:'row'}}>
                        <Picker
                            note
                            mode="dropdown"
                            iosHeader="Kode Negara"
                            iosIcon={<Icon type={'FontAwesome5'} name="chevron-down" style={{fontSize:normalize(20)}} />}
                            style={{width:normalize(120)}}
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange}
                        >
                            <Picker.Item label="+62" value="key1"/>
                            <Picker.Item label="+65" value="key2"/>
                            <Picker.Item label="+81" value="key3"/>
                            <Picker.Item label="+25" value="key4"/>
                            <Picker.Item label="+64" value="key5"/>
                        </Picker>
                        <View style={{marginLeft:normalize(10)}} />
                        <TextInput
                            placeholder="Nomor Telepon"
                            keyboardType="numeric"
                            style={styles.border}
                            onChange={this.handlePhone}
                            value={this.state.phone}
                            maxLength={13}
                        />
                    </View>
                    <View style={styles.btnContainer}>
                        <Button full transparent primary style={styles.btnInside}>
                            <Text style={{color:'white'}}>VERIFIKASI NOMOR TELEPON</Text>
                        </Button>
                    </View>
                    <View style={{padding:normalize(20)}}>
                        <Text style={{color:'#808080'}}>
                            Dengan mengetuk "Verifikasi Nomor Telepon"
                            , SMS mungkin akan dikirim. Mungkin dikenakan
                            biaya pesan & data.
                        </Text>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default Login;