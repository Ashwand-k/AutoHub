import React from 'react';
//import {useDeviceOrientation} from  '@react-native-community/hooks';
import { Platform, SafeAreaView, StyleSheet, View,TouchableOpacity,Image ,Text} from 'react-native';
import colors from '../config/colors';

function  AppButton({title, mypress, color= "primary",disabled})
{
    return(
<TouchableOpacity  style={[styles.button, { backgroundColor:colors[color]}]}
     onPress={mypress} disabled={disabled}>
    <Text style ={ styles.text}>{title}</Text>

</TouchableOpacity>
    );
}



const styles= StyleSheet.create(
    {
        button:{
            backgroundColor:colors.secondary,
            height:40,
            width:"80%",
            borderRadius:35,
           justifyContent:'center',
           alignItems:'center',
           padding:5,
           marginVertical:10,
           marginBottom:60,
        
           


        },
        text:{
  color:'#080000',
  fontSize:18,
  textTransform:'uppercase',
  fontWeight:'bold'

        }
    }
)

export default AppButton;
