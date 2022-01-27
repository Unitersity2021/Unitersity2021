import './App.css';
import React from 'react';

class App extends React.Component {

 constructor(props) {
   super(props);
   this.state = {
     latitude: null,
     longitude: null,
     userAddress: null
  
   };

   this.getLocation = this.getLocation.bind(this);
   this.getCoordinates = this.getCoordinates.bind(this);
   this.getUserAddress = this.getUserAddress.bind(this);

 }

 getLocation() {
   if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(this.getCoordinates , this.handleLocationError);
   } else {
     alert("Geolocation is not supported by this browser.");
   }    
 }

 getCoordinates(position) {
   console.log(position);
   console.log(position.coords.latitude);
   console.log(position.coords.longitude);
   this.setState({
     latitude: position.coords.latitude,
     longitude: position.coords.longitude
   })

   this.getUserAddress();
 }


 getUserAddress() {
   fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&key=AIzaSyCfgxa5C2aEKmAXuTCbDFnTU_W2Kb7QK0w`)
   .then(response => response.json())
   .then(data => this.setState({
     userAddress: data.results[0].formatted_address
   }))
   .catch(error => console.log(error));
 }

 handleLocationError(error) {
   switch(error.code) {
     case error.PERMISSION_DENIED:
       alert("User denied the request for Geolocation.")
       break;
     case error.POSITION_UNAVAILABLE:
       alert("Location information is unavailable.")
       break;
     case error.TIMEOUT:
       alert("The request to get user location timed out.")
       break;
     case error.UNKNOWN_ERROR:
       alert("An unknown error occurred.")
       break;
     default:
       alert("An unknown error occurred.")
   }
 }

  render() {
    return (
      <div className="">
        
        
        <div className="notification">notification</div>
     
       <div className="container">


         <div className="flex-container">
           <div className="flex-item">

         </div>
         <div className="" style={{marginTop: '20px'}} flex-container>
         <button onClick={this.getLocation}>Get coordinates</button>
         <h4>coordinates</h4>
         <p>latitude: {this.state.latitude}</p>
         <p>longitude: {this.state.longitude}</p>
         <h4>userAddress</h4>
         <p>{this.state.userAddress}</p>

         {
           this.state.latitude && this.state.longitude ?
           <img src={`http://maps.googleapis.com/maps/api/staticmap?&size=600x400&style=visibility:on
           &style=feature:water%7Celement:geometry%7Cvisibility:on
           &style=feature:landscape%7Celement:geometry%7Cvisibility:on

           &markers=icon:https://goo.gl/1oTJ9Y%7CSydney+NSW&key=AIzaSyCfgxa5C2aEKmAXuTCbDFnTU_W2Kb7QK0w`} alt=''/>
           :
           null  
         }
         </div>

       </div>


       <div>
         <h3>CDC DAta</h3>
</div>
       </div>



         

      </div>  

      
    );
  }
}

 export default App;
 