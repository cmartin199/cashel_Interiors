import React from 'react';
import NavBar from '../../Components/AppBar';

function MaintenancePage() {
  console.log('maintenance');
  return (
    <div style={{height: '100rem'}}>
      <NavBar/>
      <h1>
        Maintenance
      </h1>
      
    </div>
  );
}

export default MaintenancePage;