import { useMemo, useState } from 'react'

function Counter(): JSX.Element {
	const [contaMemo, setContaMemo] = useState(0)

	const incrementContaMemo = () => setContaMemo(contaMemo + 1)

	const complicadoMemo = useMemo(() => {
		return ((contaMemo * 1000000000) % 12.4) * 51000 - 4000
	}, [contaMemo])

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
		</>
	)
}

export default Counter
