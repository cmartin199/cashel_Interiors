import NavBar from '../../Components/AppBar';

import PDFViewer from '../../Components/PDFViewer'

function Heating() {
  return (
    <div className="App">
      <NavBar/>
      <PDFViewer
        path='/cashellHeatingBrochure.pdf'
        alternateText='Tile Brochure Not Loaded' />
    </div>
  );
}

export default Heating;