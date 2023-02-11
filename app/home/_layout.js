import { Tabs } from "expo-router";
import {FontAwesome} from '@expo/vector-icons'

export default () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#FF4C13',
                tabBarStyle: {
                    backgroundColor: '#090B0E',
                    borderTopColor: '#090B0E',
                }
            }}
        >
            <Tabs.Screen name="feed" options={{ tabBarIcon: ({color}) => <FontAwesome name="home" size={24} color={color} />, headerShown: false}}  />
            <Tabs.Screen name="workout" options={{ tabBarIcon: ({color}) => <FontAwesome name="calendar" size={24} color={color} />, headerShown: false}}  />
            <Tabs.Screen name="profile" options={{ tabBarIcon: ({color}) => (<FontAwesome name="user" size={24} color={color} />), headerShown: false}}  />
        </Tabs>
    )
}