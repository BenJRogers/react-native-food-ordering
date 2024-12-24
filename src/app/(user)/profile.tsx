import { View, Button } from "react-native";
import React from "react";
import { useRouter } from 'expo-router';
import { supabase } from "@/lib/supabase";

const ProfileScreen = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.replace('/sign-in');
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button onPress={handleSignOut} title="Sign out" />
    </View>
  );
};

export default ProfileScreen;
