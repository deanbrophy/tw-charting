import React from 'react';
import { Divider, Subheader, FlatButton } from 'material-ui';
import PropTypes from 'prop-types';

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

export class TwTabs extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
    };

    this.handleTabClick = this
      .handleTabClick
      .bind(this);
  }

  handleTabClick(selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    const mappedChildren = this
      .props
      .children
      .map((v, i) => ({
        ...v,
        props: {
          ...v.props,
          index: i,
          selected: i === this.state.selectedIndex,
          onClick: this.handleTabClick,
        },
      }));


    const selected = mappedChildren
      .find(v => v.props.selected);

    console.log({ mappedChildren });

    return (
      <div style={outerContainerStyle}>
        <div style={tabContainerStyle}>
          {mappedChildren}
        </div>
        <Divider /> {selected.props.children}
      </div>
    );
  }
}

TwTabs.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.node, PropTypes.arrayOf(PropTypes.node),
  ]),
};

TwTabs.defaultProps = {
  children: null,
};

export const TwTab = (props) => {
  const handleClick = () => {
    console.log({ props });
    props.onClick(props.index);
  };

  return (
    <div style={tabStyle}>
      <FlatButton style={buttonStyle} onClick={handleClick}>
        <Subheader style={subheaderStyle}>{props.label}
        </Subheader>
        <div style={tabValueStyle}>
          {props.value}
        </div>
      </FlatButton>
      {props.selected
        ? <Divider style={dividerStyle} />
        : null}
    </div>
  );
};
TwTab.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

TwTab.defaultProps = {
  selected: false,
};
