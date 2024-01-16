import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import { ReportsService } from '../../../services/reports.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@ViewChild('table', { read: ElementRef })

@Component({
  selector: 'app-statistics-small-cars-in-period',
  templateUrl: './statistics-small-cars-in-period.component.html',
  styleUrl: './statistics-small-cars-in-period.component.css'
})
export class StatisticsSmallCarsInPeriodComponent implements OnInit {
  table!: ElementRef;//,"buyingDestination" ,'buyerIdentity',"dateOfSell","value"
  displayedColumns: string[] = ["vehicleType",'type','color', 'module','plateNumber','structureNumber','destinationType',"scrapDate","outCount"];
  month: any = ["محرم", "صفر", "ربيع الاول", "ربيع الثاني ", "جمادي الاول ", "جمادي الاخرة","رجب", "شعبان", "رمضان", "شوال", "ذو القعدة", "ذو الحجة"]
  dayes: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
  selectedFile!: File;
  dataSource: any;
  startDate:string=""
  endDate:string=""
  error:string=""
  adddateForm: FormGroup = new FormGroup({
    
    'startAddedyear': new FormControl(null, [Validators.required]),
    'startAddedday': new FormControl("اليوم", [Validators.required]),
    'startAddedmonth': new FormControl("الشهر", [Validators.required]),
    'endAddedyear': new FormControl(null, [Validators.required]),
    'endAddedday': new FormControl("اليوم", [Validators.required]),
    'endAddedmonth': new FormControl("الشهر", [Validators.required]),
    
  })
  getDate(adddateForm:FormGroup){
console.log(adddateForm.value);
if(adddateForm.value.startAddedday=="اليوم"||adddateForm.value.startAddedmonth=="الشهر"||
   adddateForm.value.endAddedday=="اليوم"||adddateForm.value.endAddedmonth=="الشهر"){
    this.error="التاريخ غير مدخل بشكل صحيح"
   }else if( adddateForm.value.endAddedyear<=adddateForm.value.startAddedyear){
    this.error="لا توجد نتائج نظرا لان سنه الانتهاء اكبر من سنة البداية"

   }
   else{
    this.startDate =adddateForm.value.startAddedmonth+ "-" + adddateForm.value.startAddedday + "-" + adddateForm.value.startAddedyear;
    this.endDate =adddateForm.value.endAddedmonth+ "-" + adddateForm.value.endAddedday + "-" + adddateForm.value.endAddedyear;
  
   this.getStatisticsSmallCarsInDate(this.startDate,this.endDate);
   this.error=""
   
   }
  
  }
  constructor(private _ReportsService:ReportsService){}
  ngOnInit(): void {
  }
 
 


getStatisticsSmallCarsInDate(starDateFrom:string,endDateFrom:string){
  this._ReportsService.getStatisticsSmallCarsInDate(starDateFrom,endDateFrom).subscribe((res)=>{
    console.log(res);
    this.dataSource = new MatTableDataSource<any>(res);

  })
}



fileName:string="تقرير عن احصائيات السيارات الكبيرة"
exportAsExel(){
// get table 
let data=document.getElementById("table") 
const ws:XLSX.WorkSheet=XLSX.utils.table_to_sheet(data)

//generate work book and add the worksheet
const wb:XLSX.WorkBook=XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb,ws,'sheet1')

//save to file 
XLSX.writeFile(wb,'Data.xlsx')
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


