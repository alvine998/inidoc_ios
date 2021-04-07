import { Body, Card, Footer, FooterTab, Header, Icon, Left, Right } from 'native-base';
import React, { Component } from 'react';
import { Image, ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';
import { ambulan, apotek, cerdik, chatdoc, dokjiw, hospital, onlinedoc, teslab } from '../../assets';
import BotNav from '../../components/BotNav';
import { styles } from './styles';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { phone:'', saldo:'' };
    }

    render() {
        return (
            <View>
                <ScrollView>
                    <View style={styles.header}>
                        <TouchableHighlight style={styles.rounder}>
                            <Image/>
                        </TouchableHighlight>
                        <View style={{padding:normalize(10)}}>
                            <View style={{flexDirection:'row'}}>
                                <Icon type={"FontAwesome5"} name="phone-alt" style={{color:'white', fontSize:normalize(25)}} />
                                <Text style={{color:'white', marginLeft:normalize(5), fontSize:normalize(12), marginTop:normalize(5)}}>{this.state.phone}+6285703049632</Text>
                            </View>
                            <View style={{flexDirection:'row', paddingTop:normalize(20)}}>
                                <Icon type={"FontAwesome5"} name="wallet" style={{color:'white', fontSize:normalize(25)}} />
                                <Text style={{color:'white', marginLeft:normalize(5)}}>{this.state.saldo}0</Text>
                            </View>
                        </View>
                        <Right>
                            <View style={styles.topup}>
                                <TouchableOpacity>
                                    <Text style={{color:'#299BD7'}}>Top Up</Text>
                                </TouchableOpacity>
                            </View>
                        </Right>
                        
                    </View>

                    {/* Ini untuk View bodi rata tengah */}
                    <View style={styles.body}>
                        {/* Ini untuk layanan utama */}
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity>
                                <Card style={styles.utama}>
                                    <Image source={chatdoc} style={{width:normalize(50), height:normalize(80)}}/>
                                    <Text style={{fontSize:normalize(12), textAlign:'center'}}>Chat dengan dokter</Text>
                                </Card>
                            </TouchableOpacity>
                            
                            <TouchableOpacity>
                                <Card style={styles.utama}>
                                    <Image source={hospital} style={{width:normalize(70), height:normalize(80)}}/>
                                    <Text style={{fontSize:normalize(12), textAlign:'center'}}>Buat janji RS</Text>
                                </Card>
                            </TouchableOpacity>
                            
                            <TouchableOpacity>
                                <Card style={styles.utama}>
                                    <Image source={onlinedoc} style={{width:normalize(50), height:normalize(80)}}/>
                                    <Text style={{fontSize:normalize(12), textAlign:'center'}}>Video call dokter</Text>
                                </Card>
                            </TouchableOpacity>
                            
                        </View>

                        {/* Ini untuk teks  */}
                        <View style={styles.textmid}>
                            <Text>
                                Layanan Kami
                            </Text>
                            <Right>
                                <Text style={{color:'#299BD7'}}>
                                    Lihat Semua
                                </Text>
                            </Right>
                        </View>

                        {/* Layanan Kami */}
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity>
                                <Card style={styles.secondary}>
                                    <Image source={ambulan} style={{width:normalize(70), height:normalize(100)}}/>
                                </Card>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Card style={styles.secondary}>
                                    <Image source={dokjiw} style={{width:normalize(70), height:normalize(100)}}/>
                                </Card>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Card style={styles.secondary}>
                                    <Image source={teslab} style={{width:normalize(70), height:normalize(100)}}/>
                                </Card>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Card style={styles.secondary}>
                                    <Image source={apotek} style={{width:normalize(70), height:normalize(100)}}/>
                                </Card>
                            </TouchableOpacity>
                        </View>

                        {/* Banner Cerdik */}
                        <View style={{paddingTop:normalize(20), alignSelf:'center'}}>
                            <Image source={cerdik} style={{height:normalize(150), width:normalize(330)}}/>
                        </View>

                        {/* Banner Carousel */}
                        
                        {/* Rekomendasi dokter */}
                        <View style={{paddingTop:normalize(20)}}>
                            <Text style={{textAlign:'left'}}>Rekomendasi Dokter Untuk Anda</Text>
                            <View style={{flexDirection:'row'}}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
                                    <TouchableOpacity>
                                        <Card style={styles.dokter}>
                                            <View style={styles.rounder2}>

                                            </View>
                                            <Text style={{fontSize:normalize(12)}}>....</Text>
                                            <Text style={{fontSize:normalize(12)}}>Dokter Gigi</Text>
                                        </Card>
                                    </TouchableOpacity>
                                        
                                    <TouchableOpacity>
                                        <Card style={styles.dokter}>
                                            <View style={styles.rounder2}>

                                            </View>
                                            <Text style={{fontSize:normalize(12)}}>....</Text>
                                            <Text style={{fontSize:normalize(12)}}>Dokter Gigi</Text>
                                        </Card>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                        <Card style={styles.dokter}>
                                            <View style={styles.rounder2}>

                                            </View>
                                            <Text style={{fontSize:normalize(12)}}>....</Text>
                                            <Text style={{fontSize:normalize(12)}}>Dokter Gigi</Text>
                                        </Card>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                        <Card style={styles.dokter}>
                                            <View style={styles.rounder2}>

                                            </View>
                                            <Text style={{fontSize:normalize(12)}}>....</Text>
                                            <Text style={{fontSize:normalize(12)}}>Dokter Gigi</Text>
                                        </Card>
                                    </TouchableOpacity>
                                </ScrollView>
                            </View>
                        </View>

                        {/* Produk Kesehatan */}
                        <View style={{paddingTop:normalize(20)}}>
                            <Text style={{textAlign:'left'}}>Produk Kesehatan</Text>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity>
                                    <Card style={styles.produk}>
                                        <Card style={{backgroundColor:'#808080', height:normalize(120), width:normalize(160)}}>

                                        </Card>
                                        <Text>.....</Text>
                                        <Text>Rp. </Text>
                                    </Card>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Card style={styles.produk}>
                                        <Card style={{backgroundColor:'#808080', height:normalize(120), width:normalize(160)}}>

                                        </Card>
                                        <Text>.....</Text>
                                        <Text>Rp. </Text>
                                    </Card>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity>
                                    <Card style={styles.produk}>
                                        <Card style={{backgroundColor:'#808080', height:normalize(120), width:normalize(160)}}>

                                        </Card>
                                        <Text>.....</Text>
                                        <Text>Rp. </Text>
                                    </Card>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Card style={styles.produk}>
                                        <Card style={{backgroundColor:'#808080', height:normalize(120), width:normalize(160)}}>

                                        </Card>
                                        <Text>.....</Text>
                                        <Text>Rp. </Text>
                                    </Card>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default HomeScreen;