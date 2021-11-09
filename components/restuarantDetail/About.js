import React from "react";
import { View, Text, Image } from "react-native";
// const yelpRestaurantInfo = {
//   name: "Farmhouse Kitchen Thai Cuisine",
//   image: "https://s3-media4.fl.yelpcdn.com/bphoto/nXO8M-d-XTamNmc0BpXWtA/o.jpg",
//   price: "$$",
//   reviews: "1500",
//   rating: 4.5,
//   categories: [{ title: "Thai" }, { title: "Vegetarian" }],
// };
// const { name, image, price, reviews, rating, categories } = yelpRestaurantInfo;
// const formateCategory = categories.map((category) => category.title).join(".");
// const description = `${formateCategory} ${
//   price ? "." + price : ""
// } . 🎟️ . ${rating} ⭐ (${reviews})  `;
// const image =
//   "https://s3-media4.fl.yelpcdn.com/bphoto/nXO8M-d-XTamNmc0BpXWtA/o.jpg";
// const title = "Restaurant Name";
// const description = "Pakistan - Food - $$";
export default function About({ route }) {
  const { name, image, price, reviews, rating, categories } = route.params;
  const formateCategory = categories
    .map((category) => category.title)
    .join(".");
  const description = `${formateCategory} ${
    price ? "." + price : ""
  } . 🎟️ . ${rating} ⭐ (${reviews})  `;
  // console.log("data", route.params);
  return (
    <View>
      <RestaurantImage image={image} />
      <RestauarantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}
const RestaurantImage = ({ image }) => (
  <Image source={{ uri: image }} style={{ width: "100%", height: 180 }} />
);
const RestauarantName = ({ name }) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "bold",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {name}
  </Text>
);
const RestaurantDescription = ({ description }) => (
  <Text
    style={{
      fontSize: 15.5,
      marginHorizontal: 15,
      marginTop: 10,
      fontWeight: "400",
    }}
  >
    {description}
  </Text>
);
