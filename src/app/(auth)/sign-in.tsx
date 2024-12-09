// SignInScreen.tsx
import React from "react";
import { useRouter } from "expo-router";
import AuthForm from "@components/AuthForm";
import { supabase } from "@/lib/supabase";
import { Alert } from "react-native";


const SignInScreen = () => {
  const router = useRouter();
  const handleSignIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) Alert.alert(error.message);
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
