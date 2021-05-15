import React from 'react';
import { Header, Icon, Badge } from 'react-native-elements'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import Myheader from '../MyComponents/MyHeader'

export default class HomeScreen extends React.Component {
constructor(){
super()

this.state={

sign:'',
allSplit:[]

}
}



    render() {
      
        return (

            <View>
                <Myheader title='DEAF AND DUMB TRANSLATOR' />
                <View style={{ flex: 1 }}>
                     
                    <TextInput style={styles.tI} onChangeText={(text)=>{this.setState({sign:text})}}></TextInput>
                    <TouchableOpacity style={styles.button} onPress={()=>{
                    //  this.showSign(this.state.sign)
                        console.log(this.state.sign)
                        this.props.navigation.navigate("Translated",{"text":this.state.sign})
                        }}>
                        <Text style={{fontWeight:600}}>
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
        borderRadius: 20,
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