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
import Display from './screen/display';
var url = 'https://670b3713ac6860a6c2cb69ff.mockapi.io/people';
var people = { name: 'TriHieu', age: 21 };
var peopleEdit = { name: 'TriHieuEdit', age: 21 };
const Stack = createNativeStackNavigator();
fnAdd = () => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(people),
  });
  console.log('Add');
};

fnEdit = () => {
  fetch(url.concat('/') + '5', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(peopleEdit),
  });
  console.log('Edit');
};

fnDelete = () => {
  fetch(url.concat('/') + '5', {
    method: 'DELETE',
  });
  console.log('Delete');
};

const Screen1 = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        title="Add"
        style={styles.style_btn}
        onPress={() => {
          fnAdd();
          navigation.navigate('display');
        }}>
        <Text style={styles.style_txtinbtn}> Add </Text>
      </TouchableOpacity>
      <br />
      <TouchableOpacity
        title="Edit"
        style={styles.style_btn}
        onPress={() => {
          fnEdit();
          navigation.navigate('display');
        }}>
        {' '}
        <Text style={styles.style_txtinbtn}> Edit </Text>
      </TouchableOpacity>
      <br />
      <TouchableOpacity
        title="Delete"
        style={styles.style_btn}
        onPress={() => {
          fnDelete();
          navigation.navigate('display');
        }}>
        {' '}
        <Text style={styles.style_txtinbtn}> Delete </Text>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Screen1}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="display"
          component={Display}
          options={{ title: 'Display' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
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
});
