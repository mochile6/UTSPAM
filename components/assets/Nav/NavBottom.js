import React from 'react'
import { View, Text, StyleSheet, Colors } from "react-native"

const NavBottom = () => {
    return (
        <View style={navStyle.copyright}>
            <Text style={navStyle.textCopyright}>Copyright: Fahri Setiawan 119140193</Text>
        </View>
    )
}

const navStyle = StyleSheet.create({
    copyright:{
        alignItems: 'center',
        position: 'absolute',
        top: 650,
        left: 65,
    },
    textCopyright:{
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

export default NavBottom