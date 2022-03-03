import { notification } from 'antd';
import { getMovieById } from '../../../service/movies.service';

export const getMovie = (dispatch) => {
	const { getMoviePending, getMovieFulfilled, getMovieRejected } =
		dispatch.movieDetails;

	return async (data, rootState) => {
		getMoviePending(true);
		try {
			const response = await getMovieById(data);
			getMovieFulfilled(response.data);
		} catch (error) {
			error === undefined
				? notification.info({
						message: 'Please, reload the page',
						description: 'If the error persists, return to the home page',
				  })
				: getMovieRejected(error);
		} finally {
			getMoviePending(false);
		}
	};
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (dispatch) => ({
	getMovie: getMovie(dispatch),
});
