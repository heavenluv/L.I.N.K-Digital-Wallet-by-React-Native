import React, { useState, useEffect, useRef } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Button,
  Modal,
  TextInput,
  SafeAreaView
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { COLORS, FONTS, SIZES, icons, images } from '../constants'

const ScanPayment = ({ navigation }) => {
  const dimensions = useRef(Dimensions.get('window'))
  const screenWidth = dimensions.current.width
  const screenHeight = dimensions.current.height

  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState('');

  function renderHeader () {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.padding *2,
          borderBottomColor: COLORS.lightGray
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row'
          }}
          onPress={() => navigation.navigate('Scan')}
        >
          <Image
            source={icons.back}
            resizeMode='contain'
            style={{
              height: 30,
              width: 30,
              tintColor: COLORS.white
            }}
          />
          <Text
            style={{
              flex: 1,
              marginLeft: SIZES.padding * 0.1,
              color: COLORS.white,
              fontSize: 18
            }}
          >
            Scan
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            marginRight: '34%'
          }}
        >
          <Text
            style={{ color: COLORS.white, ...FONTS.h2, fontWeight: 'bold' }}
          >
            Payment
          </Text>
        </View>
      </View>
    )
  }

  function renderDetail () {
    return (
      <View
        style={{
          marginVertical: SIZES.padding * 2,
          marginHorizontal: SIZES.padding * 3,
          alignItems: 'flex-start',
          justifyContent: 'flex-start'
        }}
      >
        <Text
          style={{
            ...FONTS.h4,
            fontWeight: 'bold',
            paddingLeft: 13,
            paddingVertical: 10
          }}
        >
          Transfer to:
        </Text>
        <View
          style={{
            height: screenHeight * 0.15,
            width: screenWidth - SIZES.padding * 6,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#DDF2E6',
            borderRadius: 30,
          }}
        >
          <View
            style={{
              width: '100%',
              height: '100%',
              flexDirection: 'row',
              paddingVertical: '5%',
              paddingHorizontal: SIZES.padding * 2
            }}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  flex: 1,
                  fontWeight: 'bold',
                  ...FONTS.h2,
                  flexDirection: 'column',
                  alignSelf: 'stretch'
                }}
              >
                User Name
              </Text>
              <Text
                style={{
                  fontStyle: 'italic',
                  ...FONTS.body2,
                  flexDirection: 'column',
                  alignItems: 'flex-start'
                }}
              >
                +60-123456789
              </Text>
            </View>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                height: 60,
                width: 60,
                backgroundColor: COLORS.green,
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onPress={() => console.log('User Info')}
            >
              <Image
                source={icons.user}
                style={{
                  height: 40,
                  width: 40,
                  tintColor: COLORS.white
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  function renderForm () {
    function onTextChanged (value) {
      // code to remove non-numeric characters from text
      setAmount(value.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, ''))
    }

    return (
      <View
        style={{
          marginVertical: SIZES.padding * 2,
          marginHorizontal: SIZES.padding * 3,
          height: screenHeight * 0.2,
          width: screenWidth - SIZES.padding * 6,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#DDF2E6',
          borderRadius: 30
        }}
      >
        <View
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: '8%',
            paddingHorizontal: SIZES.padding * 2,
          }}
        >
            <View style={{ flex: 1 }}>
                <TextInput
                style={{
                    borderBottomColor: COLORS.primary,
                    borderBottomWidth: 0.5,
                    ...FONTS.body2,
                    width: '100%',
                }}
                keyboardType='decimal-pad'
                value={amount}
                onSubmitEditing={()=>setAmount(0)}
                maxLength={10}
                placeholder={'Please enter your amount'}
                />
                <Text style={{ flex: 1 }} >
                You can transfer up to RM 1000.00 per payment
                </Text>
            </View>
                <TextInput
                    style={{
                        borderBottomColor: COLORS.primary,
                        borderBottomWidth: 0.5,
                        ...FONTS.body2,
                        width: '100%',
                    }}
                    keyboardType='default'
                    value={description}
                    onSubmitEditing={()=>setDescription('')}
                    maxLength={10}
                    placeholder={"What's the transfer for?"}
                />
        </View>
      </View>
    )
  }
  function renderForms () {
    const onTextChanged = (value) =>  {
      // code to remove non-numeric characters from text
      setAmount(value.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, ''))
    }

    const setText = (text) => {
        setDescription(description, text)
    }

    return (
      <View
        style={{
          marginVertical: SIZES.padding * 2,
          marginHorizontal: SIZES.padding * 3,
          height: screenHeight * 0.25,
          width: screenWidth - SIZES.padding * 6,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#DDF2E6',
          borderRadius: 30
        }}
      >
        <View
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: '8%',
            paddingHorizontal: SIZES.padding * 2
          }}
        >

           <View style={{ flex: 1, flexDirection: "column", width:screenWidth*0.8, paddingHorizontal: 20}}>
                <TextInput
                style={{
                    alignItems:"flex-start",
                    justifyContent:"flex-start",
                    borderBottomColor: COLORS.primary,
                    borderBottomWidth: 1,
                    ...FONTS.body2,
                    width: '100%',
                    paddingBottom:10
                }}
                keyboardType='decimal-pad'
                value={amount}
                onSubmitEditing={()=>setAmount(0)}
                //onChangeText={(amount) => onTextChanged(amount)}
                maxLength={10}
                placeholder={'Please enter your amount'}
                />
                <Text style={{ flex: 1 }} >
                You can transfer up to RM 1000.00 per payment
                </Text>
            
            <View style={{ flex:1}}>
                <TextInput
                style={{
                    borderBottomColor: COLORS.primary,
                    borderBottomWidth: 1,
                    ...FONTS.body2,
                    width: '100%',
                    paddingBottom: 10
                }}
                keyboardType='default'
                value={description}
                onChangeText={(description) => setDescription(description)}
                placeholder={'Please reference the usage'}
                />
            </View>
        </View>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      {renderHeader()}
      <View
        style={{
          marginVertical: SIZES.padding * 2,
          marginHorizontal: SIZES.padding * 2,
          height: screenHeight * 0.8,
          width: screenWidth - SIZES.padding * 4,
          justifyContent:"flex-start",
          alignItems:"center",
          backgroundColor: 'rgba(230, 254, 240, 0.5)',
          borderRadius: 30,
          flexDirection: 'column'
        }}
      >
        {renderDetail()}
        {renderForms()}
      </View>
    </SafeAreaView>
  )
}

export default ScanPayment
