import Immutable from 'seamless-immutable';
import configureEffects from './MovieDetail.effect';
import configureLogics from '../../../application/application.logics';

const INITIAL_STATE = Immutable({
	movie: {},
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
	name: 'movieDetails',

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
		getMoviePending: (state, payload) => state.merge({ loading: payload }),
		getMovieFulfilled: (state, payload) =>
			state.merge({
				error: INITIAL_STATE.error,
				movie: payload,
			}),
		getMovieRejected: (state, payload) =>
			state.merge({ ...INITIAL_STATE, error: payload }),
		resetMovie: (state) => state.merge({ ...INITIAL_STATE }),
		resetMetaMovie: (state) => state.merge({ meta: INITIAL_STATE.meta }),
		resetErrorMovie: (state) => state.merge({ error: INITIAL_STATE.error }),
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
