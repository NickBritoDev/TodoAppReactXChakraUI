import React from "react";
import { useState } from "react";
import { HStack, IconButton, Input, useToast } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { nanoid } from 'nanoid'

function AddTodo({ createTodo }) {
    const toast = useToast()

    function handleSubmit(e) {
        e.preventDefault()

        if (!content) {
            toast({
                title: 'Error creating task.',
                description: "Write your task before adding it.",
                status: 'error',
                duration: 1500,
                isClosable: true,
            })
            return
        }


        const todo = {
            id: nanoid(),
            body: content,
        }
        createTodo(todo)
        setContent('')
    }

    const [content, setContent] = useState('')

    return <form onSubmit={handleSubmit}>
        <HStack mt={8}>
            <Input
                onChange={(e) => setContent(e.target.value)}
                value={content}
                w={'100%'}
                variant={"filled"}
                placeholder={'Write a new task...'} />
            <IconButton
                type={"submit"}
                px={"8"}
                bgGradient={'linear(to-r, #159957, #155799)'}
                paddingInline={10}
                icon={<FaPlus size={24} color="#fff" />}>
            </IconButton>
        </HStack>

    </form>
}

export default AddTodo