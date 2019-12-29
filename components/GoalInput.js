import React, { useState } from 'react';
import {Button, StyleSheet, TextInput, View} from "react-native";


const GoalInput = props => {
    const [enter, setEnter] = useState('');
    const goalInputHandler = (entredText) => {
        setEnter(entredText);
    };


    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Course'
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enter}
            />
            <Button title='Add' onPress={props.onAddGoal.bind(this, enter)}/>
        </View>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        padding: 10
    },
});