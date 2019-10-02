import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipePipe implements PipeTransform {

  transform(usersToValidDemande: any[], searchText: string): any[] {
    if (!usersToValidDemande || !searchText) {

      return usersToValidDemande;
    }
    searchText = searchText.toLowerCase();

    return usersToValidDemande.filter(it =>
      it.prenom.toLowerCase().includes(searchText));


  }

}
