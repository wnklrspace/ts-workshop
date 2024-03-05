import { FC } from 'react';
import { useTodos } from '../../store/todos';
import TodoItem from './Item';
import InputField from './InputField';
import styles from './index.module.css';

const TodoList: FC = () => {
	const { todos } = useTodos();

	return (
		<div className={styles.listContainer}>
			<div className={styles.listContainerHeader}>
				<InputField />
			</div>
			<ul className={styles.list}>
				{todos.map((todo) => {
					return (
						<TodoItem
							key={todo.id}
							id={todo.id}
							title={todo.title}
							completed={todo.completed}
						/>
					);
				})}
			</ul>
		</div>
	);
};

export default TodoList;
