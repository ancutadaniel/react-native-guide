import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";


const GoalItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
};

export default GoalItem;

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderWidth: 1
    }
});