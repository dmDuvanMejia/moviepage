import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  transform(poster: string): string {

    if (poster != null) {
        return `https://image.tmdb.org/t/p/original${poster}`
    }else {
      return '../../assets/img/no-image.jpg'
    }
  }

}