import Immutable from 'seamless-immutable';
import configureEffects from './MoviesList.effect';
import configureLogics from '../../../application/application.logics';

const INITIAL_STATE = Immutable({
	totalCount: 0,
	movies: [],
	loading: false,
	error: null,
	meta: {},
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	/**
  |--------------------------------------------------
  | Name
  |--------------------------------------------------
  */
	name: 'moviesList',

	/**
  |--------------------------------------------------
  | Default state
  |--------------------------------------------------
  */
	state: INITIAL_STATE,

	/**
  |--------------------------------------------------
  | Reducers
  |--------------------------------------------------
  */
	reducers: {
		getMoviesListPending: (state, payload) => state.merge({ loading: payload }),
		getMoviesListFulfilled: (state, payload) =>
			state.merge({
				error: INITIAL_STATE.error,
				movies: payload.results,
				totalCount: payload.total_results,
			}),
		getMoviesListRejected: (state, payload) =>
			state.merge({ ...INITIAL_STATE, error: payload }),
		resetMoviesList: (state) => state.merge({ ...INITIAL_STATE }),
		resetMetaMoviesList: (state) => state.merge({ meta: INITIAL_STATE.meta }),
		resetErrorMoviesList: (state) =>
			state.merge({ error: INITIAL_STATE.error }),
	},

	/**
  |--------------------------------------------------
  | Effects (async actions)
  |--------------------------------------------------
  */
	effects: configureEffects,

	/**
  |--------------------------------------------------
  | Logics
  |--------------------------------------------------
  */
	logics: configureLogics,
};
