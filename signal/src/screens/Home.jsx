import { Text, SafeAreaView, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import RequestsScreen from "./Requests";
import FriendsScreen from "./Friends";
import ProfileScreen from "./Profile";
import { Image } from "react-native-svg";


const Tab = createBottomTabNavigator()

function HomeScreen ({navigation}) {

    useLayoutEffect (() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return(
        <Tab.Navigator screenOptions={({ route, navigation }) =>({
            headerLeft: () =>(
                <View style={{marginLeft: 16}}>
                    <Image source={require('../assets/avatar.png')} style={{ width: 28, height: 28, borderRadius: 14, backgroundColor: '#e0e0e0' }} />
                </View>
            ),
            headerRight: () => (
                <TouchableOpacity>
                    <FontAwesomeIcon icon='magnifying-glass' size={28} color="#404040" style={{marginRight: 16}} />
                </TouchableOpacity>
            ),
            tabBarIcon: ({ focused, color, size }) => {
                const icons = {
                    Requests: 'bell',
                    Friends: 'inbox',
                    Profile: 'user'
                }
                const icon = icons[route.name]
                return (
                    <FontAwesomeIcon icon={icon} size={28} color={color} />
                )
            },
             tabBarActiveTintColor: '#202020',
             tabBarShowLabel: false
        })}
        >
          <Tab.Screen name="Requests" component={RequestsScreen} />
          <Tab.Screen name="Friends" component={FriendsScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default HomeScreen