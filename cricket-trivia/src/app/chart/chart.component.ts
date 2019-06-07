import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

    @Input() public chartData;

    public chartOptions: ChartOptions = {
        responsive: true,
        tooltips: {
            enabled: false
        },
        scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        };
    public colors = [
        {
          backgroundColor: 'rgba(77,83,96,0.2)'
        },
        {
          backgroundColor: 'rgba(30, 169, 224, 0.8)'
        }
      ];

    constructor(
  ) {}

  public ngOnInit() {
    //
  }
}
