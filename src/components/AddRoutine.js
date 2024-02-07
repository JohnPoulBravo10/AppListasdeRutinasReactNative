
import { StyleSheet, Pressable,Text , TextInput, View} from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker';

const AddRoutine = ({typeOfRoutine,routineName,routineGymTeacher,addRoutine,onHandlerGymTeacher,onHandlerName,settypeOfRoutine}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={routineName} 
            onChangeText={onHandlerName}  
            placeholder='Ingresar Nombre del afiliado' 
            placeholderTextColor="white"
            maxLength={25}/>
      <TextInput style={styles.input} value={routineGymTeacher} 
            onChangeText={onHandlerGymTeacher}  
            placeholder='Ingresar nombre del profesor' 
            placeholderTextColor="white"
            maxLength={25}/>
    <Picker  selectedValue={typeOfRoutine}
                style={styles.picker}
                onValueChange={(itemValue) => settypeOfRoutine(itemValue)} >
                <Picker.Item label="Fuerza" value="fuerza" />
                <Picker.Item label="Resistencia" value="resistencia" />
                <Picker.Item label="Hipertrofia" value="hipertrofia" />
            </Picker>

       <Pressable style={styles.boton} onPress={addRoutine}>
           <Text style={styles.text}>Crear Rutina</Text>
        </Pressable>
    </View>
  )
}

export default AddRoutine

const styles = StyleSheet.create({
  container:{
    alignItems:"center",
    justifyContent:"space-around",
    padding:10,
    gap: 15
    },
  input:{
    width:"100%",
    borderWidth:2,
    borderColor:"white",
    marginHorizontal:10,
    marginVertical:5,
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:5,
    color:"white",
    fontSize:16,
    textAlignVertical:"top"
  },
  picker: {
    height: 50,
    width: 150,
    backgroundColor: '#e0e0e0', 
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#333', 
  },
  boton:{ 
    backgroundColor: "white"
  }
})