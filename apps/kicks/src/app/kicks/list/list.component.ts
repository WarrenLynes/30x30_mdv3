import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mdv3-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() data;
  @Input() selected;
  @Output() delete = new EventEmitter();
  @Output() selectt = new EventEmitter();
}
