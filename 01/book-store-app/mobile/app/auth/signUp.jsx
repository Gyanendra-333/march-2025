import { KeyboardAvoidingView, View, Platform, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from "../../assets/styles/login.styles.js"
import { Ionicons } from '@expo/vector-icons'
import COLORS from '../../constants/colors.js'
import { Link } from 'expo-router'
import { useAuthStore } from '../../store/authStore.js'

export default function signUp() {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const { user, isLoading, register, token } = useAuthStore();
    console.log("User info", user);
    console.log("token", token);

    const handleSignUp = async () => {
        const result = await register(username, email, password);
        if (!result.success) Alert.alert("Error", result.error);
        setUserName("");
        setEmail("");
        setPassword("");
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>

            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.header}>
                        <Text style={styles.title}>BookStoreApp📚</Text>
                        <Text style={styles.subtitle}>Share your favorite reads</Text>
                    </View>
                    <View style={styles.formContainer}>
                        {/* UserName  */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>User Name</Text>
                            <View style={styles.inputContainer}>
                                <Ionicons
                                    name="person-outline"
                                    size={20}
                                    color={COLORS.primary}
                                    style={styles.inputIcon}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder='enter user name'
                                    placeholderTextColor={COLORS.placeholderText}
                                    value={username}
                                    onChangeText={setUserName}
                                    keyboardType='email-address'
                                    autoCapitalize='none'
                                />
                            </View>
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
                            <TouchableOpacity style={styles.button} onPress={handleSignUp} disabled={isLoading}>
                                {isLoading ?
                                    (<ActivityIndicator color="#ff" />) :
                                    (<Text style={styles.buttonText}>SignUp</Text>)}
                            </TouchableOpacity>

                            {/* bottom text  */}
                            <View style={styles.footer}>
                                <Text style={styles.footerText}>Dont't have an account</Text>
                                <Link href="/auth" asChild>
                                    <TouchableOpacity>
                                        <Text style={styles.link}>Login</Text>
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
            </View >

        </KeyboardAvoidingView>
    )
}