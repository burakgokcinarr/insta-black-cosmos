import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feed, AddFeed, Message, Profile } from '../';
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const screenOptionsTabBar= ({ route }) => ({
    
    tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Feed') {
            iconName = focused ? 'instagram-with-circle' : 'instagram-with-circle';
        } else if (route.name === 'AddFeed') {
            iconName = focused ? 'circle-with-plus' : 'circle-with-plus';
        } else if (route.name === 'Message') {
            iconName = focused ? 'message' : 'message';
        } else {
            iconName = focused ? 'user' : 'user';
        }

        return <Entypo name={iconName} size={size} color={color} />;
    },
    headerShown: false, 
    tabBarStyle: { 
        backgroundColor: '#020202',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        //position: 'absolute',
    },
    tabBarActiveTintColor: 'orange', 
    tabBarInactiveTintColor: 'grey', 
    tabBarShowLabel: false,
})

const sceneContainerStyle = {
    backgroundColor: '#020202'
}

export default function BottomTab() {
    return (
        <Tab.Navigator screenOptions={screenOptionsTabBar} sceneContainerStyle={sceneContainerStyle}>
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="AddFeed" component={AddFeed} />
            <Tab.Screen name="Message" component={Message} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}