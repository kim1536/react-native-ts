import React, { ReactElement } from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import { TodosModel } from '../App';
import TodoListItem from './TodoListItem';

const styles = StyleSheet.create({
    listContainer: {
      alignItems: 'center',
    },
  });

const TodoList = (todos:TodosModel[]): JSX.Element => {
    return (
        <ScrollView contentContainerStyle={styles.listContainer}>
          {todos.map((todo) => (
             <TodoListItem key={todo.id} {...todo} />
          ))}
        </ScrollView>
    );
  };
  
  
  
  export default TodoList;