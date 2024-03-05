import { Dispatch, SetStateAction } from 'react';
import { TodoList } from './todos';

interface TodosProviderProps {
	children: React.ReactNode;
}

interface TodosContextProps {
	todos: TodoList;
	setTodos: Dispatch<SetStateAction<TodoList>>;
}

export type { TodosProviderProps, TodosContextProps };
