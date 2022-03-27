import React from 'react';
import {View, Text, StyleSheet, Colors} from 'react-native';

const HeaderCancel = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'blue',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 15,
          fontFamily: 'Roboto',
          fontWeight: 'bold',
        }}>
        PEMBATALAN
      </Text>
    </View>
  );
};

export default HeaderCancel;
