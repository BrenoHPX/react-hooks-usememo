import CounterWrapperProps from './CounterWrapperProps'
import CounterWrapperStyle from './CounterWrapperStyle'

function CounterWrapper(props: CounterWrapperProps): JSX.Element {
	return <CounterWrapperStyle>{props.children}</CounterWrapperStyle>
}

export default CounterWrapper
