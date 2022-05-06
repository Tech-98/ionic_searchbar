import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  searchTerm: string;
  devices = [
    {
      deviceName: 'Steve\'s phone',
      deviceType: 'iPhone 12'

    },
    {
      deviceName: 'Saskia pad',
      deviceType: 'iPad Mini'

    },
    {
      deviceName: 'My Monitor',
      deviceType: 'Wireless monitor'

    },
    {
      deviceName: 'Steve\'s Monitor',
      deviceType: 'Wireless monitor'

    },
    {
      deviceName: 'Device name',
      deviceType: 'Device type'

    },
  ];
  constructor() { }

}
