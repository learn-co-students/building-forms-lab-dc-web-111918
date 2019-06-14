import React, { Component } from 'react';
import { connect } from 'react-redux';

class BandInput extends Component {
  state = {
    name: ''
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: ''
    });
  }

  render() {
    return(
      <div>
        <h3>Band Input</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Add Band</label>
          <input type="text" onChange={this.handleChange} value={this.state.name}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (bandData) => dispatch({type: 'ADD_BAND', payload: bandData})
  }
}

export default connect(null, mapDispatchToProps)(BandInput);
