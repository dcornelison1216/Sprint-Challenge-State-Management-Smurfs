import React from 'react';
import { connect } from 'react-redux';
import { addNewSmurf, getSmurfs, deleteSmurf } from '../actions';

class SmurfForm extends React.Component {
  state = {
    name: '',
    age: '',
    height: '',
    id: '',
    error: '',
    deleteError: ''
  }


  handleChanges = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
      error: '',
      deleteError: ''
    })
  }

  addSmurf = e => {
    e.preventDefault();
    if(this.state.name && this.state.age && this.state.height) {
      this.props.addNewSmurf({name: this.state.name, age: this.state.age, height: this.state.height});
      this.setState({
        name: '',
        age: '',
        height: '',
        error: ''
      })
    }else{
      this.setState({
        error: 'Smurf it! We wanna know more about this new smurf!!',
        deleteError: ''
      })
    }
  };

  removeSmurf = e => {
    e.preventDefault();
    if(this.state.id) {
      this.props.deleteSmurf(this.state.id)
      this.setState({
        id: '',
        deleteError: ''
      })
    }
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <>
        <form>
          <input name='name' type='text' placeholder="Smurf's Name" value={this.state.name} onChange={this.handleChanges} className="input" />
          <input name='age' type='text' placeholder="Smurf's Age" value={this.state.age} onChange={this.handleChanges} className="input" />
          <input name='height' type='text' placeholder="Smurf's Height" value={this.state.height} onChange={this.handleChanges} className="input" />
          <button onClick={this.addSmurf} type='submit' className='button'>Add Smurf</button>
        </form>
        {this.state.error ? <p className='error'>{this.state.error}</p> : null}
        {this.props.error ? <p className='error'>Smurf it! That smurf already lives here.</p> : null}

        <form className='deleteForm'>
          <input name='id' type='text' placeholder="Smurf's id" value={this.state.id} onChange={this.handleChanges} className="input" />
          <button onClick={this.removeSmurf} type='submit' className='button'>Delete Smurf</button>
        </form>
        {this.props.deleteError ? <p className='error'>That smurf doesn't live here! Smurf again.</p> : null}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    name: state.name,
    age: state.age,
    height: state.height,
    error: state.error,
    deleteError: state.deleteError
  }
}

export default connect(
  mapStateToProps,
  { addNewSmurf, getSmurfs, deleteSmurf }
)(SmurfForm);
