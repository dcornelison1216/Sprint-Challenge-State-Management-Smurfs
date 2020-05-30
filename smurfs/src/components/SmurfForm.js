import React from 'react';
import { connect } from 'react-redux';
import { addNewSmurf, getSmurfs, updateName, updateAge, updateHeight } from '../actions';

class SmurfForm extends React.Component {
  state = {
    name: '',
    age: '',
    height: '',
    error: ''
  }

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
      error: ''
    })
    if(e.target.name === 'name') {
      this.props.updateName(e.target.value)
    } else if(e.target.name === 'age') {
      this.props.updateAge(e.target.value)
    } else if(e.target.name === 'height') {
      this.props.updateHeight(e.target.value)
    }
  }

  fetchSmurfs = e => {
    e.preventDefault();
    if(this.state.name && this.state.age && this.state.height) {
      this.props.addNewSmurf();
      this.props.getSmurfs();
      this.setState({
        name: '',
        age: '',
        height: '',
        error: ''
      })
    }else{
      this.setState({
        error: 'Smurf it! We wanna know more about this new smurf!!'
      })
    }

  };

  render() {
    this.props.getSmurfs();
    return (
      <>
        <form>
          <input name='name' type='text' placeholder="Smurf's Name" value={this.state.name} onChange={this.handleChanges} />
          <input name='age' type='text' placeholder="Smurf's Age" value={this.state.age} onChange={this.handleChanges} />
          <input name='height' type='text' placeholder="Smurf's Height" value={this.state.height} onChange={this.handleChanges} />
          <button onClick={this.fetchSmurfs} type='submit'>Add Smurf</button>
        </form>
        {this.state.error ? <p className='error'>{this.state.error}</p> : null}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    name: state.name,
    age: state.age,
    height: state.height
  }
}

export default connect(
  mapStateToProps,
  { addNewSmurf, getSmurfs, updateName, updateAge, updateHeight }
)(SmurfForm);
