import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from '../src/pages/Index';
import Campus from '../src/pages/Campus';
import Ano from '../src/pages/Ano';
import Edital from '../src/pages/Edital';


const Stack = createNativeStackNavigator();

export default (props) => (
    <Stack.Navigator initialRouteName="Index">
      <Stack.Screen name="Campus" component={Campus} />
      <Stack.Screen name="Ano" component={Ano} />
      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen name="Edital" component={Edital} />
    </Stack.Navigator>
  );