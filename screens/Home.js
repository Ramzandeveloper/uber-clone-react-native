import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
//import SafeAreaView from "react-native-safe-area-view";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItem from "../components/home/RestaurantItem";
import SearchBar from "../components/home/SearchBar";
import { localRestauarnt } from "../components/home/RestaurantItem";
import BottomTabs from "../components/home/BottomTabs";
import { Divider } from "react-native-elements/dist/divider/Divider";
const YELP_API_KEY =
  "SClfVG6Uwn8oh0X75m35CInTSGGetISh_zqvxhfkmLNhG6b1dCX9byAO0_j2DntISL8iGVEZWP7zvFfU4GdH3_5GzBWXGJuNrllbcC6ECWAKvasi9nSanUi8wgd-YXYx";
export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestauarnt);
  const [city, setCity] = useState("LosAngeles");
  const [activeTab, setActiveTab] = useState("Delivery");
  const getRestaurantFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((busniess) =>
            busniess.transactions.includes(activeTab.toLowerCase())
          )
        )
      )
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getRestaurantFromYelp();
  }, [city, activeTab]);
  return (
    <SafeAreaView style={{ paddingTop: 25, backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs setActiveTab={setActiveTab} activeTab={activeTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
