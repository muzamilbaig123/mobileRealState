import React, { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    Alert,
} from "react-native";
// import apis from "../../utils/apis";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }: any) {
    const [username, setUserName] = useState("");
    const [pass, setPass] = useState("");
    const [loading, setLoading] = useState(false);


    const loginUser = `http://3.109.176.31/SeePrime/APIS/SELECT.php?select_id=select_users_by_name_and_pass&admin_portal=N&username=${username}&password=${pass}`

    const handleLogin = async () => {
        if (!username || !pass) {
            Alert.alert("Error", "Please enter both username and password.");
            return;
        }
        setLoading(true);

        try {
            const res = await axios.get(loginUser, {
                params: {
                    username: username, // Use `username` if the API expects it
                    password: pass, // Use `password` if the API expects it
                },
            });

            // console.log("API Response:", res.data); 

            if (res.data.state === "Success") {

                await AsyncStorage.setItem('userData' , JSON.stringify({
                    user_id: res.data.user_id,
                    user_name: res.data.user_name,
                    subscription_state: res.data.subscription_state
                }))

                navigation.navigate("Dashboard");
                setUserName("");
                setPass("");
            } else {
                throw new Error(res.data.message || "Invalid username or password.");

            }
        } catch (e: any) {
            if (axios.isAxiosError(e)) {
                console.log("API Error Response:", e.response?.data); // Log the error response
                Alert.alert("Error", e.response?.data?.message || "Login Failed. Please check your credentials.");
            } else {
                Alert.alert("Error", e.message || "Unexpected error occurred. Please try again later.");
            }
        } finally {
            setLoading(false);
        }
    };



    return (
        <>
            <SafeAreaView style={styles.topbar}>
                <Text style={styles.topbarText}>Welcome To RealCoreSolution</Text>
            </SafeAreaView>

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.loginContaier}>
                        <View style={styles.loginTxtContainer}>
                            <Text style={styles.title}>Login</Text>
                            <Text style={styles.subTitle}>Please Sign in to continue.</Text>
                        </View>
                        <View>
                            <TextInput
                                value={username}
                                onChangeText={setUserName}
                                placeholder="Enter Username"
                                keyboardType="default"
                                style={styles.inputField}
                                autoCapitalize="none"
                            />
                            <TextInput
                                value={pass}
                                onChangeText={setPass}
                                placeholder="Enter Password"
                                secureTextEntry
                                style={styles.inputField}
                                autoCapitalize="none"
                            />
                        </View>

                        <View style={styles.btnContainer}>
                            <TouchableOpacity onPress={handleLogin} style={styles.btn} disabled={loading}>
                                <Text style={styles.btnTxt}>{loading ? "Logging in..." : "Login"}</Text>
                            </TouchableOpacity>
        
                        {/* {loading ? null :
                            <TouchableOpacity onPressIn={handleLogin} style={styles.btn} disabled={loading}>
                                <Text style={styles.btnTxt}>Login</Text>
                            </TouchableOpacity>
                        } */}
                        
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

            <View style={styles.foot}>
                <Text style={styles.footTxt}>Copyright © 2024 RCS llc All rights reserved</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    topbar: {
        backgroundColor: "#195F94",
        paddingVertical: 22,
    },
    topbarText: {
        color: "white",
        fontSize: 22,
        textAlign: "center",
        fontWeight: "800",
    },
    foot: {
        backgroundColor: "#186DA3",
        paddingVertical: 18,
        borderTopWidth: 1,
        borderBlockColor: "#195F94",
    },
    footTxt: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
        fontWeight: "700",
    },
    container: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
    },
    loginContaier: {
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        marginHorizontal: "5%",
    },
    inputField: {
        borderColor: "#afafaf",
        borderWidth: 2,
        fontSize: 20,
        width: 300,
        borderRadius: 8,
        margin: 12,
        paddingHorizontal: 12,
    },
    loginTxtContainer: {
        width: 300,
        margin: 12,
    },
    title: {
        fontSize: 46,
        fontWeight: "700",
        textAlign: "left",
        color: "#186DA3",
    },
    subTitle: {
        fontSize: 16,
        color: "#696767",
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        width: 300,
    },
    btn: {
        backgroundColor: "#186DA3",
        paddingVertical: 16,
        paddingHorizontal: 40,
        borderRadius: 50,
    },
    btnTxt: {
        fontSize: 18,
        color: "#fff",
    },
});