import React from 'react';
import {Header,Icon,Badge} from 'react-native-elements'
import {View} from 'react-native'

export default class Myheader extends React.Component{

    constructor(props){
        super(props)
        this.state={
            value:""
        }
    }

    

render(){
return(

<Header 

centerComponent={{text:this.props.title,style:{color:'blue',fontSize:13,fontWeight:'bold'}}}

backgroundColor='#ff5722'
/>


)
}
}
