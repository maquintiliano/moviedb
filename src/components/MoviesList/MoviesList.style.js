import { Row, Typography } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	background-image: linear-gradient(to bottom, #000000, #525252, #d9d9d9);
	align-items: center;
`;

export const StyledRow = styled(Row)`
	width: 90%;
	margin: 20px;
`;

export const Title = styled(Typography.Title)`
	color: #eeedde !important;
`;

export const InfoCard = styled.div`
	color: #eeedde;
	background: rgba(0, 0, 0, 0.35);
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(3.1px);
	width: 239px;
	position: absolute;
	bottom: 0;
	left: 0;
	padding: 7px 10px 7px 10px;
`;

export const InfoCardTitle = styled.h3`
	color: #eeedde;
	margin-bottom: 0;
`;
