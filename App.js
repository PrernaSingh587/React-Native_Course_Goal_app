import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

  
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalVisible] = useState(false);


  function startAddGoalHandler () {
    setModalVisible(true);
  }
  function endGoalHandler () {
    setModalVisible(false);
  }

  function addGoalHandler(enteredText) {
    setCourseGoals(prev => [...prev,{text : enteredText, id : Math.random()}]);
    endGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals(prev => {
      return prev.filter((goal) => goal.id!==id);
    })
  }

  return (
    <View style={styles.appContainer}>
      <Button title='Add New Goal' 
      color="blue"
      onPress={startAddGoalHandler}/>
       <GoalInput addGoalHandler={addGoalHandler} visible = {modalIsVisible} endGoalHandler={endGoalHandler}/>
      <View style={styles.goalsContainer}>
      {/* <ScrollView >
          {courseGoals.map(goal => <Text style={styles.goalItem}
           key={goal}>{goal}</Text>)}
      </ScrollView> */}
      <FlatList alwaysBounceVertical={true}
        data={courseGoals}
        renderItem={itemData => {
          return (
              <GoalItem 
              itemData={itemData} 
              deleteGoalHandler={deleteGoalHandler}
              id={itemData.item.id}/>
          );
        }}
      >
      </FlatList>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  appContainer: {
    flex : 1,
    paddingTop: 50,
    paddingHorizontal : 16,
    
  },
  goalsContainer : {
    flex : 5,
    height : 100,
  },
  
    
  
});
