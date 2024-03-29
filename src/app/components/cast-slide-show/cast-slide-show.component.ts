import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/interfaces/credits-response';

import Swiper, { Navigation, Pagination, Scrollbar, Autoplay, EffectFade } from 'swiper';

Swiper.use([ Navigation, Pagination, Scrollbar, Autoplay, EffectFade ])

@Component({
  selector: 'app-cast-slide-show',
  templateUrl: './cast-slide-show.component.html',
  styleUrls: ['./cast-slide-show.component.css']
})
export class CastSlideShowComponent implements OnInit, AfterViewInit {

  @Input() cast: Cast[] = []

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15
  })
}

}
