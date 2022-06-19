import { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal, Image} from 'react-native';

function GoalInput(props) {
    const [enteredText, setEnteredText] = useState('');
    function goalInputHandler (e) {
        setEnteredText(e);
      }
    const addGoalHandler = props.addGoalHandler;

    return ( <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
            <Image style={styles.image}
            source={require('../assets/favicon.png')}/>
        <TextInput 
        style={styles.textInput} 
        placeholder='Your course goal'
        value={enteredText}
        onChangeText={goalInputHandler} />
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button 
        title='Add Goal'
        onPress={() => {
            addGoalHandler(enteredText);
            setEnteredText('');
            }}/>
        </View>
        <View style={styles.button}>
        <Button 
        title='Cancel'
        onPress={() => {
            props.endGoalHandler();
        }}/>
        </View>
        </View>
      </View>
      </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer : {
        flex : 1,
        justifyContent: 'center',
        alignItems : 'center',
        marginBottom : 24,
        borderBottomWidth : 1,
        borderBottomColor : 'grey',
        backgroundColor: 'pink'
        
      },
      textInput : {
        borderWidth: 1,
        borderColor: 'grey',
        width: '80%',
        marginRight : 8,
        padding:6
      },
      buttonContainer : {
          flexDirection: 'row',
      },
      button : {
          marginHorizontal: 8,
          margin : 20,
          width: 100
      },
      image : {
          width : 100,
          height: 100,
          marginBottom: 10
      }
})