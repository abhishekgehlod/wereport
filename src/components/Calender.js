import { View, Text, Image,useWindowDimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { BLACK,WHITE,SKYBLU } from '../colors/Colors'

const Calender = () => {
    const {width,height} = useWindowDimensions()
  return (
    <View>
  <View style={{

    flexDirection:'row',
    marginTop:30
  }}>
  <Image style={{
    width:width/15,
    height:width/15,
    resizeMode:'contain',
    marginLeft:20
  }} source={require('../images/calender.png')}/>

  <Text style={{
    color:BLACK,
    fontSize:16,
    fontWeight:"500",
    paddingHorizontal:10
  }}>Calender</Text>

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
   
  }} source={require('../images/calender.png')}/>

  <Text style={{
    color:BLACK
  }}>Connect Your Google calender to easily</Text>
  <Text style={{
    color:BLACK
  }}>See all your calender activity</Text>

    
   </View>
   </View>
  )
}

export default Calender