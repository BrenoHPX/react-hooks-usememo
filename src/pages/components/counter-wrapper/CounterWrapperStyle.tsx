import styled from 'styled-components'

const CounterWrapperStyle = styled.div`
	border-radius: 20px;
	border: 4px solid #fafafa;
	box-shadow: 10px 10px 30px rgb(0, 0, 0, 0.4);
	color: #fafafa;
	display: grid;
	font-size: 24px;
	grid-gap: 25px;
	justify-items: center;
	margin-top: 50px;
	padding: 25px;
	width: 500px;

	.text {
		color: rgb(241, 250, 129);
	}

	.number {
		color: rgb(189, 147, 249);
	}

	.btn {
		background: transparent;
		border-radius: 10px;
		border: 2px solid #fafafa;
		color: #fafafa;
		cursor: pointer;
		font-size: 18px;
		outline: none;
		padding: 10px;
	}
`

export default CounterWrapperStyle
