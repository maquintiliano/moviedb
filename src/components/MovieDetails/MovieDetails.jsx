import React from 'react';
import {
	Row,
	Col,
	Typography,
	Tag,
	Image,
	Rate,
	Descriptions,
	Spin,
} from 'antd';
import { Container, InfoCard, TagContainer } from './MovieDetails.style';

const MoviesList = (props) => {
	const { movie, loading } = props;

	return (
		<Spin spinning={loading} size='large'>
			<Container movie={movie}>
				<InfoCard type='flex' justify='space-around'>
					<Col xs={12} sm={12} md={6} lg={6}>
						<Image
							alt={movie.title || movie.original_title}
							src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
							style={{ height: '450px' }}
						/>
					</Col>
					<Col xs={12} sm={12} md={14} lg={14}>
						<Typography.Title level={1} style={{ color: '#fff' }}>
							{movie.title || movie.original_title}
						</Typography.Title>
						<Row>
							<h2 style={{ color: '#fff' }}>{movie.tagline}</h2>
						</Row>
						<Typography.Paragraph style={{ color: '#fff' }}>
							{movie.overview}
						</Typography.Paragraph>
						<Descriptions>
							<Descriptions.Item
								label='Release'
								labelStyle={{ color: '#fff' }}
								contentStyle={{ color: '#fff' }}>
								{movie.release_date}
							</Descriptions.Item>
							<Descriptions.Item
								label='Runtime'
								labelStyle={{ color: '#fff' }}
								contentStyle={{ color: '#fff' }}>
								{`${movie.runtime}min`}
							</Descriptions.Item>
							<Descriptions.Item
								label='Vote average'
								labelStyle={{ color: '#fff' }}>
								<Rate
									disabled
									allowHalf
									value={movie.vote_average / 2}
									style={{ lineHeight: '0', fontSize: '14px' }}
								/>
								<span style={{ marginLeft: '10px', color: '#fff' }}>
									{movie.vote_average}
								</span>
							</Descriptions.Item>
						</Descriptions>

						<Descriptions>
							<Descriptions.Item
								label='Original language'
								labelStyle={{ color: '#fff' }}>
								<Tag>{movie.original_language}</Tag>
							</Descriptions.Item>
							<Descriptions.Item
								label='Spoken Languages'
								labelStyle={{ color: '#fff' }}>
								<TagContainer>
									{movie.spoken_languages?.map((spoken, index) => (
										<Tag key={index} style={{ marginBottom: '10px' }}>
											{spoken.english_name}
										</Tag>
									))}
								</TagContainer>
							</Descriptions.Item>
						</Descriptions>

						<Descriptions>
							<Descriptions.Item
								label='Production companies'
								labelStyle={{ color: '#fff' }}>
								<TagContainer>
									{movie.production_companies?.map((company, index) => (
										<Tag key={index} style={{ marginBottom: '10px' }}>
											{company.name}
										</Tag>
									))}
								</TagContainer>
							</Descriptions.Item>
						</Descriptions>

						<Descriptions>
							<Descriptions.Item label='Genres' labelStyle={{ color: '#fff' }}>
								<TagContainer>
									{movie.genres?.map((genre, index) => (
										<Tag key={index} style={{ marginBottom: '10px' }}>
											{genre.name}
										</Tag>
									))}
								</TagContainer>
							</Descriptions.Item>
						</Descriptions>
					</Col>
				</InfoCard>
			</Container>
		</Spin>
	);
};
export default MoviesList;
