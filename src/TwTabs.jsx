import React from 'react';
import { Divider, Subheader, FlatButton } from 'material-ui';

const tabContainerStyle = {
  display: 'flex',
  width: '100%',
  marginBottom: '2px',
};

const outerContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Roboto, sans-serrif',
};

const tabStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  width: '100%',
  height: '100%',
};

const dividerStyle = {
  height: '3px',
  backgroundColor: '#00796B',
};

const subheaderStyle = {
  margin: 0,
  padding: 0,
  lineHeight: '16px',
  fontSize: '10px',
  textAlign: 'left',
  whiteSpace: 'nowrap',
};

const tabValueStyle = {
  fontSize: '24px',
  whiteSpace: 'nowrap',
};

const buttonStyle = {
  height: '100%',
  width: '100%',
  textAlign: 'left',
  padding: '8px',
};

export const TwTabs = (props) => {
  const selected = props.children.find(f => f.props.selected);

  return (<div style={outerContainerStyle}>
    <div style={tabContainerStyle} >
      {props.children}
    </div>
    <Divider />
    {selected.props.children}
  </div>);
};

export const TwTab = props => (<div style={tabStyle}>
  <FlatButton style={buttonStyle}>
    <Subheader style={subheaderStyle}>{
              props.label}
    </Subheader>
    <div style={tabValueStyle}>
      {props.value}
    </div>
  </FlatButton>
  {props.selected ? <Divider style={dividerStyle} /> : null}
                               </div>);

