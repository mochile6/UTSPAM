import { View, Text, StyleSheet, Colors, Image } from "react-native"


export default StyleSheet.create({
    notAvailable:{
        alignItems: 'center',
    }, 
    box:{
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
        width: '80%',
        left: '10%',
        shadowColor: '#000',
        elevation: 5,
        marginTop: 10,
    },
    boxNotAvail:{
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        width: '80%',
        left: '10%',
        shadowColor: '#000',
        elevation: 5,
        top: '100%',
        alignItems: 'center',
    },
    textNotAvail:{
        textAlign: 'center',
    },
    userIcon: {
        marginTop: 25,
        fontSize: 60,
        marginRight:20,
    },
    upperText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 30,
        marginRight: 30,
    },
    bodyBox:{
        marginTop: 10,
        alignContent: 'flex-start',
    },  
    Image:{
        width: null,
        resizeMode: 'contain',
        height: 50,
        marginRight:150,
    },
    underText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 30,
        marginRight: 30,
    },
    text:{
        fontWeight: 'bold',
    },
    textBlue:{
        fontWeight: 'bold',
        color: 'blue',
    }
})