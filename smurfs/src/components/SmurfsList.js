import React from 'react';
import { connect } from 'react-redux';

class SmurfsList extends React.Component {

  render() {

    const smurfs = this.props.smurfs

    return (
      <div className='smurfsListDiv'>
        {smurfs.map((smurf, index) => (
          <div key={index} className='smurf'>
            <p className='details'>{smurf.name}</p>
            <p className='details'>{smurf.age}</p>
            <p className='details'>{smurf.height}</p>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(
  mapStateToProps,
  {}
)(SmurfsList);
