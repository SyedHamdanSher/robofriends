import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends React.Component {

	constructor() {
		super()
		this.state = {
			robots: [],
			searchField: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ robots: users}));
	}

	onSearch = (event) => {
		this.setState({ searchField: event.target.value })
	}

	render() {
		const filterRobos = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		})
		return !this.state.robots.length ?
			<h1>loading</h1> :
			(
			<div className='tc'>
				<h1>RoboFriends</h1>
				<SearchBox searchChange= {this.onSearch}/>
				<Scroll>
					<CardList robots={filterRobos}/>
				</Scroll>
			</div>
		);
	}
}

export default App;