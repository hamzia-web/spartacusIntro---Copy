import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ModalService } from '@spartacus/storefront';

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.scss']
})
export class TestModalComponent implements OnInit {

  constructor(private modalService: ModalService, private element: ElementRef) { }

  @Input() testParam

  ngOnInit(): void {  
  }

  dismissModal(reason?)
  {
       this.modalService.closeActiveModal(reason)
  }
}
