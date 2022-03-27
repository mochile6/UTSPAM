import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Flex,
  StyleSheet,
  Color,
} from 'react-native';
import {Jadwal} from '../db/database';
import style from '../assets/detailPesananStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const OrderDetail = ({route, navigation}) => {
  const {data} = route.params;

  const panggildata = () => {
    let checkPelabuhanK = Jadwal.filter(x => {
      return (
        x.pelabuhan_awal == data.pelabuhan_awal &&
        x.pelabuhan_tujuan == data.pelabuhan_tujuan &&
        x.kelas_layanan == data.kelas_layanan
      );
    });

    if (checkPelabuhanK.length > 0) {
      return checkPelabuhanK.map((printJadwal, i) => {
        return (
          <View key={i} style={style.box}>
            <Text style={style.text2}>Kapalzy</Text>
            <Text style={style.text}>
              Jumlah Kuota tersedia {printJadwal.kuota}
            </Text>
            <Text style={{paddingTop: 12, fontSize: 14, fontWeight: 'bold'}}>
              Rincian Tiket
            </Text>
            <View style={style.box1}>
              <View
                style={{
                  flex: 0,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <Text style={{fontSize: 20}}>{printJadwal.pelabuhan_awal}</Text>
                <FontAwesome name="arrow-right" size={20} color="black" />
                <Text style={{fontSize: 20}}>
                  {printJadwal.pelabuhan_tujuan}
                </Text>
              </View>
              <View>
                <Text style={style.text}>Jadwal Masuk Pelabuhan</Text>
              </View>
              <Text>{data.tanggal}</Text>
              <Text>{data.Jam} WIB</Text>
              <View
                style={{
                  borderBottomWidth: 1,
                }}>
                <Text style={style.text}>Layanan</Text>
                <Text>{printJadwal.kelas_layanan}</Text>
              </View>
              <View
                style={{
                  flex: 0,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <Text style={{paddingTop: 10}}>Dewasa x 1</Text>
                <Text style={{paddingTop: 10}}>{printJadwal.harga}</Text>
              </View>
            </View>
            <View
              style={{
                paddingTop: 70,
                marginRight: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '50%',
              }}>
              <TouchableOpacity
                style={style.button}
                onPress={() => navigation.goBack()}>
                <Text style={style.textButton1}>Kembali</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.button1}
                onPress={() =>
                  navigation.navigate('KonfirmasiOrder', {data: data})
                }>
                <Text style={style.textButton}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      });
    }
  };

  return <View>{panggildata()}</View>;
};

export default OrderDetail;
