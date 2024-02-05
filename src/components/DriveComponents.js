import { View, Text, Image, useWindowDimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { WHITE, BLACK,SKYBLU } from '../colors/Colors'

const DriveComponents = () => {
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
  }} source={require('../images/drive.png')}/>

  <Text style={{
    color:BLACK,
    fontSize:16,
    fontWeight:"500",
    paddingHorizontal:10
  }}>Google Drive</Text>

  <TouchableOpacity>
  <Text style={{
    color:SKYBLU,
    paddingHorizontal:100,
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
   
  }} source={require('../images/drive.png')}/>

  <Text style={{
    color:BLACK
  }}>Connect Your google drive to easily</Text>
  <Text style={{
    color:BLACK
  }}>See all your drive activity</Text>

    
   </View>
   </View>
  )
}

export default DriveComponents