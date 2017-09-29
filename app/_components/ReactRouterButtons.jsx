import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withRouter, Link} from 'react-router-dom'
import styled from 'styled-components'
import Icon from 'components/Icon'
import Button from 'components/Button'

const Anchor = styled(Link)`display: block;`
const message = 'Location has changed.'

const ReactRouterIcon = styled(Icon)`
	width: 3rem;
	height: 3rem;
	transition: 0.3s;
	filter: ${p => (p.mybuttons ? `grayscale(0%)` : `grayscale(100%) contrast(0%)`)};
	transition: 0.3s;
`

@withRouter
class ReactRouterButtons extends Component {
	render() {
		
		const {match: {params: {param}}} = this.props
		return (
			<Anchor to={param ? '/' : '/mybuttons'}>
				<Button id="react-router-mybuttons" message={message}>
					{"My Buttons"}
				</Button>
			</Anchor>
		)
	}
}
ReactRouterButtons.propTypes = {
	match: PropTypes.object,
}

export default ReactRouterButtons
