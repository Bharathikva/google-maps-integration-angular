import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map!: google.maps.Map;
  gasStations: any[] = [
    { latitude: 37.785, longitude: -122.406, name: 'Gas Station 1' },
    { latitude: 37.794, longitude: -122.407, name: 'Gas Station 2' },
    // Add more gas station data here
  ];

  constructor() { }

  ngOnInit() {
    this.initializeMap();
  }

  initializeMap() {
    const mapOptions: google.maps.MapOptions = {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 13
    };

    this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, mapOptions);

    this.addMarkers();
  }

  addMarkers() {
    this.gasStations.forEach(station => {
      const marker = new google.maps.Marker({
        position: { lat: station.latitude, lng: station.longitude },
        map: this.map,
        title: station.name
      });

      const infoWindow = new google.maps.InfoWindow({
        content: station.name
      });

      marker.addListener('click', () => {
        infoWindow.open(this.map, marker);
      });
    });
  }
}
