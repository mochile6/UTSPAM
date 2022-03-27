import { View, Text, StyleSheet, Colors, TextInput, TouchableOpacity } from "react-native"

export default StyleSheet.create({
    box:{
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        paddingBottom: 50,
        width: '80%',
        position: 'absolute',
        top: '30%',
        left: '10%',
        shadowColor: '#000',
        elevation: 5,
    },
    package:{
        marginTop: 20,
    },
    formSingle:{
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        borderRadius: 10,
        marginTop: 5,
    },
    text:{
        fontSize: 16,
        fontWeight: 'bold',
    },
    Icon:{
        padding: 10,
    },
    Input:{
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
    button:{
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ed7c31',
        borderRadius: 10,
    },
    textButton:{
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
        color: '#fff',
    },
})

