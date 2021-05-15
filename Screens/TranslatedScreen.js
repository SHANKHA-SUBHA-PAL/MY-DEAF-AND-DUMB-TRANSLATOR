import React from 'react';
import { Header, Icon, Badge } from 'react-native-elements'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import Myheader from '../MyComponents/MyHeader'

export default class TranslatedScreen extends React.Component {
constructor(props){
super(props)

this.state={


text: this.props.navigation.getParam("text"),
allSplit:[]

}
}

showSign= async(text)=>{
    var enteredText=text.split(' ')
    console.log(enteredText)
    
    this.setState({allSplit:enteredText})
    console.log(this.state.allSplit)
    
}

componentDidMount(){
    this.showSign(this.state.text)
}


    render() {
        console.log(this.state.text)
        return (

            <View>
                <Myheader title='DEAF AND DUMB TRANSLATOR' />
               
                <View style=
                {{flexDirection:'row',justifyContent:'space-between',flexWrap:'wrap'}}>
                    
                {
                   this.state.allSplit.map((text,index)=>{

                    var newText= text.split('');
                     newText.map((word))
                    
                })
            }
                     
                
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