import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as appActions from '../actions/app';
// import selectCarActions from '../actions/selectCar';
// import calculatorActions from '../actions/calculator';

export default function(ChildComponent) {
  class CalculatorRouteHandler extends Component {

    static contextTypes = {
      carObj: PropTypes.object.isRequired
    };

    state = {
      modelLoaded: false,
    };

    componentDidMount() {
      const { fetchCar } = this.props;
      const { carId } = this.props.params;
      const { picture, svg } = this.context.carObj;

      if(carId && !picture && !svg) {
        fetchCar(carId, ()=> this.setState({modelLoaded: true}));
      }
    }

    render() {
      return this.state.modelLoaded ? <ChildComponent /> : null;
    }
  }

  return connect(null, {...appActions})(CalculatorRouteHandler);
}
