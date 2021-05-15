 {
                   this.state.text.map((text,index)=>{
                    return(   
                       <View>
                       <Text>{text}</Text>
                       <Image source={require('../SIGN LANGUAGE/'+text.toUpperCase()+'.png')}
                       style={{height:200,width:200}}/>    
                       </View>
                   )
                   })  
                   }