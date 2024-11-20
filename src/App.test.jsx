import { render, screen, fireEvent } from '@testing-library/react'
import { act } from 'react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
	test('renders learn react link', () => {
		render(<App />)
		const linkElement = screen.getByText(/learn react/i)
		const inputElement = screen.getByPlaceholderText('press text')
		const buttonElement = screen.getByRole('button')
		expect(linkElement).toBeInTheDocument()
		expect(inputElement).toBeInTheDocument()
		expect(buttonElement).toBeInTheDocument()
	})
	test('CLICK EVENT', () => {
		render(<App />)
		const btn = screen.getByTestId('data-btn')
		const input = screen.getByTestId('data-input')
		fireEvent.click(btn)
		expect(btn).toBeInTheDocument()
		expect(input).toBeInTheDocument()
	})
	// test('input', () => {
	// 	render(<App />)
	// 	const input = screen.getByTestId('data-input')
	// 	fireEvent.input(input, {
	// 		target: { value: '123' },
	// 	})
	// 	expect(input).toHaveValue('123')
	// })
	// test('event', async () => {
	// 	act(() => {
	// 		render(<App />)
	// 	})
	// 	const input = screen.getByTestId('data-input')
	// 	await userEvent.type(input, '123')
	// 	expect(input).toHaveValue('123')
	// })
	// test('input change updates state', async () => {
	// 	render(<App />)

	// 	await userEvent.type(screen.getByPlaceholderText('press text'), 'Hello')

	// 	expect(screen.getByPlaceholderText('press text').value).toBe('Hello')
	// })
})
