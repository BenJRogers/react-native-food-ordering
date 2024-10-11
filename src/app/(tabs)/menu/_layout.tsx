import { Stack } from "expo-router";

export default function menuStack() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Menu" }} />
    </Stack>
  );
}
