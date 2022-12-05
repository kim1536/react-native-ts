import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import TodoListItem from './TodoListItem';

const styles = StyleSheet.create({
    listContainer: {
      alignItems: 'center',
    },
  });

const TodoList = () => {
    return (
      <ScrollView contentContainerStyle={styles.listContainer}>
        <TodoListItem />
      </ScrollView>
    );
  };
  
  
  
  export default TodoList;