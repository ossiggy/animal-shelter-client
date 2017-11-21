import React from 'react';
import Pet from './components/Pet';

export default class Dashboard extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
        <Pet {...this.props.dogToAdopt} onAdoptAnimal={() => console.log('dog')} />
        <Pet {...this.props.catToAdopt} onAdoptAnimal={() => console.log('cat')} />
      </div>
    )
  }
}