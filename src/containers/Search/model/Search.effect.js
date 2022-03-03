import { notification } from 'antd';
import { getMovies } from '../../../service/movies.service';

export const getMoviesEffect = (dispatch) => {
	const { getSearchMoviesPending, getSearchMoviesFulfilled } =
		dispatch.searchMovies;

	return async (data, rootState) => {
		getSearchMoviesPending(true);
		try {
			const response = await getMovies(data);
			getSearchMoviesFulfilled(response.data);
		} catch (error) {
			notification.info({
				message: 'Movie not found',
				top: 120,
				placement: 'topRight',
			});
		} finally {
			getSearchMoviesPending(false);
		}
	};
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (dispatch) => ({
	getMoviesEffect: getMoviesEffect(dispatch),
});
