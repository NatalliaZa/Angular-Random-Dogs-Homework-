import { Component, OnInit } from '@angular/core';
import { DogService } from 'src/app/shared/service/dog.service';

@Component({
  selector: 'app-dogs-page',
  templateUrl: './dogs-page.component.html',
  styleUrls: ['./dogs-page.component.scss']
})
export class DogsPageComponent implements OnInit {
  
  dogImageUrl!: string;

  dogsImages!: string[];


  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    this.getRandomDog();
  }

  getRandomDog(){
    this.dogService.getRandomDog().subscribe((data) => {
      console.log(data);
      this.dogImageUrl = data.message;
    })
  }

  getRandomDogs(){
    this.dogService.getRandomDogs().subscribe((data) => {
    this.dogsImages = data.message;
    })
  }

 // async getDogs() {
  //  const resp = await fetch('https://dog.ceo/api/breeds/image/random')
 //   const data = await resp.json();
   // this.dog = data;
 // }

}
