import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Phaser from 'phaser';

class NewScene extends Phaser.Scene {
  constructor(context) {
    super({ key: 'new' });
  }
  private background: Phaser.GameObjects.TileSprite;
  cloud1: Phaser.GameObjects.TileSprite;
  cloud2: Phaser.GameObjects.TileSprite;
  backgroundImg: string = '';
  text: any;
  tree1: any;
  tree2: any;
  tree3: any;
  play: any;
  pause: any;
  rewind: any;
  forward: any;
  playStatus: boolean = false;

  preload() {
    this.load.image("background", "assets/images/train/bg.png");
    this.load.image("cloud1", "assets/images/train/cloud1.png");
    this.load.image("cloud2", "assets/images/train/cloud2.png");
    this.load.image("tree1", "assets/images/train/tree1.png");
    this.load.image("tree2", "assets/images/train/tree2.png");
    this.load.image("tree3", "assets/images/train/tree3.png");
    this.load.image("car0", "assets/images/train/car-red.png");
    this.load.image("car1", "assets/images/train/car-green.png");
    this.load.image("car2", "assets/images/train/car-orange.png");
    this.load.image("car3", "assets/images/train/car-red.png");
    this.load.image("car4", "assets/images/train/car-yellow.png");
    this.load.image("engine", "assets/images/train/engine.png");
    this.load.image('tracks', 'assets/images/train/tracks.png');
    this.load.image('play', 'assets/images/train/play.png');
    this.load.image('pause', 'assets/images/train/pause.png');
    this.load.image('rewind', 'assets/images/train/rewind.png');
    this.load.image('forward', 'assets/images/train/forward.png');
  }

  create() {
    this.background = this.add.tileSprite(0, 0, 0, 0, "background").setOrigin(0, 0.1);
    this.background.displayWidth = this.sys.canvas.width;
    this.background.displayHeight = this.sys.canvas.height;

    this.cloud1 = this.add.tileSprite(0, 0, 1000, 100, "cloud1").setOrigin(0, 0);
    this.cloud2 = this.add.tileSprite(0, 120, 1000, 90, "cloud2").setOrigin(0, 0);

    this.tree1 = this.add.sprite(100, 350, 'tree1').setDisplaySize(120, 100);
    this.tree2 = this.add.sprite(450, 350, 'tree2').setDisplaySize(180, 100);
    this.tree3 = this.add.sprite(800, 350, 'tree2').setDisplaySize(180, 100);

    this.add.sprite(50, 450, 'tracks');

    this.add.sprite(332, 380, 'car0').setDisplaySize(70, 50);
    this.add.sprite(400, 380, 'car1').setDisplaySize(70, 50);
    this.add.sprite(468, 380, 'car2').setDisplaySize(70, 50);
    this.add.sprite(536, 380, 'car3').setDisplaySize(70, 50);
    this.add.sprite(604, 380, 'car4').setDisplaySize(70, 50);
    this.add.sprite(670, 380, 'engine').setDisplaySize(70, 50);

    // -----------Add Text--------------
    var style = {
      'word-spacing': '10px',
      'font': '45px Arial',
      'font-weight': 'bold',
      'top': "50px",
      'width': '505%',
      'position': 'absolute',
      'left': '355%'
    };

    var div = document.createElement('div');
    div.innerHTML = `I got up in the middle of the night to get a glass of crayons. I was really thirsty. I thought I saw a monster in the corner  of my room but it was just my cat up on the shelf.`

    Object.assign(div.style, style);
    this.text = this.add.dom(0, 0, div);
    // ------------------------------------------

    // -----------set Text Positiob------------
    let textCoordinates = localStorage.getItem('textCoordinates')
    this.text.x = textCoordinates

    if (this.playStatus == true) {
      this.play = this.add.sprite(500, 465, 'play').setInteractive({ cursor: 'pointer' }).setDisplaySize(70, 70);
      this.play.on('pointerup', () => {
        this.backgroundImg = 'pause'
        this.playStatus = false;
        this.scene.restart();
      }, this)
    }

    if (this.playStatus == false) {
      div.innerHTML = `I got up in the middle of the night to get a glass of <span style="color:red">crayons</span>. I was really thirsty. I thought I saw a monster in the corner  of my room but it was just my cat up on the shelf.`
      this.pause = this.add.sprite(500, 465, 'pause').setInteractive({ cursor: 'pointer' }).setDisplaySize(70, 70);
      this.pause.on('pointerup', () => {
        this.backgroundImg = 'play'
        this.playStatus = true;
        this.scene.restart();
      }, this)
    }

    this.rewind = this.add.sprite(430, 460, 'rewind').setInteractive({ cursor: 'pointer' }).setDisplaySize(70, 50);
    this.rewind.on('pointerup', () => {
      this.backgroundImg = 'reverse';
      div.innerHTML = `I got up in the middle of the night to get a glass of <span style="color:red">crayons</span>. I was really thirsty. I thought I saw a monster in the corner  of my room but it was just my cat up on the shelf.`
    }, this)

    this.forward = this.add.sprite(570, 460, 'forward').setInteractive({ cursor: 'pointer' }).setDisplaySize(70, 50);
    this.forward.on('pointerup', () => {
      this.backgroundImg = 'play';
      div.innerHTML = `I got up in the middle of the night to get a glass of <span style="color:green">water</span>. I was really thirsty. I thought I saw a monster in the corner  of my room but it was just my cat up on the shelf.`
    }, this)

    // this.text = this.add.text(1000, 50, "I got up in the middle of the night to get night to get a glass of water. I was really thirsty. I thought I saw a monster in the corner  of my room but it was just my cat up on the shelf.", { font: "16px Arial Black", fill: "#FF0000" });

    // // -----------Add Text-----------
    // var style = {
    //   'font': '36px Arial',
    //   'font-weight': 'bold',
    //   'top': "50px",
    //   'width': '300%',
    //   'position': 'absolute',
    //   'left': '260%'
    // };

    // var div = document.createElement('div');
    // div.innerHTML = `I got up in the middle of the night to get a glass of crayons. I was really thirsty. I thought I saw a monster in the corner  of my room but it was just my cat up on the shelf.`

    // Object.assign(div.style, style);
    // this.text = this.add.dom(0, 0, div);

    // this.input.keyboard.on('keydown-SPACE', function (event) {
    //   this.backgroundImg = 'play'
    // }, this);

    // this.input.keyboard.on('keydown-R', function (event) {
    //   this.backgroundImg == 'reverse' ? this.backgroundImg = 'play' : this.backgroundImg = 'reverse';

    //   this.backgroundImg == 'reverse' ?
    //     div.innerHTML = `I got up in the middle of the night to get a glass of <span style="color:red">crayons</span>. I was really thirsty. I thought I saw a monster in the corner  of my room but it was just my cat up on the shelf.` :
    //     div.innerHTML = `I got up in the middle of the night to get a glass of <span style="color:green">water</span>. I was really thirsty. I thought I saw a monster in the corner  of my room but it was just my cat up on the shelf.`
    // }, this);

    // this.input.keyboard.on('keydown-P', function (event) {

    //   if (this.backgroundImg == 'pause') {
    //     this.backgroundImg = 'play'
    //   } else {
    //     this.backgroundImg = 'pause'
    //   }

    // }, this);

  }

  update() {
    if (this.text.x >= -5000) {
      this.backgroundImg == 'play' ? this.text.x -= 0.5 : this.backgroundImg == 'pause' ? this.text.x -= 0 : '';
    } else {
      this.text.x = 0
    }

    if (this.backgroundImg == 'reverse') {
      this.text.x += 0.5;
      if (this.text.x >= 0) {
        this.text.x = -5000;
      }
    }
    localStorage.setItem("textCoordinates", this.text.x)
    // -----------tree1------------

    if (this.tree1.x > -200) {
      this.backgroundImg == 'play' ? this.tree1.x -= 0.5 : this.backgroundImg == 'pause' ? this.tree1.x -= 0 : '';
    } else {
      this.tree1.x = 999
    }

    if (this.backgroundImg == 'reverse') {
      this.tree1.x += 0.5;
      if (this.tree1.x > 999) {
        this.tree1.x = 0;
      }
    }

    // ----------------tree2--------------------

    if (this.tree2.x > -200) {
      this.backgroundImg == 'play' ? this.tree2.x -= 0.5 : this.backgroundImg == 'pause' ? this.tree2.x -= 0 : '';
    } else {
      this.tree2.x = 999
    }

    if (this.backgroundImg == 'reverse') {
      this.tree2.x += 0.5;
      if (this.tree2.x > 999) {
        this.tree2.x = 0;
      }
    }

    // ----------------tree3--------------------

    if (this.tree3.x > -200) {
      this.backgroundImg == 'play' ? this.tree3.x -= 0.5 : this.backgroundImg == 'pause' ? this.tree3.x -= 0 : '';
    } else {
      this.tree3.x = 999
    }

    if (this.backgroundImg == 'reverse') {
      this.tree3.x += 0.5;
      if (this.tree3.x > 999) {
        this.tree3.x = 0;
      }
    }



    this.backgroundImg == 'play' ?
      this.background.tilePositionX += 2.5 :
      this.backgroundImg == 'pause' ?
        this.background.tilePositionX += 0 :
        this.backgroundImg == 'reverse' ?
          this.background.tilePositionX -= 2.5 : '';

    this.backgroundImg == 'play' ?
      this.cloud1.tilePositionX += 0.2 :
      this.backgroundImg == 'pause' ?
        this.cloud1.tilePositionX += 0 :
        this.backgroundImg == 'reverse' ?
          this.cloud1.tilePositionX -= 0.2 : '';

    this.backgroundImg == 'play' ?
      this.cloud2.tilePositionX += 0.2 :
      this.backgroundImg == 'pause' ?
        this.cloud2.tilePositionX += 0 :
        this.backgroundImg == 'reverse' ?
          this.cloud2.tilePositionX -= 0.2 : '';

  }
}


@Component({
  selector: 'app-train-scroller-game',
  templateUrl: './train-scroller-game.component.html',
  styleUrls: ['./train-scroller-game.component.scss']
})
export class TrainScrollerGameComponent implements OnInit {

  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  @ViewChild('content') content;

  constructor(private modalService: NgbModal) {
    this.config = {
      type: Phaser.AUTO,
      scene: new NewScene(this),
      backgroundColor: '#989898',
      scale: {
        mode: Phaser.Scale.FIT,
        parent: 'gameContainer',
        height: 500,
        width: 1000
      },
      dom: {
        createContainer: true
      },
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 }
        }
      }
    };
  }

  ngAfterViewInit() {
    this.open(this.content);
  }

  ngOnInit(): void {
    localStorage.clear()
    this.phaserGame = new Phaser.Game(this.config);
  }

  open(content) {
    localStorage.removeItem('popupClose')
    this.modalService.open(content, { size: 'xl' }).result.then((result) => {
    }, (reason) => {
      localStorage.setItem('popupClose', JSON.stringify(true))
    });
  }

}
