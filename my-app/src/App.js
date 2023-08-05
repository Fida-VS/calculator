import logo from './logo.svg';
import './App.css';
import { date } from './constants';
import { createElement } from 'react';


 function CreateEls() {
	return createElement(
		'div',
    { className: 'App' },
    createElement(
		'header',
		{ className: 'App-header' },

		createElement(
			'img',
			{
				src: logo,
				className: "App-logo",
				alt: "logo"
			  }
		),
		createElement(
			'p',
			 null,
			 'Edit ',
			 createElement('code', null, 'src/App.js'),
			 ' and save to reload 2.'
			 ),
			createElement(
				'a',
				{
					className: "App-link",
					href: "https://reactjs.org",
					target: "_blank",
					rel: "noopener noreferrer",
					children: "Learn React"
				  }
			),
			createElement(
				'p',
				{
					className: "App-year",
				children: date.getFullYear()
			        },

			)
		),
	);
};

export default function App() {
	return createElement(
		CreateEls
	);
  }




/* <div className="App">
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
					{date.getFullYear()}
					</p>
			</header>
		</div> */


