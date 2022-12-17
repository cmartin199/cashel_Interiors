import './PDFViewer.style.css'

interface Params {
  path: string;
  alternateText?: string;
}

function PDFViewer({path, alternateText='File Not Found'}:Params) {


  return (
    <div className='PDFViewer-style'>
      <object data={path} type="application/pdf" width="100%" height="100%">
          <p>{alternateText}</p>
      </object>
    </div>
  );
}
export default PDFViewer;