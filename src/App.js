import React from 'react';

class App extends React.Component{
	constructor(props){
		super(props);
		console.log('from constructor');
	}
	state={
		count: 0,
	};
	add =()=>{
		//console.log('add');
		this.setState(current => ({count: current.count + 1}));
	}
	minus =()=>{
		this.setState(current => ({count: current.count -1}));
	}
	componentDidMount(){
		console.log('from componentDidMount');
	}
	componentDidUpdate(){
		console.log('from componentDidUpdate');
	}
	componentWillUnmount(){
		console.log('from componentWillUnmount');
	}

	render(){
		console.log('from render');
		return (
			<div>
				<h1>It's class based.</h1>
				<h3>number is: {this.state.count}</h3>
				<button onClick={this.add}>Add</button>
				<button onClick={this.minus}>Minus</button>
			</div>
		);
	}
}

export default App;
//컴포넌트의 이름은 대문자로 시작되어야 한다.
//컴포넌트에 데이터 전달시는 props를 사용한다.
//props의 문자열을 제외한 값은 중괄호{}로 감싸야한다.

//npm install prop-types 로 prop-types를 설치하다.
//리액트 서버 시작은 npm start 끌 때는 ctrl-C 또는 Taskkill /IM node.exe /F