import React from 'react';
import NavBar from '../../Components/AppBar';
import PDFViewer from '../../Components/PDFViewer';
import pdf from './cashelBathroomBrochure.pdf';

function BathroomPage() {
  return (
    <div style={{ height: '100rem' }}>
      <NavBar />
      <PDFViewer
        path={pdf}
        alternateText='Tile Brochure Not Loaded' />
    </div>
  );
}

export default BathroomPage;