import React from 'react'
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../constants/colors"


export default function Tablayout() {
    return (
        <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: COLORS.primary }}>
            <Tabs.Screen name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (<Ionicons name="home-outline" size={size} color={color} />)
                }} />
            <Tabs.Screen name="create" options={{ title: "Create", tabBarIcon: ({ color, size }) => (<Ionicons name="add-circle-outline" size={size} color={color} />) }} />
            <Tabs.Screen name="profile" options={{ title: "Profile", tabBarIcon: ({ color, size }) => (<Ionicons name="person-outline" size={size} color={color} />) }} />4
        </Tabs>
    )
}