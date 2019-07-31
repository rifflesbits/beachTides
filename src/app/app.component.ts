import { Component } from '@angular/core';
import { TideService } from './services/tide.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Beach Times';

  // will hold the response
  private tidePredictions  = []; 

  constructor(private tideService: TideService){
  }
  
  /*
    Gets tides
  */
  getTides() {
  
    console.log('component getTides...');

    this.tidePredictions = [];

    this.tideService.getTides().subscribe((data : any) => {
      this.tidePredictions = data.predictions;      
      console.log('Response! \n' + JSON.stringify(this.tidePredictions));
    }); 
  }

}
