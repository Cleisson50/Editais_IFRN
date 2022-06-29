import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Campus from "./src/pages/Campus";
import Index from "./src/pages/Index";
import Ano from "./src/pages/Ano";
import Edital from "./src/pages/Edital";
 
const Stack = createNativeStackNavigator();
 
export default ()  => {
  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Index" screenOptions={{headerShown: true}}>
      <Stack.Screen name="Index" component={Index} options={{title:"Editais IFRN", headerStyle: {
            backgroundColor: '#4AF56F',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',},}}/>
      <Stack.Screen name="Campus" component={Campus} options={{title:"Editais IFRN/ Campus", headerStyle: {
            backgroundColor: '#4AF56F',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',},}} />
      <Stack.Screen name="Ano" component={Ano} options={{title:"Editais IFRN/ Campus/ Ano", headerStyle: {
            backgroundColor: '#4AF56F',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',},}}/>
      <Stack.Screen name="Edital" component={Edital} options={{title:"Editais IFRN/ Campus/ Ano/ Edital", headerStyle: {
            backgroundColor: '#4AF56F',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',},}}/>
    </Stack.Navigator>
      </NavigationContainer>
  )
}
