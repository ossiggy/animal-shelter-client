import React from 'react';
import Pet from './components/Pet';

export default class Dashboard extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
        <Pet {...this.props.dogToAdopt} />
        <Pet {...this.props.catToAdopt} />
      </div>
    )
  }
}