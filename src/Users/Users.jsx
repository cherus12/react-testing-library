// import React from 'react'
// import axios from 'axios'

const React = require('react')
const axios = require('axios')

export const Users = () => {
	const [users, setUsers] = React.useState([])

	const loadUsers = async () => {
		const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)

		setUsers(res.data)
	}

	React.useEffect(() => {
		loadUsers()
	}, [])

	return (
		<div>
			{users.map(user => (
				<div key={user.id} data-testid='user'>
					{user.name}
				</div>
			))}
		</div>
	)
}
