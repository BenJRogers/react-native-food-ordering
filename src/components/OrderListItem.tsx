import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link, useSegments } from "expo-router";
import { Order } from "@/types";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";

type OrderItemProps = {
  order: Order;
};

dayjs.extend(relativeTime);

const OrderList = ({ order }: OrderItemProps) => {
  const segments = useSegments();

  return (
    <Link href={`/${segments[0]}/orders/${order.id}`} asChild>
      <Pressable style={styles.container}>
        <View>
          <Text style={styles.idCopy}>Order #{order.id}</Text>
          <Text style={styles.timeCopy}>
            {dayjs(order.created_at).fromNow()}
          </Text>
        </View>
        <Text style={styles.statusCopy}>{order.status}</Text>
      </Pressable>
    </Link>
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
    fontSize: 14,
    marginBottom: 6,
  },
  timeCopy: {
    color: "grey",
    fontSize: 14,
  },

  statusCopy: {
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default OrderList;
