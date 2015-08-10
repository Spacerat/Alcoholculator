import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BeerForm from '../components/BeerForm';
import BeerList from '../components/BeerList';
import * as BeerActions from '../actions/BeerActions';

class BeerApp extends Component {
  render() {
    const { beers, dispatch } = this.props;
    const actions = bindActionCreators(BeerActions, dispatch);
    return (
    	<div className="container">
      <div className="header">
      <h1>Alcoholculator</h1>
      </div>
        <div className="row">
        <div className="col-md-6">
    		  <BeerForm actions={actions} />
        </div>
        <hr className="visible-sm visible-xs" />
        <div className="col-md-6">
          <BeerList actions={actions} beers={beers} />
        </div>
        </div>
      </div>
    );
  }
}

function select(state) {
  return {
    beers: state.beers
  };
}

export default connect(select)(BeerApp);