import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from "../../assets/styles/login.styles.js"
import COLORS from '../../constants/colors.js';
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useAuthStore } from '../../store/authStore.js';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { login, isLoading } = useAuthStore();

    const handleLogin = async () => {
        const result = await login(email, password);
        if (!result.success) Alert.alert("Error", result.error);
        setEmail("");
        setPassword("");
    }


    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={styles.container}>
                <View style={styles.topIllustration}>
                    <Image
                        source={require("../../assets/images/i.jpg")}
                        style={styles.illustrationImage}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.card}>
                    <View style={styles.formContainer}>
                        {/* Email  */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Email</Text>
                            <View style={styles.inputContainer}>
                                <Ionicons
                                    name="mail-outline"
                                    size={20}
                                    color={COLORS.primary}
                                    style={styles.inputIcon}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder='enter your email'
                                    placeholderTextColor={COLORS.placeholderText}
                                    value={email}
                                    onChangeText={setEmail}
                                    keyboardType='email-address'
                                    autoCapitalize='none'
                                />
                            </View>
                        </View>
                        {/* password */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Password</Text>
                            <View style={styles.inputContainer}>
                                <Ionicons
                                    name="lock-closed-outline"
                                    size={20}
                                    color={COLORS.primary}
                                    style={styles.inputIcon}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder='******'
                                    placeholderTextColor={COLORS.placeholderText}
                                    value={password}
                                    onChangeText={setPassword}
                                    keyboardType='email-address'
                                    autoCapitalize='none'
                                    secureTextEntry={!showPassword}
                                />
                                <TouchableOpacity
                                    onPress={() => setShowPassword(!showPassword)}
                                    style={styles.eyeIcon}
                                >
                                    <Ionicons
                                        name={showPassword ? "eye-outline" : "eye-off-outline"}
                                        size={20}
                                        color={styles.primary}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* Button  */}
                        <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={isLoading}>
                            {isLoading ?
                                (<ActivityIndicator color="#fff" />) :
                                (<Text style={styles.buttonText}>Login</Text>)}
                        </TouchableOpacity>
                        {/* bottom text  */}
                        <View style={styles.footer}>
                            <Text style={styles.footerText}>Dont't have an account</Text>
                            <Link href="/auth/signUp" asChild>
                                <TouchableOpacity>
                                    <Text style={styles.link}>SignUp</Text>
                                </TouchableOpacity>
                            </Link>
                        </View>
                        <View style={styles.footer}>
                            <Link href="/" asChild>
                                <TouchableOpacity>
                                    <Text style={styles.link}>Back to Home</Text>
                                </TouchableOpacity>
                            </Link>
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}