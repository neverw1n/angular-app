import { Component, ContentChild, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() headers!: any[];
  @Input() dataRows!: any[];
  
  @ContentChild('head') head!: TemplateRef<any>;

}
