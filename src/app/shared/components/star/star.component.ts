import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges, OnInit {

  @Input() rating: number = 5;

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  cropWidth: number = 75;

  ngOnChanges(): void {
    this.cropWidth = this.rating*15;
    // отрабатывает раньше чем ngOnInit
  }

  ngOnInit(): void {
    // отрабатывает ПОСЛЕ ngOnChanges
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}
