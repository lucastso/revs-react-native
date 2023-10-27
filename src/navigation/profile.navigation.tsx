import { createStackNavigator } from '@react-navigation/stack'
import Profile from '../screens/profile'

const Stack = createStackNavigator()

const ProfileStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeProfile"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeProfile" component={Profile} />
    </Stack.Navigator>
  )
}

export default ProfileStackNavigation
