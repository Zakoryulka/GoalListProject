import { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text
} from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredText] = useState('');


  function goalInputHandler(enteredText) {
    setEnteredText(enteredText); //
  }

  function addGoalHandler() {
    console.log(enteredGoalText);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}/>
        <Button title="Add Goal"
          onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    // backgroundColor: 'red'

  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    marginRight: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%'
  },
  goalsContainer: {
    flex: 6,
    // backgroundColor: 'blue'
  }
});
