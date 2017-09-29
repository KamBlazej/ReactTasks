import React, {Component} from 'react'
import styled from 'styled-components'
import Icon from 'components/Icon'
import Button from 'components/Button'



class CounterButton extends Component {
	constructor(props) {
		super(props)
		
	}
	countPlus = () =>
	{
		this.props.countPlus();
	}
	render() {
		
		const message = `state set to `+(this.props.count)+``
		return (
			<Button
				id="react"
				background={"#ff3434"}
				message={message}
				onClick={() => {
					this.countPlus();
				}}
			>
				{this.props.count}
			</Button>
		)
	}
}

export default CounterButton
