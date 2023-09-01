import React from 'react';
import { Page } from '../Page/Page';
import { NavSeasons } from '../../nav/NavSeasons/NavSeasons';
import './PageSeasonList.scss';

export const PageSeasonList = props => {
	return (
    <Page>
      <NavSeasons />
    </Page>
  );
};

PageSeasonList.propTypes = {};

PageSeasonList.defaultProps = {};

export default PageSeasonList;
