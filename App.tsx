import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#e8f8fa',
  },
  titleContainer: {
    backgroundColor: 'red',
    marginLeft:30,
    marginRight:30,
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10, 
    borderBottomRightRadius: 10,
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    fontWeight: '300',
    marginLeft:50,
    marginRight:50,
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

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.appTitle}>
          Hello Todo List
        </Text>
      </View>
      <View style={styles.card}>
      <TodoInsert />
      <TodoList />
      </View>
    </SafeAreaView>
  );
};



export default App;
