import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f8fa',
  },
  titleContainer: {
    backgroundColor: 'red',
    marginLeft: 30,
    marginRight: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    fontWeight: '300',
    marginLeft: 50,
    marginRight: 50,
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});

export interface TodosModel {
  id: string;
  textValue: string;
  checked: boolean;
}

const App = () => {
  // todos: {id: Number, textValue: string, checked: boolean }
  const [todos, setTodos] = useState<Array<TodosModel>>([]);

  const addTodo = (text: string) => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
    ]);
  };

  const onDelete = (id: string): void => {
    setTodos(todos.filter(todo => todo.id !== id));
    console.log(id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.appTitle}>Hello Todo List</Text>
      </View>
      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo} />
        <TodoList todos={todos} {...onDelete} />
      </View>
    </SafeAreaView>
  );
};

export default App;
