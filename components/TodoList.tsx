import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import { TodosModel } from '../App';
import TodoListItem from './TodoListItem';

const styles = StyleSheet.create({
    listContainer: {
      alignItems: 'center',
    },
  });

const TodoList = ({ todos }: { todos: any;}): JSX.Element => {
    return (
      <ScrollView contentContainerStyle={styles.listContainer}>
        <TodoListItem />
      </ScrollView>
    );
  };
  
  
  
  export default TodoList;