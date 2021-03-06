import React, {Component,} from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../store/actions/app';
import _uniq from 'lodash/uniq';
import _map from 'lodash/map';
// import moment from 'moment';
import Autosuggest from 'react-autosuggest';
import './style.scss';

// When suggestion is clicked, Autosuggest needs to populate the input element
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion;

class TaskInput extends Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      hasError: false,
      suggestions: []
    };
  }

  onChange(event, {newValue}) {
    this.setState({
      value: newValue,
    });
    this.props.actions.updateTaskName(newValue);
  }

  onKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.runTask();
    }
  };

  runTask = () => {
    if(this.state.value === '') {
      this.sayNo();
      return false;
    }
    this.props.actions.unloadTask();
    this.props.actions.startRek();
  };

  sayNo = () => {
    setInterval(() => {
      this.setState({hasError: false})
    }, 2000);
    this.setState({hasError: true});
  };

  // Use your imagination to render suggestions.
  renderSuggestion(suggestion) {
    return (
      <div>
        {suggestion}
      </div>
    );
  }


  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({value}) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  getSuggestions(value) {
    console.info('getSuggestions', value);
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    const tasks = _map(this.props.app.tasks, (task) => task.text);
    const suggestions = _uniq(tasks);

    return inputLength === 0 ? [] : suggestions.filter(taskName =>
      taskName.toLowerCase().slice(0, inputLength) === inputValue
    );
  }

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const {value, suggestions} = this.state;
    // Autosuggest will pass through all these props to the input element.
    const inputProps = {
      placeholder: 'Task name',
      value,
      onChange: this.onChange.bind(this),
      onKeyUp: this.onKeyUp,
      autoFocus: true,
    };

    // Finally, render it!
    return !this.props.app.taskLoaded ? null : (
      <div className={classNames([
        'rek-input',
        this.state.hasError && 'rek-input_error',
      ])}>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={this.renderSuggestion.bind(this)}
          inputProps={inputProps}
        />
        <button
          className="rek-input__return"
          onClick={this.runTask}
        >
          Go!
        </button>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  app: state.app
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskInput);

