import NavBar from '../../Components/AppBar';

import PDFViewer from '../../Components/PDFViewer'

function Heating() {
  return (
    <div style={{height: '100rem'}}>
      <NavBar/>
      <PDFViewer
        path='/cashellHeatingBrochure.pdf'
        alternateText='Tile Brochure Not Loaded' />
    </div>
  );
}

export default Heating;