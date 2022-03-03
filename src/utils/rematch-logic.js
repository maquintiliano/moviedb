import reduxLogic from 'redux-logic';
import chunk from './chunk';

let localStore;
let arrLogics = [];

const decorateProcess = (process) => (context, dipatch, done) => {
	process(context, localStore.dispatch, done);
};

const plugin = (logicMiddlewaresArray, chunkSize) => ({
	onModel(model) {
		const logics = model.logics || [];

		logics.forEach((logic) => {
			if (logic.process) {
				logic.process = decorateProcess(logic.process);
			}

			arrLogics.push(reduxLogic.createLogic(logic));
		});
	},

	onStoreCreated(store) {
		localStore = store;
		const chunks = chunk(arrLogics, 100);
		chunks.forEach((logic, index) => {
			logicMiddlewaresArray[index].addLogic(logic);
		});
	},
});

export default plugin;
