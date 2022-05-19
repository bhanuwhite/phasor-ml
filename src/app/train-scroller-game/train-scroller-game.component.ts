import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Phaser from 'phaser';

class NewScene extends Phaser.Scene {
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
  station: any;
  parentContext: any;
  car0: any;
  car1: any;
  car2: any;
  car3: any;
  car4: any;
  // playStatus: boolean = false;
  playStatus: string = 'play';
  colorBg: string;
  textStory: string = '';
  storyPart: number = 0

  constructor(context) {
    super({ key: 'new' });
    this.parentContext = context;
  }

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
    this.load.image('station', 'assets/images/train/station.png');
  }

  storyFunction(a, b, c, d, e, id) {
    if (id == 'simple') {
      this.colorBg = 'black'
    }
    if (id == 'reverse') {
      this.colorBg = 'red'
    }
    if (id == 'forward') {
      this.colorBg = 'green'
    }

    console.log("this.storyPart", this.storyPart)

    if (this.storyPart == 0) {
      return `I woke up thirsty in the middle of the night and went to get a glass of <span style='color:${this.colorBg}'>${a}</span>. I checked my alarm clock, which said it was <span>${b}</span>. I didn’t want to wake anyone up, so I made sure to be very quiet. I tiptoed down the <span>${c}</span> and turned on a light in the kitchen. I filled my glass with water. As I was heading back to <span>${d}</span>, I saw a jar of cookies on the counter. I couldn’t reach it, so I <span>${e}</span> on a chair to grab it. It was heavy, but I managed to pull it down. I opened the lid and took a chocolate chip cookie! It was delicious`
    }
    if (this.storyPart == 1) {
      return `I woke up thirsty in the middle of the night and went to get a glass of <span style='color:${this.colorBg}'>${a}</span>. I checked my alarm clock, which said it was <span style='color:${this.colorBg}'>${b}</span>. I didn’t want to wake anyone up, so I made sure to be very quiet. I tiptoed down the <span>${c}</span> and turned on a light in the kitchen. I filled my glass with water. As I was heading back to <span>${d}</span>, I saw a jar of cookies on the counter. I couldn’t reach it, so I <span>${e}</span> on a chair to grab it. It was heavy, but I managed to pull it down. I opened the lid and took a chocolate chip cookie! It was delicious`
    }
    if (this.storyPart == 2) {
      return `I woke up thirsty in the middle of the night and went to get a glass of <span style='color:${this.colorBg}'>${a}</span>. I checked my alarm clock, which said it was <span style='color:${this.colorBg}'>${b}</span>. I didn’t want to wake anyone up, so I made sure to be very quiet. I tiptoed down the <span style='color:${this.colorBg}'>${c}</span> and turned on a light in the kitchen. I filled my glass with water. As I was heading back to <span>${d}</span>, I saw a jar of cookies on the counter. I couldn’t reach it, so I <span>${e}</span> on a chair to grab it. It was heavy, but I managed to pull it down. I opened the lid and took a chocolate chip cookie! It was delicious`
    }
    if (this.storyPart == 3) {
      return `I woke up thirsty in the middle of the night and went to get a glass of <span style='color:${this.colorBg}'>${a}</span>. I checked my alarm clock, which said it was <span style='color:${this.colorBg}'>${b}</span>. I didn’t want to wake anyone up, so I made sure to be very quiet. I tiptoed down the <span style='color:${this.colorBg}'>${c}</span> and turned on a light in the kitchen. I filled my glass with water. As I was heading back to <span style='color:${this.colorBg}'>${d}</span>, I saw a jar of cookies on the counter. I couldn’t reach it, so I <span>${e}</span> on a chair to grab it. It was heavy, but I managed to pull it down. I opened the lid and took a chocolate chip cookie! It was delicious`
    }
    if (this.storyPart == 4) {
      return `I woke up thirsty in the middle of the night and went to get a glass of <span style='color:${this.colorBg}'>${a}</span>. I checked my alarm clock, which said it was <span style='color:${this.colorBg}'>${b}</span>. I didn’t want to wake anyone up, so I made sure to be very quiet. I tiptoed down the <span style='color:${this.colorBg}'>${c}</span> and turned on a light in the kitchen. I filled my glass with water. As I was heading back to <span style='color:${this.colorBg}'>${d}</span>, I saw a jar of cookies on the counter. I couldn’t reach it, so I <span style='color:${this.colorBg}'>${e}</span> on a chair to grab it. It was heavy, but I managed to pull it down. I opened the lid and took a chocolate chip cookie! It was delicious`
    }

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

    // ---------------Add Station----------------
    this.station = this.add.sprite(2600, 250, 'station').setDisplaySize(1000, 1000)
    // var station = document.createElement('div');
    // station.innerHTML = `<img style="width: 100%;position: relative;top: 300px;left:220%" src="assets/images/train/station.png">`;
    // this.station = this.add.dom(0, 0, station)
    // ------------------------------------------

    this.add.sprite(50, 450, 'tracks');

    this.car0 = this.add.sprite(332, 380, 'car0').setDisplaySize(70, 50);
    this.car1 = this.add.sprite(400, 380, 'car1').setDisplaySize(70, 50);
    this.car2 = this.add.sprite(468, 380, 'car2').setDisplaySize(70, 50);
    this.car3 = this.add.sprite(536, 380, 'car3').setDisplaySize(70, 50);
    this.car4 = this.add.sprite(604, 380, 'car4').setDisplaySize(70, 50);
    this.add.sprite(670, 380, 'engine').setDisplaySize(70, 50);

    // -----------Add Text--------------
    var style = {
      'word-spacing': '10px',
      'font': '45px Arial',
      'font-weight': 'bold',
      'top': "50px",
      'width': '1210%',
      'position': 'absolute',
      'left': '710%'
    };

    var div = document.createElement('div');
    if (this.textStory == '') {
      div.innerHTML = this.storyFunction('crayons', 'noon', 'stars', 'school', 'sat', 'simple');
    }
    if (this.textStory == 'reverse') {
      div.innerHTML = this.storyFunction('crayons', 'noon', 'stars', 'school', 'sat', 'reverse');
      // this.storyPart++;
    }
    if (this.textStory == 'forward') {

      if (this.storyPart == 0) {
        div.innerHTML = this.storyFunction('water', 'noon', 'stars', 'school', 'sat', 'forward');
      }
      if (this.storyPart == 1) {
        div.innerHTML = this.storyFunction('water', 'midnight', 'stars', 'school', 'sat', 'forward');
      }
      if (this.storyPart == 2) {
        div.innerHTML = this.storyFunction('water', 'midnight', 'stairs', 'school', 'sat', 'forward');
      }
      if (this.storyPart == 3) {
        div.innerHTML = this.storyFunction('water', 'midnight', 'stairs', 'bed', 'sat', 'forward');
      }
      if (this.storyPart == 4) {
        div.innerHTML = this.storyFunction('water', 'midnight', 'stairs', 'bed', 'stood', 'forward');
      }
      if (this.storyPart < 4) {
        this.storyPart++;
      }
    }

    // [crayons | water] [noon | midnight] [stars | stairs] [school | bed] [sat | stood]   div.innerHTML = `I got up in the middle of the night to get a glass of crayons. I was really thirsty. I thought I saw a monster in the corner  of my room but it was just my cat up on the shelf.`

    Object.assign(div.style, style);
    this.text = this.add.dom(0, 0, div);
    // ------------------------------------------


    // -------------set Text Positiob------------
    let textCoordinates = localStorage.getItem('textCoordinates')
    this.text.x = textCoordinates ? parseInt(textCoordinates) : 0;

    let tree1Coordinates = localStorage.getItem('tree1Coordinates')
    this.tree1.x = tree1Coordinates ? parseInt(tree1Coordinates) : 100;

    let tree2Coordinates = localStorage.getItem('tree2Coordinates')
    this.tree2.x = tree2Coordinates ? parseInt(tree2Coordinates) : 450;

    let tree3Coordinates = localStorage.getItem('tree3Coordinates')
    this.tree3.x = tree3Coordinates ? parseInt(tree3Coordinates) : 800;

    let stationCoordinates = localStorage.getItem('stationCoordinates')
    this.station.x = stationCoordinates ? parseInt(stationCoordinates) : 2600;

    // if (this.playStatus == true) {
    //   this.play = this.add.sprite(500, 465, 'play').setInteractive({ cursor: 'pointer' }).setDisplaySize(70, 70);
    //   this.play.on('pointerup', () => {
    //     this.backgroundImg = 'pause'
    //     this.playStatus = false;
    //     this.scene.restart();
    //   }, this)
    // }

    if (this.playStatus == 'play') {
      this.pause = this.add.sprite(500, 465, 'pause').setInteractive({ cursor: 'pointer' }).setDisplaySize(70, 70);
      this.pause.on('pointerup', () => {
        this.backgroundImg = 'play'
        this.playStatus = 'reverse';
        this.scene.restart();
      }, this)
    }

    if (this.playStatus == 'reverse') {
      this.rewind = this.add.sprite(500, 465, 'rewind').setInteractive({ cursor: 'pointer' }).setDisplaySize(70, 70);
      this.textStory = 'reverse'
      this.rewind.on('pointerup', () => {
        this.backgroundImg = 'reverse';
        this.playStatus = 'forward';
        this.scene.restart();
      }, this)
    }

    if (this.playStatus == 'forward') {
      this.forward = this.add.sprite(500, 465, 'forward').setInteractive({ cursor: 'pointer' }).setDisplaySize(70, 70);
      this.textStory = 'forward'
      this.forward.on('pointerup', () => {
        this.backgroundImg = 'play';
        this.playStatus = 'reverse';
        this.scene.restart();
      }, this)
    }

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
    if (this.text.x >= -14000) {
      // ----------------checking Wrong Word Animation------------------
      if (this.text.x < -2860 && this.storyPart == 0) {
        this.car0.destroy()
      }

      if (this.text.x < -4100 && this.storyPart == 0) {
        this.car1.destroy()
      }
      if (this.text.x < -4100 && this.storyPart == 1) {
        this.car0.destroy();
        this.car1.destroy();
        this.car0 = this.add.sprite(400, 380, 'car0').setDisplaySize(70, 50);
      }

      if (this.text.x < -6200 && this.storyPart == 0) {
        this.car2.destroy();
      }
      if (this.text.x < -6200 && this.storyPart == 1) {
        this.car0.destroy();
        this.car2.destroy();
        this.car0 = this.add.sprite(468, 380, 'car0').setDisplaySize(70, 50);
      }
      if (this.text.x < -6200 && this.storyPart == 2) {
        this.car0.destroy();
        this.car1.destroy();
        this.car2.destroy();
        this.car0 = this.add.sprite(400, 380, 'car0').setDisplaySize(70, 50);
        this.car1 = this.add.sprite(468, 380, 'car1').setDisplaySize(70, 50);
      }

      if (this.text.x < -8600 && this.storyPart == 0) {
        this.car3.destroy();
      }
      if (this.text.x < -8600 && this.storyPart == 1) {
        this.car0.destroy();
        this.car3.destroy();
        this.car0 = this.add.sprite(536, 380, 'car0').setDisplaySize(70, 50);
      }
      if (this.text.x < -8600 && this.storyPart == 2) {
        this.car0.destroy();
        this.car1.destroy();
        this.car3.destroy();
        this.car0 = this.add.sprite(468, 380, 'car0').setDisplaySize(70, 50);
        this.car1 = this.add.sprite(536, 380, 'car1').setDisplaySize(70, 50);
      }
      if (this.text.x < -8600 && this.storyPart == 3) {
        this.car0.destroy();
        this.car1.destroy();
        this.car2.destroy();
        this.car3.destroy();
        this.car0 = this.add.sprite(400, 380, 'car0').setDisplaySize(70, 50);
        this.car1 = this.add.sprite(468, 380, 'car1').setDisplaySize(70, 50);
        this.car2 = this.add.sprite(536, 380, 'car2').setDisplaySize(70, 50);
      }

      if (this.text.x < -10100 && this.storyPart == 0) {
        this.car4.destroy();
      }
      if (this.text.x < -10100 && this.storyPart == 1) {
        this.car0.destroy();
        this.car4.destroy();
        this.car0 = this.add.sprite(604, 380, 'car0').setDisplaySize(70, 50);
      }
      if (this.text.x < -10100 && this.storyPart == 2) {
        this.car0.destroy();
        this.car1.destroy();
        this.car4.destroy();
        this.car0 = this.add.sprite(536, 380, 'car0').setDisplaySize(70, 50);
        this.car1 = this.add.sprite(604, 380, 'car1').setDisplaySize(70, 50);
      }
      if (this.text.x < -10100 && this.storyPart == 3) {
        this.car0.destroy();
        this.car1.destroy();
        this.car2.destroy();
        this.car4.destroy();
        this.car0 = this.add.sprite(468, 380, 'car0').setDisplaySize(70, 50);
        this.car1 = this.add.sprite(536, 380, 'car1').setDisplaySize(70, 50);
        this.car2 = this.add.sprite(604, 380, 'car2').setDisplaySize(70, 50);
      }
      if (this.text.x < -10100 && this.storyPart == 4) {
        this.car0.destroy();
        this.car1.destroy();
        this.car2.destroy();
        this.car3.destroy();
        this.car4.destroy();
        this.car0 = this.add.sprite(400, 380, 'car0').setDisplaySize(70, 50);
        this.car1 = this.add.sprite(468, 380, 'car1').setDisplaySize(70, 50);
        this.car2 = this.add.sprite(536, 380, 'car2').setDisplaySize(70, 50);
        this.car3 = this.add.sprite(604, 380, 'car3').setDisplaySize(70, 50);
      }
      //----------------------------------------------------------------

      this.backgroundImg == 'play' ? this.text.x -= 3.5 : this.backgroundImg == 'pause' ? this.text.x -= 0 : '';
    } else {
      // this.text.x = 0
      this.text.x += 0
    }

    if (this.backgroundImg == 'reverse') {
      this.text.x += 6.5;
      // ----------------checking Wrong Word Animation------------------
      if (this.text.x > -2800 && this.storyPart == 0) {
        this.car0 = this.add.sprite(332, 380, 'car0').setDisplaySize(70, 50);
      }
      if (this.text.x > -4100 && this.storyPart == 0) {
        this.car1 = this.add.sprite(400, 380, 'car1').setDisplaySize(70, 50);
      }
      if (this.text.x > -4100 && this.storyPart == 1) {
        this.car0.destroy();
        this.car0 = this.add.sprite(332, 380, 'car0').setDisplaySize(70, 50);
        this.car1 = this.add.sprite(400, 380, 'car1').setDisplaySize(70, 50);
      }

      if (this.text.x > -6200 && this.storyPart == 0) {
        this.car2 = this.add.sprite(468, 380, 'car2').setDisplaySize(70, 50);
      }
      if (this.text.x > -6200 && this.storyPart == 1) {
        this.car0.destroy();
        this.car0 = this.add.sprite(400, 380, 'car0').setDisplaySize(70, 50);
        this.car2 = this.add.sprite(468, 380, 'car2').setDisplaySize(70, 50);
      }
      if (this.text.x > -6200 && this.storyPart == 2) {
        this.car0.destroy();
        this.car1.destroy();
        this.car2.destroy();
        this.car0 = this.add.sprite(332, 380, 'car0').setDisplaySize(70, 50);
        this.car1 = this.add.sprite(400, 380, 'car1').setDisplaySize(70, 50);
        this.car2 = this.add.sprite(468, 380, 'car2').setDisplaySize(70, 50);
      }

      if (this.text.x > -8600 && this.storyPart == 0) {
        this.car3 = this.add.sprite(536, 380, 'car3').setDisplaySize(70, 50);
      }
      if (this.text.x > -8600 && this.storyPart == 1) {
        this.car0.destroy();
        this.car0 = this.add.sprite(468, 380, 'car0').setDisplaySize(70, 50);
        this.car3 = this.add.sprite(536, 380, 'car3').setDisplaySize(70, 50);
      }
      if (this.text.x > -8600 && this.storyPart == 2) {
        this.car0.destroy();
        this.car1.destroy();
        this.car0 = this.add.sprite(400, 380, 'car0').setDisplaySize(70, 50);
        this.car1 = this.add.sprite(468, 380, 'car1').setDisplaySize(70, 50);
        this.car3 = this.add.sprite(536, 380, 'car3').setDisplaySize(70, 50);
      }
      if (this.text.x > -8600 && this.storyPart == 3) {
        this.car0.destroy();
        this.car1.destroy();
        this.car2.destroy();
        this.car0 = this.add.sprite(332, 380, 'car0').setDisplaySize(70, 50);
        this.car1 = this.add.sprite(400, 380, 'car1').setDisplaySize(70, 50);
        this.car2 = this.add.sprite(468, 380, 'car2').setDisplaySize(70, 50);
        this.car3 = this.add.sprite(536, 380, 'car3').setDisplaySize(70, 50);
      }

      if (this.text.x > -10100 && this.storyPart == 0) {
        this.car4 = this.add.sprite(604, 380, 'car4').setDisplaySize(70, 50);
      }
      if (this.text.x > -10100 && this.storyPart == 1) {
        this.car0.destroy();
        this.car0 = this.add.sprite(536, 380, 'car0').setDisplaySize(70, 50);
        this.car4 = this.add.sprite(604, 380, 'car4').setDisplaySize(70, 50);
      }
      if (this.text.x > -10100 && this.storyPart == 2) {
        this.car0.destroy();
        this.car1.destroy();
        this.car0 = this.add.sprite(468, 380, 'car0').setDisplaySize(70, 50);
        this.car1 = this.add.sprite(536, 380, 'car1').setDisplaySize(70, 50);
        this.car4 = this.add.sprite(604, 380, 'car4').setDisplaySize(70, 50);
      }
      if (this.text.x > -10100 && this.storyPart == 3) {
        this.car0.destroy();
        this.car1.destroy();
        this.car2.destroy();
        this.car0 = this.add.sprite(400, 380, 'car0').setDisplaySize(70, 50);
        this.car1 = this.add.sprite(468, 380, 'car1').setDisplaySize(70, 50);
        this.car2 = this.add.sprite(536, 380, 'car2').setDisplaySize(70, 50);
        this.car4 = this.add.sprite(604, 380, 'car4').setDisplaySize(70, 50);
      }
      if (this.text.x > -10100 && this.storyPart == 4) {
        this.car0.destroy();
        this.car1.destroy();
        this.car2.destroy();
        this.car3.destroy();

        this.car0 = this.add.sprite(332, 380, 'car0').setDisplaySize(70, 50);
        this.car1 = this.add.sprite(400, 380, 'car1').setDisplaySize(70, 50);
        this.car2 = this.add.sprite(468, 380, 'car2').setDisplaySize(70, 50);
        this.car3 = this.add.sprite(536, 380, 'car3').setDisplaySize(70, 50);
        this.car4 = this.add.sprite(604, 380, 'car4').setDisplaySize(70, 50);
      }
      // ---------------------------------------------------------------

      if (this.text.x >= 0) {
        // this.text.x = -14000;
        this.text.x = 0
      }
    }
    console.log('==>>>>>', this.text.x)

    // ---------------Station image--------------------

    if (this.backgroundImg == 'play') {
      if (this.station.x < 510) {

        // -----------set every object to its initial position-----------------
        this.station.x += 0;
        this.tree1 += 0;
        this.tree2 += 0;
        this.tree3 += 0;
        this.backgroundImg += 0;

        localStorage.removeItem("textCoordinates");
        localStorage.removeItem("tree1Coordinates");
        localStorage.removeItem("tree2Coordinates");
        localStorage.removeItem("tree3Coordinates");
        localStorage.removeItem("cloud1Coordinates");
        localStorage.removeItem("cloud2Coordinates");
        localStorage.removeItem("stationCoordinates");

        this.parentContext.finishContentFunction(this.parentContext.finishContent)

      } else {
        this.station.x -= 0.5
      }
    }

    if (this.backgroundImg == 'reverse') {
      this.station.x += 0.5
    }

    // -----------tree1------------

    if (this.tree1.x > -200) {
      this.backgroundImg == 'play' ? this.tree1.x -= 0.5 : this.backgroundImg == 'pause' ? this.tree1.x -= 0 : '';
    } else {
      this.tree1.x = 999
    }

    if (this.backgroundImg == 'reverse') {
      this.text.x >= 0 ? this.tree1.x += 0 : this.tree1.x += 3.5;
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
      this.text.x >= 0 ? this.tree2.x += 0 : this.tree2.x += 3.5;
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
      this.text.x >= 0 ? this.tree3.x += 0 : this.tree3.x += 3.5;
      if (this.tree3.x > 999) {
        this.tree3.x = 0;
      }
    }



    this.backgroundImg == 'play' ?
      this.background.tilePositionX += 2.5 :
      this.backgroundImg == 'pause' ?
        this.background.tilePositionX += 0 :
        this.backgroundImg == 'reverse' ?
          this.text.x >= 0 ? this.background.tilePositionX += 0 : this.background.tilePositionX -= 5.5 : '';

    this.backgroundImg == 'play' ?
      this.cloud1.tilePositionX += 0.2 :
      this.backgroundImg == 'pause' ?
        this.cloud1.tilePositionX += 0 :
        this.backgroundImg == 'reverse' ?
          this.text.x >= 0 ? this.cloud1.tilePositionX += 0 : this.cloud1.tilePositionX -= 3.2 : '';

    this.backgroundImg == 'play' ?
      this.cloud2.tilePositionX += 0.2 :
      this.backgroundImg == 'pause' ?
        this.cloud2.tilePositionX += 0 :
        this.backgroundImg == 'reverse' ?
          this.text.x >= 0 ? this.cloud2.tilePositionX += 0 : this.cloud2.tilePositionX -= 3.2 : '';

    // -------------------------Set localstorage------------------------------

    localStorage.setItem("textCoordinates", this.text.x);
    localStorage.setItem("tree1Coordinates", this.tree1.x);
    localStorage.setItem("tree2Coordinates", this.tree2.x);
    localStorage.setItem("tree3Coordinates", this.tree3.x);
    localStorage.setItem("cloud1Coordinates", this.cloud1.tilePositionX.toString());
    localStorage.setItem("cloud2Coordinates", this.cloud2.tilePositionX.toString());
    localStorage.setItem("stationCoordinates", this.station.x);
    this.text.x >= 0 ?
      localStorage.setItem('trainCount', "0")
      :
      localStorage.setItem('trainCount', this.storyPart.toString())

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
  trainCount: string;
  @ViewChild('content') content;
  @ViewChild('finishContent') finishContent;

  constructor(private router: Router, private modalService: NgbModal) {
    this.phaserScheneConfig();
  }

  phaserScheneConfig() {
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

  ngDoCheck() {
    this.trainCount = localStorage.getItem('trainCount');
    // console.log(globalThis.Phaser.Game.scene)
  }

  open(content) {
    localStorage.removeItem('popupClose')
    this.modalService.open(content, { size: 'xl' }).result.then((result) => {
    }, (reason) => {
      localStorage.setItem('popupClose', JSON.stringify(true))
    });
  }

  finishContentFunction(finishContent) {
    localStorage.removeItem('popupClose')
    this.modalService.open(finishContent, { size: 'xl' }).result.then((result) => {
    }, (reason) => {
      localStorage.setItem('popupClose', JSON.stringify(true))
    });
  }

  ReplayFunction() {
    document.getElementById("gameContainer").innerHTML = '';
    this.phaserScheneConfig();
    this.phaserGame = new Phaser.Game(this.config);
    this.modalService.dismissAll()
    localStorage.clear()
  }
}
