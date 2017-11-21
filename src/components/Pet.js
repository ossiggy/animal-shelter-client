import React from 'react';

export default function Pet(props){
  return(
    <section className='animal'>
        <header>
          {props.name}
          <img 
          src={props.imageURL} 
          alt={props.imageDescription} />
        </header>
        <main>
          <dl>
            <dt>Gender</dt>
            <dd>{props.gender}</dd>
            <dt>Age</dt>
            <dd>{props.age}</dd>
            <dt>Breed</dt>
            <dd>{props.breed}</dd>
            <dt>Story</dt>
            <dd>{props.story}</dd>
          </dl>
          <button onClick={() => props.onAdoptAnimal()}>Adopt</button>
        </main>
      </section>
  )
}