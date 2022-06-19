import {Pressable, StyleSheet, Text, View} from 'react-native'

function GoalItem(props) {

    const itemData = props.itemData;

     function deleteGoalHandler (id) {
        props.deleteGoalHandler(id);
    }

    return <View style={styles.goalItem} >
    <Pressable android_ripple={{color: 'white'}} onPress={() => deleteGoalHandler(props.id)}>
        <Text style={styles.textItem}
    >{itemData.item.text}</Text>
    </Pressable> 
    </View>
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem : {
        margin : 8,
        borderRadius : 10,
        backgroundColor : 'purple',
        color : 'white',
        height: 50,
        
      },
      textItem : {
          fontSize : 30,
          color: 'white',
          padding: 8
      
      }
})