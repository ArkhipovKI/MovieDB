import './App.css';
import Movie from './components/Movie'
import React, { useState, useEffect } from 'react'
import { Input, Pagination } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const GENRES = 'https://api.themoviedb.org/3/genre/movie/list?api_key=f8773dd7a15349b5bd291aff0bdb3025&language=en-US'
//const APIKEY = 'api_key=f8773dd7a15349b5bd291aff0bdb3025&page=1'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=f8773dd7a15349b5bd291aff0bdb3025&query='
const TOP_RATED_API = 'https://api.themoviedb.org/3/movie/top_rated?api_key=f8773dd7a15349b5bd291aff0bdb3025&language=en-US&page='

const App = () => {
	const [movies, setMovies] = useState([])
	const [genresMovie, setGenre] = useState([])
	const [page, setPage] = useState(1)
	const [pages, setPages] = useState('')
	const [searchTherm, setSearchTherm] = useState('')
	const [ratedMovies, setRatedMovies] = useState([])

	useEffect(() => {
		fetch(TOP_RATED_API + page)
			.then((response) => response.json())
			.then((datamovies) => {
				setMovies(datamovies.results)
				setPages(datamovies.total_pages)
			})
		fetch(GENRES)
			.then((response) => response.json())
			.then((genreObj) => {
				setGenre(genreObj.genres)
			})
		fetch(SEARCH_API + page)
	}, [page])

	const handleOnSubmit = (e) => {
		e.preventDefault()
		if (searchTherm) {
			fetch(SEARCH_API + searchTherm)
				.then((response) => response.json())
				.then((searchData) => {
					setMovies(searchData.results)
				})
		}
		setSearchTherm("")

	}

	const handleOnChange = (e) => {
		setSearchTherm(e.target.value)
	}

	// const handleTabRated = (e) => {
	// 	set
	// }
	return (

		<>
			<div className='wrapper'>
				<Tabs defaultActiveKey="1">
					<TabPane tab="Tab 1" key="1">
						<form onSubmit={handleOnSubmit} className='ant-inputer'>
							<Input placeholder='type for search movies' value={searchTherm} onChange={handleOnChange} />
						</form>
						<div className='movie-list' >
							{movies.length > 0 &&
								movies.map(movie => <Movie key={movie.id} {...movie} genres={genresMovie} />)}
						</div>
						<div className='btns'>
							<nav aria-label="Page navigation example">
								<Pagination
									current={page}
									defaultPageSize={page}
									total={pages}
									onChange={setPage}
									showSizeChanger={false}
									size="default"
								/>
							</nav>
						</div>
					</TabPane>
					<TabPane tab="Tab 2" key="2" >
						<form onSubmit={handleOnSubmit} className='ant-inputer'>
							<Input placeholder='type for search movies' value={searchTherm} onChange={handleOnChange} />
						</form>
						<div className='movie-list' >
							{movies.length > 0 &&
								movies.map(movie => <Movie key={movie.id} {...movie} genres={genresMovie} />).filter(movie => movie.rated)}
						</div>
					</TabPane>
				</Tabs>
			</div>
		</>
	);
}

export default App;
