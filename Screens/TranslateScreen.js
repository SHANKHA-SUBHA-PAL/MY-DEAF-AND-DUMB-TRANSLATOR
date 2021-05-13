import React from 'react';
import { Header, Icon, Badge } from 'react-native-elements'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import Myheader from '../MyComponents/MyHeader'

export default class TranslatedScreen extends React.Component {
constructor(){
super()

this.state={

sign:'',
allSplit:[]

}
}

showSign=(text)=>{
var enteredText=text.split('')


this.setState({allSplit:enteredText})

}

    render() {
        return (

            <View>
                <Myheader title='DEAF AND DUMB TRANSLATOR' />
                <View style={{ flex: 1 }}>
                   {
                   this.state.allSplit.map((text,index)=>{
                    return(   
                       <View>
                       <Text>{text}</Text>
                       <Image source={require('../SIGN LANGUAGE/'+text.toUpperCase()+'.png')}
                       style={{height:200,width:200}}/>    
                       </View>
                   )
                   })  
                   }
                     
                    <TextInput style={styles.tI} onChangeText={(text)=>{this.setState({sign:text})}}></TextInput>
                    <TouchableOpacity style={styles.button} onPress={()=>{this.showSign(this.state.sign)}}>
                        <Text>
                            TRANSLATE
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({

    tI: {
        width: "75%",
        height: 100,
        alignSelf: 'center',
        borderColor: '#ffab91',
        borderRadius: 10,
        borderWidth: 3,
        marginTop: 100,
        padding: 10,

    },

    button: {
        marginLeft: 100,
        width: "50%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: "#ff5722",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8, },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        marginTop: 20
    },
})