/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';
 import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView} from 'react-native';
 import Task from './components/Task';

export default function app(){
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);
 
    const handleAddTask = () => {
      setTaskItems([...taskItems, task]);
      setTask(null);
    }
    const completeTask = (index) => {
      let itemsCopy = [...taskItems];
      itemsCopy.splice(index, 1);
      setTaskItems(itemsCopy)

    }

  return(
    <View  style = {styles.container}>

      <View style = {styles.tasksWrapper}>
        <Text style = {styles.sectionTitle}> Todays Tasks </Text>
  
        <View style = {styles.items}>
        {
          taskItems.map( (item, index) => {
            return (
            <TouchableOpacity key = {index} onPress ={ () => completeTask(index)}>
              <Task text = {item}/>
            </TouchableOpacity>
            )
          })
        }
      </View>
       </View>
        {/* Write a task*/}
        <KeyboardAvoidingView behavior = {Platform.OS === "ios" ? "padding" : "height"} 
        style = {styles.writeTaskWrapper} >
          <TextInput 
          style = {styles.input} 
          placeholder = {'Write a task'} 
          placeholderTextColor = {"black"}
          value = {task}
          onChangeText = {text => setTask(text)}/>
          <TouchableOpacity onPress = {() => handleAddTask()}>
            <View style = {styles.addWrapper}>
              <Text style = {styles.addText}> + </Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : '#E8EAED', 
  },
  tasksWrapper: {
    paddingTop : 80,
    paddingHorizontal : 20,  
  },
  sectionTitle : {
    fontSize : 24,
    fontWeight: 'bold',
    color: 'black'
  },
  items: {
    marginTop : 30,
     
  },
  addText : {
    color : 'black',
  },
  addWrapper : {
    width: 60,
    height: 60,
    backgroundColor : '#fff', 
    borderRadius: 60,
    justifyContent : 'space-around',
    alignItems : 'center', 
    backgroundColor: '#fff',
    borderColor: "#C0C0C0",
    borderWidth : 1,

  },
  writeTaskWrapper : {
    position : 'absolute',
    bottom : 60,
    width : '100%',
    flexDirection : 'row',
    justifyContent : 'space-around',
    color : 'black'
    },
  input : {
    paddingVertical : 15 ,
    paddingHorizontal : 15,
    width: 250, 
    backgroundColor: '#fff',
    borderColor: "#C0C0C0",
    borderWidth : 1,
    borderRadius: 60,
    color : 'black',
  }  
});