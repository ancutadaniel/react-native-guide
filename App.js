import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";



export default function App() {

    const [courseGoals, setCourseGoals] = useState([]);



    const addGoalHandler = goalTitle => {
        setCourseGoals(courseGoals => [
            ...courseGoals,
          { key: Math.random().toString(), value: goalTitle }
          ]);
    };

    return (
        <ScrollView>
            <View style={styles.screen}>
               <GoalInput onAddGoal={addGoalHandler} />
                <FlatList
                    keyExtractor={(item, index) => item.id}
                    data={courseGoals}
                    renderItem={itemData => (
                      <GoalItem onDelete={} title={itemData.item.value}/>
                    )}
                >
                </FlatList>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },



});
