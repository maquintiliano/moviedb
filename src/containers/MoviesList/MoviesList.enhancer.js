/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector, useDispatch } from 'react-redux';
import compose from '../../utils/compose';
import withHooks from '../../utils/with-hooks';
import { useMount } from 'react-use';

export default compose(
	withHooks((props) => {
		/**
    |--------------------------------------------------
    | State
    |--------------------------------------------------
    */

		const Movies = useSelector((state) =>
			state.moviesList.asMutable({ deep: true })
		);

		const state = {
			totalCount: Movies.totalCount,
			loading: Movies.loading,
			popularMovies: Movies.movies,
			meta: Movies.meta,
			error: Movies.error,
		};

		/**
    |--------------------------------------------------
    | Actions
    |--------------------------------------------------
    */
		const models = useDispatch();

		const actions = {
			getPopularMoviesEffect: models.moviesList.getPopularMoviesEffect,
		};

		/**
    |--------------------------------------------------
    | Side effects
    |--------------------------------------------------
    */

		useMount(() => models.moviesList.getPopularMoviesEffect({ page: 1 }));

		/**
    |--------------------------------------------------
    | Returning props
    |--------------------------------------------------
    */
		return {
			...state,
			...actions,
			...props,
		};
	})
);
