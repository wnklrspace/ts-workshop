import { FC, useEffect, useState } from 'react';
import { useTodos } from '../../store/todos';
import actions from '../../actions';
import styles from './index.module.css';

const InputField: FC = () => {
	const [inputValue, setInputValue] = useState('');
	const { todos, setTodos } = useTodos();

	useEffect(() => {
		setInputValue('');
	}, [todos, setTodos]);

	return (
		<div className={styles.inputContainer}>
			<div className={styles.inputContainerTop}>
				<label htmlFor='todoInput' />
				<input
					type='text'
					id='todoInput'
					placeholder='Add a new task'
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
			</div>
			<div className={styles.inputContainerBottom}>
				<button
					disabled={inputValue === ''}
					className={`${styles.primaryButton} ${
						inputValue === '' ? styles.primaryButtonDisabled : ''
					}`}
					onClick={() => actions.createTodo(inputValue, setTodos)}>
					Add task
				</button>
			</div>
		</div>
	);
};

export default InputField;
