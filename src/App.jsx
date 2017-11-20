import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import { block, highIntensity } from './data';
import { TwBarChart, TwTab, TwTabs } from './components';
import { twBlockTheme } from './theme';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const chartContainerStyle = {
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  height: '300px',
};


const BarChart = props => (
  <div style={chartContainerStyle}>
    <div >
      <TwBarChart data={props.mainData} x={props.mainX} y={props.mainY} theme={twBlockTheme} />
    </div>
    <div >
      <TwBarChart data={props.secondaryData} x={props.secondaryX} y={props.secondaryY} />
    </div>
  </div>
);

BarChart.propTypes = {
  mainData: PropTypes.arrayOf(PropTypes.object),
  mainX: PropTypes.string,
  mainY: PropTypes.string,
  secondaryData: PropTypes.arrayOf(PropTypes.object),
  secondaryX: PropTypes.string,
  secondaryY: PropTypes.string,
};

BarChart.defaultProps = {
  mainData: [],
  mainX: PropTypes.string,
  mainY: PropTypes.string,
  secondaryData: PropTypes.string,
  secondaryX: PropTypes.string,
  secondaryY: PropTypes.string,
};

export default () => (
  <MuiThemeProvider>
    <div style={styles}>
      <TwTabs>
        <TwTab label="PAGE VIEWS" value="25,298,789" selected >
          <BarChart
            mainData={block}
            mainX="index"
            mainY="price"
            secondaryData={highIntensity}
            secondaryX="index"
            secondaryY="price"
          />
        </TwTab>
        <TwTab label="TOTAL VISITS" value="5,382,392" />
        <TwTab label="AVG DAILY VISITS" value="119,392" />
        <TwTab label="AVG UNIQUE VISITORS" value="75,298" />
        <TwTab label="PAGES PER VISIT" value="6.6" />
        <TwTab label="AVG. VISIT DURATION" value="14:34" />
      </TwTabs>

    </div>
  </MuiThemeProvider>
);
