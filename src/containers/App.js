import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { setSearchField, requestRobots } from '../action'
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearch: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends React.Component {

	componentDidMount(){
		this.props.onRequestRobots();
	}

	render() {
		const { searchField, onSearch, robots, isPending } =this.props;
		const filterRobos = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})
		return isPending ?
			<h1>loading</h1> :
			(
			<div className='tc'>
				<h1>RoboFriends</h1>
				<SearchBox searchChange= {onSearch}/>
				<Scroll>
					<CardList robots={filterRobos}/>
				</Scroll>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);