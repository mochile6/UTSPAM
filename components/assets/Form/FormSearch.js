import React, { useState } from 'react'
import { View, Text, StyleSheet, Colors, TextInput, TouchableOpacity } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import formStyle from './StyleFormSearch'

const FormSearch = ({navigation}) => {
    const [text, onChangeText] = useState({
        keberangkatan: '',
        tujuan: '',
        tanggal: '',
    });

    const clickHandler = (textInput) => {
        return (value) => {
            onChangeText({ ...text, [textInput]: value });
        }
    }
    
    return (
        
        <View style={formStyle.box}>
            <View style={formStyle.package}>
                <Text style={formStyle.text}>Lokasi Keberangkatan</Text>
                <View style={formStyle.formSingle}>
                    <MaterialCommunityIcons style={formStyle.Icon} name="airplane-takeoff" size={20} color="#86b257"/>
                    <TextInput
                        style={formStyle.Input}
                        placeholder="Masukkan Lokasi Keberangkatan"
                        value={text.keberangkatan}
                        onChangeText={clickHandler('keberangkatan')}
                        underlineColorAndroid="transparent"
                    />
                </View>
            </View>
            
            <View style={formStyle.package}>
                <Text style={formStyle.text}>Lokasi Tujuan</Text>
                <View style={formStyle.formSingle}>
                    <MaterialCommunityIcons style={formStyle.Icon} name="airplane-landing" size={20} color="#86b257"/>
                    <TextInput
                        style={formStyle.Input}
                        placeholder="Masukkan Lokasi Tujuan"
                        value={text.tujuan}
                        onChangeText={clickHandler('tujuan')}
                        underlineColorAndroid="transparent"
                    />
                </View>
            </View>

            <View style={formStyle.package}>
                <Text style={formStyle.text}>Tanggal Keberangkatan</Text>
                <View style={formStyle.formSingle}>
                    <MaterialCommunityIcons style={formStyle.Icon} name="calendar-month" size={25} color="#86b257"/>
                    <TextInput
                        style={formStyle.Input}
                        placeholder="Masukkan Tanggal Keberangkatan"
                        value={text.tanggal}
                        onChangeText={clickHandler('tanggal')}
                        underlineColorAndroid="transparent"
                        keyboardType="numeric"
                    />
                </View>
            </View>

            <View style={formStyle.package}>
                <TouchableOpacity 
                    style={formStyle.button}
                    onPress={() => navigation.navigate('ResultPage', {data: text})}
                >
                    <Text style={formStyle.textButton}>Cari</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FormSearch