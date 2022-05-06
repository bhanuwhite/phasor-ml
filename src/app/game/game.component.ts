import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Phaser from 'phaser';

class NewScene extends Phaser.Scene {
  clickMatchObject: object = { "key": '', "match": '' };
  firstClick: boolean = false;
  puzzlePieceMatch: object[] = [];

  story1: any = [{
    'Prural Noun': ['Dolls', 'Bread', 'Globes', 'Books'],
    'Noun1': ['Orage', 'Shell', 'Box', 'Shoe', 'String'],
    'Noun2': ['Orage', 'Shell', 'Box', 'Shoe', 'String'],
    'Animal': ['Mouse', 'Kitten(Lost Pet)', 'Hedgehog', 'Bee'],
    'Adjective': ['Huge', 'Purple', 'Tired', 'Loud']
  }]

  private background: Phaser.GameObjects.Image;

  constructor() {
    super({ key: 'new' });
  }

  preload() {
    let story1 = Object.keys(this.story1[0])
    story1.map((data, index) => {
      if (index == 0) {
        this.load.image('p1', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_a1.svg');
      }
      else if (index == 1) {
        this.load.image('p2', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_d1.svg');
      }
      else if (index == 2) {
        this.load.image('p3', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_d1.svg');
      }
      else if (index == 3) {
        this.load.image('p4', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_c1.svg');
      }
      else if (index == 4) {
        this.load.image('p5', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_b1.svg');
      }
    })

    story1.forEach((data, index) => {
      this.story1[0][data].forEach((data1, index1) => {
        if (index == 0) {
          this.load.image('p6', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_a2.svg');
          this.load.image('p9', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_a2.svg');
          this.load.image('p12', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_a2.svg');
          this.load.image('p15', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_a2.svg');
        }
        if (index == 1) {
          this.load.image('p7', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_d2.svg');
          this.load.image('p10', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_d2.svg');
          this.load.image('p13', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_d2.svg');
          this.load.image('p16', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_d2.svg');
          this.load.image('p18', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_d2.svg');
        }
        if (index == 2) {
          this.load.image('p7', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_d2.svg');
          this.load.image('p10', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_d2.svg');
          this.load.image('p13', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_d2.svg');
          this.load.image('p16', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_d2.svg');
          this.load.image('p18', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_d2.svg');
        }
        if (index == 3) {
          this.load.image('p8', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_c2.svg');
          this.load.image('p11', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_c2.svg');
          this.load.image('p14', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_c2.svg');
          this.load.image('p17', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_c2.svg');
        }
        if (index == 4) {
          this.load.image('p19', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_b2.svg');
          this.load.image('p20', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_b2.svg');
          this.load.image('p21', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_b2.svg');
          this.load.image('p22', 'assets/images/puzzle_pieces/ctc_mablib_puzzle_b2.svg');
        }
      })
    })

    this.load.image("background", "assets/images/background/background.png")

  }


  create() {
    let image6Name;
    let image7Name;
    let image8Name;
    let image9Name;
    let image10Name;
    let image11Name;
    let image12Name;
    let image13Name;
    let image14Name;
    let image15Name;
    let image16Name;
    let image17Name;
    let image18Name;
    let image19Name;
    let image20Name;
    let image21Name;
    let image22Name;

    this.background = this.add.image(0, 0, "background")
      .setOrigin(0, 0);
    // Based on your game size, it may "stretch" and distort.
    this.background.displayWidth = this.sys.canvas.width;
    this.background.displayHeight = this.sys.canvas.height;

    let image1 = this.add.sprite(200, 150, 'p1').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
    let image2 = this.add.sprite(200, 400, 'p2').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
    let image3 = this.add.sprite(200, 650, 'p3').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
    let image4 = this.add.sprite(200, 900, 'p4').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
    let image5 = this.add.sprite(200, 1150, 'p5').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);

    let image6 = this.add.sprite(1120, 150, 'p6').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
    let image7 = this.add.sprite(1120, 400, 'p7').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
    let image8 = this.add.sprite(1120, 650, 'p8').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
    let image9 = this.add.sprite(1120, 900, 'p9').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
    let image10 = this.add.sprite(1120, 1150, 'p10').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);

    let image11 = this.add.sprite(1450, 150, 'p11').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
    let image12 = this.add.sprite(1450, 400, 'p12').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
    let image13 = this.add.sprite(1450, 650, 'p13').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
    let image14 = this.add.sprite(1450, 900, 'p14').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
    let image15 = this.add.sprite(1450, 1150, 'p15').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);

    let image16 = this.add.sprite(1780, 150, 'p16').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
    let image17 = this.add.sprite(1780, 400, 'p17').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
    let image18 = this.add.sprite(1780, 650, 'p18').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
    let image19 = this.add.sprite(1780, 900, 'p19').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
    let image20 = this.add.sprite(1780, 1150, 'p20').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);

    let image21 = this.add.sprite(2110, 150, 'p21').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
    let image22 = this.add.sprite(2110, 400, 'p22').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);

    // Name of the puzzle pieces 

    let story1 = Object.keys(this.story1[0])
    story1.map((data, index) => {
      if (index == 0) {
        let image1Name = this.add.text(150, 150, data, { font: '25px Arial', align: 'center', color: 'white' }).setOrigin(0.4, 0.4);
      }
      else if (index == 1) {
        let image2Name = this.add.text(200, 400, data, { font: '25px Arial', align: 'center', color: 'black' }).setOrigin(0.4, 0.4);
      }
      else if (index == 2) {
        let image3Name = this.add.text(200, 650, data, { font: '25px Arial', align: 'center', color: 'black' }).setOrigin(0.4, 0.4);
      }
      else if (index == 3) {
        let image4Name = this.add.text(200, 900, data, { font: '25px Arial', align: 'center', color: 'black' }).setOrigin(0.4, 0.4);
      }
      else if (index == 4) {
        let image5Name = this.add.text(200, 1150, data, { font: '25px Arial', align: 'center', color: 'white' }).setOrigin(0.4, 0.4);
      }
    })

    story1.forEach((data, index) => {
      this.story1[0][data].forEach((data1, index1) => {
        if (index == 0) {
          if (index1 == 0) {
            image6Name = this.add.text(1120, 150, data1, { font: '25px Arial', align: 'center', color: 'white' }).setOrigin(0.4, 0.4);
          }
          if (index1 == 1) {
            image9Name = this.add.text(1120, 900, data1, { font: '25px Arial', align: 'center', color: 'white' }).setOrigin(0.4, 0.4);
          }
          if (index1 == 2) {
            image12Name = this.add.text(1450, 400, data1, { font: '25px Arial', align: 'center', color: 'white' }).setOrigin(0.4, 0.4);
          }
          if (index1 == 3) {
            image15Name = this.add.text(1450, 1150, data1, { font: '25px Arial', align: 'center', color: 'white' }).setOrigin(0.4, 0.4);
          }
        }

        if (index == 1) {
          if (index1 == 0) {
            image7Name = this.add.text(1120, 400, data1, { font: '25px Arial', align: 'center', color: 'black' }).setOrigin(0.4, 0.4);
          }
          if (index1 == 1) {
            image10Name = this.add.text(1120, 1150, data1, { font: '25px Arial', align: 'center', color: 'black' }).setOrigin(0.4, 0.4);
          }
          if (index1 == 2) {
            image13Name = this.add.text(1450, 650, data1, { font: '25px Arial', align: 'center', color: 'black' }).setOrigin(0.4, 0.4);
          }
          if (index1 == 3) {
            image16Name = this.add.text(1780, 150, data1, { font: '25px Arial', align: 'center', color: 'black' }).setOrigin(0.4, 0.4);
          }
          if (index1 == 4) {
            image18Name = this.add.text(1780, 650, data1, { font: '25px Arial', align: 'center', color: 'black' }).setOrigin(0.4, 0.4);
          }
        }

        if (index == 3) {
          if (index1 == 0) {
            image8Name = this.add.text(1120, 650, data1, { font: '25px Arial', align: 'center', color: 'black' }).setOrigin(0.4, 0.4);
          }
          if (index1 == 1) {
            image11Name = this.add.text(1450, 150, data1, { font: '25px Arial', align: 'center', color: 'black' }).setOrigin(0.4, 0.4);
          }
          if (index1 == 2) {
            image14Name = this.add.text(1450, 900, data1, { font: '25px Arial', align: 'center', color: 'black' }).setOrigin(0.4, 0.4);
          }
          if (index1 == 3) {
            image17Name = this.add.text(1780, 400, data1, { font: '25px Arial', align: 'center', color: 'black' }).setOrigin(0.4, 0.4);
          }
        }

        if (index == 4) {
          if (index1 == 0) {
            image19Name = this.add.text(1780, 900, data1, { font: '25px Arial', align: 'center', color: 'white' }).setOrigin(0.4, 0.4);
          }
          if (index1 == 1) {
            image20Name = this.add.text(1780, 1150, data1, { font: '25px Arial', align: 'center', color: 'white' }).setOrigin(0.4, 0.4);
          }
          if (index1 == 2) {
            image21Name = this.add.text(2110, 150, data1, { font: '25px Arial', align: 'center', color: 'white' }).setOrigin(0.4, 0.4);
          }
          if (index1 == 3) {
            image22Name = this.add.text(2110, 400, data1, { font: '25px Arial', align: 'center', color: 'white' }).setOrigin(0.4, 0.4);
          }
        }

      })
    })

    const dragFunction = () => {
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
    }
    dragFunction();
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
          image6.setPosition(411, 150)
          image6Name.setPosition(411, 150)
          dragFunction();
          this.input.setDraggable(image6, false);
          image6.clearTint();
          image1.clearTint();
          this.firstClick = false;

          // ---------------------------store Matching object----------------
          this.puzzlePieceMatch.filter((data, index) => {
            if (Object.keys(data)[0] == 'Prural Noun') {
              this.puzzlePieceMatch.splice(index, 1);
              let PiecesPosition = JSON.parse(localStorage.getItem('PiecesPosition'));
              eval(PiecesPosition['piece']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
              eval(PiecesPosition['pieceName']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
            }
          })

          if (this.clickMatchObject['match'] == 'p6') {
            this.puzzlePieceMatch.push({ 'Prural Noun': image6Name._text })
          }
          localStorage.setItem('Match', JSON.stringify(this.puzzlePieceMatch));
          localStorage.setItem('PiecesPosition', JSON.stringify({ 'piece': 'image6', 'pieceName': 'image6Name', 'x': 1120, 'y': 150 }));

        } else {
          alert('incorrect move')
        }
      }
    })

    image9.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p9'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p1' && this.clickMatchObject['match'] == 'p9') {
          image9.setPosition(411, 150)
          image9Name.setPosition(411, 150);
          dragFunction();
          this.input.setDraggable(image9, false);
          image9.clearTint();
          image1.clearTint();
          this.firstClick = false;

          // ---------------------------store Matching object----------------
          this.puzzlePieceMatch.filter((data, index) => {
            if (Object.keys(data)[0] == 'Prural Noun') {
              this.puzzlePieceMatch.splice(index, 1);
              let PiecesPosition = JSON.parse(localStorage.getItem('PiecesPosition'));
              eval(PiecesPosition['piece']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
              eval(PiecesPosition['pieceName']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
            }
          })

          if (this.clickMatchObject['match'] == 'p9') {
            this.puzzlePieceMatch.push({ 'Prural Noun': image9Name._text })
          }
          localStorage.setItem('Match', JSON.stringify(this.puzzlePieceMatch));
          localStorage.setItem('PiecesPosition', JSON.stringify({ 'piece': 'image9', 'pieceName': 'image9Name', 'x': 1120, 'y': 900 }));

        } else {
          alert('incorrect move')
        }
      }
    })

    image12.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p12'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p1' && this.clickMatchObject['match'] == 'p12') {
          image12.setPosition(411, 150)
          image12Name.setPosition(411, 150);
          dragFunction();
          this.input.setDraggable(image12, false);
          image12.clearTint();
          image1.clearTint();
          this.firstClick = false;

          // ---------------------------store Matching object----------------
          this.puzzlePieceMatch.filter((data, index) => {
            if (Object.keys(data)[0] == 'Prural Noun') {
              this.puzzlePieceMatch.splice(index, 1);
              let PiecesPosition = JSON.parse(localStorage.getItem('PiecesPosition'));
              eval(PiecesPosition['piece']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
              eval(PiecesPosition['pieceName']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
            }
          })

          if (this.clickMatchObject['match'] == 'p12') {
            this.puzzlePieceMatch.push({ 'Prural Noun': image12Name._text })
          }
          localStorage.setItem('Match', JSON.stringify(this.puzzlePieceMatch));
          localStorage.setItem('PiecesPosition', JSON.stringify({ 'piece': 'image12', 'pieceName': 'image12Name', 'x': 1450, 'y': 400 }));

        } else {
          alert('incorrect move')
        }
      }
    })

    image15.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p15'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p1' && this.clickMatchObject['match'] == 'p15') {
          image15.setPosition(411, 150)
          image15Name.setPosition(411, 150);
          dragFunction();
          this.input.setDraggable(image15, false);
          image15.clearTint();
          image1.clearTint();
          this.firstClick = false;

          // ---------------------------store Matching object----------------
          this.puzzlePieceMatch.filter((data, index) => {
            if (Object.keys(data)[0] == 'Prural Noun') {
              this.puzzlePieceMatch.splice(index, 1);
              let PiecesPosition = JSON.parse(localStorage.getItem('PiecesPosition'));
              eval(PiecesPosition['piece']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
              eval(PiecesPosition['pieceName']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
            }
          })

          if (this.clickMatchObject['match'] == 'p15') {
            this.puzzlePieceMatch.push({ 'Prural Noun': image15Name._text })
          }
          localStorage.setItem('Match', JSON.stringify(this.puzzlePieceMatch));
          localStorage.setItem('PiecesPosition', JSON.stringify({ 'piece': 'image15', 'pieceName': 'image15Name', 'x': 1450, 'y': 1150 }));

        } else {
          alert('incorrect move')
        }
      }
    })

    image7.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p7'
      if (this.firstClick) {
        if ((this.clickMatchObject['key'] === 'p2' || this.clickMatchObject['key'] === 'p3') && this.clickMatchObject['match'] == 'p7') {
          this.clickMatchObject['key'] === 'p2' ? image7.setPosition(423, 400) : image7.setPosition(423, 649);
          this.clickMatchObject['key'] === 'p2' ? image7Name.setPosition(423, 400) : image7Name.setPosition(423, 649)
          dragFunction();
          this.input.setDraggable(image7, false);
          image7.clearTint();
          this.clickMatchObject['key'] === 'p2' ? image2.clearTint() : image3.clearTint();
          this.firstClick = false;

          if (this.clickMatchObject['key'] == 'p2' && this.clickMatchObject['match'] == 'p7') {
            // ---------------------------store Matching object----------------
            this.puzzlePieceMatch.filter((data, index) => {
              if (Object.keys(data)[0] == 'Noun1') {
                this.puzzlePieceMatch.splice(index, 1);
                let PiecesPosition = JSON.parse(localStorage.getItem('PiecesPosition1'));
                eval(PiecesPosition['piece']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
                eval(PiecesPosition['pieceName']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
              }
            })

            this.puzzlePieceMatch.push({ 'Noun1': image7Name._text })
            localStorage.setItem('PiecesPosition1', JSON.stringify({ 'piece': 'image7', 'pieceName': 'image7Name', 'x': 1120, 'y': 400 }));
          } else {
            // ---------------------------store Matching object----------------
            this.puzzlePieceMatch.filter((data, index) => {
              if (Object.keys(data)[0] == 'Noun2') {
                this.puzzlePieceMatch.splice(index, 1);
                let PiecesPosition = JSON.parse(localStorage.getItem('PiecesPosition2'));
                eval(PiecesPosition['piece']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
                eval(PiecesPosition['pieceName']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
              }
            })
            this.puzzlePieceMatch.push({ 'Noun2': image7Name._text })
            localStorage.setItem('PiecesPosition2', JSON.stringify({ 'piece': 'image7', 'pieceName': 'image7Name', 'x': 1120, 'y': 400 }));
          }
          localStorage.setItem('Match', JSON.stringify(this.puzzlePieceMatch));

        } else {
          alert('incorrect move')
        }
      }
    })

    image10.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p10'
      if (this.firstClick) {
        if ((this.clickMatchObject['key'] === 'p2' || this.clickMatchObject['key'] === 'p3') && this.clickMatchObject['match'] == 'p10') {
          this.clickMatchObject['key'] === 'p2' ? image10.setPosition(423, 400) : image10.setPosition(423, 649);
          this.clickMatchObject['key'] === 'p2' ? image10Name.setPosition(423, 400) : image10Name.setPosition(423, 649);
          dragFunction();
          this.input.setDraggable(image10, false);
          image10.clearTint();
          this.clickMatchObject['key'] === 'p2' ? image2.clearTint() : image3.clearTint();
          this.firstClick = false;

          if (this.clickMatchObject['key'] == 'p2' && this.clickMatchObject['match'] == 'p10') {
            // ---------------------------store Matching object----------------
            this.puzzlePieceMatch.filter((data, index) => {
              if (Object.keys(data)[0] == 'Noun1') {
                this.puzzlePieceMatch.splice(index, 1);
                let PiecesPosition = JSON.parse(localStorage.getItem('PiecesPosition1'));
                eval(PiecesPosition['piece']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
                eval(PiecesPosition['pieceName']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
              }
            })
            this.puzzlePieceMatch.push({ 'Noun1': image10Name._text });

            localStorage.setItem('PiecesPosition1', JSON.stringify({ 'piece': 'image10', 'pieceName': 'image10Name', 'x': 1120, 'y': 1150 }));
          } else {
            // ---------------------------store Matching object----------------
            this.puzzlePieceMatch.filter((data, index) => {
              if (Object.keys(data)[0] == 'Noun2') {
                this.puzzlePieceMatch.splice(index, 1);
                let PiecesPosition = JSON.parse(localStorage.getItem('PiecesPosition2'));
                eval(PiecesPosition['piece']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
                eval(PiecesPosition['pieceName']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
              }
            })
            this.puzzlePieceMatch.push({ 'Noun2': image10Name._text })

            localStorage.setItem('PiecesPosition2', JSON.stringify({ 'piece': 'image10', 'pieceName': 'image10Name', 'x': 1120, 'y': 1150 }));
          }
          localStorage.setItem('Match', JSON.stringify(this.puzzlePieceMatch));

        } else {
          alert('incorrect move')
        }
      }
    })

    image13.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p13'
      if (this.firstClick) {
        if ((this.clickMatchObject['key'] === 'p2' || this.clickMatchObject['key'] === 'p3') && this.clickMatchObject['match'] == 'p13') {
          this.clickMatchObject['key'] === 'p2' ? image13.setPosition(423, 400) : image13.setPosition(423, 649)
          this.clickMatchObject['key'] === 'p2' ? image13Name.setPosition(423, 400) : image13Name.setPosition(423, 649);
          dragFunction();
          this.input.setDraggable(image13, false);
          image13.clearTint();
          this.clickMatchObject['key'] === 'p2' ? image2.clearTint() : image3.clearTint();
          this.firstClick = false;

          if (this.clickMatchObject['key'] == 'p2' && this.clickMatchObject['match'] == 'p13') {
            // ---------------------------store Matching object----------------
            this.puzzlePieceMatch.filter((data, index) => {
              if (Object.keys(data)[0] == 'Noun1') {
                this.puzzlePieceMatch.splice(index, 1);
                let PiecesPosition = JSON.parse(localStorage.getItem('PiecesPosition1'));
                eval(PiecesPosition['piece']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
                eval(PiecesPosition['pieceName']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
              }
            })
            this.puzzlePieceMatch.push({ 'Noun1': image13Name._text });

            localStorage.setItem('PiecesPosition1', JSON.stringify({ 'piece': 'image13', 'pieceName': 'image13Name', 'x': 1450, 'y': 650 }));
          } else {
            // ---------------------------store Matching object----------------
            this.puzzlePieceMatch.filter((data, index) => {
              if (Object.keys(data)[0] == 'Noun2') {
                this.puzzlePieceMatch.splice(index, 1);
                let PiecesPosition = JSON.parse(localStorage.getItem('PiecesPosition2'));
                eval(PiecesPosition['piece']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
                eval(PiecesPosition['pieceName']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
              }
            })
            this.puzzlePieceMatch.push({ 'Noun2': image13Name._text });

            localStorage.setItem('PiecesPosition2', JSON.stringify({ 'piece': 'image13', 'pieceName': 'image13Name', 'x': 1450, 'y': 650 }));
          }
          localStorage.setItem('Match', JSON.stringify(this.puzzlePieceMatch));

        } else {
          alert('incorrect move')
        }
      }
    })

    image16.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p16'
      if (this.firstClick) {
        if ((this.clickMatchObject['key'] === 'p2' || this.clickMatchObject['key'] === 'p3') && this.clickMatchObject['match'] == 'p16') {
          this.clickMatchObject['key'] === 'p2' ? image16.setPosition(423, 400) : image16.setPosition(423, 649)
          this.clickMatchObject['key'] === 'p2' ? image16Name.setPosition(423, 400) : image16Name.setPosition(423, 649);
          dragFunction();
          this.input.setDraggable(image16, false);
          image16.clearTint();
          this.clickMatchObject['key'] === 'p2' ? image2.clearTint() : image3.clearTint();
          this.firstClick = false;

          if (this.clickMatchObject['key'] == 'p2' && this.clickMatchObject['match'] == 'p16') {
            // ---------------------------store Matching object----------------
            this.puzzlePieceMatch.filter((data, index) => {
              if (Object.keys(data)[0] == 'Noun1') {
                this.puzzlePieceMatch.splice(index, 1);
                let PiecesPosition = JSON.parse(localStorage.getItem('PiecesPosition1'));
                eval(PiecesPosition['piece']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
                eval(PiecesPosition['pieceName']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
              }
            })
            this.puzzlePieceMatch.push({ 'Noun1': image16Name._text });

            localStorage.setItem('PiecesPosition1', JSON.stringify({ 'piece': 'image16', 'pieceName': 'image16Name', 'x': 1780, 'y': 150 }));
          } else {
            // ---------------------------store Matching object----------------
            this.puzzlePieceMatch.filter((data, index) => {
              if (Object.keys(data)[0] == 'Noun2') {
                this.puzzlePieceMatch.splice(index, 1);
                let PiecesPosition = JSON.parse(localStorage.getItem('PiecesPosition2'));
                eval(PiecesPosition['piece']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
                eval(PiecesPosition['pieceName']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
              }
            })
            this.puzzlePieceMatch.push({ 'Noun2': image16Name._text })

            localStorage.setItem('PiecesPosition2', JSON.stringify({ 'piece': 'image16', 'pieceName': 'image16Name', 'x': 1780, 'y': 150 }));
          }
          localStorage.setItem('Match', JSON.stringify(this.puzzlePieceMatch));

        } else {
          alert('incorrect move')
        }
      }
    })

    image18.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p18'
      if (this.firstClick) {
        if ((this.clickMatchObject['key'] === 'p2' || this.clickMatchObject['key'] === 'p3') && this.clickMatchObject['match'] == 'p18') {
          this.clickMatchObject['key'] === 'p2' ? image18.setPosition(423, 400) : image18.setPosition(423, 649)
          this.clickMatchObject['key'] === 'p2' ? image18Name.setPosition(423, 400) : image18Name.setPosition(423, 649);
          dragFunction();
          this.input.setDraggable(image18, false);
          image18.clearTint();
          this.clickMatchObject['key'] === 'p2' ? image2.clearTint() : image3.clearTint();
          this.firstClick = false;

          if (this.clickMatchObject['key'] == 'p2' && this.clickMatchObject['match'] == 'p18') {
            // ---------------------------store Matching object----------------
            this.puzzlePieceMatch.filter((data, index) => {
              if (Object.keys(data)[0] == 'Noun1') {
                this.puzzlePieceMatch.splice(index, 1);
                let PiecesPosition = JSON.parse(localStorage.getItem('PiecesPosition1'));
                eval(PiecesPosition['piece']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
                eval(PiecesPosition['pieceName']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
              }
            })
            this.puzzlePieceMatch.push({ 'Noun1': image18Name._text })

            localStorage.setItem('PiecesPosition1', JSON.stringify({ 'piece': 'image18', 'pieceName': 'image18Name', 'x': 1780, 'y': 650 }));
          } else {
            // ---------------------------store Matching object----------------
            this.puzzlePieceMatch.filter((data, index) => {
              if (Object.keys(data)[0] == 'Noun2') {
                this.puzzlePieceMatch.splice(index, 1);
                let PiecesPosition = JSON.parse(localStorage.getItem('PiecesPosition2'));
                eval(PiecesPosition['piece']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
                eval(PiecesPosition['pieceName']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
              }
            })
            this.puzzlePieceMatch.push({ 'Noun2': image18Name._text });

            localStorage.setItem('PiecesPosition2', JSON.stringify({ 'piece': 'image18', 'pieceName': 'image18Name', 'x': 1780, 'y': 650 }));
          }
          localStorage.setItem('Match', JSON.stringify(this.puzzlePieceMatch));

        } else {
          alert('incorrect move')
        }
      }
    })

    image8.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p8'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p4' && this.clickMatchObject['match'] == 'p8') {
          image8.setPosition(384, 902)
          image8Name.setPosition(384, 902);
          dragFunction();
          this.input.setDraggable(image8, false);
          image8.clearTint();
          image4.clearTint();
          this.firstClick = false;

          // ---------------------------store Matching object----------------
          this.puzzlePieceMatch.filter((data, index) => {
            if (Object.keys(data)[0] == 'Animal') {
              this.puzzlePieceMatch.splice(index, 1);
              let PiecesPosition = JSON.parse(localStorage.getItem('PiecesPosition3'));
              eval(PiecesPosition['piece']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
              eval(PiecesPosition['pieceName']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
            }
          })

          this.puzzlePieceMatch.push({ 'Animal': image8Name._text })
          localStorage.setItem('Match', JSON.stringify(this.puzzlePieceMatch));
          localStorage.setItem('PiecesPosition3', JSON.stringify({ 'piece': 'image8', 'pieceName': 'image8Name', 'x': 1120, 'y': 650 }));

        } else {
          alert('incorrect move')
        }
      }
    })

    image11.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p11'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p4' && this.clickMatchObject['match'] == 'p11') {
          image11.setPosition(384, 902)
          image11Name.setPosition(384, 902);
          dragFunction();
          this.input.setDraggable(image11, false);
          image11.clearTint();
          image4.clearTint();
          this.firstClick = false;

          // ---------------------------store Matching object----------------
          this.puzzlePieceMatch.filter((data, index) => {
            if (Object.keys(data)[0] == 'Animal') {
              this.puzzlePieceMatch.splice(index, 1);
              let PiecesPosition = JSON.parse(localStorage.getItem('PiecesPosition3'));
              eval(PiecesPosition['piece']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
              eval(PiecesPosition['pieceName']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
            }
          })

          this.puzzlePieceMatch.push({ 'Animal': image11Name._text })
          localStorage.setItem('Match', JSON.stringify(this.puzzlePieceMatch));
          localStorage.setItem('PiecesPosition3', JSON.stringify({ 'piece': 'image11', 'pieceName': 'image11Name', 'x': 1450, 'y': 150 }));

        } else {
          alert('incorrect move')
        }
      }
    })

    image14.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p14'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p4' && this.clickMatchObject['match'] == 'p14') {
          image14.setPosition(384, 902)
          image14Name.setPosition(384, 902);
          dragFunction();
          this.input.setDraggable(image14, false);
          image14.clearTint();
          image4.clearTint();
          this.firstClick = false;

          // ---------------------------store Matching object----------------
          this.puzzlePieceMatch.filter((data, index) => {
            if (Object.keys(data)[0] == 'Animal') {
              this.puzzlePieceMatch.splice(index, 1);
              let PiecesPosition = JSON.parse(localStorage.getItem('PiecesPosition3'));
              eval(PiecesPosition['piece']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
              eval(PiecesPosition['pieceName']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
            }
          })

          this.puzzlePieceMatch.push({ 'Animal': image14Name._text })
          localStorage.setItem('Match', JSON.stringify(this.puzzlePieceMatch));
          localStorage.setItem('PiecesPosition3', JSON.stringify({ 'piece': 'image14', 'pieceName': 'image14Name', 'x': 1450, 'y': 900 }));

        } else {
          alert('incorrect move')
        }
      }
    })

    image17.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p17'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p4' && this.clickMatchObject['match'] == 'p17') {
          image17.setPosition(384, 902)
          image17Name.setPosition(384, 902);
          dragFunction();
          this.input.setDraggable(image17, false);
          image17.clearTint();
          image4.clearTint();
          this.firstClick = false;

          // ---------------------------store Matching object----------------
          this.puzzlePieceMatch.filter((data, index) => {
            if (Object.keys(data)[0] == 'Animal') {
              this.puzzlePieceMatch.splice(index, 1);
              let PiecesPosition = JSON.parse(localStorage.getItem('PiecesPosition3'));
              eval(PiecesPosition['piece']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
              eval(PiecesPosition['pieceName']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
            }
          })

          this.puzzlePieceMatch.push({ 'Animal': image17Name._text })
          localStorage.setItem('Match', JSON.stringify(this.puzzlePieceMatch));
          localStorage.setItem('PiecesPosition3', JSON.stringify({ 'piece': 'image17', 'pieceName': 'image17Name', 'x': 1780, 'y': 400 }));

        } else {
          alert('incorrect move')
        }
      }
    })

    image19.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p19'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p5' && this.clickMatchObject['match'] == 'p19') {
          image19.setPosition(408, 1152)
          image19Name.setPosition(408, 1152);
          dragFunction();
          this.input.setDraggable(image19, false);
          image19.clearTint();
          image5.clearTint();
          this.firstClick = false;

          // ---------------------------store Matching object----------------
          this.puzzlePieceMatch.filter((data, index) => {
            if (Object.keys(data)[0] == 'Adjective') {
              this.puzzlePieceMatch.splice(index, 1);
              let PiecesPosition = JSON.parse(localStorage.getItem('PiecesPosition4'));
              eval(PiecesPosition['piece']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
              eval(PiecesPosition['pieceName']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
            }
          })

          this.puzzlePieceMatch.push({ 'Adjective': image19Name._text })
          localStorage.setItem('Match', JSON.stringify(this.puzzlePieceMatch));
          localStorage.setItem('PiecesPosition4', JSON.stringify({ 'piece': 'image19', 'pieceName': 'image19Name', 'x': 1780, 'y': 900 }));

        } else {
          alert('incorrect move')
        }
      }
    })

    image20.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p20'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p5' && this.clickMatchObject['match'] == 'p20') {
          image20.setPosition(408, 1152)
          image20Name.setPosition(408, 1152);
          dragFunction();
          this.input.setDraggable(image20, false);
          image20.clearTint();
          image5.clearTint();
          this.firstClick = false;

          // ---------------------------store Matching object----------------
          this.puzzlePieceMatch.filter((data, index) => {
            if (Object.keys(data)[0] == 'Adjective') {
              this.puzzlePieceMatch.splice(index, 1);
              let PiecesPosition = JSON.parse(localStorage.getItem('PiecesPosition4'));
              eval(PiecesPosition['piece']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
              eval(PiecesPosition['pieceName']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
            }
          })

          this.puzzlePieceMatch.push({ 'Adjective': image20Name._text })
          localStorage.setItem('Match', JSON.stringify(this.puzzlePieceMatch));
          localStorage.setItem('PiecesPosition4', JSON.stringify({ 'piece': 'image20', 'pieceName': 'image20Name', 'x': 1780, 'y': 1150 }));

        } else {
          alert('incorrect move')
        }
      }
    })

    image21.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p21'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p5' && this.clickMatchObject['match'] == 'p21') {
          image21.setPosition(408, 1152)
          image21Name.setPosition(408, 1152);
          dragFunction();
          this.input.setDraggable(image21, false);
          image21.clearTint();
          image5.clearTint();
          this.firstClick = false;

          // ---------------------------store Matching object----------------
          this.puzzlePieceMatch.filter((data, index) => {
            if (Object.keys(data)[0] == 'Adjective') {
              this.puzzlePieceMatch.splice(index, 1);
              let PiecesPosition = JSON.parse(localStorage.getItem('PiecesPosition4'));
              eval(PiecesPosition['piece']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
              eval(PiecesPosition['pieceName']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
            }
          })

          this.puzzlePieceMatch.push({ 'Adjective': image21Name._text })
          localStorage.setItem('Match', JSON.stringify(this.puzzlePieceMatch));
          localStorage.setItem('PiecesPosition4', JSON.stringify({ 'piece': 'image21', 'pieceName': 'image21Name', 'x': 2110, 'y': 150 }));

        } else {
          alert('incorrect move')
        }
      }
    })

    image22.on('pointerup', () => {
      this.clickMatchObject['match'] = 'p22'
      if (this.firstClick) {
        if (this.clickMatchObject['key'] === 'p5' && this.clickMatchObject['match'] == 'p22') {
          image22.setPosition(408, 1152)
          image22Name.setPosition(408, 1152);
          dragFunction();
          this.input.setDraggable(image22, false);
          image22.clearTint();
          image5.clearTint();
          this.firstClick = false;

          // ---------------------------store Matching object----------------
          this.puzzlePieceMatch.filter((data, index) => {
            if (Object.keys(data)[0] == 'Adjective') {
              this.puzzlePieceMatch.splice(index, 1);
              let PiecesPosition = JSON.parse(localStorage.getItem('PiecesPosition4'));
              eval(PiecesPosition['piece']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
              eval(PiecesPosition['pieceName']).setPosition(PiecesPosition['x'], PiecesPosition['y'])
            }
          })

          this.puzzlePieceMatch.push({ 'Adjective': image22Name._text })
          localStorage.setItem('Match', JSON.stringify(this.puzzlePieceMatch));
          localStorage.setItem('PiecesPosition4', JSON.stringify({ 'piece': 'image22', 'pieceName': 'image22Name', 'x': 2110, 'y': 400 }));

        } else {
          alert('incorrect move')
        }
      }
    })

    //--------------------------------------------------------------- 

    this.input.dragDistanceThreshold = 16;

    this.input.on('dragstart', function (pointer, gameObject) {
      gameObject.setTint(0xff0000);

    });

    this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
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
    });

    this.input.on('dragend', (pointer, gameObject) => {
      if (this.firstClick == false && JSON.parse(localStorage.getItem('popupClose'))) {
        if (gameObject.x > 430) {
          alert('incorrect move')
          if (gameObject.texture.key == 'p6') {
            image6.setPosition(1120, 150)
            image6Name.setPosition(1120, 150);
            image6.clearTint();
          }
          else if (gameObject.texture.key == 'p7') {
            image7.setPosition(1120, 400)
            image7Name.setPosition(1120, 400);
            image7.clearTint()
          }
          else if (gameObject.texture.key == 'p8') {
            image8.setPosition(1120, 650)
            image8Name.setPosition(1120, 650);
            image8.clearTint();
          }
          else if (gameObject.texture.key == 'p9') {
            image9.setPosition(1120, 900)
            image9Name.setPosition(1120, 900)
            image9.clearTint();
          }
          else if (gameObject.texture.key == 'p10') {
            image10.setPosition(1120, 1150)
            image10Name.setPosition(1120, 1150)
            image10.clearTint();
          }
          else if (gameObject.texture.key == 'p11') {
            image11.setPosition(1450, 150)
            image11Name.setPosition(1450, 150);
            image11.clearTint();
          }
          else if (gameObject.texture.key == 'p12') {
            image12.setPosition(1450, 400)
            image12Name.setPosition(1450, 400);
            image12.clearTint();
          }
          else if (gameObject.texture.key == 'p13') {
            image13.setPosition(1450, 650)
            image13Name.setPosition(1450, 650);
            image13.clearTint();
          }
          else if (gameObject.texture.key == 'p14') {
            image14.setPosition(1450, 900)
            image14Name.setPosition(1450, 900);
            image14.clearTint();
          }
          else if (gameObject.texture.key == 'p15') {
            image15.setPosition(1450, 1150)
            image15Name.setPosition(1450, 1150);
            image15.clearTint();
          }
          else if (gameObject.texture.key == 'p16') {
            image16.setPosition(1780, 150)
            image16Name.setPosition(1780, 150);
            image16.clearTint();
          }
          else if (gameObject.texture.key == 'p17') {
            image17.setPosition(1780, 400)
            image17Name.setPosition(1780, 400);
            image17.clearTint();
          }
          else if (gameObject.texture.key == 'p18') {
            image18.setPosition(1780, 650)
            image18Name.setPosition(1780, 650);
            image18.clearTint();
          }
          else if (gameObject.texture.key == 'p19') {
            image19.setPosition(1780, 900)
            image19Name.setPosition(1780, 900);
            image19.clearTint();
          }
          else if (gameObject.texture.key == 'p20') {
            image20.setPosition(1780, 1150)
            image20Name.setPosition(1780, 1150);
            image20.clearTint();
          }
          else if (gameObject.texture.key == 'p21') {
            image21.setPosition(2110, 150)
            image21Name.setPosition(2110, 150);
            image21.clearTint();
          }
          else if (gameObject.texture.key == 'p22') {
            image22.setPosition(2110, 400)
            image22Name.setPosition(2110, 400);
            image22.clearTint();
          }
        }
        else {
          if (gameObject.texture.key == 'p6' || gameObject.texture.key == 'p9' || gameObject.texture.key == 'p12' || gameObject.texture.key == 'p15') {
            if (gameObject.y < 160 && gameObject.y > 140) {
              // gameObject.disableInteractive();
              gameObject.clearTint();
              gameObject.x = 411;
              gameObject.y = 150

              // ---------------------------store Matching object----------------
              this.puzzlePieceMatch.filter((data, index) => {
                if (Object.keys(data)[0] == 'Prural Noun') {
                  this.puzzlePieceMatch.splice(index, 1);
                  let PiecesPosition = JSON.parse(localStorage.getItem('PiecesPosition'));
                  eval(PiecesPosition['piece']).setPosition(PiecesPosition['x'], PiecesPosition['y']);
                  eval(PiecesPosition['pieceName']).setPosition(PiecesPosition['x'], PiecesPosition['y']);
                }
              })

              if (gameObject.texture.key == 'p6') {
                this.puzzlePieceMatch.push({ 'Prural Noun': image6Name._text });
                localStorage.setItem('PiecesPosition', JSON.stringify({ 'piece': 'image6', 'pieceName': 'image6Name', 'x': 1120, 'y': 150 }));
                this.input.setDraggable(image6, false);
                this.input.setDraggable(image9, true);
                this.input.setDraggable(image12, true);
                this.input.setDraggable(image15, true);
              }
              else if (gameObject.texture.key == 'p9') {
                this.puzzlePieceMatch.push({ 'Prural Noun': image9Name._text });
                localStorage.setItem('PiecesPosition', JSON.stringify({ 'piece': 'image9', 'pieceName': 'image9Name', 'x': 1120, 'y': 900 }));
                this.input.setDraggable(image6, true);
                this.input.setDraggable(image9, false);
                this.input.setDraggable(image12, true);
                this.input.setDraggable(image15, true);
              }

              else if (gameObject.texture.key == 'p12') {
                this.puzzlePieceMatch.push({ 'Prural Noun': image12Name._text });
                localStorage.setItem('PiecesPosition', JSON.stringify({ 'piece': 'image12', 'pieceName': 'image12Name', 'x': 1450, 'y': 400 }));
                this.input.setDraggable(image6, true);
                this.input.setDraggable(image9, true);
                this.input.setDraggable(image12, false);
                this.input.setDraggable(image15, true);
              }
              else {
                this.puzzlePieceMatch.push({ 'Prural Noun': image15Name._text });
                localStorage.setItem('PiecesPosition', JSON.stringify({ 'piece': 'image15', 'pieceName': 'image15Name', 'x': 1450, 'y': 1150 }));
                this.input.setDraggable(image6, true);
                this.input.setDraggable(image9, true);
                this.input.setDraggable(image12, true);
                this.input.setDraggable(image15, false);
              }


              localStorage.setItem('Match', JSON.stringify(this.puzzlePieceMatch))

            }
            else {
              alert('incorrect move')
              if (gameObject.texture.key == 'p6') {
                image6.setPosition(1120, 150)
                image6Name.setPosition(1120, 150);
                image6.clearTint();
              }

              else if (gameObject.texture.key == 'p9') {
                image9.setPosition(1120, 900)
                image9Name.setPosition(1120, 900);
                image9.clearTint();
              }

              else if (gameObject.texture.key == 'p12') {
                image12.setPosition(1450, 400)
                image12Name.setPosition(1450, 400);
                image12.clearTint();
              }

              else if (gameObject.texture.key == 'p15') {
                image15.setPosition(1450, 1150)
                image15Name.setPosition(1450, 1150);
                image15.clearTint();
              }
            }
          }

          if (gameObject.texture.key == 'p7' || gameObject.texture.key == 'p10' || gameObject.texture.key == 'p13' || gameObject.texture.key == 'p16' || gameObject.texture.key == 'p18') {
            if (gameObject.y < 410 && gameObject.y > 390) {
              // gameObject.disableInteractive();
              gameObject.clearTint();
              gameObject.x = 423
              gameObject.y = 400

              // ---------------------------store Matching object----------------
              this.puzzlePieceMatch.filter((data, index) => {
                if (Object.keys(data)[0] == 'Noun1') {
                  this.puzzlePieceMatch.splice(index, 1);
                  let PiecesPosition = JSON.parse(localStorage.getItem('PiecesPosition1'));
                  eval(PiecesPosition['piece']).setPosition(PiecesPosition['x'], PiecesPosition['y']);
                  eval(PiecesPosition['pieceName']).setPosition(PiecesPosition['x'], PiecesPosition['y']);
                }
              })

              if (gameObject.texture.key == 'p7') {
                this.puzzlePieceMatch.push({ 'Noun1': image7Name._text });
                localStorage.setItem('PiecesPosition1', JSON.stringify({ 'piece': 'image7', 'pieceName': 'image7Name', 'x': 1120, 'y': 400 }));
                this.input.setDraggable(image7, false);
                this.input.setDraggable(image10, true);
                this.input.setDraggable(image13, true);
                this.input.setDraggable(image16, true);
                this.input.setDraggable(image18, true);
              }
              else if (gameObject.texture.key == 'p10') {
                this.puzzlePieceMatch.push({ 'Noun1': image10Name._text });
                localStorage.setItem('PiecesPosition1', JSON.stringify({ 'piece': 'image10', 'pieceName': 'image10Name', 'x': 1120, 'y': 1150 }));
                this.input.setDraggable(image7, true);
                this.input.setDraggable(image10, false);
                this.input.setDraggable(image13, true);
                this.input.setDraggable(image16, true);
                this.input.setDraggable(image18, true);
              }
              else if (gameObject.texture.key == 'p13') {
                this.puzzlePieceMatch.push({ 'Noun1': image13Name._text });
                localStorage.setItem('PiecesPosition1', JSON.stringify({ 'piece': 'image13', 'pieceName': 'image13Name', 'x': 1450, 'y': 650 }));
                this.input.setDraggable(image7, true);
                this.input.setDraggable(image10, true);
                this.input.setDraggable(image13, false);
                this.input.setDraggable(image16, true);
                this.input.setDraggable(image18, true);
              }
              else if (gameObject.texture.key == 'p16') {
                this.puzzlePieceMatch.push({ 'Noun1': image16Name._text });
                localStorage.setItem('PiecesPosition1', JSON.stringify({ 'piece': 'image16', 'pieceName': 'image16Name', 'x': 1780, 'y': 150 }));
                this.input.setDraggable(image7, true);
                this.input.setDraggable(image10, true);
                this.input.setDraggable(image13, true);
                this.input.setDraggable(image16, false);
                this.input.setDraggable(image18, true);
              }
              else {
                this.puzzlePieceMatch.push({ 'Noun1': image18Name._text })
                localStorage.setItem('PiecesPosition1', JSON.stringify({ 'piece': 'image18', 'pieceName': 'image18Name', 'x': 1780, 'y': 650 }));
                this.input.setDraggable(image7, true);
                this.input.setDraggable(image10, true);
                this.input.setDraggable(image13, true);
                this.input.setDraggable(image16, true);
                this.input.setDraggable(image18, false);
              }

              localStorage.setItem('Match', JSON.stringify(this.puzzlePieceMatch))

            }
            else if (gameObject.y < 659 && gameObject.y > 639) {
              gameObject.disableInteractive();
              gameObject.clearTint();
              gameObject.x = 423
              gameObject.y = 649

              // ---------------------------store Matching object----------------
              this.puzzlePieceMatch.filter((data, index) => {
                if (Object.keys(data)[0] == 'Noun2') {
                  this.puzzlePieceMatch.splice(index, 1);
                  let PiecesPosition = JSON.parse(localStorage.getItem('PiecesPosition2'));
                  eval(PiecesPosition['piece']).setPosition(PiecesPosition['x'], PiecesPosition['y']);
                  eval(PiecesPosition['pieceName']).setPosition(PiecesPosition['x'], PiecesPosition['y']);
                }
              })

              if (gameObject.texture.key == 'p7') {
                this.puzzlePieceMatch.push({ 'Noun2': image7Name._text });
                localStorage.setItem('PiecesPosition2', JSON.stringify({ 'piece': 'image7', 'pieceName': 'image7Name', 'x': 1120, 'y': 400 }));
                this.input.setDraggable(image7, false);
                this.input.setDraggable(image10, true);
                this.input.setDraggable(image13, true);
                this.input.setDraggable(image16, true);
                this.input.setDraggable(image18, true);
              }
              else if (gameObject.texture.key == 'p10') {
                this.puzzlePieceMatch.push({ 'Noun2': image10Name._text });
                localStorage.setItem('PiecesPosition2', JSON.stringify({ 'piece': 'image10', 'pieceName': 'image10Name', 'x': 1120, 'y': 1150 }));
                this.input.setDraggable(image7, true);
                this.input.setDraggable(image10, false);
                this.input.setDraggable(image13, true);
                this.input.setDraggable(image16, true);
                this.input.setDraggable(image18, true);
              }
              else if (gameObject.texture.key == 'p13') {
                this.puzzlePieceMatch.push({ 'Noun2': image13Name._text });
                localStorage.setItem('PiecesPosition2', JSON.stringify({ 'piece': 'image13', 'pieceName': 'image13Name', 'x': 1450, 'y': 650 }));
                this.input.setDraggable(image7, true);
                this.input.setDraggable(image10, true);
                this.input.setDraggable(image13, false);
                this.input.setDraggable(image16, true);
                this.input.setDraggable(image18, true);
              }
              else if (gameObject.texture.key == 'p16') {
                this.puzzlePieceMatch.push({ 'Noun2': image16Name._text });
                localStorage.setItem('PiecesPosition2', JSON.stringify({ 'piece': 'image16', 'pieceName': 'image16Name', 'x': 1780, 'y': 150 }));
                this.input.setDraggable(image7, true);
                this.input.setDraggable(image10, true);
                this.input.setDraggable(image13, true);
                this.input.setDraggable(image16, false);
                this.input.setDraggable(image18, true);
              }
              else {
                this.puzzlePieceMatch.push({ 'Noun2': image18Name._text })
                localStorage.setItem('PiecesPosition2', JSON.stringify({ 'piece': 'image18', 'pieceName': 'image18Name', 'x': 1780, 'y': 650 }));
                this.input.setDraggable(image7, true);
                this.input.setDraggable(image10, true);
                this.input.setDraggable(image13, true);
                this.input.setDraggable(image16, true);
                this.input.setDraggable(image18, false);
              }

              localStorage.setItem('Match', JSON.stringify(this.puzzlePieceMatch))

            }
            else {
              alert('incorrect move')
              if (gameObject.texture.key == 'p7') {
                image7.setPosition(1120, 400)
                image7Name.setPosition(1120, 400);
                image7.clearTint();
              }

              else if (gameObject.texture.key == 'p10') {
                image10.setPosition(1120, 1150)
                image10Name.setPosition(1120, 1150);
                image10.clearTint();
              }

              else if (gameObject.texture.key == 'p13') {
                image13.setPosition(1450, 650)
                image13Name.setPosition(1450, 650);
                image13.clearTint();
              }

              else if (gameObject.texture.key == 'p16') {
                image16.setPosition(1780, 150)
                image16Name.setPosition(1780, 150);
                image16.clearTint()
              }

              else if (gameObject.texture.key == 'p18') {
                image20.setPosition(1780, 650)
                image20Name.setPosition(1780, 650);
                image20.clearTint()
              }
            }
          }

          if (gameObject.texture.key == 'p8' || gameObject.texture.key == 'p11' || gameObject.texture.key == 'p14' || gameObject.texture.key == 'p17') {
            if (gameObject.y < 912 && gameObject.y > 892) {
              // gameObject.disableInteractive();
              gameObject.clearTint();
              gameObject.x = 384;
              gameObject.y = 902;

              // ---------------------------store Matching object----------------
              this.puzzlePieceMatch.filter((data, index) => {
                if (Object.keys(data)[0] == 'Animal') {
                  this.puzzlePieceMatch.splice(index, 1);
                  let PiecesPosition = JSON.parse(localStorage.getItem('PiecesPosition3'));
                  eval(PiecesPosition['piece']).setPosition(PiecesPosition['x'], PiecesPosition['y']);
                  eval(PiecesPosition['pieceName']).setPosition(PiecesPosition['x'], PiecesPosition['y']);
                }
              })

              if (gameObject.texture.key == 'p8') {
                this.puzzlePieceMatch.push({ 'Animal': image8Name._text });
                localStorage.setItem('PiecesPosition3', JSON.stringify({ 'piece': 'image8', 'pieceName': 'image8Name', 'x': 1120, 'y': 650 }));
                this.input.setDraggable(image8, false);
                this.input.setDraggable(image11, true);
                this.input.setDraggable(image14, true);
                this.input.setDraggable(image17, true);
              }
              else if (gameObject.texture.key == 'p11') {
                this.puzzlePieceMatch.push({ 'Animal': image11Name._text });
                localStorage.setItem('PiecesPosition3', JSON.stringify({ 'piece': 'image11', 'pieceName': 'image11Name', 'x': 1450, 'y': 150 }));
                this.input.setDraggable(image8, true);
                this.input.setDraggable(image11, false);
                this.input.setDraggable(image14, true);
                this.input.setDraggable(image17, true);
              }
              else if (gameObject.texture.key == 'p14') {
                this.puzzlePieceMatch.push({ 'Animal': image14Name._text });
                localStorage.setItem('PiecesPosition3', JSON.stringify({ 'piece': 'image14', 'pieceName': 'image14Name', 'x': 1450, 'y': 900 }));
                this.input.setDraggable(image8, true);
                this.input.setDraggable(image11, true);
                this.input.setDraggable(image14, false);
                this.input.setDraggable(image17, true);
              }
              else {
                this.puzzlePieceMatch.push({ 'Animal': image17Name._text });
                localStorage.setItem('PiecesPosition3', JSON.stringify({ 'piece': 'image17', 'pieceName': 'image17Name', 'x': 1780, 'y': 400 }));
                this.input.setDraggable(image8, true);
                this.input.setDraggable(image11, true);
                this.input.setDraggable(image14, true);
                this.input.setDraggable(image17, false);
              }


              localStorage.setItem('Match', JSON.stringify(this.puzzlePieceMatch))
            }
            else {
              alert('incorrect move')
              if (gameObject.texture.key == 'p8') {
                image8.setPosition(1120, 650)
                image8Name.setPosition(1120, 650);
                image8.clearTint();
              }

              else if (gameObject.texture.key == 'p11') {
                image11.setPosition(1450, 150)
                image11Name.setPosition(1450, 150)
                image11.clearTint()
              }
              else if (gameObject.texture.key == 'p14') {
                image14.setPosition(1450, 900)
                image14Name.setPosition(1450, 900)
                image14.clearTint()
              }

              else if (gameObject.texture.key == 'p17') {
                image17.setPosition(1780, 400)
                image17Name.setPosition(1780, 400)
                image17.clearTint()
              }
            }
          }

          if (gameObject.texture.key == 'p19' || gameObject.texture.key == 'p20' || gameObject.texture.key == 'p21' || gameObject.texture.key == 'p22') {
            if (gameObject.y < 1162 && gameObject.y > 1142) {
              // gameObject.disableInteractive();
              gameObject.clearTint();
              gameObject.x = 408;
              gameObject.y = 1152

              // ---------------------------store Matching object----------------
              this.puzzlePieceMatch.filter((data, index) => {
                if (Object.keys(data)[0] == 'Adjective') {
                  this.puzzlePieceMatch.splice(index, 1);
                  let PiecesPosition = JSON.parse(localStorage.getItem('PiecesPosition4'));
                  eval(PiecesPosition['piece']).setPosition(PiecesPosition['x'], PiecesPosition['y']);
                  eval(PiecesPosition['pieceName']).setPosition(PiecesPosition['x'], PiecesPosition['y']);
                }
              })

              if (gameObject.texture.key == 'p19') {
                this.puzzlePieceMatch.push({ 'Adjective': image19Name._text });
                localStorage.setItem('PiecesPosition4', JSON.stringify({ 'piece': 'image19', 'pieceName': 'image19Name', 'x': 1780, 'y': 900 }));
                this.input.setDraggable(image19, false);
                this.input.setDraggable(image20, true);
                this.input.setDraggable(image21, true);
                this.input.setDraggable(image22, true);
              }
              else if (gameObject.texture.key == 'p20') {
                this.puzzlePieceMatch.push({ 'Adjective': image20Name._text });
                localStorage.setItem('PiecesPosition4', JSON.stringify({ 'piece': 'image20', 'pieceName': 'image20Name', 'x': 1780, 'y': 1150 }));
                this.input.setDraggable(image19, true);
                this.input.setDraggable(image20, false);
                this.input.setDraggable(image21, true);
                this.input.setDraggable(image22, true);
              }
              else if (gameObject.texture.key == 'p21') {
                this.puzzlePieceMatch.push({ 'Adjective': image21Name._text });
                localStorage.setItem('PiecesPosition4', JSON.stringify({ 'piece': 'image21', 'pieceName': 'image21Name', 'x': 2110, 'y': 150 }));
                this.input.setDraggable(image19, true);
                this.input.setDraggable(image20, true);
                this.input.setDraggable(image21, false);
                this.input.setDraggable(image22, true);
              }
              else {
                this.puzzlePieceMatch.push({ 'Adjective': image22Name._text });
                localStorage.setItem('PiecesPosition4', JSON.stringify({ 'piece': 'image22', 'pieceName': 'image22Name', 'x': 2110, 'y': 400 }));
                this.input.setDraggable(image19, true);
                this.input.setDraggable(image20, true);
                this.input.setDraggable(image21, true);
                this.input.setDraggable(image22, false);
              }

              localStorage.setItem('Match', JSON.stringify(this.puzzlePieceMatch))

            }
            else {
              alert('incorrect move');
              if (gameObject.texture.key == 'p19') {
                image19.setPosition(1780, 900)
                image19Name.setPosition(1780, 900);
                image19.clearTint();
              }

              else if (gameObject.texture.key == 'p20') {
                image20.setPosition(1780, 1150)
                image20Name.setPosition(1780, 1150);
                image20.clearTint();
              }
              else if (gameObject.texture.key == 'p21') {
                image20.setPosition(2110, 150)
                image20Name.setPosition(2110, 150);
                image20.clearTint();
              }
              else if (gameObject.texture.key == 'p22') {
                image20.setPosition(2110, 400)
                image20Name.setPosition(2110, 400);
                image20.clearTint();
              }
            }
          }

        }
      }
    });
  }
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  variable = true
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  @ViewChild('content') content;

  constructor(private router: Router, private modalService: NgbModal) {
    this.config = {
      type: Phaser.AUTO,
      scene: [NewScene],
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
    localStorage.clear()
    this.phaserGame = new Phaser.Game(this.config);
  }

  ngAfterViewInit() {
    this.open(this.content);
  }

  doneFunction() {
    let story = localStorage.getItem('Match');
    if (story) {
      this.router.navigate(['/madlibs/stories']);
    }
    else {
      alert('To Reveal Story First Match The Puzzles')
    }
  }

  open(content) {
    localStorage.removeItem('popupClose')
    this.modalService.open(content, { size: 'xl' }).result.then((result) => {
    }, (reason) => {
      localStorage.setItem('popupClose', JSON.stringify(true))
    });
  }

}
