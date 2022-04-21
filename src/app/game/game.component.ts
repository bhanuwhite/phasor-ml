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
  result: any;
  debug: any;
  clickMatchObject: object = { "key": '', "match": '' };
  firstClick: boolean = false;

  private background: Phaser.GameObjects.Image;
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

    this.load.image("background", "assets/images/background/Group 132.png")

  }


  create() {
    this.background = this.add.image(0, 0, "background")
      .setOrigin(0, 0);
    // Based on your game size, it may "stretch" and distort.
    this.background.displayWidth = this.sys.canvas.width;
    this.background.displayHeight = this.sys.canvas.height;

    let image1 = this.add.sprite(100, 200, 'p1').setInteractive();
    let image2 = this.add.sprite(100, 300, 'p2').setInteractive();
    let image3 = this.add.sprite(100, 400, 'p3').setInteractive();
    let image4 = this.add.sprite(100, 500, 'p4').setInteractive();
    let image5 = this.add.sprite(100, 600, 'p5').setInteractive();

    let image6 = this.add.sprite(700, 200, 'p6').setInteractive();
    let image7 = this.add.sprite(700, 300, 'p7').setInteractive();
    let image8 = this.add.sprite(700, 400, 'p8').setInteractive();
    let image9 = this.add.sprite(700, 500, 'p9').setInteractive();
    let image10 = this.add.sprite(700, 600, 'p10').setInteractive();

    this.input.setDraggable(image6);
    this.input.setDraggable(image7);
    this.input.setDraggable(image8);
    this.input.setDraggable(image9);
    this.input.setDraggable(image10);
    // this.input.se

    // compare matching object by click
    image1.on('pointerup', () => {
      this.firstClick = true;
      this.clickMatchObject = { "key": 'p1', "match": '' };
    })

    image2.on('pointerup', () => {
      this.firstClick = true;
      this.clickMatchObject = { "key": 'p2', "match": '' };
    })

    image3.on('pointerup', () => {
      this.firstClick = true;
      this.clickMatchObject = { "key": 'p3', "match": '' };
    })


    image4.on('pointerup', () => {
      this.firstClick = true;
      this.clickMatchObject = { "key": 'p4', "match": '' };
    })

    image5.on('pointerup', () => {
      this.firstClick = true;
      this.clickMatchObject = { "key": 'p5', "match": '' };
    })

    image6.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p6';
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p3' && this.clickMatchObject['match'] == 'p6') {
          image6.setPosition(240, 400)
          this.input.setDraggable(image6, false);
          image6.clearTint();
          this.firstClick = false;
        } else {
          alert('wrong move')
        }
      }
    })

    image7.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p7'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p2' && this.clickMatchObject['match'] == 'p7') {
          image7.setPosition(240, 300)
          this.input.setDraggable(image7, false);
          image7.clearTint();
          this.firstClick = false;
        } else {
          alert('wrong move')
        }
      }
    })

    image8.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p8'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p1' && this.clickMatchObject['match'] == 'p8') {
          image8.setPosition(240, 200)
          this.input.setDraggable(image8, false);
          image8.clearTint();
          this.firstClick = false;
        } else {
          debugger
          alert('wrong move')
        }
      }
    })

    image9.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p9'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p5' && this.clickMatchObject['match'] == 'p9') {
          image9.setPosition(232, 600)
          this.input.setDraggable(image9, false);
          image9.clearTint();
          this.firstClick = false;
        } else {
          alert('wrong move')
        }
      }
    })

    image10.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p10'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p4' && this.clickMatchObject['match'] == 'p10') {
          image10.setPosition(235, 500)
          this.input.setDraggable(image10, false);
          image10.clearTint();
          this.firstClick = false;
        } else {
          alert('wrong move')
        }
      }
    })

    //--------------------------------------------------------------- 

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

    this.input.on('dragend', (pointer, gameObject)=> {
      console.log(pointer, gameObject);
      let mapping = [{ key: 'p1', val: 200, match: 'p8' }, { key: 'p2', val: 200, match: 'p7' }, { key: 'p3', val: 200, match: 'p6' }, { key: 'p4', val: 200, match: 'p10' }, { key: 'p5', val: 200, match: 'p9' }]
      let obj = mapping.find(o => o.match === gameObject.texture.key);
      console.log(obj)
      
      if (this.firstClick == false) {
        if (gameObject.x > 250) {
          alert('wrong move')
        }
        else {
          if (obj.match == 'p9') {
            if (gameObject.y < 605 && gameObject.y > 595) {
              gameObject.disableInteractive();
              gameObject.clearTint();
            }
            else {
              alert('wrong move')
            }
          }

          if (obj.match == 'p8') {
            if (gameObject.y < 205 && gameObject.y > 195) {
              gameObject.disableInteractive();
              gameObject.clearTint();
            }
            else {
              alert('wrong move')
            }
          }

          if (obj.match == 'p7') {
            if (gameObject.y < 305 && gameObject.y > 295) {
              gameObject.disableInteractive();
              gameObject.clearTint();
            }
            else {
              alert('wrong move')
            }
          }

          if (obj.match == 'p6') {
            if (gameObject.y < 405 && gameObject.y > 395) {
              gameObject.disableInteractive();
              gameObject.clearTint();
            }
            else {
              alert('wrong move')
            }
          }

          if (obj.match == 'p10') {
            if (gameObject.y < 505 && gameObject.y > 495) {
              gameObject.disableInteractive();
              gameObject.clearTint();
            }
            else {
              alert('wrong move')
            }
          }
        }
      }
      // if(gameObject.x>250)
      // alert('wrong move')
      // else
      // gameObject.disableInteractive()
      // // this.input.setDraggable(image6, false);
      //         gameObject.clearTint();

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
      scene: [NewScene],
      backgroundColor: '#FFFFFF',
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
