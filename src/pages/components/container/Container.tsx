import ContainerProps from './ContainerProps'
import ContainerStyle from './ContainerStyle'

function Container(props: ContainerProps): JSX.Element {
	return <ContainerStyle>{props.children}</ContainerStyle>
}

export default Container
