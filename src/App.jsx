import logo from './logo.svg'
import './App.css'
import React from 'react'

function App() {
	const handleClick = () => {
		console.log('btn click')
	}

	const [value, setValue] = React.useState()

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>

			<section>
				<input
					data-testid='data-input'
					type='text'
					placeholder='press text'
					onChange={e => setValue(e.target.value)}
				/>
				<button data-testid='data-btn' onClick={handleClick}>
					ok
				</button>
			</section>
		</div>
	)
}

export default App
