import { notification } from 'antd';
import when from '../utils/when-logic';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
	when([/Rejected$/], (actions, { rootState, action }) => {
		const { payload } = action;
		if (payload?.data?.status_message.includes(':')) {
			const messageSplit = payload.status_message.split(':');
			notification.error({
				message: messageSplit[0],
				description: messageSplit[1],
			});
		} else {
			notification.error({
				description: payload?.status_message,
			});
		}
	}),
];
