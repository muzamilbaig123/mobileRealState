// import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// export default function UserScreen({ navigation }: any) {

//     const goLoginScreen = () => {
//         navigation.navigate('Login')
//     }


//     return (
//         <>
//             <SafeAreaView>
//                 <View>
//                     <ImageBackground source={require('../../assets/images/home.webp')} style={styles.bgImage} resizeMode="cover">
//                         <View style={styles.homeHeader}>
//                             <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
//                             <TouchableOpacity onPress={goLoginScreen}>
//                                 <Text style={styles.btn}>Login</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </ImageBackground>
//                 </View>
//                 <View>
//                         <View style={styles.rowshori}>
//                             <Image style={styles.rowshoriImg} source={require('../../assets/images/alrehman.png')} />
//                             <Text style={styles.rowshoriTxt}>We are working diligently on this project to provide the best user experience. Our positive reviews reflect our dedication and performance. Al-Rehman.</Text>
//                         </View>

//                 </View>
//             </SafeAreaView>
//         </>
//     )
// }

// const styles = StyleSheet.create({
//     bgImage: {
//         width: "100%",
//         height: 220,
//     },
//     homeHeader: {
//         flex: 1,
//         flexDirection: "row",
//         justifyContent: "space-between",
//         paddingHorizontal: 16,
//         paddingVertical: 35
//     },
//     logo: {
//         width: 60,
//         height: 60,
//     },
//     btn: {
//         backgroundColor: "#2b80c1",
//         color: "#fff",
//         paddingVertical: 8,
//         paddingHorizontal: 22,
//         borderWidth: 2,
//         borderColor: "#fff",
//         fontSize: 18,
//         borderRadius: 8,
//     },
//     rowshori: {
//         flex: 1,
//         flexDirection: "row",
//         justifyContent: "center",
//         alignItems: "center",
//         paddingHorizontal: 10,
//         backgroundColor: "red"
//     },
//     rowshoriImg: {
//         flex: 1,
//         width: "30%",
//         height: 100,
//         borderRadius: 8,
//     },
//     rowshoriTxt: {
//         flex: 1,
//         width: "70%",
//         paddingHorizontal: 10

//     }
// })


import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Footer from "../footer/Footer";

export default function UserScreen({ navigation }: any) {
    const goLoginScreen = () => {
        navigation.navigate('Login')
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground
                source={require('../../assets/images/home.webp')}
                style={styles.bgImage}
                resizeMode="cover"
            >
                <View style={styles.homeHeader}>
                    <Image
                        source={require('../../assets/images/logo.png')}
                        style={styles.logo}
                    />
                    <TouchableOpacity
                        onPress={goLoginScreen}
                        style={styles.btn}
                    >
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <ScrollView>

            <View>
                <Text style={styles.devHead}>Current Developments</Text>
            </View>

            <View style={styles.contentContainer}>
                <View style={styles.rowshori}>
                    <Image
                        style={styles.rowshoriImg}
                        source={require('../../assets/images/alrehman.png')}
                    />
                    <Text style={styles.rowshoriTxt}>
                        We are working diligently on this project to provide the best user experience.
                        Our positive reviews reflect our dedication and performance. Al-Rehman.
                    </Text>
                </View>
                {/* 2nd */}
                <View style={styles.rowshori}>
                    <Image
                        style={styles.rowshoriImg}
                        source={require('../../assets/images/gfs.png')}
                    />
                    <Text style={styles.rowshoriTxt}>
                        We are working diligently on this project to provide the best user experience.
                        Our positive reviews reflect our dedication and performance. GFS Builders.
                    </Text>
                </View>
                {/* 3rd */}
                <View style={styles.rowshori}>
                    <Image
                        style={styles.rowshoriImg}
                        source={require('../../assets/images/kinggroup.png')}
                    />
                    <Text style={styles.rowshoriTxt}>
                        We are working diligently on this project to provide the best user experience.
                        Our positive reviews reflect our dedication and performance. KINGSGROUPS Builders.
                    </Text>
                </View>
                {/* 4th */}
                <View style={styles.rowshori}>
                    <Image
                        style={styles.rowshoriImg}
                        source={require('../../assets/images/shanzil.png')}
                    />
                    <Text style={styles.rowshoriTxt}>
                        We are working diligently on this project to provide the best user experience.
                        Our positive reviews reflect our dedication and performance. SHANZIL Builders.
                    </Text>
                </View>

            </View>

            <Footer/>
            </ScrollView>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    bgImage: {
        height: 220,
    },
    homeHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop: 35,
        paddingBottom: 20,
    },
    logo: {
        width: 60,
        height: 60,
    },
    btn: {
        backgroundColor: "#2b80c1",
        paddingVertical: 8,
        paddingHorizontal: 22,
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 8,
    },
    btnText: {
        color: "#fff",
        fontSize: 18,
    },
    contentContainer: {
        flex: 1,
        padding: 16,
    },
    devHead: {
        fontSize: 28,
        paddingLeft: 20,
        marginTop: 40,
        fontWeight: 700,
        borderBottomColor: "#195F94",
        borderBottomWidth: 2,
        width: 320,
        marginLeft: 20,
    },
    rowshori: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        marginVertical: 10,
    },
    rowshoriImg: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    rowshoriTxt: {
        flex: 1,
        fontSize: 16,
        lineHeight: 22,
    }
})