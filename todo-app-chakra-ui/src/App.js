
import { useState, useEffect } from 'react';
import { VStack, IconButton, Heading, useColorMode } from '@chakra-ui/react'
import { FaSun, FaMoon } from "react-icons/fa";
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {

  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || [])

  useEffect(() => { localStorage.setItem('todos', JSON.stringify(todos)) }, [todos])

  function deleteTodo(id) {
    const newTodos = todos.filter(todo => {
      return todo.id !== id
    })
    setTodos(newTodos)
  }


  function createTodo(todo) {
    setTodos([...todos, todo])
  }

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <VStack p={6}>
      <IconButton
        onClick={toggleColorMode}
        icon={colorMode === 'light' ? <FaSun color={'#000'} /> : <FaMoon color={'#000'} />}
        alignSelf={'flex-end'}
        size={'lg'}
      />
      <Heading
        p={8}
        textAlign={'center'}
        size={'2xl'}
        fontWeight={'extrabold'}
        mb={8}
        bgGradient={'linear(to-r, #159957, #155799)'}
        bgClip={'text'} >Todo Application With ChakraUI
      </Heading>
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo} />
      <AddTodo createTodo={createTodo} />
    </VStack>
  );
}

export default App;
