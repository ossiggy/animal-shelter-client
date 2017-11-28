import React from 'react';
import Pet from './components/Pet';
import {connect} from 'react-redux';
import {fetchCat, adoptCat} from './actions/cat'
import {fetchDog, adoptDog} from './actions/dog' 

export class Dashboard extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    this.props.dispatch(fetchDog());
    this.props.dispatch(fetchCat());
  }

  adoptCat() {
    this.props.dispatch(adoptCat());
  }

  adoptDog() {
    this.props.dispatch(adoptDog());
  }
  render(){
    if(this.props.cat){
      console.log(this.props.cat.name)
    }
    return(
      <div>
        <Pet {...this.props.cat} onAdoptAnimal={() => this.adoptCat()} />
        <Pet {...this.props.dog} onAdoptAnimal={() => this.adoptDog()} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cat: state.cat.data,
  dog: state.dog.data
})

export default connect(mapStateToProps)(Dashboard)