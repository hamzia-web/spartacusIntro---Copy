import { HttpClient } from '@angular/common/http';
import { global } from '@angular/compiler/src/util';
import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { GlobalMessageService, GlobalMessageType, OccEndpointsService, Product, TranslationService, WindowRef } from '@spartacus/core';
import { CurrentProductService, ModalRef, ModalService, ProductIntroComponent } from '@spartacus/storefront';
import { BehaviorSubject, Observable } from 'rxjs';
import { TestModalComponent } from '../test-modal/test-modal.component';

@Component({
  selector: 'app-product-intro-custom',
  template: '<div>I am a test component</div>',
  templateUrl: './product-intro-custom.component.html',
  styleUrls: ['./product-intro-custom.component.scss']
})
export class ProductIntroCustomComponent 
             //extends ProductIntroComponent 
  {
  reviewsTabAvailable = new BehaviorSubject<boolean>(false);
  product$: Observable<Product> = this.currentProductService.getProduct();

  constructor(
    protected currentProductService: CurrentProductService,
    private translationService: TranslationService,
    protected winRef: WindowRef,
    @Inject(GlobalMessageService) private globalMessageService,
    private modalService: ModalService ,
    private element: ElementRef,
    private occEndpointService: OccEndpointsService,
    private http: HttpClient
  ) {}

  ngAfterContentChecked() {
    this.reviewsTabAvailable.next(!!this.getReviewsComponent());
  }

  // Scroll to views component on page and click "Reviews" tab
  showReviews() {
    // Use translated label for Reviews tab reference
    this.translationService
      .translate('TabPanelContainer.tabs.ProductReviewsTabComponent')
      .subscribe((reviewsTabLabel) => {
        const tabsComponent = this.getTabsComponent();
        const reviewsTab = this.getTabByLabel(reviewsTabLabel, tabsComponent);
        const reviewsComponent = this.getReviewsComponent();
        if (reviewsTab && reviewsComponent) {
          this.clickTabIfInactive(reviewsTab);
          setTimeout(
            () => reviewsComponent.scrollIntoView({ behavior: 'smooth' }),
            0
          );
        }
      })
      .unsubscribe();
  }

  // NOTE: Does not currently exists as its own component
  // but part of tabs component. This is likely to change in refactor.
  private getReviewsComponent(): Element {
    console.log(this.winRef.document.querySelector('cx-product-reviews'));
    return this.winRef.document.querySelector('cx-product-reviews');
  }

  // Get Tabs Component if exists on page
  private getTabsComponent(): Element {
    console.log(this.winRef.document.querySelector('cx-tab-paragraph-container'));
    return this.winRef.document.querySelector('cx-tab-paragraph-container');
  }

  // Click to activate tab if not already active
  private clickTabIfInactive(tab: HTMLElement): void {
    if (
      !tab.classList.contains('active') ||
      tab.classList.contains('toggled')
    ) {
      tab.click();
    }
  }

  // Get Tab by label if exists on page
  private getTabByLabel(label: string, tabsComponent: Element): HTMLElement {
    if (tabsComponent) {
      // NOTE: Reads through button tags to click on correct tab
      // There may be a better way of doing this now/after refactor
      const tabElements: HTMLCollectionOf<HTMLElement> =
        tabsComponent.getElementsByTagName('button');

      // Look through button tab elements until finding tab with label
      for (const buttonElement of Array.from(tabElements)) {
        if (buttonElement.innerHTML.includes(label)) {
          return buttonElement;
        }
      }
    }
  }
 // OOTB ProductIntroComponent logic ends ------------------

 // Custom code snippet 
  modalRef: ModalRef
  ngOnInit(): void {
    //console.log("Element: ", this.element.nativeElement);
    console.log("Type of class ProductIntroCustomComponent: ", typeof(ProductIntroCustomComponent));
    
  }
  ngOnDestroy(){
    this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_INFO)
    this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_ERROR)
    this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_WARNING)
    this.globalMessageService.remove(GlobalMessageType.MSG_TYPE_CONFIRMATION)
  }

  /**
   * Like functioanlity on PDP
   */
  increment: number=0;
  like(): void
  {
      this.increment++;
      console.log("Incement" + this.increment)
  }

  /**
   * Dislike functioanlity on PDP
   */
decrement: number=0;
dislike(): void
{
    //this.decrement--;
    const newDecrement = this.increment - this.decrement
    console.log("Increment value:", this.increment);
    console.log("Decrement" + newDecrement)
}

/**
 * Method to show Global Message
 */
showGlobalMessage(): void
{
  this.globalMessageService.add("This is INFO message",GlobalMessageType.MSG_TYPE_INFO,10000);
  this.globalMessageService.add("This is WARN message",GlobalMessageType.MSG_TYPE_WARNING,10000);
  this.globalMessageService.add("This is ERROR message",GlobalMessageType.MSG_TYPE_ERROR,5000);
  this.globalMessageService.add("This is CONFIRMATION message",GlobalMessageType.MSG_TYPE_CONFIRMATION,5000);
}

/**
 * Method is to show modal on click of button on PDP 
 */
showModal(): void
{
   this.modalRef = this.modalService.open(TestModalComponent, {
    centered: true,
    size: "lg",
    //backdrop: "static",
    //keyboard: false
   })
   this.modalRef.componentInstance.testParam = new Date(Date.now())
   this.modalRef.result.then((result: any) =>{
        console.log(`Result===== ${result}`);
        if(result === 'OK')
        { 
          console.log(`Type of result: ${typeof(result)}`);
          this.triggerMail(result);
        }
   })
   .catch((error) => {
     console.log(`Close---${error}`);
   })
 }

 /**
  * Method for trigerring email by capturing data through http
  * 
  * @param data 
  * @returns 
  */
triggerMail(data: any): any {
  // Write Logic for sending email, same thing like subscribe
  const url = `${this.occEndpointService.getBaseEndpoint()}/products/subscribe`;
  console.log(`URL:: ${url}`) //https://localhost:9002/occ/v2/electronics-spa/products/subscribe
  return this.http.post(url, data)
 }
}


