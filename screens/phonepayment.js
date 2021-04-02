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

const PhonePayment = ({ navigation }) => {
  const dimensions = useRef(Dimensions.get('window'))
  const screenWidth = dimensions.current.width
  const screenHeight = dimensions.current.height

  const [phonenumber, setPhoneNumber] = useState('')
  const [description, setDescription] = useState('')
  const [areas, setArea] = useState([])
  const [selectedArea, setSelectedArea] = useState(null)
  const [callingcode, setCallingCode] = useState('+60')
  const [modalVisible, setModalVisible] = useState(false)
  const [search, setSearch] = useState('')
  const [filteredArea, setFilteredArea] = useState([])

  const usersdata = [
    {
      id: 1,
      img: icons.user,
      title: 'Vin Diesel',
      phoneno: '+60123456789'
    },
    {
      id: 2,
      img: icons.user,
      title: 'Smirk',
      phoneno: '+60123456789'
    },
    {
      id: 3,
      img: icons.user,
      title: 'Lisa',
      phoneno: '+60123456789'
    },
    {
      id: 4,
      img: icons.user,
      title: 'Ali Abu',
      phoneno: '+60123456789'
    }
  ]

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
        let areaData = data.map(item => {
          return {
            code: item.alpha2Code,
            name: item.name,
            callingCode: `+${item.callingCodes[0]}`,
            flag: `https://www.countryflags.io/${item.alpha2Code}/flat/64.png`
          }
        })
        setArea(areaData)
        if (areaData.length > 0) {
          let defaultData = areaData.filter(a => a.code == 'MY')
          if (defaultData.length > 0) {
            setSelectedArea(defaultData[0])
          }
        }
      })
  }, [])

  const searchFilterFunction = text => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = areas.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1
      })
      setFilteredArea(newData)
      setSearch(text)
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredArea(areas)
      setSearch(text)
    }
  }

  function renderAreaCodesModal () {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{ padding: SIZES.padding, flexDirection: 'row' }}
          onPress={() => {
            setSelectedArea(item)
            setCallingCode(item.callingCode.toString())
            console.log(callingcode)
            setModalVisible(false)
          }}
        >
          <Image
            source={{ uri: item.flag }}
            style={{
              width: 30,
              height: 30,
              marginRight: 10
            }}
          />
          <Text style={{ ...FONTS.body4 }}> {item.name}</Text>
        </TouchableOpacity>
      )
    }

    function mergePhoneNo ({ callingcode, phonenumber }) {
      console.log(callingcode.toString() + phonenumber.toString())
    }

    return (
      <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <View
              style={{
                height: 400,
                width: SIZES.width * 0.8,
                backgroundColor: COLORS.lightGreen,
                borderRadius: SIZES.radius
              }}
            >
              <SearchBar
                round
                lightTheme
                showCancel
                containerStyle={{
                  backgroundColor: COLORS.transparent,
                  paddingHorizontal: 10,
                  marginHorizontal: 5,
                  marginTop: 5,
                  borderRadius: SIZES.radius,
                  borderBottomColor: COLORS.transparent,
                  borderTopColor: COLORS.transparent
                }}
                inputContainerStyle={{
                  paddingHorizontal: 4,
                  backgroundColor: COLORS.lightGreen
                }}
                searchIcon={{ size: 24 }}
                onChangeText={text => searchFilterFunction(text)}
                onClear={text => searchFilterFunction('')}
                placeholder='Type Here...'
                value={search}
              />
              <FlatList
                data={filteredArea}
                renderItem={renderItem}
                keyExtractor={item => item.code}
                showsVerticalScrollIndicator={false}
                style={{
                  padding: SIZES.padding * 2,
                  marginBottom: SIZES.padding * 2
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }

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

  function renderForms () {
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
            paddingHorizontal: SIZES.padding
          }}
        >
          <View style={{ marginTop: SIZES.padding, width: '100%' }}>
            <Text style={{ color: COLORS.black, ...FONTS.body3 }}>
              Phone Number
            </Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <TouchableOpacity
                style={{
                  width: 85,
                  height: 50,
                  marginHorizontal: 5,
                  borderBottomColor: COLORS.black,
                  borderBottomWidth: 1,
                  flexDirection: 'row',
                  ...FONTS.body2
                }}
                onPress={() => setModalVisible(true)}
              >
                <View style={{ justifyContent: 'center' }}>
                  <Image
                    source={icons.down}
                    style={{
                      height: 15,
                      width: 15,
                      tintColor: COLORS.black
                    }}
                  />
                </View>
                <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                  <Image
                    source={{ uri: selectedArea?.flag }}
                    style={{
                      resizeMode: 'contain',
                      width: 28,
                      height: 28
                    }}
                  />
                </View>
                <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                  <Text style={{ color: COLORS.black, ...FONTS.body4 }}>
                    {selectedArea?.callingCode}
                  </Text>
                </View>
              </TouchableOpacity>
              <TextInput
                style={{
                  flex: 1.8,
                  marginVertical: SIZES.padding,
                  borderBottomColor: COLORS.black,
                  borderBottomWidth: 1,
                  height: 40,
                  color: COLORS.black,
                  ...FONTS.body4,
                  paddingLeft: 5
                }}
                keyboardType = 'numeric'
                placeholder="Enter recipient's phone number"
                placeholderTextColor='rgba(0, 0, 0, 0.5)'
                selectionColor={COLORS.gray}
                value={phonenumber.toString()}
                onChangeText={phonenumber => setPhoneNumber(phonenumber)}
                onSubmitEditing={() =>
                  //console.log(callingcode.toString() + phonenumber.toString())
                  navigation.navigate("Payment")
                }
                maxLength={10}
              />
              <TouchableOpacity
                style={{
                  flex: 0.2,
                  paddingVertical: 20
                }}
                onPress={() => setPhoneNumber('')}
              >
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.black
                  }}
                  source={icons.close}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }
  function renderBottom () {
    return (
      <View
        style={{
          marginVertical: SIZES.padding * 2,
          marginHorizontal: SIZES.padding * 3,
          height: screenHeight * 0.5,
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
          {renderNameList()}
        </View>
      </View>
    )
  }

  function renderNameList () {
    const Header = () => (
      <View style={{ marginBottom: SIZES.padding * 2 }}>
        <Text style={{ ...FONTS.h3, fontWeight: 'bold' }}>
          Recent Transfer List
        </Text>
      </View>
    )

    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{
          marginBottom: SIZES.padding * 2,
          width: screenWidth - SIZES.padding * 9,
          alignItems: 'center',
          flexDirection: 'row'
        }}
        onPress={() => console.log('hi')}
      >
        <View
          style={{
            height: screenWidth / 8,
            width: screenWidth / 8,
            marginBottom: 5,
            borderRadius: 20,
            backgroundColor: COLORS.primary,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Image
            source={item.img}
            resizeMode='contain'
            style={{
              height: screenWidth / 13,
              width: screenWidth / 13,
              tintColor: item.black
            }}
          />
        </View>
        <View
          style={{
            marginHorizontal: SIZES.padding,
            marginTop: SIZES.padding,
            backgroundColor: COLORS.lightGray,
            borderRadius: 25,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            width: screenWidth / 1.6
          }}
        >
          <Text
            style={{
              ...FONTS.h4,
              fontWeight: 'bold',
              height: screenWidth / 8,
              flex: 1,
              paddingTop: screenWidth / 28,
              paddingHorizontal: 10
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              ...FONTS.body4,
              flex: 1,
              height: screenWidth / 8,
              paddingTop: screenWidth / 28,
              paddingHorizontal: 10
            }}
          >
            {item.phoneno}
          </Text>
        </View>
      </TouchableOpacity>
    )
    return (
      <FlatList
        ListHeaderComponent={Header}
        data={usersdata}
        numColumns={1}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        style={{ marginTop: SIZES.padding * 2 }}
      />
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
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: 'rgba(230, 254, 240, 0.5)',
          borderRadius: 30,
          flexDirection: 'column'
        }}
      >
        {renderForms()}
        {renderBottom()}
        {renderAreaCodesModal()}
      </View>
    </SafeAreaView>
  )
}

export default PhonePayment
