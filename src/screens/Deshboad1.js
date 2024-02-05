import { View, Text, useWindowDimensions, Image, ScrollView, TouchableOpacity, SafeAreaView, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import { BLACK, SKYBLU, TEXTCOLOR, WHITE, YELLOW } from '../colors/Colors'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import GmailComponents from '../components/GmailComponents'
import Calender from '../components/Calender'
import DriveComponents from '../components/DriveComponents'


const Deshboad1 = () => {
  const { height, width } = useWindowDimensions()
  const [teamMember , setTeamMember] = useState([])
  const [display , setDisplay] = useState(false)


  const Showdata = ()=>{
    setDisplay(true)
  }



 
  return (

    <SafeAreaView style={{ flex: 1, marginBottom: 30 }}>
      <ScrollView>
        <View style={{ height: height }}>


          <View style={{
            flexDirection: 'row', position: 'absolute',
            left: 100,
            top: 50
          }}>
            <Image style={{
              width: width / 10,
              height: width / 10,
              resizeMode: 'contain'


            }} source={require('../images/LOGO1.png')} />
            <Text style={{
              color: BLACK,
              paddingHorizontal: 10,
              fontSize: 20,
              fontWeight: '400',
              top: 4
            }}>We Report Work</Text>
          </View>

          <View style={{
            flexDirection: "row",
            position: "absolute",
            top: 135,
            left: 6,

          }}>

            <View style={{
              width: width / 2.3,
              height: height / 10,
              backgroundColor: WHITE,
              borderRadius: 10,
              elevation: 2,

              flexDirection: 'row',


            }}>
              <Image style={{
                width: width / 13,
                height: width / 13,
                top: 15,
                paddingHorizontal: 5
              }} source={require('../images/gift.png')} />
              <View>
                <Text style={{
                  color: BLACK,
                  top: 10,
                  paddingHorizontal: 5
                }}>Your plain: FREE {'(unlimited)'}</Text>
                <Text style={{
                  color: SKYBLU,
                  fontSize: 10,
                  marginTop: 10

                }}>Explore Plans / Topup</Text>
              </View>

            </View>


            <View style={{
              width: width / 2.3,
              height: height / 10,
              backgroundColor: WHITE,
              borderRadius: 10,
              elevation: 2,
              flexDirection: 'row',
              marginLeft: 30,
              alignItems: 'center',
              paddingHorizontal: 10

            }}>
              <Image style={{
                width: width / 10,
                height: width / 10
              }} source={require('../images/credits.png')} />

              <View>
                <Text style={{
                  color: BLACK,
                  paddingHorizontal: 8
                }}>CREDITS</Text>
                <Text style={{
                  color: BLACK,
                  paddingHorizontal: 8,
                  fontSize: 20,
                  fontWeight: '700'
                }}>1000</Text>
              </View>
            </View>




          </View>

          <Text style={{
            color: BLACK,
            fontSize: 20,
            fontWeight: '600',
            position: 'absolute',
            top: 230,
            left: 10

          }}>Wellcome , name</Text>

          <Text style={{
            color: BLACK,
            position: 'absolute',
            top: 255,
            left: 10,
            fontSize: 16
          }}>your work summary</Text>

          <Text style={{
            color: BLACK,
            position: 'absolute',
            top: 275,
            margin: 5,
            fontSize: 12
          }}>connect your google account to see the summary of your work activities . ready?</Text>


          <View style={{
            width: width / 1,
            height: width / 2,
            backgroundColor: WHITE,
            position: 'absolute',
            top: 330,
            elevation: 2,
            alignItems: 'center',
            justifyContent: 'center'


          }}>
            <View style={{ flexDirection: 'row' }}>
              <Image style={{
                width: width / 17,
                height: width / 17,
                resizeMode: 'contain'
              }} source={require('../images/gmail-icon.png')} />

              <Image style={{
                width: width / 20,
                height: width / 20,
                marginTop: 1,
                resizeMode: 'contain',
                marginLeft: 10
              }} source={require('../images/calender.png')} />
            </View>
            <Text style={{
              color: BLACK,
              marginTop: 10,
              fontWeight: '400'
            }}> your work summary will populate here!</Text>
          </View>

          <TouchableOpacity style={{
            width: width / 3.5,
            height: width / 10,
            backgroundColor: "#4285F4",
            alignSelf: 'center',
            position: 'absolute',
            top: 525,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center'

          }}>
            <Text style={{
              color: BLACK
            }}>Summarize</Text>

          </TouchableOpacity>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={{
              width: width / 2.5,
              height: width / 10,
              position: 'absolute',
              top: 590,
              backgroundColor: WHITE,
              left: 10,
              elevation: 2,
              borderRadius: 10,
              borderWidth: .5,
              borderColor: SKYBLU,
              justifyContent: 'center',
              flexDirection: "row",
              alignItems: "center"
            }}>
              <Image style={{
                width: width / 15,
                height: width / 15,
                resizeMode: 'contain'
              }} source={require('../images/user.png')} />
              <Text style={{
                color: BLACK,
                fontSize: 9,
                fontWeight: "500"
              }}>switch to manager view</Text>


            </TouchableOpacity>


            <TouchableOpacity style={{
              width: width / 2.5,
              height: width / 10,
              position: 'absolute',
              top: 590,
              backgroundColor: WHITE,
              right: 2.5,

              elevation: 2,
              borderRadius: 10,
              borderWidth: .5,
              borderColor: SKYBLU,
              justifyContent: 'center',
              flexDirection: "row",
              alignItems: "center"
            }}>
              <Image style={{
                width: width / 15,
                height: width / 15,
                resizeMode: 'contain'
              }} source={require('../images/feedback.png')} />
              <Text style={{
                color: BLACK,
                fontSize: 9,
                fontWeight: "500"
              }}>Have feedback ?</Text>


            </TouchableOpacity>
          </View>







        </View>




        <Text style={{
          color: BLACK,
          left: 10,
          fontWeight: '500',
          position: 'absolute',
          top: 700,
        }}>setup your repoting manager / team member</Text>

        <View style={{
          width: width / 1.1,
          height: width / 1,
          backgroundColor: WHITE,
          elevation: 2,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          alignSelf: 'center'
        }}>
          <View
            style={{
              width: width / 1.1,
              height: width / 9,
              backgroundColor: YELLOW,
              justifyContent: 'space-between',
              flexDirection: 'row'

            }}>
            <Text style={{
              color: BLACK,
              fontSize: 18,
              paddingHorizontal: 10,
              fontWeight: '500',
              alignSelf: "center"
            }}>Team Member</Text>

            <Text style={{
              color: BLACK,
              fontSize: 18,
              paddingHorizontal: 10,
              fontWeight: '500',
              alignSelf: 'center'
            }}>Status</Text>
          </View>

            <Text style={{color:BLACK}}>{teamMember}</Text>
          <View style={{
            flexDirection: 'row',
            position: 'absolute',
            bottom: 0
          }}>
            <TextInput style={{
              width: width / 2,

              fontSize: 16,
              fontWeight: '400',
              marginLeft: 20,
              borderBottomWidth: 2,
              borderBottomColor: SKYBLU,
              color:BLACK
            }} 
            placeholder='xyz@gmail.com'
             placeholderTextColor={TEXTCOLOR} 
             value={teamMember}
             onChangeText={(txt)=>setTeamMember(txt)}
             />

            <TouchableOpacity onPress={()=>Showdata()}>
              <Text style={{
                fontSize: 20,
                fontWeight: '400',
                color: SKYBLU,
                marginTop: 15,
                left: 50

              }}>Invite</Text>
            </TouchableOpacity>
          </View>
        </View>



        <View style={{
          width: width / 1.1,
          height: width / 1,
          backgroundColor: WHITE,
          elevation: 2,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          alignSelf: 'center',
          marginTop:20
        }}>
          <View
            style={{
              width: width / 1.1,
              height: width / 9,
              backgroundColor: YELLOW,
              justifyContent: 'space-between',
              flexDirection: 'row'

            }}>
            <Text style={{
              color: BLACK,
              fontSize: 18,
              paddingHorizontal: 10,
              fontWeight: '500',
              alignSelf: "center"
            }}>Reporting Manager</Text>

            <Text style={{
              color: BLACK,
              fontSize: 18,
              paddingHorizontal: 10,
              fontWeight: '500',
              alignSelf: 'center'
            }}>Status</Text>
          </View>


          <View style={{
            flexDirection: 'row',
            position: 'absolute',
            bottom: 0
          }}>
            <TextInput style={{
              width: width / 2,

              fontSize: 16,
              fontWeight: '400',
              marginLeft: 20,
              borderBottomWidth: 2,
              borderBottomColor: SKYBLU,
              color:BLACK
            }} 
            placeholder='xyz@gmail.com'
             placeholderTextColor={TEXTCOLOR} 
             value={teamMember}
             onChangeText={(txt)=>setTeamMember(txt)}
             />

            <TouchableOpacity onPress={()=>Showdata()}>
              <Text style={{
                fontSize: 20,
                fontWeight: '400',
                color: SKYBLU,
                marginTop: 15,
                left: 50

              }}>Invite</Text>
            </TouchableOpacity>
          </View>
        </View>


        <GmailComponents />
        <Calender />
        <DriveComponents />




      </ScrollView>
    </SafeAreaView>

  )
}

export default Deshboad1