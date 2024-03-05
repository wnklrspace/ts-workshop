import { createContext, useEffect, useMemo, useState, useContext } from 'react';
import axios from 'axios';
import api from '../api';

/**
 * 2dosProvider is a component that will wrap the entire application.
 * It will provide the todos state to all the components that need it.
 * @param {Object} children
 */

// TODO: Importiere den Typen "TodosProviderProps" aus dem '/types' Ordner und weise ihn entsprechend zu
const TodosProvider = ({ children }: any) => {
	/**
	 * This state will hold the todos.
	 * It will be passed to the context provider.
	 * It will be used in the components that need access to the todos.
	 */

	// TODO: Importiere den Typen "Todo" aus dem '/types' Ordner und weise ihn entsprechend zu
	const [todos, setTodos] = useState<any>([]);

	/**
	 * This useEffect hook will run once when the component is mounted.
	 * It will fetch the todos from the API and set the state.
	 */
	useEffect(() => {
		api.getTodos().then((res) => {
			if (axios.isAxiosError(res)) {
				console.log(res);
			} else {
				setTodos(res.data);
			}
		});
	}, []);

	/**
	 * This useMemo hook will memoize the value object.
	 * It will be passed to the context provider.
	 * It is useful to avoid unnecessary re-renders.
	 */
	const value = useMemo(() => {
		return {
			todos,
			setTodos,
		};
	}, [todos, setTodos]);

	return (
		<TodosContext.Provider value={value}>{children}</TodosContext.Provider>
	);
};

// TODO: Importiere den Typen "TodosContextProps" aus dem '/types' Ordner und weise ihn entsprechend zu
export const TodosContext = createContext<any | undefined>(undefined);

/**
 *
 * @returns {Object} { todos, setTodos }
 */
export const useTodos = () => {
	const context = useContext(TodosContext);

	if (!context) {
		throw new Error('useTodos must be used within a TodosProvider');
	}

	return {
		todos: context.todos,
		setTodos: context.setTodos,
	};
};

export default TodosProvider;
