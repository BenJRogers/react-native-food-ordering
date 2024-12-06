import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Button from "@components/Button";
import { AuthForm as AuthFormProps } from "@/types";

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  buttonText,
  onSubmit,
  onSwitchScreenText,
  onSwitchScreen,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      try {
        setLoading(true);
        await onSubmit(email, password);
        setEmail("");
        setPassword("");
      } catch (error) {
        console.error("Submission failed:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TextInput
        style={[styles.input, emailError ? styles.inputError : null]}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <TextInput
        style={[styles.input, passwordError ? styles.inputError : null]}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {passwordError ? (
        <Text style={styles.errorText}>{passwordError}</Text>
      ) : null}

      <Button
        text={loading ? `${buttonText}...` : buttonText}
        onPress={handleSubmit}
        disabled={loading}
      />

      <Text style={styles.switchText} onPress={onSwitchScreen}>
        {onSwitchScreenText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "white",
    padding: 8,
    marginBottom: 12,
    borderRadius: 4,
  },
  inputError: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 8,
    marginLeft: 4,
  },
  switchText: {
    marginTop: 16,
    textAlign: "center",
    color: "#0066cc",
  },
});

export default AuthForm;
