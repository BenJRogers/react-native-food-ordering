import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Order } from "@/types";
import dayjs from "dayjs";

type OrderItemProps = {
  order: Order;
};

const timeOrderd = (orderedTime: string) => {
  return dayjs().diff(orderedTime, "hour");
};

const OrderList = ({ order }: OrderItemProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.idCopy}>Order #{order.id}</Text>
        <Text style={styles.timeCopy}>
          {timeOrderd(order.created_at)} hours ago
        </Text>
      </View>
      <Text style={styles.statusCopy}>{order.status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
  },
  idCopy: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 6,
  },
  timeCopy: {
    color: "grey",
    fontSize: 16,
  },

  statusCopy: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default OrderList;
