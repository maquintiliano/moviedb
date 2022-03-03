/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector, useDispatch } from 'react-redux';
import compose from '../../utils/compose';
import withHooks from '../../utils/with-hooks';
import { useMount } from 'react-use';
import { useParams } from 'react-router-dom';

export default compose(
	withHooks((props) => {
		/**
    |--------------------------------------------------
    | State
    |--------------------------------------------------
    */

		const Movie = useSelector((state) =>
			state.movieDetails.asMutable({ deep: true })
		);

		const state = {
			loading: Movie.loading,
			movie: Movie.movie,
			meta: Movie.meta,
			error: Movie.error,
		};

		/**
    |--------------------------------------------------
    | Actions
    |--------------------------------------------------
    */
		const models = useDispatch();

		const actions = {
			getMovie: models.movieDetails.getMovie,
		};

		/**
    |--------------------------------------------------
    | Side effects
    |--------------------------------------------------
    */
		const { id } = useParams();
		useMount(() => actions.getMovie({ id }));

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
