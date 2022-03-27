import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Flex,
  StyleSheet,
  Color,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from 'react-native';
import {Jadwal} from '../db/database';
import style from '../assets/KonfirmasiStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const KonfirmasiOrder = ({route, navigation}) => {
  const {data} = route.params;
  console.log(data);

  const OnSubmit = () => {
    navigation.navigate('Pesanan Saya', {
      data: data,
    });
  };

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
            <ScrollView>
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
                  <Text style={{fontSize: 20}}>
                    {printJadwal.pelabuhan_awal}
                  </Text>
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
              <View>
                <Text style={style.textpesan}>Data Pemesanan</Text>
                <TextInput
                  style={style.formSingle}
                  placeholder="Nama"></TextInput>
                <TextInput
                  style={style.formSingle}
                  placeholder="Identias"></TextInput>
                <TextInput
                  style={style.formSingle}
                  placeholder="Umur"></TextInput>
              </View>
              <View
                style={{
                  paddingTop: 15,
                  paddingLeft: 20,
                  width: '100%',
                }}>
                <TouchableOpacity style={style.button}>
                  <Text style={style.textButton} onPress={OnSubmit}>
                    {/* // onPress={() =>
                    //   navigation.navigate('Pesanan Saya', {data: data})
                    // }> */}
                    Konfirmasi
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        );
      });
    }
  };

  return <View>{panggildata()}</View>;
};

export default KonfirmasiOrder;
