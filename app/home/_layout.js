import { Tabs } from "expo-router";
import {FontAwesome} from '@expo/vector-icons'

export default () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#FF4C13'
            }}
        >
            <Tabs.Screen name="feed" options={{ tabBarIcon: ({color}) => <FontAwesome name="home" size={24} color={color} />, title: "Feed"}}  />
            <Tabs.Screen name="workout" options={{ tabBarIcon: ({color}) => <FontAwesome name="calendar" size={24} color={color} />, title: "Workouts"}}  />
            <Tabs.Screen name="profile" options={{ tabBarIcon: ({color}) => (<FontAwesome name="user" size={24} color={color} />), title: "Profile"}}  />
        </Tabs>
    )
}