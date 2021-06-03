// Import Dependancies
import React from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';

// Create component
const ListScreen = () => {
    const friends = [
        {name: 'Friend #1', age: '20' },
        {name: 'Friend #2', age: '25' },
        {name: 'Friend #3', age: '30' },
        {name: 'Friend #4', age: '35' },
        {name: 'Friend #5', age: '40' },
        {name: 'Friend #6', age: '45' },
        {name: 'Friend #7', age: '50' },
        {name: 'Friend #8', age: '55' },
        {name: 'Friend #9', age: '60' },
    ];

    return (
        <FlatList
            keyExtractor={friend => friend.name}
            data={friends} 
            renderItem={({ item }) => {
                return (
                    <Text style={styles.textStyle}>
                        {item.name} - Age {item.age}
                    </Text>
                );
            }} 
        />
    );

};

// Create Stylesheet
const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 10
    }
});

// Export Component
export default ListScreen;