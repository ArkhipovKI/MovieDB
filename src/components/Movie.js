import React, { useState, useEffect, useRef } from 'react'
import { Rate } from 'antd';

const IMG_API = 'https://image.tmdb.org/t/p/w500'

const Movie = ({ poster_path, id, genre_ids, overview, release_date, title, vote_average, genres, getRatedMovies }) => {
	const [starValue, setStarValue] = useState(0)
	const rateRef = useRef()

	const arr = genres.reduce((acc, { id, name }) => {
		if (genre_ids.includes(id)) {
			acc.push(name);
		}
		return acc;
	}, []);

	const genreList = arr.map(item => {
		return <span key={Math.random() * 10000} className='movie-genre'>{item + ' '}</span>
	})

	const handleOnChange = (starValue) => {
		setStarValue(starValue)
	}

	return (
		<div className='movie'>
			<img className='movie-img ' src={IMG_API + poster_path} alt={title} />
			<div className='movie-info'>
				<h2 className='movie-title'>{title}</h2>
				<span className='movie-rate'>{vote_average}</span>
				<span className='movie-date'>{release_date}</span>
				<ul className='movie-genres'>
					{genreList}
				</ul>
				<p className='movie-description'>{overview}</p>
				<Rate allowHalf count={10} ref={rateRef} value={starValue || null} onChange={handleOnChange} />
			</div>
		</div>
	)
}

export default Movie