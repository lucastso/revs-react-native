import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

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
      {/* <BottomTab.Screen
          name="Relatorio"
          component={RelatorioStackNavigation}
          options={{
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: '#CCC',
            tabBarLabel: 'Relatorio',
            tabBarIcon: ({ color }) => (
              <Ionicons name="clipboard-outline" color={color} size={20} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Carteiras"
          component={CarteiraStackNavigation}
          options={{
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: '#CCC',
            tabBarLabel: 'Carteiras',
            tabBarIcon: ({ color }) => (
              <Ionicons name="wallet-outline" color={color} size={20} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Categorias"
          component={CategoriaStackNavigation}
          options={{
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: '#CCC',
            tabBarLabel: 'Categorias',
            tabBarIcon: ({ color }) => (
              <Ionicons name="create-outline" color={color} size={20} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Perfil"
          component={PerfilStackNavigation}
          options={{
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: '#CCC',
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color }) => (
              <Ionicons name="person-outline" color={color} size={20} />
            ),
          }}
        /> */}
    </BottomTab.Navigator>
  )
}

export default BottomTabsNavigation
