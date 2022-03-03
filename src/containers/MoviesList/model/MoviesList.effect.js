import { notification } from 'antd';
import { getPopularMovies } from '../../../service/movies.service';

export const getPopularMoviesEffect = (dispatch) => {
	const {
		getMoviesListPending,
		getMoviesListFulfilled,
		getMoviesListRejected,
	} = dispatch.moviesList;

	return async (data, rootState) => {
		getMoviesListPending(true);
		try {
			const response = await getPopularMovies(data);
			getMoviesListFulfilled(response.data);
		} catch (error) {
			error === undefined
				? notification.info({
						message: 'Please, reload the page',
						description: 'If the error persists, wait to reload again',
				  })
				: getMoviesListRejected(error);
		} finally {
			getMoviesListPending(false);
		}
	};
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (dispatch) => ({
	getPopularMoviesEffect: getPopularMoviesEffect(dispatch),
});
