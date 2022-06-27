import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from '../src/pages/Index';


const Stack = createNativeStackNavigator();

export default (props) => (
    <Stack.Navigator initialRouteName="Index">
      <Stack.Screen name="Contato" component={Contato} />
      <Stack.Screen name="Sobre" component={Sobre} />
      <Stack.Screen name="Index" component={Index} />
    </Stack.Navigator>
  );