import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is simply a test',
      'https://www.eatright.org/-/media/eatrightimages/food/nutrition/nutritionfactsandfoodlabels/sodium-salt-1083487948.jpg'),
    new Recipe('Test Recipe 2.0', 'This is also a test',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/goulash.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
