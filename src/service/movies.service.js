import axios from 'axios';
import treatPromise from '../utils/treatPromise';

const token = process.env.REACT_APP_API;

const restClient = () => {
	return axios.create({
		timeout: 500,
		timeoutErrorMessage: 'Request timeout',
		baseURL: 'https://api.themoviedb.org/3',
		headers: {
			'Content-Type': 'application/json',
			Authorization: token ? `Bearer ${token}` : null,
		},
	});
};

export async function getPopularMovies(data) {
	return treatPromise(
		restClient().get(`/movie/popular?api_key=${token}&page=${data.page}`)
	);
}

export async function getMovies(data) {
	const encodeFilter = encodeURI(
		`/search/movie?api_key=${token}&query=${data}`
	);
	return treatPromise(restClient().get(`${encodeFilter}`));
}

export async function getMovieById(data) {
	return treatPromise(restClient().get(`/movie/${data.id}?api_key=${token}`));
}
