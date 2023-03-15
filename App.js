import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { LensProvider } from "@lens-protocol/react-native-lens-ui-kit"
import ProfileComponent from "./components/Profile"
import ProfileView from "./components/ProfileView"
import ViewFollowing from "./components/ViewFollowing"
import ViewComments from "./components/ViewComments"

const Stack = createNativeStackNavigator()

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'black'
  }
}


export default function App() {
  return (
    <LensProvider
    environment="mainnet"
    theme='dark'
  >
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Profiles" component={ProfileComponent} />
        <Stack.Screen name="Profile" component={ProfileView} />
        <Stack.Screen name="ViewFollowing" component={ViewFollowing} />
        <Stack.Screen name="ViewComments" component={ViewComments} />
      </Stack.Navigator>
    </NavigationContainer>
  </LensProvider> 
  )
}