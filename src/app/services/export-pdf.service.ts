import { Injectable } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class ExportPdfService {

  constructor() { }

  // exportToPdf(elementId: string, filename: string) {
  //   html2canvas(document.getElementById(elementId) as HTMLElement).then((canvas) => {
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdf = new jspdf('p', 'mm', 'a4');
  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const pdfHeight = pdf.internal.pageSize.getHeight();
  //     pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  //     pdf.save(filename + '.pdf');
  //   });
  // }
}
