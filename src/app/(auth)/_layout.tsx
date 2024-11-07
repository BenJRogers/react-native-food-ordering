import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="sign-in"
        options={{
          headerTitle: "Sign In",
        }}
      />
    </Stack>
  );
}
