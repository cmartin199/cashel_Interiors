import NavBar from '../../Components/AppBar';

import PDFViewer from '../../Components/PDFViewer'

function Harrogate() {
  return (
    <div style={{ height: '100rem' }}>
      <NavBar />
      <PDFViewer
        path={`%PUBLIC_URL%/harrogateBrochure.pdf`}
        alternateText='Tile Brochure Not Loaded' />
    </div>
  );
}

export default Harrogate;