import NavBar from '../../Components/AppBar';

import PDFViewer from '../../Components/PDFViewer'


function Tiling() {

  return (
    <div style={{height: '100rem'}}>
      <NavBar />
      <PDFViewer
        path='/cashelTileBrochure.pdf'
        alternateText='Tile Brochure Not Loaded' />
    </div>
    
  );
}

export default Tiling;
