import React, { useState, useEffect } from 'react'
import * as font from 'expo-font'
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
  Platform,
  TouchableOpacityBase,
  Linking
} from 'react-native'
import { icons, images, theme, COLORS, SIZES, FONTS } from '../constants'
import { LinearGradient } from 'expo-linear-gradient'
import { SearchBar } from 'react-native-elements'

//import { NavigationContainer } from '@react-navigation/native'

const Login = ({navigation}) => {

  const [showPassword, setShowPassword] = useState(false);

  const [areas, setArea] = useState([]);
  const [selectedArea, setSelectedArea] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredArea, setFilteredArea] = useState([]);
  //const [masterDataSource, setMasterDataSource] = useState([]);


  useEffect(() => {
      fetch("https://restcountries.eu/rest/v2/all")
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
          setArea(areaData);
          if(areaData.length > 0){
            let defaultData = areaData.filter(a => a.code == "MY")
            if(defaultData.length > 0){
              setSelectedArea(defaultData[0]);
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
            fontSize: 18,
        

          }}
        >
          Login
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
          marginHorizontal: SIZES.padding * 3
        }}
      >
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
              onPress={() => setModalVisible(true)}
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
                  source={{ uri: selectedArea?.flag }}
                  style={{
                    resizeMode: 'contain',
                    width: 28,
                    height: 28
                  }}
                />
              </View>
              <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
                  {selectedArea?.callingCode}
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
                ...FONTS.body3,
            
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
                ...FONTS.body3,
            

              }}
              placeholder='Please enter your password'
              placeholderTextColor='rgba(255, 255, 255, 0.5)'
              selectionColor={COLORS.white}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    right: 0,
                    bottom: 20,
                    height: 30,
                    width:30
                }}
                onPress={() => setShowPassword(!showPassword)}
            >
              <View style={{ justifyContent: 'center', marginRight: 5 }}>
                <Image
                  source={showPassword?icons.disable_eye:icons.eye}
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
        <Text 
          style={{ 
            color: COLORS.lightGreen, 
            ...FONTS.body3 
            }}
            onPress={() => navigation.navigate("Registration")}
        >
            Not registered yet? Click here to register!
        </Text>
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
                onPress={() => navigation.navigate("Home")}
            >
                <Text style={{color: COLORS.white, ...FONTS.h2}}>
                    Continue
                </Text>
            </TouchableOpacity>
        </View>
      )
  }

  function renderAreaCodesModal() {


    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{padding:SIZES.padding, flexDirection:"row"}}
          onPress={() => {
            setSelectedArea(item)
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
          <Text style={{...FONTS.body4 }}> {item.name}</Text>
        </TouchableOpacity>
      )
    }

    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
            
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
                onChangeText={(text) => searchFilterFunction(text)}
                onClear={(text) => searchFilterFunction('')}
                placeholder="Type Here..."
                value={search}
              />
                <FlatList 
                data={filteredArea}
                renderItem={renderItem}
                keyExtractor={(item) => item.code}
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
      {renderAreaCodesModal()}
    </KeyboardAvoidingView>
  )
}

export default Login
