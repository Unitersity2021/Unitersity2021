 import './App.css';
 import React from 'react';
 import AppStart from './components/AppStart';
 
 function App() {
   return (
     <div className="App">
       <AppStart />
       
     </div>
   );
 }
 
 export default App;
 



//  class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       latitude: null,
//       longitude: null,
//       userAddress: null
//     };

//     this.getLocation = this.getLocation.bind(this);
//     this.getCoordinates = this.getCoordinates.bind(this);
//     this.getUserAddress = this.getUserAddress.bind(this);
//   }

//   getLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(this.getCoordinates , this.handleLocationError);
//     } else {
//       alert("Geolocation is not supported by this browser.");
//     }    
//   }

//   getCoordinates(position) {
//     console.log(position);
//     console.log(position.coords.latitude);
//     console.log(position.coords.longitude);
//     this.setState({
//       latitude: position.coords.latitude,
//       longitude: position.coords.longitude
//     })

//     this.getUserAddress();
//   }

//   getUserAddress() {
//     fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&key=AIzaSyCfgxa5C2aEKmAXuTCbDFnTU_W2Kb7QK0w`)
//     .then(response => response.json())
//     .then(data => this.setState({
//       userAddress: data.results[0].formatted_address
//     }))
//     .catch(error => console.log(error));
//   }

//   handleLocationError(error) {
//     switch(error.code) {
//       case error.PERMISSION_DENIED:
//         alert("User denied the request for Geolocation.")
//         break;
//       case error.POSITION_UNAVAILABLE:
//         alert("Location information is unavailable.")
//         break;
//       case error.TIMEOUT:
//         alert("The request to get user location timed out.")
//         break;
//       case error.UNKNOWN_ERROR:
//         alert("An unknown error occurred.")
//         break;
//       default:
//         alert("An unknown error occurred.")
//     }
//   }

//    render() {
//      return (
//        <div className="">
               
//          <div>notification
//           <p>If two users are negative dont set notification</p>
//           <p>If two users are positive set notification avoid cross contamination </p> 
//          <p>If tested positive users should be located more</p>
//          <p>If tested negative users should be located less</p>
//          <p> If the distance between two users it less then 10 feet set notification</p>

//          <p>
//            CDC dta base on the country of the user and the time of the test
//          </p>
         
//          </div>
      
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12">
//               <div className="card">
//                 <div className="card-header">
//                   <h4>Covid-19 Free App</h4>
//                   <form className="form-inline">
//                     <button className="btn btn-primary" onClick={this.getLocation}>Get Current Location</button>
//                     <input className="form-control" type="text" placeholder="Enter your phone number" />
//                     <input className="form-control" type="text" placeholder="Test Result" />
//                     <input className="form-control" type="text" placeholder="Enter your cough" />
//                     <input className="form-control" type="text" placeholder="Enter your shortness of breath" />
//                     <input className="form-control" type="text" placeholder="Enter your sneezing" />
//                     <input className="form-control" type="text" placeholder="Enter your breathing difficulty" />
//                     <input className="form-control" type="text" placeholder="Enter your mask" />
//                     <input className="form-control" type="text" placeholder="Enter your distance" />
                  
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="" style={{marginTop: '20px'}} flex-container>
//           <button onClick={this.getLocation}>Get coordinates</button>
//           <h4>coordinates</h4>
//           <p>latitude: {this.state.latitude}</p>
//           <p>longitude: {this.state.longitude}</p>
//           <h4>userAddress</h4>
//           <p>{this.state.userAddress}</p>
//           {
//             this.state.latitude && this.state.longitude ?
//             <img src={`http://maps.googleapis.com/maps/api/staticmap?&size=600x400&style=visibility:on
//             &style=feature:water%7Celement:geometry%7Cvisibility:on
//             &style=feature:landscape%7Celement:geometry%7Cvisibility:on

//             &markers=icon:https://goo.gl/1oTJ9Y%7CSydney+NSW&key=AIzaSyCfgxa5C2aEKmAXuTCbDFnTU_W2Kb7QK0w`} alt=''/>
//             :
//             null  
//           }
//           </div>
//         </div>

//         <div>
//           <h3>CDC DAta</h3>

//           {/* <ul>
//         {
//           this.state.persons
//             .map(person =>
//               <li key={person.id}>{person.name}</li>
//             )
//         }
//       </ul> */}

//         </div>

//         </div>      
//      );
//    }
//  }

//   export default App;

// // //Latitude is : 45.40898507896275
// // //Longitude is : -122.76804318155106

// // export default GoogleApiWrapper({
// //   apiKey: 'AIzaSyCfgxa5C2aEKmAXuTCbDFnTU_W2Kb7QK0w'
// // })(App);