import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Keyboard,Dimensions } from 'react-native';
import { useState } from 'react';
import AddRoutine from "./src/components/AddRoutine";
import uuid from 'react-native-uuid'
import ListRoutines from './src/components/ListRoutines';
import ModalDeleteRoutine from './src/components/ModalDeleteRoutine';

export default function App() {


  const [routineName,setRoutineName] = useState("")
  const [routineGymTeacher,setRoutineGymTeacher] = useState("")
  const [typeOfRoutine,settypeOfRoutine] = useState("fuerza")
  const [gymRoutines, setGymRoutines] = useState([])
  const screenWidth = Dimensions.get('window').width
  const [routineSelected , setRoutineSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)
  

  const addRoutine = () => {
    const routine = {
      id: uuid.v4(),
      routineName,
      routineGymTeacher,
      typeOfRoutine,
      startDate: new Date().toLocaleString(),
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleString()
    }
    setGymRoutines([...gymRoutines,routine])
    setRoutineName("")
    setRoutineGymTeacher("")
    settypeOfRoutine("fuerza")
    Keyboard.dismiss()
  }

  const onHandlerGymTeacher = (teacher) =>{
    setRoutineGymTeacher(teacher)
  }

  const onHandlerName = (name) =>{
    setRoutineName(name)
  }

  const onHandlerNTypeRoutine = (type) =>{
    settypeOfRoutine(type)
  }

  const onHandlerModaDelete = (routine) => {
    setRoutineSelected(routine)
    setModalVisible(!modalVisible)
  }

  const updateRoutineCompleted = (id) => {
    setGymRoutines(gymRoutines.map(routine =>{
      if(routine.id === id) return {...routine,...{completed:!routine.completed}}
      return routine
    }))
  }
  const deleteRoutine = () => {
    setGymRoutines(gymRoutines.filter(routine => routine.id != routineSelected.id ))
    setModalVisible(!modalVisible)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rutinas para el Gym</Text>
      <AddRoutine typeOfRoutine={typeOfRoutine} routineName={routineName} routineGymTeacher={routineGymTeacher} addRoutine={addRoutine} onHandlerGymTeacher={onHandlerGymTeacher} onHandlerName={onHandlerName} settypeOfRoutine={onHandlerNTypeRoutine}/>
      <ListRoutines routines={gymRoutines} onHandlerModaDelete={onHandlerModaDelete} updateRoutineCompleted={updateRoutineCompleted} screenWidth={screenWidth}/>
      <ModalDeleteRoutine 
         modalVisible={modalVisible}
         taskSelected={routineSelected}
         deleteTask={deleteRoutine}
         onHandlerModaDelete={onHandlerModaDelete}
      />
      <StatusBar style="auto" />
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: "center",
    justifyContent: "flex-start",
    padding:45,
    gap:25
    
  },
  text:{
    color: "white"
  }
});
