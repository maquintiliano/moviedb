import { init } from '@rematch/core';
import { createLogicMiddleware } from 'redux-logic';
import rematchLogicPlugin from '../utils/rematch-logic';

import moviesList from '../containers/MoviesList/model/MoviesList.model';
import movieDetails from '../containers/MovieDetail/model/MovieDetail.model';
import searchMovies from '../containers/Search/model/Search.model';

const appModels = {
	moviesList: moviesList,
	movieDetails: movieDetails,
	searchMovies: searchMovies,
};
const totalLogics = Object.keys(appModels).reduce((total, key) => {
	let sum = appModels[key].logics?.length || 0;
	return total + sum;
}, 0);

const CHUNK_SIZE = 100;

const createLogicMiddlewareByChunkSize = (chunkSize) => {
	const chunksSize = Math.ceil(totalLogics / chunkSize);
	let middlewaresArray = [];

	for (let index = 0; index < chunksSize; index++) {
		middlewaresArray.push(createLogicMiddleware([], {}));
	}
	return middlewaresArray;
};

const middlewaresArray = createLogicMiddlewareByChunkSize(CHUNK_SIZE);

export const store = init({
	models: appModels,
	plugins: [rematchLogicPlugin(middlewaresArray, CHUNK_SIZE)],
	redux: {
		middlewares: middlewaresArray,
	},
});

window.store = store;
