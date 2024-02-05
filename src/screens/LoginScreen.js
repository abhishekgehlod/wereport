import { View, Text, useWindowDimensions, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BLACK, BLUE, WHITE } from '../colors/Colors'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation()

    const [userInfo, setUserInfo] = useState(null)
    const { height, width } = useWindowDimensions()

    // useEffect(() => {
        
    // }, [])




    //sing in with google

    // const signIn = async () => {
    //     try {
    //       await GoogleSignin.hasPlayServices();
    //       await GoogleSignin.signOut()
    //       const usrInfo = await GoogleSignin.signIn();
    //       console.log('userinfo=====', userInfo)

    //     } catch (error) {
    //       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //         // user cancelled the login flow
    //         console.log(error)
    //       } else if (error.code === statusCodes.IN_PROGRESS) {
    //         // operation (e.g. sign in) is in progress already
    //         console.log(error)
    //       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //         // play services not available or outdated
    //         console.log(error)
    //       } else {
    //         // some other error happened
    //       }
    //     }
    //   };


    const aa = async () => {

        navigation.navigate('Deshboad1')
        // try {
        //     await GoogleSignin.hasPlayServices();
        //     await GoogleSignin.signOut()
        //     const userInfo = await GoogleSignin.signIn();
        //     console.log(userInfo)
        //     navigation.navigate('Deshboad1')
            
        //   } catch (error) {
        //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        //       // user cancelled the login flow
        //     } else if (error.code === statusCodes.IN_PROGRESS) {
        //       // operation (e.g. sign in) is in progress already
        //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        //       // play services not available or outdated
        //     } else {
        //       // some other error happened
        //     }
        //   }
         
    }
    //sing in with google
    return (
        <View style={{
            flex: 1
        }}>
            <View style={{
                height: height

            }}>
                <Text style={{
                    color: BLACK,
                    position: 'absolute',
                    top: 90,
                    left: 10,
                    fontSize: responsiveFontSize(4),
                    fontWeight: '500'

                }}>Log  In</Text>
                <Text style={{
                    position: 'absolute',
                    top: 140,
                    left: 10,
                    color: BLACK,
                    fontSize: responsiveFontSize(2),
                    fontWeight: '400'
                }}>Log in to access your information</Text>




                <TouchableOpacity style={{
                    width: width / 1.2,
                    height: width / 8,
                    alignSelf: 'center',
                    elevation: 2,
                    position: 'absolute',
                    top: 300,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: .2,
                    flexDirection: 'row',
                    backgroundColor: WHITE




                }} onPress={()=>{
                    aa()
                }} >

                    <Image style={{
                        width: width / 15,
                        height: width / 15
                    }} source={require('../images/googleLogo.png')} />
                    <Text style={{
                        color: BLACK,
                        fontSize: 15,
                        fontWeight: '400',
                        paddingHorizontal: 10
                    }}>Log In Using Google</Text>

                </TouchableOpacity>

                <Text style={{
                    fontSize: responsiveFontSize(2),
                    color: BLACK,
                    position: 'absolute',
                    top: 370,
                    alignSelf: 'center',
                    fontWeight: '400'
                }}>Don't have an account? <Text style={{
                    fontSize: responsiveFontSize(2),
                    fontWeight: '400',
                    color: BLUE


                }}>Sign in</Text></Text>

                <Text style={{
                    fontSize: responsiveFontSize(2),
                    color: BLACK,
                    position: 'absolute',
                    bottom: 20,
                    alignSelf: 'center',
                    fontWeight: '400'

                }}>Privacy Policy | <Text style={{
                    fontSize: responsiveFontSize(2),
                    fontWeight: '400',
                    color: BLACK


                }}>Terms  &  Conditions</Text></Text>



            </View>







        </View>
    )
}

export default LoginScreen