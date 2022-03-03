import { PageHeader } from 'antd';
import styled from 'styled-components';

export const StyledHeader = styled(PageHeader)`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	background-color: #f7f6f6;

	&& .ant-page-header-heading-title {
		color: #141e27;
	}
	&& .ant-page-header-back-button {
		color: #141e27;
	}
`;
