import { Home } from './src/components/pages/home';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Article } from './src/components/pages/article';
import { RootStackParamList } from './src/utils/types';

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  function NavStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Article"
          component={Article}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
};


export default App;
