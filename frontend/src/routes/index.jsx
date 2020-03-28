import React, { Suspense } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import GameIn from '~/pages/GameIn';

function Routes() {
	return (
		<Switch>
			<Suspense fallback="Loading...">
				<Route
					exact
					path="/"
					component={() => (
						<div>
							Home Page
							<Link to="/game">Game</Link>
						</div>
					)}
				/>
				<Route path="/game" component={GameIn} />
			</Suspense>
		</Switch>
	);
}

export default Routes;
