import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Modal,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from 'react-native'
import { icons, images, theme, COLORS, SIZES, FONTS } from '../constants'
import { LinearGradient } from 'expo-linear-gradient'

const Registration = () => {
  function renderHeader () {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: SIZES.padding * 5.5,
          paddingHorizontal: SIZES.padding
        }}
        onPress={() => console.log('Register')}
      >
        <Image
          source={icons.back}
          resizeMode='contain'
          style={{
            width: 30,
            height: 30,
            tintColor: COLORS.white
          }}
        />
        <Text
          style={{
            marginLeft: SIZES.padding * 0.6,
            color: COLORS.white,
            fontSize: 20
          }}
        >
          Register
        </Text>
      </TouchableOpacity>
    )
  }

  function renderLogo () {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 6,
          height: 150,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Image
          source={images.LinkLogo}
          resizeMode='contain'
          style={{
            width: '100%'
          }}
        />
      </View>
    )
  }

  function renderForm () {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 3,
          marginHorizontal: SIZES.padding * 4
        }}
      >
        <View style={{ marginTop: SIZES.padding * 3 }}>
          <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>
            Full Name
          </Text>
          <TextInput
            style={{
              marginVertical: SIZES.padding * 2,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              height: 40,
              color: COLORS.white,
              ...FONTS.body3
            }}
            placeholder='Please enter your fullname'
            placeholderTextColor='rgba(255, 255, 255, 0.5)'
            selectionColor={COLORS.white}
          />
        </View>
        <View style={{ marginTop: SIZES.padding }}>
          <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>
            Phone Number
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={{
                width: 120,
                height: 50,
                marginHorizontal: 5,
                borderBottomColor: COLORS.white,
                borderBottomWidth: 1,
                flexDirection: 'row',
                ...FONTS.body2
              }}
              onPress={() => console.log('Show modal')}
            >
              <View style={{ justifyContent: 'center' }}>
                <Image
                  source={icons.down}
                  style={{
                    height: 15,
                    width: 15,
                    tintColor: COLORS.white
                  }}
                />
              </View>
              <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                <Image
                  source={images.msiaFlag}
                  style={{
                    resizeMode: 'contain',
                    width: 28,
                    height: 28
                  }}
                />
              </View>
              <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
                  MY+60
                </Text>
              </View>
            </TouchableOpacity>
            <TextInput
              style={{
                flex: 1,
                marginVertical: SIZES.padding,
                borderBottomColor: COLORS.white,
                borderBottomWidth: 1,
                height: 40,
                color: COLORS.white,
                ...FONTS.body3
              }}
              placeholder='Your phone number'
              placeholderTextColor='rgba(255, 255, 255, 0.5)'
              selectionColor={COLORS.white}
            />
          </View>
        </View>
        <View style={{ marginTop: SIZES.padding }}>
          <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>
            Password
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              style={{
                flex: 1,
                marginVertical: SIZES.padding,
                borderBottomColor: COLORS.white,
                borderBottomWidth: 1,
                height: 40,
                color: COLORS.white,
                ...FONTS.body3
              }}
              placeholder='Please enter your password'
              placeholderTextColor='rgba(255, 255, 255, 0.5)'
              selectionColor={COLORS.white}
              secureTextEntry={true}
            />
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    right: 0,
                    bottom: 20,
                    height: 30,
                    width:30
                }}
                onPress={console.log("Password")}
            >
              <View style={{ justifyContent: 'center', marginRight: 5 }}>
                <Image
                  source={icons.eye}
                  style={{
                    resizeMode: 'contain',
                    width: 28,
                    height: 28,
                    tintColor:COLORS.white
                  }}
                />
              </View>
            </TouchableOpacity> 
          </View>
        </View>
      </View>
    )
  }

  function renderButton() {
      return (
        <View style={{margin: SIZES.padding * 3}}>
            <TouchableOpacity
                style={{
                    height: 60,
                    backgroundColor: COLORS.black,
                    borderRadius: SIZES.radius/4,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={console.log("Login")}
            >
                <Text style={{color: COLORS.white, ...FONTS.h2}}>
                    Continue
                </Text>
            </TouchableOpacity>
        </View>
      )
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{ flex: 1 }}
    >
      <LinearGradient
        colors={[COLORS.primary, COLORS.secondary]}
        style={{ flex: 1 }}
      >
        <ScrollView>
          {renderHeader()}
          {renderLogo()}
          {renderForm()}
          {renderButton()}
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  )
}

export default Registration
