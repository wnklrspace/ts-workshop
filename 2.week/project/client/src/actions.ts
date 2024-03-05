import { Dispatch, SetStateAction } from 'react';
import axios from 'axios';
import api from './api';

//TODO: Ersetze any durch die richtigen Typen
const completeTodo = async (
	id: any,
	setTodos: Dispatch<SetStateAction<any[]>>,
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

//TODO: Ersetze any durch die richtigen Typen
const deleteTodo = async (
	id: any,
	setTodos: Dispatch<SetStateAction<any[]>>,
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

//TODO: Ersetze any durch die richtigen Typen
const createTodo = async (
	title: any,
	setTodos: Dispatch<SetStateAction<any[]>>,
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
