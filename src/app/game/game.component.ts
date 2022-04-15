import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';

class NewScene extends Phaser.Scene {
  green: any;
  blue: any;
  greenKeys: any;
  blueKeys: any;
  demo: any;
  hueso: any;
  huesoCopy: any;
  flecha: any;
  result:any;
  debug: any;
  
  constructor() {
    super({ key: 'new' });
  }

   preload() {
   
    this.load.image('p1', 'assets/images/1stPanel/1.png');
    this.load.image('p2', 'assets/images/1stPanel/2.png');
    this.load.image('p3', 'assets/images/1stPanel/3.png');
    this.load.image('p4', 'assets/images/1stPanel/4.png');
    this.load.image('p5', 'assets/images/1stPanel/5.png');


    this.load.image('p6', 'assets/images/2ndPanel/1.png');
    this.load.image('p7', 'assets/images/2ndPanel/2.png');
    this.load.image('p8', 'assets/images/2ndPanel/3.png');
    this.load.image('p9', 'assets/images/2ndPanel/4.png');
    this.load.image('p10', 'assets/images/2ndPanel/5.png');
   

    
}


 create ()
{
    let image1= this.add.sprite(100, 200, 'p1').setInteractive();
    let image2= this.add.sprite(100, 300, 'p2').setInteractive();
    let image3= this.add.sprite(100, 400, 'p3').setInteractive();
    let image4= this.add.sprite(100, 500, 'p4').setInteractive();
    let image5= this.add.sprite(100, 600, 'p5').setInteractive();


    let image6= this.add.sprite(700, 200, 'p6').setInteractive();
    let image7= this.add.sprite(700, 300, 'p7').setInteractive();
    let image8= this.add.sprite(700, 400, 'p8').setInteractive();
    let image9= this.add.sprite(700, 500, 'p9').setInteractive();
    let image10= this.add.sprite(700, 600, 'p10').setInteractive();

    this.input.setDraggable(image6);
    this.input.setDraggable(image7);
    this.input.setDraggable(image8);
    this.input.setDraggable(image9);
    this.input.setDraggable(image10);
// this.input.se

  
    
    this.input.dragDistanceThreshold = 16;

    this.input.on('dragstart', function (pointer, gameObject) {
// console.log(pointer, gameObject)
        gameObject.setTint(0xff0000);

    });

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
// console.log(dragX, dragY)
        gameObject.x = dragX;
        gameObject.y = dragY;

    });

    this.input.on('dragend', function (pointer, gameObject) {
console.log(pointer, gameObject);
let mapping=[{key:'p1',val:200, match:'p8'},{key:'p2',val:200, match:'p7'},{key:'p3',val:200,match:'p6'},{key:'p4',val:200, match:'p10'},{key:'p5',val:200, match:'p9'}]
let obj = mapping.find(o => o.match === gameObject.texture.key);
console.log(obj)
if(gameObject.x>250)
alert('wrong move')
else
gameObject.disableInteractive()
// this.input.setDraggable(image6, false);
        gameObject.clearTint();

    });
}



//  create() {
 
//     this.add.sprite(0, 0, 'grid');

//     let group = this.add.group();
// // @ts-ignore
//     group.inputEnableChildren = true;

//     let atari = group.create(32, 100, 'atari');



  
//     atari.inputEnabled = true;
//   //  atari.input.enableDrag();
//     atari.events.onDragStart.add(this.onDragStart, this);
//     atari.events.onDragStop.add(this.onDragStop, this);

//     let sonic = group.create(300, 200, 'sonic');

//     sonic.inputEnabled = true;
//     //sonic.input.enableDrag();
//     sonic.events.onDragStart.add(this.onDragStart, this);
//     sonic.events.onDragStop.add(this.onDragStop, this);
// // @ts-ignore
//     group.onChildInputDown.add(this.onDown, this);

// }

//  onDown(sprite, pointer) {

//     this.result = "Down " + sprite.key;

 
//     console.log('down', sprite.key);

// }

//  onDragStart(sprite, pointer) {

//     this.result = "Dragging " + sprite.key;

// }

//  onDragStop(sprite, pointer) {

//     this.result = sprite.key + " dropped at x:" + pointer.x + " y: " + pointer.y;

//     if (pointer.y > 400)
//     {
//         console.log('input disabled on', sprite.key);
//         sprite.input.enabled = false;

//         sprite.sendToBack();
//     }

// }

//  render() {

//     this.debug.text(this.result, 10, 20);

// }


 
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;

  constructor() {
    this.config = {
      type: Phaser.AUTO,
      scene: [ NewScene ],
      backgroundColor: '#4488aa',
      scale: {
        mode: Phaser.Scale.FIT,
        parent: 'gameContainer',
        height: 1200,
        width: 1200
      },
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 }
        }
      }
    };
  }

  ngOnInit() {
    this.phaserGame = new Phaser.Game(this.config);
  }
}
