import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductSearchPage } from '@spartacus/core';
import {
  FacetList,
  FacetService,
  PageLayoutService,
  ProductListComponentService,
  SearchCriteria,
  ViewConfig,
  ViewModes
} from '@spartacus/storefront';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'cx-product-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  isInfiniteScroll: boolean;

  model$: Observable<ProductSearchPage> =
    this.productListComponentService.model$;

  viewMode$ = new BehaviorSubject<ViewModes>(ViewModes.Grid);
  ViewModes = ViewModes;

  constructor(
    private pageLayoutService: PageLayoutService,
    private productListComponentService: ProductListComponentService,
    public scrollConfig: ViewConfig,
    private router: Router,
    private activatedRoute: ActivatedRoute, private facetService: FacetService
  ) {
    console.log('LoginComponent Constructor called');
  }

  ngOnInit(): void {
    this.isInfiniteScroll = this.scrollConfig.view?.infiniteScroll?.active;

    this.subscription.add(
      this.pageLayoutService.templateName$
        .pipe(take(1))
        .subscribe((template) => {
          this.viewMode$.next(
            template === 'ProductGridPageTemplate'
              ? ViewModes.Grid
              : ViewModes.List
          );
        })
    );
  }

  sortList(sortCode: string): void {
    this.productListComponentService.sort(sortCode);
  }

  setViewMode(mode: ViewModes): void {
    this.viewMode$.next(mode);
  }

  goToLastPage(pagination){
    this.route({currentPage: pagination.totalPages-1})
    console.log("🚀 ~ file: list.component.ts ~ line 68 ~ ListComponent ~ goToLastPage ~ pagination.pageSize", pagination.pageSize)
    
  }

  // tslint:disable-next-line:typedef
  goToFirstPage(pagination){
    this.route({currentPage: 0})
    console.log("🚀 ~ file: list.component.ts ~ line 74 ~ ListComponent ~ goToFirstPage ~ currentPage")
  }

  changePageSize(event)
  {
     this.route({pageSize: event.target.value})
     console.log(event.target.value);
  }

  protected route(queryParams: SearchCriteria): void {
    this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge',
      relativeTo: this.activatedRoute,
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
