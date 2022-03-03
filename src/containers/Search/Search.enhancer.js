/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector, useDispatch } from 'react-redux';
import compose from '../../utils/compose';
import withHooks from '../../utils/with-hooks';

export default compose(
	withHooks((props) => {
		/**
    |--------------------------------------------------
    | State
    |--------------------------------------------------
    */

		const Search = useSelector((state) =>
			state.searchMovies.asMutable({ deep: true })
		);

		const state = {
			loading: Search.loading,
			searchMovies: Search.movies,
			meta: Search.meta,
			error: Search.error,
		};

		/**
    |--------------------------------------------------
    | Actions
    |--------------------------------------------------
    */
		const models = useDispatch();

		const actions = {
			getMoviesEffect: models.searchMovies.getMoviesEffect,
		};

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
