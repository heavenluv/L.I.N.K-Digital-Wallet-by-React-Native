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
  SafeAreaView,
  TouchableWithoutFeedback,
  FlatList
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SearchBar } from 'react-native-elements'

import { COLORS, FONTS, SIZES, icons, images } from '../constants'

const PaidCode = ({ navigation }) => {
  const dimensions = useRef(Dimensions.get('window'))
  const screenWidth = dimensions.current.width
  const screenHeight = dimensions.current.height

  const [paid, setPaid] = useState('false');

  function renderHeader () {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.padding * 2,
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
            Transfer
          </Text>
        </View>
      </View>
    )
  }

  function renderCode () {
    return (
      <View
        style={{
          marginVertical: SIZES.padding * 2,
          marginHorizontal: SIZES.padding * 3,
          height: screenHeight * 0.6,
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
            paddingHorizontal: SIZES.padding
          }}
        >
            <Text
                style={{
                    ...FONTS.h2,
                    fontWeight: "bold",
                    marginBottom: 20
                }}
            >
                Username
            </Text>
         <Image
            source={images.qrcode}
            resizeMode='cover'
            style={{
              height: screenWidth/2,
              width: screenWidth/2,
            }}
          />
           <Text
                style={{
                    ...FONTS.body2,
                    padding: 10,
                    textAlign: "center",
                    color: COLORS.darkgray,
                    fontWeight: "bold"
                }}
            >
                Scan with your L.I.N.K app to send money over!
            </Text>
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
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(230, 254, 240, 0.5)',
          borderRadius: 30,
          flexDirection: 'column'
        }}
      >
          {renderCode()}
      </View>
    </SafeAreaView>
  )
}

export default PaidCode
