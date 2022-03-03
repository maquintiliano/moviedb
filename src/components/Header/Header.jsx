import React from 'react';
import { history } from '.././../utils/history';
import Search from '../../containers/Search';
import { StyledHeader } from './Header.style';

const Header = (props) => {
	return (
		<StyledHeader
			className='site-page-header'
			onBack={() => history.push('/')}
			title='MovieFLix'>
			<Search />
		</StyledHeader>
	);
};

export default Header;
