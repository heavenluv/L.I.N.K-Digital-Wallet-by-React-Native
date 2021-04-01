import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityBase
} from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { isIphoneX } from 'react-native-iphone-x-helper'
import { Home, Scan } from '../screens'
import { COLORS, icons } from '../constants'

const TopTab = createMaterialTopTabNavigator()

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
        <Text style={{ color: COLORS.white, ...FONTS.h2, fontWeight: 'bold' }}>
          Transfer
        </Text>
      </View>
    </View>
  )
}


function TopTabs () {
  return (
    <Tab.Navigator>
        {/*renderHeader()*/}
      <TopTab.Screen name='Home' component={Home} />
      <TopTab.Screen name='Settings' component={SettingsScreen} />
    </Tab.Navigator>
  )
}
