import Immutable from 'seamless-immutable';
import SearchModel from '../model/Search.model';

const defaultState = Immutable({
	movies: [],
	loading: false,
});

const response = [
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
		backdrop_path: '/zp33lkXqcZWyr7iMxzt3lNDtcPv.jpg',
		genre_ids: [14, 28],
		id: 557,
		original_language: 'en',
		original_title: 'Spider-Man',
		overview:
			'After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.',
		popularity: 204.443,
		poster_path: '/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg',
		release_date: '2002-05-01',
		title: 'Spider-Man',
		video: false,
		vote_average: 7.2,
		vote_count: 15307,
	},
	{
		adult: false,
		backdrop_path: '/x2IqsMlpbOhS8zIUJfyl1yO4gHF.jpg',
		genre_ids: [28, 12, 16, 878],
		id: 324857,
		original_language: 'en',
		original_title: 'Spider-Man: Into the Spider-Verse',
		overview:
			'Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson "Kingpin" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.',
		popularity: 234.232,
		poster_path: '/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg',
		release_date: '2018-12-06',
		title: 'Spider-Man: Into the Spider-Verse',
		video: false,
		vote_average: 8.4,
		vote_count: 10908,
	},
];

describe('SearchModel model', () => {
	it('reducer: Should change movies initial state', () => {
		const payload = response;
		const expectedState = { ...defaultState, movies: payload.results };
		expect(
			SearchModel.reducers.getSearchMoviesFulfilled(defaultState, payload)
		).toEqual(expectedState);
	});

	it('reducer: Should set loading to true', () => {
		const payload = true;
		const expectedState = { ...defaultState, loading: true };

		expect(
			SearchModel.reducers.getSearchMoviesPending(defaultState, payload)
		).toEqual(expectedState);
	});

	it('reducer: Should set loading to false', () => {
		const payload = true;
		const expectedState = { ...defaultState, loading: false };

		const tempState = SearchModel.reducers.getSearchMoviesPending(
			defaultState,
			payload
		);

		expect(
			SearchModel.reducers.getSearchMoviesPending(tempState, !payload)
		).toEqual(expectedState);
	});
});
