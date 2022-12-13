import React from 'react';
import {StyleSheet, ScrollView, GestureResponderEvent} from 'react-native';
import {TodosModel as TodoModel} from '../App';
import TodoListItem from './TodoListItem';

interface TodoProps {
  todos: TodoModel[];
  onDelete(event: GestureResponderEvent, id: string): void;
}

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
});

const TodoList = (props: TodoProps): JSX.Element => {
  const { todos, onDelete } = props;
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {todos.map((todo, _idx) => (
        <TodoListItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </ScrollView>
  );
};

export default TodoList;
