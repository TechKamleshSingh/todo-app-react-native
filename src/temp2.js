import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Task = (props) => {
    return (
        <View style={styles.taskWrapper}>
            <View style={styles.taskItem}>
                <View style={styles.taskCircle}>
                </View>
                <View>
                    <Text style={styles.taskText}>{props.text}</Text>
                </View>
            </View>
        </View>
    )
}

export default Task

const styles = StyleSheet.create({
    taskWrapper: {
        display: 'flex',
        justifyContent: 'center',
    },
    taskItem: {
        display: 'flex',
        // backgroundColor: '#C0C0C0',
        padding: 10,
        marginTop: 10,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        borderRadius: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: '#C0C0C0',
        borderBottomColor: '#C0C0C0',
        
    },
    taskText: {
        // fontSize: 15,
        paddingHorizontal: 10,
    },
    taskCircle: {
        height: 20,
        width: 20,
        borderWidth: 2,
        borderRadius: 10,
    },
})