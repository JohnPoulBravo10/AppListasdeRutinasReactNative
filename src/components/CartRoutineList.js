import { StyleSheet, Text, View,Switch,Pressable } from 'react-native'
import React from 'react'

const CartRoutineList = ({item,onHandlerModaDelete,screenWidth,updateRoutineCompleted}) => {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.text}>Afiliado: {item.routineName}</Text>
      <Text style={styles.text}>Profesor: {item.routineGymTeacher}</Text>
      <Text style={styles.text}>Tipo de rutina: {item.typeOfRoutine}</Text>
      <Text style={styles.text}>Fecha inicio: {item.startDate}</Text>
      <Text style={styles.text}>Fecha fin: {item.endDate}</Text>
      <View style={styles.completedContanier}>
                    <Switch
                        value={item.completed}
                        onValueChange={() => updateRoutineCompleted(item.id)}
                    />
                    <Text style={styles.textCompleted}>{item.completed ? "Completada" : "Pendiente" }</Text>
                </View>
      <Pressable style={styles.boton} onPress={() => onHandlerModaDelete(item)}>
           <Text style={styles.boton}>Eliminar Rutina</Text>
        </Pressable>
    </View>
  )
}//nombre
//profe
//tipo (select)
//comienzo
//fin
//rutina

export default CartRoutineList

const styles = StyleSheet.create({
    conteiner:{

    },
    boton:{
            backgroundColor: "white",
            color:"black"

            },
    text:{
        color:"white",
        
    },
    completedContanier:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
        gap:15
    },
})