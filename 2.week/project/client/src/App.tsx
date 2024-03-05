import Main from './components/Main';
import Footer from './components/Footer';
import List from './components/ToDo/List';
import TodosProvider from './store/todos';
import './App.css';

const App = () => {
	return (
		<TodosProvider>
			<Main>
				<List />
			</Main>
			<Footer />
		</TodosProvider>
	);
};

export default App;
