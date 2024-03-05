import axios, { AxiosError, AxiosResponse } from 'axios';
import type { Todo } from '../types/todos';

const BASE_URL = 'http://localhost:4000/api/v1';
const getTodos = async () => {
	const response: AxiosResponse<Todo[]> | AxiosError = await axios
		.get(`${BASE_URL}/todo`)
		.catch((error: AxiosError) => {
			return error;
		});

	return response;
};

const createTodo = async ({ title }: { title: string }) => {
	const response: AxiosResponse<Todo> | AxiosError = await axios
		.post(BASE_URL + '/todo', {
			title: title,
			completed: false,
		})
		.catch((error: AxiosError) => {
			return error;
		});

	return response;
};

const deleteTodo = async ({ id }: { id: number }) => {
	const response: AxiosResponse<Todo> | AxiosError = await axios
		.delete(BASE_URL + '/todo', {
			data: {
				id: id,
			},
		})
		.catch((error) => {
			return error;
		});

	return response;
};

const completeTodo = async ({ id }: { id: number }) => {
	const response: AxiosResponse<Todo> | AxiosError = await axios
		.patch(BASE_URL + '/todo/' + id, {
			completed: true,
		})
		.catch((error) => {
			return error;
		});

	return response;
};

export default {
	getTodos,
	createTodo,
	completeTodo,
	deleteTodo,
};
