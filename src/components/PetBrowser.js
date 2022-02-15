// import React from 'react'

// import Pet from './Pet'

// class PetBrowser extends React.Component {
//   render() {
//     return <div className="ui cards">PET COMPONENT SHOULD GO HERE</div>
//   }
// }

// export default PetBrowser


import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const deeezPets = this.props.pets.map(pet =>
      <Pet
        pet={pet}
        key={pet.id}
        onAdoptPet={this.props.onAdoptPet}
        isAdopted={this.props.adoptedPets.includes(pet.id)}
      />
    )

    return (
      <div className="ui cards">
        {deeezPets}
      </div>
    );
  }
}

export default PetBrowser;