// SignUpScreen.tsx
import React from "react";
import { useRouter } from "expo-router";
import AuthForm from "@components/AuthForm";

const SignUpScreen = () => {
  const router = useRouter();

  const handleSignUp = (email: string, password: string) => {
    console.log("Email: ", email);
    console.log("Password: ", password);
  };

  return (
    <AuthForm
      title="Sign Up"
      buttonText="Create Account"
      onSubmit={handleSignUp}
      onSwitchScreenText="Already have an account? Sign In"
      onSwitchScreen={() => router.push("/sign-in")}
    />
  );
};

export default SignUpScreen;
