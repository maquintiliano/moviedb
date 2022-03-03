import Immutable from 'seamless-immutable';
import MovieDetailModel from '../model/MovieDetail.model';

const defaultState = Immutable({
	movie: {},
	meta: {},
	loading: false,
	error: null,
});

const response = {
	adult: false,
	backdrop_path: '/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg',
	genre_ids: [28, 12, 878],
	id: 634649,
	original_language: 'en',
	original_title: 'Spider-Man: No Way Home',
	overview:
		'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
	popularity: 5944.171,
	poster_path: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
	release_date: '2021-12-15',
	title: 'Spider-Man: No Way Home',
	video: false,
	vote_average: 8.3,
	vote_count: 8569,
};

describe('MovieDetail test model', () => {
	it('reducer: Should return a Movie', () => {
		const payload = response;
		const expectedState = {
			...defaultState,
			movie: payload,
		};

		expect(
			MovieDetailModel.reducers.getMovieFulfilled(defaultState, payload)
		).toEqual(expectedState);
	});

	it('reducer: Should set loading to false', () => {
		const payload = false;
		const expectedState = {
			...defaultState,
		};

		expect(
			MovieDetailModel.reducers.getMoviePending(defaultState, payload)
		).toEqual(expectedState);
	});

	it('reducer: Should set loading to true', () => {
		const payload = true;
		const expectedState = {
			...defaultState,
			loading: payload,
		};

		expect(
			MovieDetailModel.reducers.getMoviePending(defaultState, payload)
		).toEqual(expectedState);
	});

	it('reducer: Should return an error', () => {
		const payload = {
			code: '500',
			message: 'Error on get movie',
		};

		const expectedState = {
			...defaultState,
			error: payload,
		};

		expect(
			MovieDetailModel.reducers.getMovieRejected(defaultState, payload)
		).toEqual(expectedState);
	});

	it('reducer: Should return the default state', () => {
		const payload = {
			code: '404',
			message: 'Error',
		};

		const expectedState = {
			...defaultState,
		};

		const newState = MovieDetailModel.reducers.getMoviePending(
			defaultState,
			payload
		);

		expect(MovieDetailModel.reducers.resetMovie(newState)).toEqual(
			expectedState
		);
	});

	it('reducer: Should reset error', () => {
		const payload = {
			code: '500',
			message: 'Error on get movie',
		};

		const expectedState = defaultState;

		const newState = MovieDetailModel.reducers.getMovieRejected(
			defaultState,
			payload
		);

		expect(MovieDetailModel.reducers.resetErrorMovie(newState)).toEqual(
			expectedState
		);
	});

	it('reducer: Should reset meta', () => {
		const payload = response;

		const newState = MovieDetailModel.reducers.getMovieFulfilled(
			defaultState,
			payload
		);

		const expectedState = { ...newState, meta: defaultState.meta };

		expect(MovieDetailModel.reducers.resetMetaMovie(newState)).toEqual(
			expectedState
		);
	});
});
