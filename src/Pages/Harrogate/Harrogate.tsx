import NavBar from '../../Components/AppBar';

import PDFViewer from '../../Components/PDFViewer'

import pdf from './harrogateBrochure.pdf';

function Harrogate() {
  return (
    <div style={{ height: '100rem' }}>
      <NavBar />
      <PDFViewer
        path={pdf}
        alternateText='Tile Brochure Not Loaded' />
    </div>
  );
}

export default Harrogate;