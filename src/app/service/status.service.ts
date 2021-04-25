import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { Comic } from '../model/comic.model';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private searchField = new BehaviorSubject<string>('');
  private yearSelected = new BehaviorSubject<number>(0);
  private selectedComic = new BehaviorSubject<Comic>(null);
  private displayedComicList = new BehaviorSubject<Comic[]>([]);
  private isLoadingComics = new BehaviorSubject<boolean>(false);

  getSelectedComic(): BehaviorSubject<Comic> {
    return this.selectedComic;
  }

  getSearchField(): BehaviorSubject<string> {
    return this.searchField;
  }

  getSelectedYear(): BehaviorSubject<number> {
    return this.yearSelected;
  }

  getDisplayedComicList(): BehaviorSubject<Comic[]> {
    return this.displayedComicList;
  }

  getLoadingStatus(): BehaviorSubject<boolean> {
    return this.isLoadingComics;
  }

  constructor() { }

  resetYearStatus(year: number) {
    console.warn("== StatusService: resetYearStatus");
    this.yearSelected.next(year);
  }
  resetSearchStatus(searchField: string) {
    console.warn("== StatusService: resetSearchStatus");
    this.searchField.next(searchField);
  }

}
