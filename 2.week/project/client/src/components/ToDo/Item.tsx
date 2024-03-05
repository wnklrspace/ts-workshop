import { FC } from 'react';
import { Trash2 } from 'react-feather';
import { useTodos } from '../../store/todos';
import actions from '../../actions';
import styles from './index.module.css';

// TODO: Ersetze any durch den richtigen Typen
const TodoItem: FC<any> = ({ id, title, completed }) => {
	const { setTodos } = useTodos();

	return (
		<li
			className={`${styles.todoItem} ${
				completed ? styles.todoItemCompleted : ''
			}`}>
			<label
				htmlFor={id.toString()}
				className={styles.todoItemCheckbox}>
				<input
					type='checkbox'
					id={id.toString()}
					checked={completed}
					onChange={() => actions.completeTodo(id, setTodos)}
				/>
			</label>
			<div className={styles.editBox}>
				<div className={styles.inputContainerOuter}>
					<p
						className={`${styles.todoItemTitle} ${
							completed ? styles.todoItemTitleCompleted : ''
						}`}>
						{title}
					</p>
				</div>

				<button
					className={`${styles.button} ${styles.buttonDelete}`}
					onClick={() => actions.deleteTodo(id, setTodos)}>
					<Trash2 size={16} />
				</button>
			</div>
		</li>
	);
};

export default TodoItem;
