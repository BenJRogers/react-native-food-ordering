import { Alert } from "react-native";
import { supabase } from "./supabase";
import {
  initPaymentSheet,
  presentPaymentSheet,
} from "@stripe/stripe-react-native";

const fetchPaymentSheetParams = async (amount: number) => {
  const { data, error } = await supabase.functions.invoke("payment-sheet", {
    body: { amount },
  });

  if (data) {
    return data;
  }
  Alert.alert("Error", error.message);
  return {};
};

export const initialisePaymentSheet = async (amount: number) => {
  console.log("initialising payment sheet for: ", amount);
  const { paymentIntent, publishableKey } =
    await fetchPaymentSheetParams(amount);

  if (!paymentIntent || !publishableKey) return;

  await initPaymentSheet({
    merchantDisplayName: "Food Delivery",
    paymentIntentClientSecret: paymentIntent,
    defaultBillingDetails: {
      name: "Ben Rogers",
    },
  });
};

export const openPaymentSheet = async () => {
  const { error } = await presentPaymentSheet();

  if (error) {
    Alert.alert("Error", error.message);
    return false;
  }
  return true;
};
