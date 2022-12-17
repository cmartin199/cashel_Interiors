import NavBar from '../../Components/AppBar';

import PDFViewer from '../../Components/PDFViewer'

function BathroomPage() {
  return (
    <div className="App">
      <NavBar/>
      <PDFViewer
        path='/cashellBathroomBrochure.pdf'
        alternateText='Tile Brochure Not Loaded' />
    </div>
  );
}

export default BathroomPage;