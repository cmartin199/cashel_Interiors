import NavBar from '../../Components/AppBar';

import PDFViewer from '../../Components/PDFViewer'

function BathroomPage() {
  return (
    <div style={{height: '100rem'}}>
      <NavBar/>
      <PDFViewer
        path='/cashelBathroomBrochure.pdf'
        alternateText='Tile Brochure Not Loaded' />
    </div>
  );
}

export default BathroomPage;