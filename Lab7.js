import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AssetExample from './components/AssetExample';

const Stack = createNativeStackNavigator();

// Màn hình 1
function Screen1({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={styles.img_head_screen1}
          source={require('./assets/imgheadscr1.png')}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.style_manage}>MANAGE YOUR TASK</Text>
      </View>
      <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={styles.style_letter}
          source={require('./assets/letter.png')}
        />
        <TextInput
          placeholder="Enter your name"
          style={styles.styleInputEmail}
        />
      </View>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          style={styles.style_btn}
          onPress={() => navigation.navigate('TodoList')}>
          <Text style={styles.style_txtinbtn}> GET STARTED -> </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
function Screen2({ navigation }) {
  // return (
  // );
}
//  <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen
//           name="Home"
//           component={Screen1}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="TodoList"
//           component={Screen2}
//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, flexDirection: 'row' , justifyContent: 'space-evenly'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('./assets/icon_back.png')} />
        </TouchableOpacity>

        <View style={{ flex: 3, flexDirection: 'row' }}>
          <Image source={require('./assets/avatar.png')} />
          <View>
            <Text style={styles.style_txt_scr2}>Hi Twinkle</Text>
            <Text style={[styles.style_txt_scr2, {fontSize: 14, color:'#171A1F'}]}>Have agrate day a head</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  img_head_screen1: {
    width: 271,
    height: 271,
  },

  style_manage: {
    fontFamily: 'Epilogue',
    fontSize: 24,
    fontWeight: 700,
    color: '#8353E2',
    textAlign: 'center',
    margin: '0 25% 0',
  },
  styleInputEmail: {
    borderRadius: 10,
    borderWidth: 1,
    padding: '3% 10% 3%',
    width: 334,
    height: 43,
  },
  style_letter: {
    position: 'absolute',
    left: '10%',
  },
  style_btn: {
    width: 190,
    height: 44,
    padding: '9 33 9 29',
    borderRadius: 12,
    backgroundColor: '#00BDD6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  style_txtinbtn: {
    color: '#FFFFFF',
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: 16,
  },

  style_txt_scr2: {
    fontFamily: 'Epilogue',
    fontSize: 20,
    fontWeight: 700,
    textAlign: 'center',
  },
});