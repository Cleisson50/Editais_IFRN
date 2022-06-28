import { View } from 'react-native';
import Stack from './navigation/Stack';
import { NavigationContainer } from '@react-navigation/native';

export default () => {
  return (
    <View>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </View>
  );
}