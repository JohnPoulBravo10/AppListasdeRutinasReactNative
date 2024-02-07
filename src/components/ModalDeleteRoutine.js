import { StyleSheet, Text, View ,Modal,Button } from 'react-native'

const ModalDeleteRoutine = ({routineSelected,
                          deleteRoutine,
                          onHandlerModaDelete,
                          modalVisible}) => {

    return (
        <Modal
        visible={modalVisible}
        animationType='fade'
        onRequestClose={()=> onHandlerModaDelete({})}
        >
            <View>
            <Text>Esta seguro que quiero eliminar la rutina :{routineSelected.title}</Text>
            <Button title='si' onPress={deleteRoutine}/>
            <Button title='no' onPress={()=> onHandlerModaDelete({})}/>
            </View>
        </Modal>
  )
}

export default ModalDeleteRoutine

const styles = StyleSheet.create({


})