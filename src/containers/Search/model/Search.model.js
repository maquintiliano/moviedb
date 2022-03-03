import Immutable from 'seamless-immutable';
import configureEffects from './Search.effect';
import configureLogics from '../../../application/application.logics';

const INITIAL_STATE = Immutable({
	movies: [],
	loading: false,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	/**
  |--------------------------------------------------
  | Name
  |--------------------------------------------------
  */
	name: 'searchMovies',

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
		getSearchMoviesPending: (state, payload) =>
			state.merge({ loading: payload }),
		getSearchMoviesFulfilled: (state, payload) =>
			state.merge({ movies: payload.results }),
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
