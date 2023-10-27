import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProfileStackNavigation from './profile.navigation'
import { Ionicons } from '@expo/vector-icons'
import HomeStackNavigation from './home.navigation'

const BottomTabsNavigation = () => {
  const BottomTab = createBottomTabNavigator()

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 72,
          paddingTop: 12,
          backgroundColor: 'white',
        },
        tabBarLabelStyle: {
          paddingBottom: 12,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStackNavigation}
        options={{
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#CCC',
          tabBarLabel: 'Início',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" color={color} size={20} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileStackNavigation}
        options={{
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#CCC',
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" color={color} size={20} />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

export default BottomTabsNavigation
