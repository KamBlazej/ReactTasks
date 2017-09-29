import React, {Component} from 'react'
import styled from 'styled-components'
import Icon from 'components/Icon'
import Button from 'components/Button'





class CounterContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {count: this.props.count}
	}
	componentWillReceiveProps(p)
   {
	   if(p.count!=this.state.count)
	   {
		   this.setState({count:p.count});
	   }

   }
	render() {
		const message = `state set to `+(this.props.count)+``
		const Container = styled.div`
			background: rgba(0, 0, 0, 0.2);
			border: none;
			border-radius: 1.5rem;
			width: 5rem;
			height: 5rem;
			box-shadow: 0px 5px 0px 0px rgba(0, 0, 0, 0.25),
			0px 10px 5px rgba(0, 0, 0, 0.2);
			color: ${this.state.count>5 ? 'red' : 'blue'};
			font-size: ${this.state.count>5 ? '3.0rem' : '1.5rem'};
			padding: 0.5rem;
			display: flex;
			align-items: center;
			justify-content: center;
			`
		return (
			<Container>
				{this.props.count}
			</Container>
		)
	}
}

export default CounterContainer
