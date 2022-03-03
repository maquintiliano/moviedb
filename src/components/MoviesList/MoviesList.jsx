import React, { useState } from 'react';
import {
	Col,
	Card,
	Pagination,
	Image,
	Typography,
	Rate,
	BackTop,
	Spin,
} from 'antd';
import {
	Container,
	InfoCard,
	InfoCardTitle,
	StyledRow,
} from './MoviesList.style';
import history from '../../utils/history';

const MoviesList = (props) => {
	const { popularMovies, totalCount, getPopularMoviesEffect, loading } = props;
	const [show, setShow] = useState(false);
	const [cardId, setCardId] = useState();

	const mouseHover = (card) => {
		setShow((prev) => !prev);
		setCardId(card);
	};

	return (
		<Container>
			<StyledRow type='flex' justify='space-between'>
				<Typography.Title style={{ color: '#eeedde', width: '100%' }}>
					Popular Movies
				</Typography.Title>
				{popularMovies?.map((movie) => (
					<Col
						xs={24}
						sm={12}
						md={6}
						lg={6}
						key={movie.id}
						style={{ marginBottom: '20px' }}>
						<Spin spinning={loading} size='large'>
							<Card
								hoverable
								style={{ width: '240px', height: '300px' }}
								onClick={() => history.push(`/${movie.id}`)}
								onMouseEnter={() => mouseHover(movie.id)}
								onMouseLeave={() => mouseHover(movie.id)}
								cover={
									<Image
										alt={movie.original_title}
										src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
										style={{ maxHeight: '300px', position: 'relative' }}
										preview={false}
									/>
								}>
								{show && movie.id === cardId ? (
									<InfoCard>
										<InfoCardTitle
											style={{ color: '#eeedde', marginBottom: 0 }}>
											{movie.title}
										</InfoCardTitle>
										<Rate
											disabled
											allowHalf
											value={movie.vote_average / 2}
											style={{ fontSize: '13px' }}
										/>
										<span style={{ marginLeft: '10px' }}>
											{movie.vote_average}
										</span>
									</InfoCard>
								) : (
									''
								)}
							</Card>
						</Spin>
					</Col>
				))}
			</StyledRow>
			<Pagination
				defaultCurrent={1}
				total={totalCount < 10000 ? totalCount : 10000}
				pageSize={20}
				showSizeChanger={false}
				onChange={(page, size) =>
					getPopularMoviesEffect({ page: page === 0 ? 1 : page })
				}
				style={{ marginBottom: '20px' }}
			/>
			<BackTop />
		</Container>
	);
};
export default MoviesList;
