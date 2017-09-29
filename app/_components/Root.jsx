import React from 'react'
import {ApolloClient, ApolloProvider} from 'react-apollo'
import {BrowserRouter as Router, Route} from 'react-router-dom'
require('../styles/reset.css')
// Import Components
import { browserHistory } from 'react-router';
import Main from 'components/Main'
// Store
import store from 'Redux/store'

const client = new ApolloClient()


const checkUrl=function(previousRoute, nextRoute) {
	console.log(nextRoute);
 }
 /*browserHistory.listen( location =>  {
	//Do your stuff here
	console.log(location);
   });*/
const Root = () => {
	var _this=this;
	console.log("root");
	return (
		<ApolloProvider client={client} store={store}>
			<Router>
				<div>
					<Route path="/:param?" component={Main} />
				</div>
			</Router>
		</ApolloProvider>
	)
}

export default Root
