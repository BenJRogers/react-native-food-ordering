import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: `Details: ${id}` }} />

      <Text style={{ fontSize: 20 }}>Product Details for Screen ID: {id}</Text>
    </View>
  );
};

export default ProductDetailsScreen;
