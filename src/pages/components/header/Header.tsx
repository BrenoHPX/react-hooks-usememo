import HeaderStyle from './HeaderStyle'

function Header(): JSX.Element {
	return (
		<HeaderStyle>
			<h1>
				ReactHooks
				<span className='dot'>.</span>
				<span className='hook'>useMemo</span>
				<span className='brackets'>()</span>
			</h1>
		</HeaderStyle>
	)
}

export default Header
