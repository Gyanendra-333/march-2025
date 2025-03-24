import { View, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from "expo-router";
import styles from "../../assets/styles/create.styles"

export default function create() {
    const [title, setTitle] = useState("");
    const [caption, setCaption] = useState("");
    const [rating, setRating] = useState(3);
    const [image, setImage] = useState(null);
    const [imageBase64, setImageBase64] = useState(null);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const pickImage = async () => { };

    const handleSubmit = async () => { };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView contentContainerStyle={styles.container} style={styles.scrollViewStyle}>
                <View style={styles.card}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Add Book Recommendation</Text>
                        <Text style={styles.subtitle}>Share your favourite books with others</Text>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}