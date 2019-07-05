import React from 'react';
import { PropTypes } from 'prop-types';
import { NavSeasons } from '../../nav/NavSeasons/NavSeasons';
// import { SeasonSelect } from '../../ui/SeasonsSelect/SeasonsSelect';
// import { createSeasonsList } from '../../../utils/createSeasonsList';
import './PageSeasonList.scss';

export const PageSeasonList = props => {
	const [season, setSeason] = React.useState(currentYear - 1);

	const currentYear = new Date().getFullYear();
	
	// return (<SeasonSelect seasons={createSeasonsList()} />);
	return (<NavSeasons />);
};

PageSeasonList.propTypes = {};

PageSeasonList.defaultProps = {};

export default PageSeasonList;