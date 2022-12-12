import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {TodosModel} from '../App';
import TodoListItem from './TodoListItem';

interface TodoProps {
  todos: TodosModel[];
}

interface RemoveProps {
  onDelete(id: string): void;
}

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
});

const TodoList = ({todos}: TodoProps, onDelete: RemoveProps): JSX.Element => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {todos.map((todo, _idx) => (
        <TodoListItem key={todo.id} {...todo} {...onDelete} />
      ))}
    </ScrollView>
  );
};

export default TodoList;
