import Container from '../components/container/Container'
import CounterWrapper from '../components/counter-wrapper/CounterWrapper'
import Counter from '../components/counter/Counter'
import Header from '../components/header/Header'

function Home(): JSX.Element {
	return (
		<Container>
			<Header />
			<CounterWrapper>
				<Counter />
			</CounterWrapper>
		</Container>
	)
}

export default Home
