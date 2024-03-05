import { Dispatch, SetStateAction } from 'react';
import { Todo } from './todos';

interface TodosProviderProps {
	children: React.ReactNode;
}

interface TodosContextProps {
	todos: Todo[];
	setTodos: Dispatch<SetStateAction<Todo[]>>;
}

export type { TodosProviderProps, TodosContextProps };
