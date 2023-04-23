import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './PDFReport.scss';

class PDFReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [
        { name: 'Biscuits Wrapping Machine Line', size: '100 Kw' },
        { name: 'Horizontal Packaging ine', size: '200 Kw' },
        { name: 'Sandwitching Product Line', size: '300 Kw' },
      ],
    };
  }

  generatePDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [['Machine Name', 'Machine Wastage Occurances(Kw)']],
      body: this.state.files.map((file) => [file.name, file.size]),
    });
    doc.save('file_report.pdf');
  };

  render() {
    return (
      <div>
        <br/>
        <h1 className="pdf-report__h1" >Monthly Report</h1>
        <button className="pdf-report__button" onClick={this.generatePDF}>Generate PDF Report</button>
      </div>
    );
  }
}

export default PDFReport;
