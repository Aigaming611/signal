import Title from "../common/Title"
import { SafeAreaView, StatusBar, Text, View, Animated } from "react-native"
import { useEffect, useLayoutEffect } from "react"

function SplashScreen() {
    const translateY = new Animated.Value(0)
    const duration = 800
    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(translateY, {
                    toValue: 20,
                    duration: duration,
                    useNativeDriver: true
                }),
                Animated.timing(translateY, {
                    toValue: 0,
                    duration: duration,
                    useNativeDriver: true
                })
            ])
        ).start()
    }, [])
    return (
        <SafeAreaView
            style ={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'black'
            }}
        >
            <StatusBar barStyle='light-content' />
            <Animated.View style={{ transform:[{ translateY }] }}>
                <Title text='Signal' color='white' />
            </Animated.View>
        </SafeAreaView>
    )
}

export default SplashScreen