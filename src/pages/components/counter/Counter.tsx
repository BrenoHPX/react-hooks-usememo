import { useMemo, useState } from 'react'
// import { useState } from 'react'

function Counter(): JSX.Element {
	const [contaMemo, setContaMemo] = useState(0)
	const [contaSemMemo, setContaSemMemo] = useState(0)

	const incrementContaMemo = () => setContaMemo(contaMemo + 1)
	const incrementContaSemMemo = () => setContaSemMemo(contaSemMemo + 1)
	
	const complicadoMemo = useMemo(() => {
		let num = 0
			for (let i = 0; i < 1000000000; i++) {
			  num += 1;
			}
			console.log(num);
			
		return ((contaMemo * 10000) % 12.4) * 51000 - 4000
	}, [contaMemo])

	// const complicadoMemo = () => {
	// 	let num = 0
	// 		for (let i = 0; i < 1000000000; i++) {
	// 		  num += 1;
	// 		}
	// 		console.log(num);
			
	// 	return (((contaMemo * 10000) % 12.4) * 51000 - 4000)
	// }

	return (
		<>
			<p className='text'>
				contaMemo: <span className='number'>{contaMemo}</span>
			</p>
			<button onClick={incrementContaMemo} className='btn'>
				Incrementar contaMemo
			</button>
			<p className='text'>
				valorComplicadoMemo:{' '}
				<span className='number'>{complicadoMemo}</span>
			</p>
			<p className='text'>
				contaSemMemo: <span className='number'>{contaSemMemo}</span>
			</p>
			<button onClick={incrementContaSemMemo} className='btn'>
				Incrementar contaSemMemo
			</button>
		</>
	)
}

export default Counter
