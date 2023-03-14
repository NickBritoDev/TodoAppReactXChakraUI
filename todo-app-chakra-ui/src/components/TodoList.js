import React from "react";
import { VStack, HStack, Text, IconButton, StackDivider, Spacer, Badge } from '@chakra-ui/react'
import { FaTrash } from "react-icons/fa";

function TodoList({ todos, deleteTodo }) {

    if (!todos.length) {
        return (
            <Badge 
            m={4} 
            p={4} 
            colorScheme={'blue'} 
            borderRadius={"lg"}>
            No task...
            </Badge>
        )
    }

    return <VStack
        w={'100%'}
        p={4}
        maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
        display={"flex"}
        justifyContent={"space-between"}
        divider={<StackDivider />}
        borderColor={"gray.300"}
        borderWidth={2}
        alignItems={"stretch"}
        borderRadius={12}>

        {todos.map(todo => (
            <HStack key={todo.id}>
                <Text>{todo.body}</Text>
                <Spacer />
                <IconButton
                    onClick={() => deleteTodo(todo.id)}
                    icon={<FaTrash color='red' />} />
            </HStack>
        ))}
    </VStack>
}

export default TodoList