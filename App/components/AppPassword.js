import React from 'react';
//import {useDeviceOrientation} from  '@react-native-community/hooks';
import { Platform, SafeAreaView, StyleSheet, View,TouchableOpacity,Image ,Text, TextInput,} from 'react-native';
import Icons from '@expo/vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';
function  AppPassword({title, mypress,icons,label,get,onBlur,value})
{
    return(
      
<TouchableOpacity style={{marginBottom:20}} onLongPress={mypress}
    >

<View style={styles.searchSection}>
    <Icons style={styles.searchIcon} name={title} size={20} />
    <TextInput
        style={styles.input}
        placeholder={label}
       secureTextEntry={true}
       onChangeText={get}
     
onBlur={onBlur}
value={value}
        underlineColorAndroid="transparent"
    />
</View>
</TouchableOpacity>
    );
}



const styles= StyleSheet.create(
    {
        

        searchSection: {
            
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:colors.textinput,
            height:40,
            width:"95%",
            borderRadius:35,
            top:30,
            marginBottom:30
        },
        searchIcon: {
            padding: 10,
        },
        input: {
            flex: 1,
           height:40,
            width:"95%",
            color:'black',
            fontSize:18,
            
            fontWeight:'bold',
      
        },
    }
)

export default AppPassword;

