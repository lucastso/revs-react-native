import { createStackNavigator } from '@react-navigation/stack'
import Profile from '../screens/profile'
import Home from '../screens/home'

const Stack = createStackNavigator()

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeInicio"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeInicio" component={Home} />
    </Stack.Navigator>
  )
}

export default HomeStackNavigation
