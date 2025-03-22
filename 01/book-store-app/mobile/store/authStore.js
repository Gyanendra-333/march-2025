import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage"


export const useAuthStore = create((set) => ({
    user: null,
    token: null,
    isLoading: false,

    register: async (userName, email, password) => {
        set({ isLoading: true });

        try {
            const response = await fetch("http://localhost:3000/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userName,
                    email,
                    password
                }),
            })

            const data = await response.json();
            if (!response.ok) throw new Error(data?.message || "register error");

            await AsyncStorage.setItem("user", JSON.stringify(data.user));
            await AsyncStorage.setItem("token", data.token);

            set({ token: data.token, user: data.user, isLoading: false })

            return { success: true }

        } catch (error) {
            set({ isLoading: false })
            return { success: false, error: error.message }
        }
    }

}))