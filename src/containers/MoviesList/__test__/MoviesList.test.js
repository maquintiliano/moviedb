import Immutable from 'seamless-immutable';
import MoviesList from '../model/MoviesList.model';

const defaultState = Immutable({
	totalCount: 0,
	movies: [],
	loading: false,
	error: null,
	meta: {},
});

const response = {
	total_results: 3,
	results: [
		{
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
		},
		{
			adult: false,
			backdrop_path: '/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg',
			genre_ids: [16, 35, 10751, 14],
			id: 568124,
			original_language: 'en',
			original_title: 'Encanto',
			overview:
				"The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
			popularity: 2872.237,
			poster_path: '/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg',
			release_date: '2021-11-24',
			title: 'Encanto',
			video: false,
			vote_average: 7.7,
			vote_count: 4850,
		},
		{
			adult: false,
			backdrop_path: '/4OTYefcAlaShn6TGVK33UxLW9R7.jpg',
			genre_ids: [28, 12, 53, 10752],
			id: 476669,
			original_language: 'en',
			original_title: "The King's Man",
			overview:
				"As a collection of history's worst tyrants and criminal masterminds gather to plot a war to wipe out millions, one man must race against time to stop them.",
			popularity: 2585.628,
			poster_path: '/aq4Pwv5Xeuvj6HZKtxyd23e6bE9.jpg',
			release_date: '2021-12-22',
			title: "The King's Man",
			video: false,
			vote_average: 7.1,
			vote_count: 1576,
		},
	],
	loading: false,
	error: null,
};

describe('MoviesList test model', () => {
	it('reducer: Should set loading to true', () => {
		const payload = true;
		const expectedState = { ...defaultState, loading: true };

		expect(
			MoviesList.reducers.getMoviesListPending(defaultState, payload)
		).toEqual(expectedState);
	});

	it('reducer: Should set loading to false', () => {
		const payload = true;
		const expectedState = { ...defaultState, loading: false };

		const tempState = MoviesList.reducers.getMoviesListPending(
			defaultState,
			payload
		);

		expect(
			MoviesList.reducers.getMoviesListPending(tempState, !payload)
		).toEqual(expectedState);
	});

	it('reducer: Should return an error', () => {
		const payload = {
			message: 'Please, reload the page',
		};

		const expectedState = {
			...defaultState,
			error: payload,
		};

		expect(
			MoviesList.reducers.getMoviesListRejected(defaultState, payload)
		).toEqual(expectedState);
	});

	it('reducer: Should return a response', () => {
		const payload = response;
		const expectedState = {
			...defaultState,
			movies: payload.results,
			totalCount: payload.total_results,
		};

		expect(
			MoviesList.reducers.getMoviesListFulfilled(defaultState, payload)
		).toEqual(expectedState);
	});

	it('reducer: Should return the default state', () => {
		const tempState = defaultState;

		expect(MoviesList.reducers.resetMoviesList(tempState)).toEqual(
			defaultState
		);
	});

	it('reducer: Should reset error', () => {
		const payload = {
			message: 'Please, reload the page',
		};

		const expectedState = defaultState;

		const newState = MoviesList.reducers.getMoviesListRejected(
			defaultState,
			payload
		);

		expect(MoviesList.reducers.resetMoviesList(newState)).toEqual(
			expectedState
		);
	});
});
