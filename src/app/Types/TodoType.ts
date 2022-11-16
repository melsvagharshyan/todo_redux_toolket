export type todoType = {
    id: number,
    text: string,
    isCompleted: boolean
}

export type todoStateType = {
    todos: todoType[],
    todoText: string
}