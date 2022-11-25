import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import HomeScreen from './src/HomeScreen';

export default function App() {

  const [task, setTask] = useState();
  const [allTasks, setAllTasks] = useState([]);

  const handleTask = (text) => {
    if (task) {
      setAllTasks([...allTasks, task]);
      Keyboard.dismiss();
    }
    setTask(null)
  }

  const comletedTask = (index) => {
    let tasks = [...allTasks];
    tasks.splice(index, 1);
    setAllTasks(tasks);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText} >Today's My Task</Text>
      <ScrollView style={styles.scrollItemView}>
        {
          allTasks.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => comletedTask(index)} >
                <HomeScreen text={item} />
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
      <View style={styles.taskInputWrapper} >
        <View style={styles.taskInputItem} >
          <TextInput style={styles.taskInput} placeholder="Enter Your Task" value={task} onChangeText={text => setTask(text)} />
        </View>
        <TouchableOpacity style={styles.taskPlusWrapper} onPress={handleTask}>
          <Text style={styles.taskPlusText} >+</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    height: '100%',
    width: '100%',
  },
  welcomeText: {
    fontSize: 18,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  scrollItemView: {
    height: '80%',
    width: '100%',
    paddingBottom: 200,
  },
  taskInputWrapper: {
    display: 'flex',
    backgroundColor: 'white',
    padding: 20,
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    // left: 20,
  },
  taskInputItem: {
    width: '80%',
    // borderWidth: 1,
    // borderColor: 'black',
  },
  taskInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    borderRadius: 40,
    borderColor: '#C0C0C0',
  },
  taskPlusWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.9,
    width: 40,
    height: 40,
    borderRadius: 40,
    borderColor: '#C0C0C0',
  },
  taskPlusText: {
    color: '#C0C0C0',
    fontSize: 18,
  },
});
