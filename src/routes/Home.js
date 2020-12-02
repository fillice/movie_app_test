import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component{
	state={
		isLoading: true,
		movies: [],
	};
	getMovies=async()=>{
		const{
			data:{
				data:{movies},
			},
		} = await axios.get('https://yts.mx/api/v2/list_movies.json');
		this.setState({movies:movies, isLoading:false});
		//console.log(movies);
	};

	componentDidMount(){
		//영화 데이터 로딩
		this.getMovies();
	}
		
	render(){
		const{isLoading, movies}=this.state;
		return (
			<section className="container">
				{isLoading ? (
					<div className="loader">
						<span className="loader__text">Loading...</span>
					</div>
				) : (
					<div className="movies">
						{movies.map((movie) =>(
							<Movie 
								key={movie.id}
								id={movie.id}
								year={movie.year}
								title={movie.title}
								summary={movie.summary}
								poster={movie.medium_cover_image}
								genres={movie.genres}
							/>
						))}
					</div>
				)}
			</section>
		);
	}
}

export default Home;
//컴포넌트의 이름은 대문자로 시작되어야 한다.
//컴포넌트에 데이터 전달시는 props를 사용한다.
//props의 문자열을 제외한 값은 중괄호{}로 감싸야한다.

//npm install prop-types 로 prop-types를 설치하다.
//리액트 서버 시작은 npm start 끌 때는 ctrl-C 또는 Taskkill /IM node.exe /F