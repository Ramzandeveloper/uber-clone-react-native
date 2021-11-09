import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestauarnt = [
  {
    name: "Pakistan Food",
    image_url:
      "https://s3-media4.fl.yelpcdn.com/bphoto/nXO8M-d-XTamNmc0BpXWtA/o.jpg",
    categories: ["Cafe", "Coffee"],
    price: "$$",
    review: 1244,
    rating: 3.7,
  },
  {
    name: "Peshawar Food",
    image_url:
      "https://s3-media4.fl.yelpcdn.com/bphoto/nXO8M-d-XTamNmc0BpXWtA/o.jpg",
    categories: ["Cafe", "Coffee"],
    price: "$$",
    review: 1244,
    rating: 4.7,
  },
  {
    name: "Punjab Food",
    image_url:
      "https://s3-media4.fl.yelpcdn.com/bphoto/nXO8M-d-XTamNmc0BpXWtA/o.jpg",
    categories: ["Cafe", "Coffee"],
    price: "$$",
    review: 1244,
    rating: 4.7,
  },
  {
    name: "Lahore Food",
    image_url:
      "https://s3-media4.fl.yelpcdn.com/bphoto/nXO8M-d-XTamNmc0BpXWtA/o.jpg",
    categories: ["Cafe", "Coffee"],
    price: "$$",
    review: 1244,
    rating: 3.7,
  },
];
export default function RestaurantItem({ navigation, ...props }) {
  return (
    <>
      {props.restaurantData.map((items, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          onPress={() =>
            navigation.navigate("RestaurantDetail", {
              name: items.name,
              image: items.image_url,
              categories: items.categories,
              price: items.price,
              reviews: items.review_count,
              rating: items.rating,
            })
          }
        >
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            <RestaurantImage image={items.image_url} />
            <RestaurantInfo name={items.name} rating={items.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}
const RestaurantImage = (props) => (
  <>
    <Image
      source={{ uri: props.image }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);
const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "grey" }}>30-45 . min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        borderRadius: 15,
        justifyContent: "center",
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
