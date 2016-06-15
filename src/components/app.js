import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import AppHeader from './appHeader';

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		height: '100%',
	},
	header: {
		flex: 0,
	},
	body: {
		flex: 10,

	},
}

class App extends Component {
  render() {
    return (
      <div style={styles.container}>
      	<div style={styles.header}>
      		<AppHeader />
      	</div>
      	<div style={styles.body} className="app-body">
      		<ReactCSSTransitionGroup
		        component="div" transitionName="example" className="animation-container"
		        transitionEnterTimeout={500} transitionLeaveTimeout={500}
		      >
		      	{React.cloneElement(this.props.children, {
    	        key: location.pathname
    	      })}
      		</ReactCSSTransitionGroup>
      	</div>
      </div>
    );
  }
}

export default App;
