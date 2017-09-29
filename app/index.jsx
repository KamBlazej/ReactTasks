import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import Root from './_components/Root'

render(
	<AppContainer>
		<Root />
	</AppContainer>,
	document.getElementById('root')
)

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./_components/Root', () => {
		const NextApp = require('./_components/Root').default
		render(
			<AppContainer>
				<NextApp />
			</AppContainer>,
			document.getElementById('root')
		)
	})
}
