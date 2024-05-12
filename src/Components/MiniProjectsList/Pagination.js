import { useEffect } from 'react'
import { useState } from 'react'

export default function App() {
	const [page, setState] = useState(1)
	const [posts, setPosts] = useState([])

	const handleClick = () => {
		setState(page + 1)
	}

	const fetchData = () => {
		const url = `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
		fetch(url)
			.then((response) => {
				console.log("response",response)
				return response.json()
			})
			.then((data) => {
				console.log(data.length)
				const prevData = [...posts]
				const newData = prevData.concat(data)
				setPosts(newData)
			})
	}

	useEffect(() => {
		fetchData();
	}, [page]);
	

	return (
		<>
<table>
    <thead>
        <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
        </tr>
    </thead>
    <tbody>
        {posts.map((post) => (
            <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
            </tr>
        ))}
    </tbody>
</table>


			

			<button id="next" onClick={handleClick}>
				Next
			</button>
		</>
	)
}
