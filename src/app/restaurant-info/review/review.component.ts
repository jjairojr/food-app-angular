import { Component, OnInit } from '@angular/core';
import { ReviewsModel } from './reviews.model';
import { RestaurantService } from 'app/restaurant/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
// import { ActivatedRoute }

@Component({
  selector: 'mt-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  reviews: Observable<ReviewsModel[]>

  constructor(private restaurantService: RestaurantService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantService.reviews(this.activatedRoute.parent.snapshot.params['id']);
  }

}
