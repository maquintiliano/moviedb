import { Row } from 'antd';
import styled from 'styled-components';

export const InfoCard = styled(Row)`
	color: #eeedde;
	background: rgba(0, 0, 0, 0.35);
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(12px);
	width: 100%;
	padding: 7px 10px 7px 10px;
	margin-top: 40px;
`;

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	background-image: ${(props) =>
		`url(https://image.tmdb.org/t/p/w500${props.movie.backdrop_path})`};
	background-size: cover;
	align-items: center;
	height: 84.9vh;
`;

export const TagContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-content: space-around;
	justify-content: flex-start;
`;
