import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from 'components/Icon'
import {connect} from 'react-redux'
import {reduxButtonCountAction} from 'Redux/ducks/reduxButtonCount-duck'
import Button from 'components/Button'

const message = `Redux state has changed.`

const ReactIcon = styled(Icon)`
	fill: ${p => (p.active ? `#764ABC` : `rgba(0,0,0,.3)`)};
	width: 3rem;
	height: 3rem;
	transition: 0.3s;
`

@connect(
	({reduxButtonCount: {count}}) => ({
		count,
	}),
	{reduxButtonCountAction}
)
class ReduxCounter extends Component {
	handleClick = () => {
		const {count, reduxButtonCountAction} = this.props
		reduxButtonCountAction(count+1)
	}
	render() {
		const {count} = this.props
		return (
			<Button id="redux" message={message} onClick={this.handleClick}>
				{count}
			</Button>
		)
	}
}
ReduxCounter.propTypes = {
	count: PropTypes.number,
	reduxButtonCountAction: PropTypes.func,
}

export default ReduxCounter
