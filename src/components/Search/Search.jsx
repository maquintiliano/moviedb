import React, { useMemo, useState } from 'react';
import debounce from 'lodash/debounce';
import { Spin } from 'antd';
import { SelectComponent } from './Search.style';

const DebounceSelect = ({
	fetchOptions,
	fetchList,
	setValue,
	debounceTimeout = 500,
	...props
}) => {
	const [fetching, setFetching] = useState(false);
	const debounceFetcher = useMemo(() => {
		const loadOptions = (value) => {
			setFetching(true);
			if (value.length > 2) {
				fetchOptions(value).then(() => {
					setFetching(false);
				});
			}
		};

		return debounce(loadOptions, debounceTimeout);
	}, [fetchOptions, debounceTimeout]);
	return (
		<SelectComponent
			labelInValue
			filterOption={false}
			onSearch={debounceFetcher}
			showSearch
			showArrow={false}
			notFoundContent={fetching ? <Spin size='small' /> : null}
			options={fetchList.map((movie) => ({
				value: movie.id,
				label: movie.title,
			}))}
			onSelect={(value) => {
				window.location.replace(`/${value.key}`);
				setValue('');
			}}
			{...props}
		/>
	);
};

const Search = (props) => {
	const { searchMovies, getMoviesEffect } = props;
	const [value, setValue] = useState();

	return (
		<DebounceSelect
			value={value}
			placeholder='Search movie'
			fetchOptions={getMoviesEffect}
			fetchList={searchMovies}
			onChange={(newValue) => {
				setValue(newValue);
			}}
			style={{
				width: '100%',
			}}
			setValue={setValue}
		/>
	);
};

export default Search;
