import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { PizzaSize } from "@/types";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import products from "@assets/data/products";
import { defaultPizzaImage } from "@/components/ProductListItem";
import Button from "@components/Button";
import { useCart } from "@/providers/CartProvider";
import { router } from "expo-router";

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const { addItem } = useCart();

  const [selectedSize, setSelectedSize] = useState<PizzaSize>("M");

  const product = products.find((product) => product.id.toString() === id);

  const addToCart = () => {
    if (!product) return;
    addItem(product, selectedSize);
    router.push("/cart");
  };

  if (!product) {
    return <Text> Sorry product not found</Text>;
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "white", flex: 1, padding: 10 },
  textContainer: {
    alignItems: "center",
    paddingTop: 15,
  },
  image: { width: "100%", aspectRatio: 1 },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: { fontSize: 18, fontWeight: "bold" },
});

export default ProductDetailsScreen;
