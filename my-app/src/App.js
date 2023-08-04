import logo from './logo.svg';
import './App.css';
import { date } from './constants';


//Декларативный стиль


export const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload 2.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>

				<p>
					{date.getFullYear()}</p>
			</header>
		</div>
	);
};

