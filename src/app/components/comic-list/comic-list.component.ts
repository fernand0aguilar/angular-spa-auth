import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { ComicService } from '../../service/comic.service';
import { DataStorageService } from 'src/app/service/data-storage.service';
import { StatusService } from 'src/app/service/status.service';
import { Subscription } from 'rxjs';
import { Comic } from 'src/app/model/comic.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.scss']
})
export class ComicListComponent implements OnInit, OnDestroy {
  @Input() listType: string;
  @Input() comicList: Comic[];
  @Input() favoriteComics: Comic[]

  displayedComicsSubscription: Subscription;
  favoriteSubscription: Subscription;

  constructor(private statusService: StatusService,
    private comicService: ComicService,
    private router: Router) { }

  ngOnInit(): void {

    switch (this.listType) {
      case "full":
        this.displayedComicsSubscription = this.statusService.getDisplayedComicList().subscribe((comics: Comic[] = []) => {
          this.comicList = comics;
        });
        this.favoriteSubscription = this.comicService.getFavoritesSubject().subscribe(favs => {
          this.favoriteComics = favs;
        });
        break;

      case "favorites":
        break;
    }
  }

  selectComic(comic: Comic) {
    this.statusService.getSelectedComic().next(comic);
    this.router.navigate(['comics', 'comic', comic.id]);
  }

  validateId(comic: Comic) {
    return this.favoriteComics.find(x => x.id === comic.id);
  }

  

  ngOnDestroy(): void {
    if (this.displayedComicsSubscription) {
      this.displayedComicsSubscription.unsubscribe();
    }
  }

}
