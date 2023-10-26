import { NavigationContainer } from '@react-navigation/native'
import RootRoutes from './src/navigation'

export default function App() {
  return (
    <NavigationContainer>
      <RootRoutes />
    </NavigationContainer>
  )
}
