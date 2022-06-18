import React, { Component, startTransition } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground
                    source={require('../assets/stars.gif')}
                    style={styles.backgroundImage}>
                </ImageBackground>
                <View style={styles.titleBar}>
                    <Image
                        source={require('../assets/main-icon.png')}
                        style={{ width: 150, height: 150 }}>
                    </Image>
                    <Text style={styles.titleText}>Stellar</Text>
                    <Text style={styles.titleText}>App</Text>
                </View>
                <TouchableOpacity style={styles.routeCard}>
                    <Text style={styles.routeText}>Spacecrafts</Text>
                    <Image
                        source={require('../assets/space_crafts.png')}
                        style={styles.routeImage}>
                    </Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.routeCard}>
                    <Text style={styles.routeText}>Star Map</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.routeCard}>
                    <Text style={styles.routeText}>Daily Pictures</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    routeCard: {
        flex: 0.12,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 100,
        backgroundColor: "white"
    },
    titleBar: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: '#D11583',
        justifyContent: "center",
        alignItems: "center"
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover"
    },
    routeImage: {
        position: "absolute",
        top: -20,
        right: -15,
        height: 80,
        width: 80,
        resizeMode: "contain"
    }

});
