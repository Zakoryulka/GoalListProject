import { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Button
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString(36).substring(7)}
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHendler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id != id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        onPress={startAddGoalHandler}
        color="#5e0acc"
      />
      <GoalInput
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
        visible={modalIsVisible}/>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem
                    text={itemData.item.text}
                    id={itemData.item.id}
                    onDeleteItem={deleteGoalHendler} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 6
  }
});
