import { StyleSheet, Text, View, FlatList} from 'react-native'
import React from 'react'
import CartRoutineList from './CartRoutineList'

const ListRoutines = ({routines,onHandlerModaDelete,screenWidth,updateRoutineCompleted}) => {
  return (
    <View>
      <Text>ListRoutines</Text>
      <FlatList
        horizontal={true}
        pagingEnabled={true}
        data={routines}
        keyExtractor={item => item.id}
        renderItem={({item})=>(<CartRoutineList 
                                    item={item} 
                                    onHandlerModaDelete={onHandlerModaDelete}
                                    screenWidth={screenWidth}
                                    updateRoutineCompleted={updateRoutineCompleted}
                                    />)}
        />
    </View>
  )
}

export default ListRoutines

const styles = StyleSheet.create({})