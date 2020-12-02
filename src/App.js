import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App(){
	return (
		<HashRouter>
			<Navigation />
			<Route path="/" exact={true} component={Home} />
			<Route path="/about" component={About} />
			<Route path="/movie-detail" component={Detail} />
		</HashRouter>
	);
}

export default App;
//컴포넌트의 이름은 대문자로 시작되어야 한다.
//컴포넌트에 데이터 전달시는 props를 사용한다.
//props의 문자열을 제외한 값은 중괄호{}로 감싸야한다.

//npm install prop-types 로 prop-types를 설치하다.
//리액트 서버 시작은 npm start 끌 때는 ctrl-C 또는 Taskkill /IM node.exe /F