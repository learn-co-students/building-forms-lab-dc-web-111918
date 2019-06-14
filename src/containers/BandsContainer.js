import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';
import Band from '../components/Band';

class BandsContainer extends Component {
  renderAllBands = () => this.props.bands.map((band, idx) => <Band key={idx} name={band}/>)

  render() {
    return(
      <div>
        <BandInput />
        <div>
          <h3>All Bands:</h3>
          <div>{this.renderAllBands()}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps)(BandsContainer);
