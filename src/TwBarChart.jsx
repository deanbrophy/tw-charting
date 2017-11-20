import React from 'react';
import V, { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryContainer } from 'victory';

import { AutoSizer } from 'react-virtualized';
import PropTypes from 'prop-types';
import TwTheme from './theme';
import _ from 'lodash';

const dayMapping = {
  0: 'Sun',
  1: 'Mon',
  2: 'Tue',
  3: 'Wed',
  4: 'Thurs',
  5: 'Fri',
  6: 'Sat',
};


export const TwBarChart = (props) => {
  const { data } = props;

  const dayCount = _(data)
    .map((v) => {
      const returnDate = new Date(v.date);
      returnDate.setHours(0);
      return returnDate;
    })
    .uniqWith(_.isEqual)
    .value()
    .length;

  const tickSpace = data.length / dayCount;

  const tickValues = [...Array(5)].map((v, i) => i * tickSpace);

  const formatTick = (value) => {
    const recordByIndex = data.find(v => v.index === value);

    if (recordByIndex) {
      const recordDate = recordByIndex.date;
      return dayMapping[recordDate.getDay()];
    }
  };


  return (
    <AutoSizer>
      {({ width, height }) => {
        const containerComponentStyle = {
          height,
          width,
        };
        const containerComponent = (<VictoryContainer
          width={width}
          height={height}
          style={containerComponentStyle}
        />);
         return (
           <VictoryChart
             width={width}
             height={height}
             theme={props.theme || TwTheme}
             containerComponent={containerComponent}
             domain={{ x: [-1, data.length] }}

           >
             <VictoryAxis tickFormat={formatTick} tickValues={tickValues} />
             <VictoryAxis dependentAxis orientation="right" />
             <VictoryBar data={props.data} y={props.y} x={props.x} alignment="start" xO={-1} />
           </VictoryChart>
        );
    }}
    </AutoSizer>

  );
};


TwBarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  x: PropTypes.string,
  y: PropTypes.string,
  theme: PropTypes.instanceOf(VictoryTheme),
};

TwBarChart.defaultProps = {
  data: [],
  x: PropTypes.string,
  y: PropTypes.string,
  theme: undefined,
};

export default TwBarChart;
