import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { createServer } from 'http';
import fs from 'fs';
import express from 'express';

const app = express();
const server = createServer(app);
const apiSlug = '/api/v1';
const baseUrl = 'http://localhost:3000';

dotenv.config();

app.use(helmet());
app.use(
	cors({
		origin: baseUrl,
		credentials: true,
	}),
);
app.use(express.json());
app.use(cookieParser());

app.get(apiSlug + '/todo', (req, res) => {
	fs.readdir('./database/todos', (err, files) => {
		if (err) {
			console.error(err);
			res.status(500).send('Internal Server Error');
			return;
		}

		const listOfTodos = files
			.map((file) => {
				const data = fs.readFileSync('./database/todos/' + file, 'utf8');
				const todo = JSON.parse(data);
				return todo;
			})
			.sort((a, b) => b.id - a.id);

		res.send(listOfTodos);
	});
});

app.post(apiSlug + '/todo', (req, res) => {
	fs.readdir('./database/todos', (err, files) => {
		if (err) {
			console.error(err);
			res.status(500).send('Internal Server Error');
			return;
		}

		const todoListLength = files.length;

		const newTodo = {
			id: todoListLength + 1,
			title: req.body.title,
			completed: false,
		};

		fs.writeFile(
			`./database/todos/${newTodo.id}.json`,
			JSON.stringify(newTodo),
			(err) => {
				if (err) {
					console.error(err);
					res.status(500).send('Internal Server Error');
					return;
				}

				res.send(newTodo);
			},
		);
	});
});

app.delete(apiSlug + '/todo', (req, res) => {
	fs.readdir('./database/todos', (err, files) => {
		if (err) {
			console.error(err);
			res.status(500).send('Internal Server Error');
			return;
		}

		const toDelete = files.find(
			(file) => file === req.body.id.toString() + '.json',
		);

		if (!toDelete) {
			res.status(404).send('Not Found');
			return;
		}

		fs.unlink(`./database/todos/${req.body.id}.json`, (err) => {
			if (err) {
				console.error(err);
				res.status(500).send('Internal Server Error');
				return;
			}

			res.send({
				id: req.body.id,
			});
		});
	});
});

app.patch(apiSlug + '/todo/:id', (req, res) => {
	fs.readdir('./database/todos', (err, files) => {
		if (err) {
			console.error(err);
			res.status(500).send('Internal Server Error');
			return;
		}

		const toUpdate = files.find(
			(file) => file === req.params.id.toString() + '.json',
		);

		if (!toUpdate) {
			res.status(404).send('Not Found');
			return;
		}

		let updatedTodo = {
			id: req.params.id,
			title: req.body.title,
			completed: req.body.completed,
		};

		if (!req.body.title) {
			const data = fs.readFileSync('./database/todos/' + toUpdate, 'utf8');
			const todo = JSON.parse(data);

			updatedTodo = {
				id: todo.id,
				title: todo.title,
				completed: req.body.completed,
			};
		}

		if (!req.body.completed) {
			const data = fs.readFileSync('./database/todos/' + toUpdate, 'utf8');
			const todo = JSON.parse(data);

			updatedTodo = {
				id: todo.id,
				title: req.body.title,
				completed: todo.completed,
			};
		}

		fs.writeFile(
			`./database/todos/${updatedTodo.id}.json`,
			JSON.stringify(updatedTodo),
			(err) => {
				if (err) {
					console.error(err);
					res.status(500).send('Internal Server Error');
					return;
				}

				res.send(updatedTodo);
			},
		);
	});
});

export default server;
