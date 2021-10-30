import React, { Children } from 'react';
import { StyleSheet, View,Image,Text, TextInput,Platform, TouchableOpacity} from 'react-native';
import Icons from '@expo/vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';
// import TextInput from '../components/TextInput';
import DefaultStyle from '../config/DefaultStyle';
function AppTextInput ({icon,onChangeText,placeholder,keyboardType,secureTextEntry,autoCorrect,onBlur,maxLength}){
    return(
        <TouchableOpacity>
         <View style =
{ styles.container}>
 {icon && <Icons name={icon} size={20} style={styles.icon}> </Icons>}
<TextInput style={DefaultStyle.text} 
onChangeText={onChangeText}
placeholder={placeholder}
keyboardType={keyboardType}
secureTextEntry={secureTextEntry}
autoCorrect={autoCorrect}
onBlur={onBlur}
maxLength={maxLength}

></TextInput>

</View>    
        </TouchableOpacity>


    );

}
const styles= StyleSheet.create(
    {
  container:{
           
     backgroundColor:colors.light,
     borderRadius:25,
     flexDirection:"row",
     width:"100%",
     padding:15,
     marginVertical:10


        },icon:{
marginRight:10
        },
       
    }
)
export default AppTextInput;

