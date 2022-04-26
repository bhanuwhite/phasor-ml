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
  image5Content: string[] = ["What is the", "Largest", "Animal"]
  private background: Phaser.GameObjects.Image;

  constructor() {
    super({ key: 'new' });
  }

  preload() {

    // this.load.image('p1', 'assets/images/1stPanel/1.png');
    // this.load.image('p2', 'assets/images/1stPanel/2.png');
    // this.load.image('p3', 'assets/images/1stPanel/3.png');
    // this.load.image('p4', 'assets/images/1stPanel/4.png');
    // this.load.image('p5', 'assets/images/1stPanel/5.png');


    // this.load.image('p6', 'assets/images/2ndPanel/1.png');
    // this.load.image('p7', 'assets/images/2ndPanel/2.png');
    // this.load.image('p8', 'assets/images/2ndPanel/3.png');
    // this.load.image('p9', 'assets/images/2ndPanel/4.png');
    // this.load.image('p10', 'assets/images/2ndPanel/5.png');

    this.load.image('p1', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_a1.svg');
    this.load.image('p2', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_d1.svg');
    this.load.image('p3', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_e1.svg');
    this.load.image('p4', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_c1.svg');
    this.load.image('p5', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_b1.svg');

    this.load.image('p6', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_a2.svg');
    this.load.image('p7', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_e2.svg');
    this.load.image('p8', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_d2.svg');
    this.load.image('p9', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_b2.svg');
    this.load.image('p10', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_e2.svg');
    this.load.image('p11', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_a2.svg');
    this.load.image('p12', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_c2.svg');

    this.load.image('p13', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_e2.svg');
    this.load.image('p14', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_d2.svg');
    this.load.image('p15', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_c2.svg');
    this.load.image('p16', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_a2.svg');
    this.load.image('p17', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_c2.svg');
    this.load.image('p18', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_b2.svg');
    this.load.image('p19', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_d2.svg');

    this.load.image('p20', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_d2.svg');
    this.load.image('p21', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_c2.svg');
    this.load.image('p22', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_a2.svg');
    this.load.image('p23', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_e2.svg');
    this.load.image('p24', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_b2.svg');

    this.load.image("background", "assets/images/background/Group 132.png")

  }


  create() {
    this.background = this.add.image(0, 0, "background")
      .setOrigin(0, 0);
    // Based on your game size, it may "stretch" and distort.
    this.background.displayWidth = this.sys.canvas.width;
    this.background.displayHeight = this.sys.canvas.height;

    let image1 = this.add.sprite(120, 100, 'p1').setInteractive({ cursor: 'pointer' }).setDisplaySize(180, 100);
    let image2 = this.add.sprite(120, 300, 'p2').setInteractive({ cursor: 'pointer' }).setDisplaySize(180, 100);
    let image3 = this.add.sprite(120, 500, 'p3').setInteractive({ cursor: 'pointer' }).setDisplaySize(180, 100);
    let image4 = this.add.sprite(120, 700, 'p4').setInteractive({ cursor: 'pointer' }).setDisplaySize(180, 100);
    let image5 = this.add.sprite(120, 900, 'p5').setInteractive({ cursor: 'pointer' }).setDisplaySize(180, 100);

    let image6 = this.add.sprite(700, 100, 'p6').setInteractive({ cursor: 'pointer' }).setDisplaySize(220, 100);
    let image7 = this.add.sprite(700, 280, 'p7').setInteractive({ cursor: 'pointer' }).setDisplaySize(180, 100);
    let image8 = this.add.sprite(700, 460, 'p8').setInteractive({ cursor: 'pointer' }).setDisplaySize(180, 100);
    let image9 = this.add.sprite(700, 640, 'p9').setInteractive({ cursor: 'pointer' }).setDisplaySize(180, 100);
    let image10 = this.add.sprite(700, 820, 'p10').setInteractive({ cursor: 'pointer' }).setDisplaySize(180, 100);
    let image11 = this.add.sprite(700, 1000, 'p11').setInteractive({ cursor: 'pointer' }).setDisplaySize(220, 100);
    let image12 = this.add.sprite(700, 1180, 'p12').setInteractive({ cursor: 'pointer' }).setDisplaySize(180, 100);

    let image13 = this.add.sprite(1000, 100, 'p13').setInteractive({ cursor: 'pointer' }).setDisplaySize(180, 100);
    let image14 = this.add.sprite(1000, 280, 'p14').setInteractive({ cursor: 'pointer' }).setDisplaySize(180, 100);
    let image15 = this.add.sprite(1000, 460, 'p15').setInteractive({ cursor: 'pointer' }).setDisplaySize(180, 100);
    let image16 = this.add.sprite(1000, 640, 'p16').setInteractive({ cursor: 'pointer' }).setDisplaySize(220, 100);
    let image17 = this.add.sprite(1000, 820, 'p17').setInteractive({ cursor: 'pointer' }).setDisplaySize(180, 100);
    let image18 = this.add.sprite(1000, 1000, 'p18').setInteractive({ cursor: 'pointer' }).setDisplaySize(180, 100);
    let image19 = this.add.sprite(1000, 1180, 'p19').setInteractive({ cursor: 'pointer' }).setDisplaySize(180, 100);

    let image20 = this.add.sprite(1300, 100, 'p20').setInteractive({ cursor: 'pointer' }).setDisplaySize(180, 100);
    let image21 = this.add.sprite(1300, 280, 'p21').setInteractive({ cursor: 'pointer' }).setDisplaySize(180, 100);
    let image22 = this.add.sprite(1300, 460, 'p22').setInteractive({ cursor: 'pointer' }).setDisplaySize(220, 100);
    let image23 = this.add.sprite(1300, 640, 'p23').setInteractive({ cursor: 'pointer' }).setDisplaySize(180, 100);
    let image24 = this.add.sprite(1300, 820, 'p24').setInteractive({ cursor: 'pointer' }).setDisplaySize(180, 100);

    // Name of the puzzle pieces 
    let image1Name = this.add.text(100, 150, 'Place', { font: '24px Arial', align: 'center', color: 'white' }).setOrigin(0.4, 2.4);
    let image2Name = this.add.text(100, 350, 'Adj', { font: '24px Arial', align: 'center', color: 'black' }).setOrigin(0.4, 2.4);
    let image3Name = this.add.text(100, 550, 'Noun', { font: '24px Arial', align: 'center', color: 'black' }).setOrigin(0.4, 2.4);
    let image4Name = this.add.text(100, 750, 'Verb', { font: '24px Arial', align: 'center', color: 'black' }).setOrigin(0.4, 2.4);
    let image5Name = this.add.text(100, 1015, this.image5Content, { font: '18px Arial', align: 'center', color: 'white' }).setOrigin(0.4, 2.4);

    let image6Name = this.add.text(700, 100, 'Woods', { font: '24px Arial', align: 'center', color: 'white' }).setOrigin(0.4, 0.4);
    let image7Name = this.add.text(700, 280, 'Ant', { font: '24px Arial', align: 'center', color: 'black' }).setOrigin(0.4, 0.4);
    let image8Name = this.add.text(700, 460, 'Yellow', { font: '24px Arial', align: 'center', color: 'black' }).setOrigin(0.4, 0.4);
    let image9Name = this.add.text(700, 640, 'Whale', { font: '24px Arial', align: 'center', color: 'white' }).setOrigin(0.4, 0.4);
    let image10Name = this.add.text(700, 820, 'Donut', { font: '24px Arial', align: 'center', color: 'black' }).setOrigin(0.4, 0.4);
    let image11Name = this.add.text(700, 1000, 'School', { font: '24px Arial', align: 'center', color: 'white' }).setOrigin(0.4, 0.4);
    let image12Name = this.add.text(700, 1180, 'Dance', { font: '24px Arial', align: 'center', color: 'black' }).setOrigin(0.4, 0.4);

    let image13Name = this.add.text(1000, 100, 'Dog', { font: '24px Arial', align: 'center', color: 'white' }).setOrigin(0.4, 0.4);
    let image14Name = this.add.text(1000, 280, 'Blue', { font: '24px Arial', align: 'center', color: 'black' }).setOrigin(0.4, 0.4);
    let image15Name = this.add.text(1000, 460, 'Sing', { font: '24px Arial', align: 'center', color: 'black' }).setOrigin(0.4, 0.4);
    let image16Name = this.add.text(1000, 640, 'Home', { font: '24px Arial', align: 'center', color: 'white' }).setOrigin(0.4, 0.4);
    let image17Name = this.add.text(1000, 820, 'Swim', { font: '24px Arial', align: 'center', color: 'black' }).setOrigin(0.4, 0.4);
    let image18Name = this.add.text(1000, 1000, 'Cat', { font: '24px Arial', align: 'center', color: 'white' }).setOrigin(0.4, 0.4);
    let image19Name = this.add.text(1000, 1180, 'Big', { font: '24px Arial', align: 'center', color: 'black' }).setOrigin(0.4, 0.4);

    let image20Name = this.add.text(1300, 100, 'Small', { font: '24px Arial', align: 'center', color: 'black' }).setOrigin(0.4, 0.4);
    let image21Name = this.add.text(1300, 280, 'Run', { font: '24px Arial', align: 'center', color: 'black' }).setOrigin(0.4, 0.4);
    let image22Name = this.add.text(1300, 460, 'Space', { font: '24px Arial', align: 'center', color: 'white' }).setOrigin(0.4, 0.4);
    let image23Name = this.add.text(1300, 640, 'Car', { font: '24px Arial', align: 'center', color: 'black' }).setOrigin(0.4, 0.4);
    let image24Name = this.add.text(1300, 820, 'Ant', { font: '24px Arial', align: 'center', color: 'white' }).setOrigin(0.4, 0.4);

    // input for drag item
    this.input.setDraggable(image6);
    this.input.setDraggable(image7);
    this.input.setDraggable(image8);
    this.input.setDraggable(image9);
    this.input.setDraggable(image10);
    this.input.setDraggable(image11);
    this.input.setDraggable(image12);
    this.input.setDraggable(image13);
    this.input.setDraggable(image14);
    this.input.setDraggable(image15);
    this.input.setDraggable(image16);
    this.input.setDraggable(image17);
    this.input.setDraggable(image18);
    this.input.setDraggable(image19);
    this.input.setDraggable(image20);
    this.input.setDraggable(image21);
    this.input.setDraggable(image22);
    this.input.setDraggable(image23);
    this.input.setDraggable(image24);
    // this.input.se

    // compare matching object by click
    image1.on('pointerup', () => {
      this.firstClick = true;
      this.clickMatchObject = { "key": 'p1', "match": '' };
      image1.setTint(0xff0000);
    })

    image2.on('pointerup', () => {
      this.firstClick = true;
      this.clickMatchObject = { "key": 'p2', "match": '' };
      image2.setTint(0xff0000);
    })

    image3.on('pointerup', () => {
      this.firstClick = true;
      this.clickMatchObject = { "key": 'p3', "match": '' };
      image3.setTint(0xff0000);
    })


    image4.on('pointerup', () => {
      this.firstClick = true;
      this.clickMatchObject = { "key": 'p4', "match": '' };
      image4.setTint(0xff0000);
    })

    image5.on('pointerup', () => {
      this.firstClick = true;
      this.clickMatchObject = { "key": 'p5', "match": '' };
      image5.setTint(0xff0000);
    })

    image6.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p6'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p1' && this.clickMatchObject['match'] == 'p6') {
          image6.setPosition(272.29235175559563, 100)
          image6Name.setPosition(272.29235175559563, 100)
          this.input.setDraggable(image6, false);
          image6.clearTint();
          image1.clearTint();
          this.firstClick = false;
        } else {
          alert('incorrect move')
        }
      }
    })

    image11.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p11'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p1' && this.clickMatchObject['match'] == 'p11') {
          image11.setPosition(272.29235175559563, 100)
          image11Name.setPosition(272.29235175559563, 100)
          this.input.setDraggable(image11, false);
          image11.clearTint();
          image1.clearTint();
          this.firstClick = false;
        } else {
          alert('incorrect move')
        }
      }
    })

    image16.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p16'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p1' && this.clickMatchObject['match'] == 'p16') {
          image16.setPosition(272.29235175559563, 100)
          image16Name.setPosition(272.29235175559563, 100)
          this.input.setDraggable(image16, false);
          image16.clearTint();
          image1.clearTint();
          this.firstClick = false;
        } else {
          alert('incorrect move')
        }
      }
    })

    image22.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p22'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p1' && this.clickMatchObject['match'] == 'p22') {
          image22.setPosition(272.29235175559563, 100)
          image22Name.setPosition(272.29235175559563, 100)
          this.input.setDraggable(image22, false);
          image22.clearTint();
          image1.clearTint();
          this.firstClick = false;
        } else {
          alert('incorrect move')
        }
      }
    })

    image8.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p8'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p2' && this.clickMatchObject['match'] == 'p8') {
          image8.setPosition(262.10883632120505, 297.062423500612)
          image8Name.setPosition(262.10883632120505, 297.062423500612)
          this.input.setDraggable(image8, false);
          image8.clearTint();
          image2.clearTint();
          this.firstClick = false;
        } else {
          alert('incorrect move')
        }
      }
    })

    image14.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p14'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p2' && this.clickMatchObject['match'] == 'p14') {
          image14.setPosition(262.10883632120505, 297.062423500612)
          image14Name.setPosition(262.10883632120505, 297.062423500612)
          this.input.setDraggable(image14, false);
          image14.clearTint();
          image2.clearTint();
          this.firstClick = false;
        } else {
          alert('incorrect move')
        }
      }
    })

    image19.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p19'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p2' && this.clickMatchObject['match'] == 'p19') {
          image19.setPosition(262.10883632120505, 297.062423500612)
          image19Name.setPosition(262.10883632120505, 297.062423500612)
          this.input.setDraggable(image19, false);
          image19.clearTint();
          image2.clearTint();
          this.firstClick = false;
        } else {
          alert('incorrect move')
        }
      }
    })

    image20.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p20'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p2' && this.clickMatchObject['match'] == 'p20') {
          image20.setPosition(262.10883632120505, 297.062423500612)
          image20Name.setPosition(262.10883632120505, 297.062423500612)
          this.input.setDraggable(image20, false);
          image20.clearTint();
          image2.clearTint();
          this.firstClick = false;
        } else {
          alert('incorrect move')
        }
      }
    })

    image7.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p7'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p3' && this.clickMatchObject['match'] == 'p7') {
          image7.setPosition(255.7106120828222, 500.8466178183499)
          image7Name.setPosition(255.7106120828222, 500.8466178183499)
          this.input.setDraggable(image7, false);
          image7.clearTint();
          image3.clearTint();
          this.firstClick = false;
        } else {
          alert('incorrect move')
        }
      }
    })

    image10.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p10'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p3' && this.clickMatchObject['match'] == 'p10') {
          image10.setPosition(255.7106120828222, 500.8466178183499)
          image10Name.setPosition(255.7106120828222, 500.8466178183499)
          this.input.setDraggable(image10, false);
          image10.clearTint();
          image3.clearTint();
          this.firstClick = false;
        } else {
          alert('incorrect move')
        }
      }
    })

    image13.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p13'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p3' && this.clickMatchObject['match'] == 'p13') {
          image13.setPosition(255.7106120828222, 500.8466178183499)
          image13Name.setPosition(255.7106120828222, 500.8466178183499)
          this.input.setDraggable(image13, false);
          image13.clearTint();
          image3.clearTint();
          this.firstClick = false;
        } else {
          alert('incorrect move')
        }
      }
    })

    image23.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p23'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p3' && this.clickMatchObject['match'] == 'p23') {
          image23.setPosition(255.7106120828222, 500.8466178183499)
          image23Name.setPosition(255.7106120828222, 500.8466178183499)
          this.input.setDraggable(image23, false);
          image23.clearTint();
          image3.clearTint();
          this.firstClick = false;
        } else {
          alert('incorrect move')
        }
      }
    })

    image12.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p12'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p4' && this.clickMatchObject['match'] == 'p12') {
          image12.setPosition(239.1304347826087, 701.7391304347827)
          image12Name.setPosition(239.1304347826087, 701.7391304347827)
          this.input.setDraggable(image12, false);
          image12.clearTint();
          image4.clearTint();
          this.firstClick = false;
        } else {
          alert('incorrect move')
        }
      }
    })

    image15.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p15'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p4' && this.clickMatchObject['match'] == 'p15') {
          image15.setPosition(239.1304347826087, 701.7391304347827)
          image15Name.setPosition(239.1304347826087, 701.7391304347827)
          this.input.setDraggable(image15, false);
          image15.clearTint();
          image4.clearTint();
          this.firstClick = false;
        } else {
          alert('incorrect move')
        }
      }
    })

    image17.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p17'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p4' && this.clickMatchObject['match'] == 'p17') {
          image17.setPosition(239.1304347826087, 701.7391304347827)
          image17Name.setPosition(239.1304347826087, 701.7391304347827)
          this.input.setDraggable(image17, false);
          image17.clearTint();
          image4.clearTint();
          this.firstClick = false;
        } else {
          alert('incorrect move')
        }
      }
    })

    image21.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p21'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p4' && this.clickMatchObject['match'] == 'p21') {
          image21.setPosition(239.1304347826087, 701.7391304347827)
          image21Name.setPosition(239.1304347826087, 701.7391304347827)
          this.input.setDraggable(image21, false);
          image21.clearTint();
          image4.clearTint();
          this.firstClick = false;
        } else {
          alert('incorrect move')
        }
      }
    })

    image9.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p9'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p5' && this.clickMatchObject['match'] == 'p9') {
          image9.setPosition(252.53503337944312, 899.8195697432338)
          image9Name.setPosition(252.53503337944312, 899.8195697432338)
          this.input.setDraggable(image9, false);
          image9.clearTint();
          image5.clearTint();
          this.firstClick = false;
        } else {
          alert('incorrect move')
        }
      }
    })

    image18.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p18'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p5' && this.clickMatchObject['match'] == 'p18') {
          image18.setPosition(252.53503337944312, 899.8195697432338)
          image18Name.setPosition(252.53503337944312, 899.8195697432338)
          this.input.setDraggable(image18, false);
          image18.clearTint();
          image5.clearTint();
          this.firstClick = false;
        } else {
          alert('incorrect move')
        }
      }
    })

    image24.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p24'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p5' && this.clickMatchObject['match'] == 'p24') {
          image24.setPosition(252.53503337944312, 899.8195697432338)
          image24Name.setPosition(252.53503337944312, 899.8195697432338)
          this.input.setDraggable(image24, false);
          image24.clearTint();
          image5.clearTint();
          this.firstClick = false;
        } else {
          alert('incorrect move')
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
      if (gameObject.texture.key == 'p6') {
        image6Name.x = dragX
        image6Name.y = dragY
      }
      if (gameObject.texture.key == 'p7') {
        image7Name.x = dragX
        image7Name.y = dragY
      }
      if (gameObject.texture.key == 'p8') {
        image8Name.x = dragX
        image8Name.y = dragY
      }
      if (gameObject.texture.key == 'p9') {
        image9Name.x = dragX
        image9Name.y = dragY
      }
      if (gameObject.texture.key == 'p10') {
        image10Name.x = dragX
        image10Name.y = dragY
      }
      if (gameObject.texture.key == 'p11') {
        image11Name.x = dragX
        image11Name.y = dragY
      }
      if (gameObject.texture.key == 'p12') {
        image12Name.x = dragX
        image12Name.y = dragY
      }
      if (gameObject.texture.key == 'p13') {
        image13Name.x = dragX
        image13Name.y = dragY
      }
      if (gameObject.texture.key == 'p14') {
        image14Name.x = dragX
        image14Name.y = dragY
      }
      if (gameObject.texture.key == 'p15') {
        image15Name.x = dragX
        image15Name.y = dragY
      }
      if (gameObject.texture.key == 'p16') {
        image16Name.x = dragX
        image16Name.y = dragY
      }
      if (gameObject.texture.key == 'p17') {
        image17Name.x = dragX
        image17Name.y = dragY
      }
      if (gameObject.texture.key == 'p18') {
        image18Name.x = dragX
        image18Name.y = dragY
      }
      if (gameObject.texture.key == 'p19') {
        image19Name.x = dragX
        image19Name.y = dragY
      }
      if (gameObject.texture.key == 'p20') {
        image20Name.x = dragX
        image20Name.y = dragY
      }
      if (gameObject.texture.key == 'p21') {
        image21Name.x = dragX
        image21Name.y = dragY
      }
      if (gameObject.texture.key == 'p22') {
        image22Name.x = dragX
        image22Name.y = dragY
      }
      if (gameObject.texture.key == 'p23') {
        image23Name.x = dragX
        image23Name.y = dragY
      }
      if (gameObject.texture.key == 'p24') {
        image24Name.x = dragX
        image24Name.y = dragY
      }
    });

    this.input.on('dragend', (pointer, gameObject) => {
      console.log(pointer, gameObject);
      let mapping = [{ key: 'p1', val: 200, match: 'p6' }, { key: 'p1', val: 200, match: 'p11' }, { key: 'p1', val: 200, match: 'p16' }, { key: 'p1', val: 200, match: 'p22' },
      { key: 'p2', val: 200, match: 'p8' }, { key: 'p2', val: 200, match: 'p14' }, { key: 'p2', val: 200, match: 'p19' }, { key: 'p2', val: 200, match: 'p20' },
      { key: 'p3', val: 200, match: 'p7' }, { key: 'p3', val: 200, match: 'p10' }, { key: 'p3', val: 200, match: 'p13' }, { key: 'p3', val: 200, match: 'p23' },
      { key: 'p4', val: 200, match: 'p12' }, { key: 'p4', val: 200, match: 'p15' }, { key: 'p4', val: 200, match: 'p17' }, { key: 'p4', val: 200, match: 'p21' },
      { key: 'p5', val: 200, match: 'p9' }, { key: 'p5', val: 200, match: 'p18' }, { key: 'p5', val: 200, match: 'p24' }]
      let obj = mapping.find(o => o.match === gameObject.texture.key);
      console.log(obj)
      // console.log(gameObject.x, gameObject.y)
      if (this.firstClick == false) {
        if (gameObject.x > 290) {
          alert('incorrect move')
          if (obj.match == 'p6') {
            image6.setPosition(700, 100)
            image6Name.setPosition(700, 100);
            image6.clearTint();
          }
          else if (gameObject.texture.key == 'p7') {
            image7.setPosition(700, 280)
            image7Name.setPosition(700, 280);
            image7.clearTint()
          }
          else if (gameObject.texture.key == 'p8') {
            image8.setPosition(700, 460)
            image8Name.setPosition(700, 460);
            image8.clearTint();
          }
          else if (gameObject.texture.key == 'p9') {
            image9.setPosition(700, 640)
            image9Name.setPosition(700, 640)
            image9.clearTint();
          }
          else if (gameObject.texture.key == 'p10') {
            image10.setPosition(700, 820)
            image10Name.setPosition(700, 820)
            image10.clearTint();
          }
          else if (gameObject.texture.key == 'p11') {
            image11.setPosition(700, 1000)
            image11Name.setPosition(700, 1000);
            image11.clearTint();
          }
          else if (gameObject.texture.key == 'p12') {
            image12.setPosition(700, 1180)
            image12Name.setPosition(700, 1180);
            image12.clearTint();
          }
          else if (gameObject.texture.key == 'p13') {
            image13.setPosition(1000, 100)
            image13Name.setPosition(1000, 100);
            image13.clearTint();
          }
          else if (gameObject.texture.key == 'p14') {
            image14.setPosition(1000, 280)
            image14Name.setPosition(1000, 280);
            image14.clearTint();
          }
          else if (gameObject.texture.key == 'p15') {
            image15.setPosition(1000, 460)
            image15Name.setPosition(1000, 460);
            image15.clearTint();
          }
          else if (gameObject.texture.key == 'p16') {
            image16.setPosition(1000, 640)
            image16Name.setPosition(1000, 640);
            image16.clearTint();
          }
          else if (gameObject.texture.key == 'p17') {
            image17.setPosition(1000, 820)
            image17Name.setPosition(1000, 820);
            image17.clearTint();
          }
          else if (gameObject.texture.key == 'p18') {
            image18.setPosition(1000, 1000)
            image18Name.setPosition(1000, 1000);
            image18.clearTint();
          }
          else if (gameObject.texture.key == 'p19') {
            image19.setPosition(1000, 1180)
            image19Name.setPosition(1000, 1180);
            image19.clearTint();
          }
          else if (gameObject.texture.key == 'p20') {
            image20.setPosition(1300, 100)
            image20Name.setPosition(1300, 100);
            image20.clearTint();
          }
          else if (gameObject.texture.key == 'p21') {
            image21.setPosition(1300, 280)
            image21Name.setPosition(1300, 280);
            image21.clearTint();
          }
          else if (gameObject.texture.key == 'p22') {
            image22.setPosition(1300, 460)
            image22Name.setPosition(1300, 460);
            image22.clearTint();
          }
          else if (gameObject.texture.key == 'p23') {
            image23.setPosition(1300, 640)
            image23Name.setPosition(1300, 640);
            image23.clearTint();
          }
          else if (gameObject.texture.key == 'p24') {
            image24.setPosition(1300, 820)
            image24Name.setPosition(1300, 820);
            image24.clearTint();
          }
        }
        else {

          if (obj.match == 'p6' || obj.match == 'p11' || obj.match == 'p16' || obj.match == 'p22') {
            if (gameObject.y < 110 && gameObject.y > 95) {
              gameObject.disableInteractive();
              gameObject.clearTint();
              gameObject.x = 272.29235175559563;
              gameObject.y = 100
            }
            else {
              alert('incorrect move')
              if (obj.match == 'p6') {
                image6.setPosition(700, 100)
                image6Name.setPosition(700, 100);
                image6.clearTint();
              }

              else if (gameObject.texture.key == 'p11') {
                image11.setPosition(700, 1000)
                image11Name.setPosition(700, 1000);
                image11.clearTint();
              }

              else if (gameObject.texture.key == 'p16') {
                image16.setPosition(1000, 640)
                image16Name.setPosition(1000, 640);
                image16.clearTint();
              }

              else if (gameObject.texture.key == 'p22') {
                image22.setPosition(1300, 460)
                image22Name.setPosition(1300, 460);
                image22.clearTint();
              }

            }
          }

          if (obj.match == 'p8' || obj.match == 'p14' || obj.match == 'p19' || obj.match == 'p20') {
            if (gameObject.y < 305 && gameObject.y > 290) {
              gameObject.disableInteractive();
              gameObject.clearTint();
              gameObject.x = 262.10883632120505
              gameObject.y = 297.062423500612
            }
            else {
              alert('incorrect move')
              if (gameObject.texture.key == 'p8') {
                image8.setPosition(700, 460)
                image8Name.setPosition(700, 460);
                image8.clearTint();
              }

              else if (gameObject.texture.key == 'p14') {
                image14.setPosition(1000, 280)
                image14Name.setPosition(1000, 280);
                image14.clearTint();
              }

              else if (gameObject.texture.key == 'p19') {
                image19.setPosition(1000, 1180)
                image19Name.setPosition(1000, 1180);
                image19.clearTint();
              }

              else if (gameObject.texture.key == 'p20') {
                image20.setPosition(1300, 100)
                image20Name.setPosition(1300, 100);
                image20.clearTint()
              }
            }
          }

          if (obj.match == 'p12' || obj.match == 'p15' || obj.match == 'p17' || obj.match == 'p21') {
            if (gameObject.y < 710 && gameObject.y > 695) {
              gameObject.disableInteractive();
              gameObject.clearTint();
              gameObject.x = 239.1304347826087;
              gameObject.y = 701.7391304347827;
            }
            else {
              alert('incorrect move')
              if (gameObject.texture.key == 'p12') {
                image12.setPosition(700, 1180)
                image12Name.setPosition(700, 1180);
                image12.clearTint();
              }

              else if (gameObject.texture.key == 'p15') {
                image15.setPosition(1000, 460)
                image15Name.setPosition(1000, 460)
                image15.clearTint()
              }
              else if (gameObject.texture.key == 'p17') {
                image17.setPosition(1000, 820)
                image17Name.setPosition(1000, 820)
                image17.clearTint()
              }

              else if (gameObject.texture.key == 'p21') {
                image21.setPosition(1300, 280)
                image21Name.setPosition(1300, 280)
                image21.clearTint()
              }
            }
          }

          if (obj.match == 'p9' || obj.match == 'p18' || obj.match == 'p24') {
            if (gameObject.y < 910 && gameObject.y > 895) {
              gameObject.disableInteractive();
              gameObject.clearTint();
              gameObject.x = 252.53503337944312;
              gameObject.y = 899.8195697432338
            }
            else {
              alert('incorrect move');
              if (gameObject.texture.key == 'p9') {
                image9.setPosition(700, 640)
                image9Name.setPosition(700, 640);
                image9.clearTint();
              }

              else if (gameObject.texture.key == 'p18') {
                image18.setPosition(1000, 1000)
                image18Name.setPosition(1000, 1000);
                image18.clearTint();
              }
              else if (gameObject.texture.key == 'p24') {
                image24.setPosition(1300, 820)
                image24Name.setPosition(1300, 820);
                image24.clearTint();
              }
            }
          }

          if (obj.match == 'p7' || obj.match == 'p10' || obj.match == 'p13' || obj.match == 'p23') {
            if (gameObject.y < 505 && gameObject.y > 495) {
              gameObject.disableInteractive();
              gameObject.clearTint();
              gameObject.x = 255.7106120828222
              gameObject.y = 500.8466178183499
            }
            else {
              alert('incorrect move')
              if (gameObject.texture.key == 'p7') {
                image7.setPosition(700, 280)
                image7Name.setPosition(700, 280)
                image7.clearTint();
              }
              else if (gameObject.texture.key == 'p10') {
                image10.setPosition(700, 820)
                image10Name.setPosition(700, 820);
                image10.clearTint();
              }

              else if (gameObject.texture.key == 'p13') {
                image13.setPosition(1000, 100)
                image13Name.setPosition(1000, 100);
                image13.clearTint();
              }
              else if (gameObject.texture.key == 'p23') {
                image23.setPosition(1300, 640);
                image23Name.setPosition(1300, 640);
                image23.clearTint()
              }

            }
          }
        }
      }
      // if(gameObject.x>250)
      // alert('incorrect move')
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
        height: 1300,
        width: 1500
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
