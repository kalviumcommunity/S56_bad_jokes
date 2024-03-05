// import { useState } from 'react'
// import axios from 'axios'
// import { useEffect } from 'react'

// const UserInput = () => {
// 	const [name, setName] = useState('')
// 	const [status, setStatus] = useState('')
// 	const [data, setData] = useState([])

// 	const handleChangeInput = (event) => {
// 		setName(event.target.value)
// 	}

// 	const handleChangeStatus = (event) => {
// 		setStatus(event.target.value)
// 	}

// 	const handleSubmit = () => {
// 			axios
// 				.post('https://bad-jokes.onrender.com/getUsers', {
// 					Joke,
//                     Rating,
//                     Category,
//                     DateAdded
					
// 				})
// 				.then((result) => console.log(result))
// 				.catch((err) => console.log(err))
// 	}

// 	useEffect(() => {
// 		axios
// 			.get('https://bad-jokes.onrender.com/getUsers')
// 			.then((res) => {
// 				setData(res.data)
// 			})
// 	})

// 	return (
// 		<div>
// 			<input
// 				type="text"
// 				value={name}
// 				onChange={handleChangeInput}
// 				placeholder={'Enter Door Name'}
// 			/>
// 			<input
// 				type="text"
// 				value={status}
// 				onChange={handleChangeStatus}
// 				placeholder={'Enter Status'}
// 			/>
// 			<button onClick={handleSubmit}>Submit</button>

// 			<div>
// 				{data.map((el, index) => (
// 					<div key={index}>
// 						<h2>Name: {el.name}</h2>
// 						<h3>Status: {el.status}</h3>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	)
// }

// export default UserInput