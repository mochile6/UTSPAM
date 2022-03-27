import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Pembatalan = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 30,
        width: '90%',

        top: '30%',
        left: '5%',
        shadowColor: '#000',
        elevation: 5,
        height: '60%',
      }}>
      <Text style={styles.Text}>Tidak Ada Pembatalan Tiket</Text>
      <MaterialCommunityIcons
        style={styles.userIcon}
        name="cancel"
        size={70}
        color={'#082f82'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 30,
    width: '90%',

    top: '30%',
    left: '5%',
    shadowColor: '#000',
    elevation: 5,
    height: '30%',
  },
  Text: {
    fontSize: 20,
    marginTop: '25%',
    color: '#082f82',
    textAlign: 'center',
    fontWeight: 'bold',
    bottom: '19%',
  },
  userIcon: {
    paddingLeft: '38%',
    bottom: '10%',
  },
});

export default Pembatalan;
