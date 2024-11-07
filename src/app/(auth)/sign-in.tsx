// SignInScreen.tsx
import React from "react";
import { useRouter } from "expo-router";
import AuthForm from "@components/AuthForm";

const SignInScreen = () => {
  const router = useRouter();

  const handleSignIn = (email: string, password: string) => {
    console.log("Email: ", email);
    console.log("Password: ", password);
  };

  return (
    <AuthForm
      title="Sign In"
      buttonText="Sign In"
      onSubmit={handleSignIn}
      onSwitchScreenText="Don't have an account? Sign Up"
      onSwitchScreen={() => router.push("/sign-up")}
    />
  );
};

export default SignInScreen;
