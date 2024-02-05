import { View, Text, useWindowDimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { BLACK, SKYBLU, WHITE } from '../colors/Colors'

const GmailComponents = () => {
    const {width,height} = useWindowDimensions()
  return (
   <View>
  <View style={{

    flexDirection:'row',
    marginTop:30
  }}>
  <Image style={{
    width:width/14,
    height:width/14,
    resizeMode:'contain',
    marginLeft:20
  }} source={require('../images/gmail-icon.png')}/>

  <Text style={{
    color:BLACK,
    fontSize:16,
    fontWeight:"500",
    paddingHorizontal:10
  }}>Gmail</Text>

  <TouchableOpacity>
  <Text style={{
    color:SKYBLU,
    paddingHorizontal:150,
    fontSize:16,
    fontWeight:'500'
  }}>Connect</Text>
  </TouchableOpacity>
  

  </View>
   <View style={{
    width:width/1.1,
    height:width/1.5,
    alignSelf:'center',
    elevation:5,
    backgroundColor:WHITE,
    marginTop:5,
    alignItems:"center",
    justifyContent:"center",
    borderWidth:.5,
    borderColor:SKYBLU
        

   }}>
   <Image style={{
    width:width/14,
    height:width/14,
    resizeMode:'contain',
   
  }} source={require('../images/gmail-icon.png')}/>

  <Text style={{
    color:BLACK
  }}>Connect Your Gmail account to easily</Text>
  <Text style={{
    color:BLACK
  }}>See all your emails</Text>

    
   </View>
   </View>
  )
}

export default GmailComponents