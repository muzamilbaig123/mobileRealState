import { Dimensions, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function Started({ navigation }: any) {
    const goHomeScreen = () => {
        navigation.navigate("UserScreen")
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground source={require('../../assets/images/startedbg.jpg')} resizeMode="stretch" style={styles.bgImg} >
                <View style={styles.btnImgContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/images/logo.png')}
                    />
                    <TouchableOpacity
                        onPress={goHomeScreen}
                        style={styles.btn}
                    >
                        <Text style={styles.btnText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    bgImg: {
        flex: 1,
        width: screenWidth,
        height: screenHeight,
    },
    btnImgContainer: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    logo: {
        width: 160,
        height: 160,
    },
    btn: {
        backgroundColor: "#2b80c1",
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 4,
    },
    btnText: {
        color: "#fff",
        fontSize: 20,
    }
})