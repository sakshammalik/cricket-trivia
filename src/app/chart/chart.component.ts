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
          backgroundColor: '#111111'
        },
        {
          backgroundColor: '#111111'
        }
      ];

    constructor(
  ) {}

  public ngOnInit() {
    //
  }
}
