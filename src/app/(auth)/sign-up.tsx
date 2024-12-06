// SignUpScreen.tsx
import { useRouter } from "expo-router";
import AuthForm from "@components/AuthForm";
import { supabase } from "@/lib/supabase";
import { Alert } from "react-native";

const SignUpScreen = () => {
  const router = useRouter();
  const handleSignUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) Alert.alert(error.message);
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
