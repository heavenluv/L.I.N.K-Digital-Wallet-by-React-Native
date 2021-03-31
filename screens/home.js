import React, {useRef} from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TouchableOpacityBase,
  Dimensions
} from 'react-native'
import { useState } from "react/cjs/react.development";
import { COLORS, SIZES, FONTS, icons, images } from '../constants'

const Home = () => {
  const dimensions = useRef(Dimensions.get('window'));
  const screenHeight = dimensions.current.height;
  const screenWidth = dimensions.current.width;


  const featuresData = [
    {
        id: 1,
        icon: icons.reload,
        color: COLORS.purple,
        backgroundColor: COLORS.lightpurple,
        description: "Top Up"
    },
    {
        id: 2,
        icon: icons.send,
        color: COLORS.yellow,
        backgroundColor: COLORS.lightyellow,
        description: "Transfer"
    },
    {
        id: 3,
        icon: icons.internet,
        color: COLORS.primary,
        backgroundColor: COLORS.lightGreen,
        description: "Internet"
    },
    {
        id: 4,
        icon: icons.wallet,
        color: COLORS.red,
        backgroundColor: COLORS.lightRed,
        description: "Wallet"
    },
    {
        id: 5,
        icon: icons.bill,
        color: COLORS.yellow,
        backgroundColor: COLORS.lightyellow,
        description: "Bill"
    },
    {
        id: 6,
        icon: icons.game,
        color: COLORS.primary,
        backgroundColor: COLORS.lightGreen,
        description: "Games"
    },
    {
        id: 7,
        icon: icons.phone,
        color: COLORS.red,
        backgroundColor: COLORS.lightRed,
        description: "Mobile Prepaid"
    },
    {
        id: 8,
        icon: icons.more,
        color: COLORS.purple,
        backgroundColor: COLORS.lightpurple,
        description: "More"
    },
  ];
  const specialPromoData = [
    {
      id: 1,
      img: images.promoBanner,
      title: 'Bonus Cashback1',
      description: "Don't miss it. Grab it now!"
    },
    {
      id: 2,
      img: images.promoBanner,
      title: 'Bonus Cashback2',
      description: "Don't miss it. Grab it now!"
    },
    {
      id: 3,
      img: images.promoBanner,
      title: 'Bonus Cashback3',
      description: "Don't miss it. Grab it now!"
    },
    {
      id: 4,
      img: images.promoBanner,
      title: 'Bonus Cashback4',
      description: "Don't miss it. Grab it now!"
    }
  ]

  const BannerData = [
  {
    id: 1,
    img: images.banner,
  },
  {
    id: 2,
    img: images.banner,
  },
  {
    id: 3,
    img: images.banner,
  },
  {
    id: 4,
    img: images.banner,
  }
]


  const [features, setFeatures] = useState(featuresData);
  const [specialPromo, setSpecialPromo] = useState(specialPromoData);
  const [banners, setBanners] = useState(BannerData);

  function renderHeader() {
    return (
      <View style={{ flexDirection: 'row', marginVertical: SIZES.padding * 2 }}>
        <View style={{ flex: 1}}>
          <Text style={{ ...FONTS.h1, fontWeight: "bold" }}>Hello!</Text>
          <Text style={{ ...FONTS.body2, color: COLORS.gray }}>
            Jun
          </Text>
        </View>
        <View style={{ alignItems: 'center', justifyContent: "center" }}>
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              justifyContent: 'center',
              alignItems: "center",
              backgroundColor: COLORS.lightGray
            }}
          >
            <Image 
              source={icons.bell}
              style={{
                width: 30,
                height: 30,
                tintColor: COLORS.secondary
              }}
            />
            <View
              style={{
                position: 'absolute',
                top: -5,
                right: -5,
                height: 8,
                width: 8,
                backgroundColor: COLORS.red,
                borderRadius: 5
              }}
            >

            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  function renderBanner() {
    return (
      <View
        style={{
          height: screenHeight*0.22,
          borderRadius:20
        }}
      >
        <Image 
          source={images.banner}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 20
          }}
        />
      </View>
    )
  }

  function renderBanners() {
    
    const renderItem = ({item}) => (
      <TouchableOpacity
        style={{
          marginBottom: SIZES.padding, 
          height: screenHeight*0.24, 
          width: screenWidth - SIZES.padding*6, 
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.transparent}}
        onPress={() => console.log(screenWidth)}
      >
          <Image 
            source={images.banner}
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 20
            }}
          />
      </TouchableOpacity>
    )

    return (
      <FlatList 
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={true}
        numColumns={1}
        data={banners}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        style={{ marginTop: SIZES.padding }}
      />
    )
  }

  function renderFeatures() {
    
    const Header = () => (
      <View style={{marginBottom: SIZES.padding * 2}}>
        <Text style={{...FONTS.h3, fontWeight: "bold"}}>Features</Text>
      </View>
    )
    
    const renderItem = ({item}) => (
      <TouchableOpacity
        style={{marginBottom: SIZES.padding * 2, width: (screenWidth)/8, alignItems: "center"}}
        onPress={() => console.log(screenWidth/8)}
      >
        <View
          style={{
            height: screenWidth/8,
            width: screenWidth/8,
            marginBottom: 5,
            borderRadius: 20,
            backgroundColor: item.backgroundColor,
            alignItems:"center",
            justifyContent: "center"
          }}
        >
          <Image 
            source={item.icon}
            resizeMode="contain"
            style={{
              height: screenWidth / 13,
              width: screenWidth / 13,
              tintColor: item.color
            }}
          />
        </View>
        <Text style={{ textAlign: "center", flexWrap: "wrap", ...FONTS.body4 }}>{item.description}</Text>
      </TouchableOpacity>
    )

    return (
      <FlatList 
        ListHeaderComponent = { Header}
        data={features}
        numColumns={4}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        style={{ marginTop: SIZES.padding * 2 }}
      />
    )
  }

  function renderPromos(){

    const HeaderComponent = () => (
      <View>
        {renderHeader()}
        {renderBanners()}
        {renderFeatures()}
        {renderPromoHeader()}
      </View>
    )

    const renderPromoHeader = () => (
      <View
        style={{
          flexDirection: "row",
          marginBottom: SIZES.padding * 2
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ ...FONTS.h3, fontWeight: "bold"}}>Special Promos</Text>
        </View>
        <TouchableOpacity
          onPress={() => console.log("View the Promos")}
        >
          <Text style={{color: COLORS.gray, ...FONTS.body4}}>View All</Text>
      </TouchableOpacity>
      </View>
      
    )

    const renderItem = ({item}) => (
      <TouchableOpacity
        style={{
          marginVertical: SIZES.base,
          width: screenWidth/2.5
        }}
        onPress={() => console.log(item.title)}
      >
        <View
          style={{
            height: screenHeight/10,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: COLORS.primary
          }}
        >
            <Image
              source={images.promoBanner}
              resizeMode="cover"
              style={{
                  width: "100%",
                  height: "100%",
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20
                }}
            />
        </View>
        <View
          style={{
              padding: SIZES.padding,
              backgroundColor: COLORS.lightGray,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20
          }}
        >
          <Text style={{ ...FONTS.h4, fontWeight: "bold" }}>{item.title}</Text>
          <Text style={{ ...FONTS.body4 }}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    )
          

    return (
      <FlatList
        ListHeaderComponent={HeaderComponent}
        contentContainerStyle={{ paddingHorizontal: SIZES.padding * 3 }}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        data={specialPromo}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <View style={{marginBottom: 80}}></View>
        }
      >

      </FlatList>
    )
  }

  return (
    <SafeAreaView style={{ flex:1, backgroundColor:COLORS.white }}>
      {renderPromos()}
    </SafeAreaView>
  );
};

export default Home;
