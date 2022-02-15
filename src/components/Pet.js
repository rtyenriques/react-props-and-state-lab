// import React from 'react'

// class Pet extends React.Component {
//   render() {
//     return (
//       <div className="card">
//         <div className="content">
//           <a className="header">
//             {/*'♀' OR '♂' */}
//             PET NAME
//           </a>
//           <div className="meta">
//             <span className="date">PET TYPE</span>
//           </div>
//           <div className="description">
//             <p>Age: PET AGE</p>
//             <p>Weight: PET WEIGHT</p>
//           </div>
//         </div>
//         <div className="extra content">
//           <button className="ui disabled button">Already adopted</button>
//           <button className="ui primary button">Adopt pet</button>
//         </div>
//       </div>
//     )
//   }
// }

// export default Pet

import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
  }

  handleBidness= () => {
  this.props.onAdoptPet(this.props.pet.id)

  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name:{this.props.pet.name} {this.props.pet.gender === 'male' ? '♂':'♀'}</a>
          <div className="meta">
            <span className="date">Pet type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age:{this.props.pet.age}</p>
            <p>Weight:{this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
        {!this.props.isAdopted ?
          <button className="ui primary button" onClick={this.handleBidness}>Adopt pet</button> :
          <button className="ui disabled button">Already adopted</button>
        }
        </div>
      </div>
    );
  }
}

export default Pet;