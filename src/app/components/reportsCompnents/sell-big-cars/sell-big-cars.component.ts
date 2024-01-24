import { Component, ElementRef, ViewChild } from '@angular/core';
import { ReportsService } from '../../../services/reports.service';
import * as XLSX from 'xlsx';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import { MatTableDataSource } from '@angular/material/table';
@ViewChild('table', { read: ElementRef })

@Component({
  selector: 'app-sell-big-cars',
  templateUrl: './sell-big-cars.component.html',
  styleUrl: './sell-big-cars.component.css'
})
export class SellBigCarsComponent {
  table!: ElementRef;
  dataSource: any;
  displayedColumns: string[] = ["vehicleType",'type','color', 'module','plateNumber','structureNumber','destinationType',"buyingDestination" ,'buyerIdentity',"dateOfSell","value"];

  constructor(private _ReportsService:ReportsService){}
  ngOnInit(): void {
    this.getSellBigCars()
  }
  getSellBigCars(){
  this._ReportsService.getSellBigCars().subscribe((res)=>{
    this.dataSource = new MatTableDataSource<any>(res);

  })
}

fileName:string="احصائيات  السيارات الكبيرة المباعة"
exportAsExel(){
// get table 
let data=document.getElementById("table") 
const ws:XLSX.WorkSheet=XLSX.utils.table_to_sheet(data)

//generate work book and add the worksheet
const wb:XLSX.WorkBook=XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb,ws,'sheet1')

//save to file 
XLSX.writeFile(wb,`${this.fileName}.xlsx`)
}

exportToPdf() {
  const pdfData = document.getElementById('table');

  html2canvas(pdfData!).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jspdf('p', 'mm', 'a4');

    // Add a font that supports Arabic (make sure to provide the correct path to the font file)
    pdf.addFileToVFS('arabic-font.ttf', 'path/to/arabic-font.ttf');
    pdf.addFont('arabic-font.ttf', 'ArabicFont', 'Rubik');

    // Set the font for the PDF content
    pdf.setFont('ArabicFont');

    const imgWidth = 200;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save('table-export.pdf');
});

}
}
