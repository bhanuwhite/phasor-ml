


import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Phaser from 'phaser';

class NewScene extends Phaser.Scene {
  clickMatchObject: object = { "key": '', "match": '' };
  firstClick: boolean = false;
  puzzlePieceMatch: object[] = [];
  parentObject: any;
  backgroundName: any = '';


  private background: Phaser.GameObjects.Image;
  image: any;

  constructor(test) {

    super({ key: 'new' });

    this.parentObject = test;
  }

  preload() {
    if (this.parentObject.backgroundName === "bg") {
      this.load.image("background", "assets/images/background/background.png");
    }
    if (this.parentObject.backgroundName === "bg1") {
      this.load.image("background", "assets/images/train/bg.png");
    }
    if (this.parentObject.backgroundName === "bg2") {
      this.load.image("background", "assets/images/background/bg2.png");
    }
    if (this.parentObject.backgroundName === "bg3") {
      this.load.image("background", "assets/images/background/bg3.png");
    }
    if (this.parentObject.backgroundName === "bg4") {
      this.load.image("background", "assets/images/background/bg4.png");
    }
    if (this.parentObject.backgroundName === "bg5") {
      this.load.image("background", "assets/images/background/bg5.png");
    }
    if (this.parentObject.backgroundName === "bg6") {
      this.load.image("background", "assets/images/background/bg6.png");
    }
    if (this.parentObject.backgroundName === "bg7") {
      this.load.image("background", "assets/images/background/bg7.png");
    }
    if (this.parentObject.backgroundName === "bg8") {
      this.load.image("background", "assets/images/background/bg8.png");
    }

    // this.load.image('p1', "assets/images/horseout.png");
    // this.load.image('p6', "ass ets/images/eleout.png");

    this.load.image('p2', "assets/images/horse.png");

    this.load.image('p3', "assets/images/ele.png");

    this.load.image('p4', "assets/images/cat.png");

    this.load.image('p5', "assets/images/dog.png");
    // this.load.image('p4', "assets/images/gflower-madlib1.png");
  }

  create() {
    if (this.parentObject.backgroundName !== "blank") {
      this.load.image("background", "assets/images/background/background.png");
   
    this.background = this.add.image(0, 0, "background")
      .setOrigin(0, 0);

    // // // Based on your game size, it may "stretch" and distort.
    this.background.displayWidth = this.sys.canvas.width;
    this.background.displayHeight = this.sys.canvas.height;
  }

    let image2 = this.add.sprite(600, 400, 'p2').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);

    let image3 = this.add.sprite(1000, 400, 'p3').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);

    let image4 = this.add.sprite(1300, 400, 'p4').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
    let image5 = this.add.sprite(1600, 400, 'p5').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
    // let image4 = this.add.sprite(1400, 400, 'p4').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);

    // image2.setDepth(1)

    this.input.setDraggable(image2);
    this.input.setDraggable(image3);

    this.input.setDraggable(image4);
    this.input.setDraggable(image5);

    this.input.dragDistanceThreshold = 16;

    this.input.on('dragstart', function (pointer, gameObject) {
      // console.log(pointer, gameObject)
      // gameObject.setTint(0xff0000);

    });

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
      // console.log(dragX, dragY)
      gameObject.x = dragX;
      gameObject.y = dragY;

    });

    this.input.on('dragend', function (pointer, gameObject) {
      // image2.visible=false
      // if(gameObject.texture.key=='p2'){
      //   gameObject.x = 200;
      //   gameObject.y = 150 ;

      // }
      // if(gameObject.texture.key=='p3'){
      //   gameObject.x = 600;
      //   gameObject.y = 150 ;
      // }


    });
    // this.input.once('pointerdown', () => { 
    //   console.log("hh",this.parentObject.backgroundName)
    //   this.scene.stop();
    //   this.scene.start();
    // })
  }

  // update() {
  // }
}

@Component({
  selector: 'app-stickerbook',
  templateUrl: './stickerbook.component.html',
  styleUrls: ['./stickerbook.component.scss']
})
export class StickerbookComponent implements OnInit {
  variable = true
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  color = 'red';
  showPanal = true;
  backgroundName: any = 'blank'
  @ViewChild('content') content;

  constructor(private router: Router, private modalService: NgbModal) {
    this.scheneConfig();
  }

  scheneConfig() {
    this.config = {
      type: Phaser.AUTO,
      scene: new NewScene(this),
      backgroundColor: '#FFFFFF',
      scale: {
        mode: Phaser.Scale.FIT,
        parent: 'gameContainer',
        height: 1300,
        width: 2500
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
    // localStorage.clear()
    this.phaserGame = new Phaser.Game(this.config);
  }

  changeBg(name) {
    document.getElementsByTagName('canvas')[0].remove();
    this.backgroundName = name;
    this.scheneConfig();
    this.phaserGame = new Phaser.Game(this.config);
  }

  ngAfterViewInit() {
    this.open(this.content);
  }

  // doneFunction() {
  //   let story = localStorage.getItem('Match');
  //   if (story) {
  //     this.router.navigate(['/madlibs/stories']);
  //   }
  //   else {
  //     alert('To Reveal Story First Match The Puzzles')
  //   }
  // }

  open(content) {
    localStorage.removeItem('popupClose')
    this.modalService.open(content, { size: 'xl' }).result.then((result) => {
    }, (reason) => {
      localStorage.setItem('popupClose', JSON.stringify(true))
    });
  }

}

