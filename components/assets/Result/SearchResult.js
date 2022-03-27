import React from 'react'
import { View, Text, StyleSheet, Colors, Image } from "react-native"
import { Maskapai, Jadwal, Bandara } from '../../../db/database'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import resultStyle from './StyleSearchResult'

const SearchResult = ({data}) => {
    let available = true

    var listJadwal = () => {

        var newJadwal = Jadwal.filter( (x) => {
            let checkBandaraK = Bandara.filter( (x) => {
                return x.bandara_nama.toLowerCase() == data.keberangkatan.toLowerCase()
            })

            let checkBandaraT = Bandara.filter( (x) => {
                return x.bandara_nama.toLowerCase() == data.tujuan.toLowerCase()
            })

            try{
                return (
                    x.bandara_kode_keberangkatan.toLowerCase() == checkBandaraK[0].bandara_kode.toLowerCase() &&
                    x.bandara_kode_tujuan.toLowerCase() == checkBandaraT[0].bandara_kode.toLowerCase() &&
                    data.tanggal.length === 10
                )
            }
            catch(err){
                return available = false
            }

        })

        if(newJadwal.length>0){
            return newJadwal.map( (printJadwal, i ) => {

                let checkMaskapai = Maskapai.filter( (x) => {
                    return x.maskapai_id == printJadwal.maskapai_id
                })
                
                let KapitalFirstsletter = (words) => {
                    let separateWord = words.toLowerCase().split(' ');
                    return separateWord.map((text) => text[0].toUpperCase() + text.slice(1)  ).join(' ');
                    
                }
    
                if(available == true){
                    return(
                        <View style={resultStyle.box} key={i}>
                            <View style={resultStyle.upperText}>
                                <Text style={resultStyle.text}>{KapitalFirstsletter(data.keberangkatan)}</Text>
                                <Text style={resultStyle.text}> - </Text>
                                <Text style={resultStyle.text}>{KapitalFirstsletter(data.tujuan)}</Text>
                            </View>
                            
                            <View style={resultStyle.bodyBox}>
                                <Image 
                                    style={resultStyle.Image}
                                    source={checkMaskapai[0].maskapai_logo}
                                ></Image>
                                <View style={resultStyle.underText}>
                                    <Text style={resultStyle.text}>{checkMaskapai[0].maskapai_nama}</Text>
                                    <Text style={resultStyle.textBlue}>{data.tanggal}</Text>
                                </View>
                            </View>
                            
                        </View>
                    )
                }
            })
        }else{
            return(
                <View style={resultStyle.boxNotAvail}>
                    <Text style={resultStyle.textNotAvail}>Maaf, jadwal penerbangan tidak tersedia </Text>
                    <MaterialCommunityIcons 
                        style={resultStyle.userIcon}
                        name="emoticon-sad-outline"
                        color={'#86b257'}
                    />
                </View>
            )
        }

        
    }

    return(
        <View>
            {listJadwal()}
        </View>
    )
}

export default SearchResult