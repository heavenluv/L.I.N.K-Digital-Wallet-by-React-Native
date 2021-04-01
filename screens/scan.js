import React, { useState, useEffect, useRef }  from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, Button, Modal } from 'react-native'
//import { Camera } from 'expo-camera'
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner'
import { COLORS, FONTS, SIZES, icons, images } from '../constants'


const Scan = ({navigation}) => {
  const dimensions = useRef(Dimensions.get('window'))
  const screenWidth = dimensions.current.width
  const height = Math.round((screenWidth * 16) / 9)

  

  /*
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  */
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
      setScanned(false);
    })();
  }, []);
  const handleBarCodeScanned = ({ type, data }) => {
    console.log(data);
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    setTimeout(() =>{
      setScanned(false);
    }, 5000);
  };


  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  function renderHeader() {
    return (
      <View 
        style={{ 
          flexDirection: 'row', 
          marginTop: SIZES.padding * 5,
          paddingHorizontal: SIZES.padding * 2 
        }}
      >
        <TouchableOpacity
          style={{
            width: 40,
            alignItems: "center",
            justifyContent: "center"
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Image 
            source={icons.close}
            style={{
              height: 30,
              width: 30,
              tintColor: COLORS.white
            }}
          />

        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
          <Text style={{ color:COLORS.white, ...FONTS.body3, fontWeight: "bold" }}>Scan for Payment</Text>
        </View>
        <TouchableOpacity
          style={{
              height: 45,
              width: 45,
              backgroundColor: COLORS.green,
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center'
          }}
          onPress={() => console.log("Info")}
      >
          <Image
              source={icons.info}
              style={{
                  height: 25,
                  width: 25,
                  tintColor: COLORS.white
              }}
          />
      </TouchableOpacity>
      </View>
    )
  } 

  function renderScanFocus() {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Image
                source={images.focus}
                resizeMode="contain"
                style={{
                    marginTop: "-50%",
                    width: 250,
                    height: 250
                }}
            />
        </View>
    )
  }

  function renderPaymentMethod() {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 220,
          padding: SIZES.padding * 3,
          borderTopLeftRadius: SIZES.radius,
          borderTopRightRadius: SIZES.radius,
          backgroundColor: COLORS.white
        }}
      >
        <Text style={{ ...FONTS.h4, fontWeight: "bold" }}>Another payment methods</Text>
          <View
              style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  marginTop: SIZES.padding * 2
              }}
          >
            <TouchableOpacity
                style={{
                  flex:1,
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
                onPress={() => navigation.navigate("TransferPhone")}
            >
              <View
                  style={{
                      width: 40,
                      height: 40,
                      backgroundColor: COLORS.lightpurple,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 10
                  }}
              >
                <Image
                    source={icons.phone}
                    resizeMode="cover"
                    style={{
                      height: 25,
                      width: 25,
                      tintColor: COLORS.purple
                    }}
                />
              </View>
              <Text style={{ marginLeft: SIZES.padding, ...FONTS.body4 }}>Phone Number</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                  flex: 0.7,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: SIZES.padding * 2
                }}
                onPress={() => navigation.navigate("Payment")}
            >
              <View
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: COLORS.lightGreen,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10
                  }}
              >
                  <Image
                    source={icons.barcode}
                    resizeMode="cover"
                    style={{
                      height: 25,
                      width: 25,
                      tintColor: COLORS.primary
                    }}
                  />
              </View>
              <Text style={{ marginLeft: SIZES.padding, ...FONTS.body4 }}>Barcode</Text>
            </TouchableOpacity>
          </View>
      </View>
    )
  }


  return (
    <View style={{ flex: 1, backgroundColor: COLORS.transparent}}>
      {/*
      <Camera 
        style={{
          flex: 1, 
          height: height, 
          width: "100%"
        }} 
        ratio = '16:9'
        type={type}
        barCodeScannerSettings={{
          barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
        }}
        
      >
        {renderHeader()}
        {renderScanFocus()}
        {renderPaymentMethod()}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Image 
              source={icons.camera}
              style={{
                marginTop: 5,
                width: 30,
                height: 30,
                tintColor: COLORS.lightGreen
              }}
            />
          </TouchableOpacity>
        </View>
        
      </Camera>
    */}
    <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{
          flex: 1, 
          height: height, 
          width: "100%"
        }} 
        ratio = '16:9'
    >
      {renderHeader()}
      {renderScanFocus()}
      {renderPaymentMethod()}
    </BarCodeScanner>
    

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginBottom: 1000,
    marginRight:10

  },
  button: {
    flex: 0.1,
    width: 40,
    height: 40,
    borderRadius: 25,
    alignItems: "center",    
    backgroundColor: COLORS.secondary,
  },
  
})


export default Scan;
