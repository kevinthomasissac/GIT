import { Component, OnInit } from '@angular/core';
import * as joint from 'jointjs';
 
import * as jQuery from 'jquery';

@Component({
  selector: 'app-rect',
  templateUrl: './rect.component.html',
  styleUrls: ['./rect.component.css']
})
export class RectComponent implements OnInit {

  constructor() { }

  ngOnInit() 
  {
    let graph = new joint.dia.Graph();
    var paper = new joint.dia.Paper({
      el: jQuery('#myholder'),
      width: 600,
      height: 200,
      model: graph,
      gridSize: 1
  });

  var rect = new joint.shapes.basic.Rect({
      position: { x: 100, y: 30 },
      size: { width: 100, height: 30 },
      attrs: { rect: { fill: 'blue' }, text: { text: 'my box', fill: 'white' } }
  });

  
  graph.addCell(rect);
  }

}
