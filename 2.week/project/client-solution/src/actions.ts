import { Dispatch, SetStateAction } from 'react';
import axios from 'axios';
import type { Todo } from '../types/todos';
import api from './api';

const completeTodo = async (
	id: number,
	setTodos: Dispatch<SetStateAction<Todo[]>>,
) => {
	await api
		.completeTodo({
			id,
		})
		.then((res) => {
			if (res.status === 200) {
				setTodos((prevTodos) =>
					prevTodos.map((todo) => {
						if (todo.id === id) {
							return { ...todo, completed: !todo.completed };
						}
						return todo;
					}),
				);
			} else {
				console.log('Error completing todo: ', res.config?.data);
			}
		});
};

const deleteTodo = async (
	id: number,
	setTodos: Dispatch<SetStateAction<Todo[]>>,
) => {
	await api
		.deleteTodo({
			id,
		})
		.then((res) => {
			if (res.status && res.status === 200) {
				setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
			} else {
				console.log('Error deleting todo: ', res.config?.data);
			}
		});
};

const createTodo = async (
	title: string,
	setTodos: Dispatch<SetStateAction<Todo[]>>,
) => {
	await api
		.createTodo({
			title: title,
		})
		.then((res) => {
			if (axios.isAxiosError(res)) return;
			if (res.status && res.status === 200) {
				setTodos((prevTodos) => [res.data, ...prevTodos]);
			} else {
				console.log('Error creating todo: ', res.config?.data);
			}
		});
};

export default {
	completeTodo,
	deleteTodo,
	createTodo,
};
