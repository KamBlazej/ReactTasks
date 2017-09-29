import React, {Component} from 'react'
import styled from 'styled-components'
import CounterButton from './CounterButton'
import CounterContainer from './CounterContainer'
import ReactButton from './ReactButton'
import ReactRouterButtons from './ReactRouterButtons'
import ReduxButton from './ReduxButton'
import ReduxCounter from './ReduxButtonCount'
import StyledComponentsButton from './StyledComponentsButton'
import ReactRouterButton from './ReactRouterButton'
import GraphQLButton from './GraphQLButton'
import {withRouter, Link} from 'react-router-dom'

const Wrapper = styled.div`
	text-align: center;
	width: 100%;
`
const ButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
`
const SmallWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
`
/*export default class Main extends Component {
	render() {
		return (
			<Wrapper>
				<ButtonWrapper>

					<ReactButton />
					<ReduxButton />
					<ReduxButton />
					<ReactRouterButton />
					<StyledComponentsButton />
					<GraphQLButton />
				</ButtonWrapper>
			</Wrapper>
		)
	}
}*/
@withRouter
class Main extends Component {
	constructor(props) {
		super(props)
		this.state = {count: 0}
	}
	countPlus = () =>
	{
		this.setState({count:this.state.count+1});
	}
	myButtons = () =>
	{
		console.log(this.props.history.location);
		if(this.props.history.location.pathname=="/mybuttons")
		{
			return(<SmallWrapper>
				<CounterButton countPlus={this.countPlus}  count={this.state.count} />
					<CounterContainer count={this.state.count}/>
					</SmallWrapper>)
		}
		else
		{
			return null;
		}
	}
	render() {
		const {active} = this.state
		const mybuttons=this.myButtons();
		return (
			<Wrapper>
				<ButtonWrapper>

					{mybuttons}
					<ReduxCounter />
					<ReactRouterButtons />
					<ReactRouterButton />
					<StyledComponentsButton />
					<GraphQLButton />
				</ButtonWrapper>
			</Wrapper>
		)
	}
}

export default Main;

