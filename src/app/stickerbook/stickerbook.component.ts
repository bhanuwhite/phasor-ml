


import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Phaser, { Scene } from 'phaser';

class NewScene extends Phaser.Scene {
  clickMatchObject: object = { "key": '', "match": '' };
  firstClick: boolean = false;
  puzzlePieceMatch: object[] = [];
  parentObject: any;
  backgroundName: any = '';
 that;

  public background: Phaser.GameObjects.Image;
  image: any;

  constructor(test) {

    super({ key: 'new' });

    this.parentObject = test;
  }

  preload() {
   
   this.load.image("background", "assets/images/background/background.png");


    this.load.image('p2', "assets/images/horse.png");

    this.load.image('p3', "assets/images/ele.png");

    this.load.image('p4', "assets/images/cat.png");

    this.load.image('p5', "assets/images/dog.png");

    this.load.image('p6', "assets/images/mountain.jpg");

    this.load.image('p7', "assets/images/river.jpg");

    this.load.image('p8', "assets/images/tree.jpg");

    this.load.image('p9', "assets/images/sunset.jpg");
  

 
  }

  create() {
    if (this.parentObject.backgroundName !== "blank") {
      // this.load.image("background", "assets/images/background/"++".png");
   
    this.background = this.add.image(0, 0, "background")
      .setOrigin(0, 0);

    // // // Based on your game size, it may "stretch" and distort.
    this.background.displayWidth = this.sys.canvas.width;
    this.background.displayHeight = this.sys.canvas.height;
    this.background.setDepth(0)
  }

    this.input.dragDistanceThreshold = 16;

    this.input.on('dragstart', function (pointer, gameObject) {
     
    });

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
     
      gameObject.x = dragX;
      gameObject.y = dragY;

    });

    this.input.on('dragend', function (pointer, gameObject) {
      // image2.visible=false
     


    });
    // this.input.once('pointerdown', () => { 
    //   console.log("hh",this.parentObject.backgroundName)
    //   this.scene.stop();
    //   this.scene.start();
    // })
  }

  update() {
   
    
    
    if(this.parentObject.dragObject=='dog'){
      let image5 = this.add.sprite(1600, 400, 'p5').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      
      this.input.setDraggable(image5);
      // image5.setRandomPosition(0,-700);
     
      image5.on('pointerdown', (pointer, localX, localY, event)=>{

     
       image5.setTint(0xff0000)
    
      });

      image5.on('pointerout', function (pointer) {

      this.clearTint();

  });

  image5.on('pointerup', function (pointer) {

      this.clearTint();

  });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='cat'){
      let image4 = this.add.sprite(1300, 400, 'p4').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image4);
      image4.setRandomPosition(0,-700)
       
      image4.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image4.setTint(0xff0000)
     
       });
 
       image4.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image4.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='horse'){
      let image2 = this.add.sprite(600, 400, 'p2').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image2);
      image2.setRandomPosition(0,-700)
       
      image2.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image2.setTint(0xff0000)
     
       });
 
       image2.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image2.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='ele'){
      let image3=this.add.sprite(1000, 400, 'p3').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image3);
      image3.setRandomPosition(0,-700)
       
      image3.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image3.setTint(0xff0000)
     
       });
 
       image3.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image3.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='mountain'){
      let image6 = this.add.sprite(1300, 400, 'p6').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image6);
      image6.setRandomPosition(0,-700);
       
      image6.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image6.setTint(0xff0000)
     
       });
 
       image6.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image6.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='river'){
      let image7 = this.add.sprite(600, 400, 'p7').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image7);
      image7.setRandomPosition(0,-700)
       
      image7.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image7.setTint(0xff0000)
     
       });
 
       image7.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image7.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='tree'){
      let image8=this.add.sprite(1000, 400, 'p8').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image8);
      image8.setRandomPosition(0,-700)
       
      image8.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image8.setTint(0xff0000)
     
       });
 
       image8.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image8.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='sunset'){
      let image9=this.add.sprite(1000, 400, 'p9').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image9);
      image9.setRandomPosition(0,-700)
       
      image9.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image9.setTint(0xff0000)
     
       });
 
       image9.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image9.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }
    
  }

 
}

class NewScene1 extends Phaser.Scene {
  clickMatchObject: object = { "key": '', "match": '' };
  firstClick: boolean = false;
  puzzlePieceMatch: object[] = [];
  parentObject: any;
  backgroundName: any = '';


  public background: Phaser.GameObjects.Image;
  image: any;

  constructor(test) {

    super({ key: 'new1' });

    this.parentObject = test;
  }

  preload() {
 
  this.load.image("background1", "assets/images/background/bg3.png");


  this.load.image('p2', "assets/images/horse.png");

  this.load.image('p3', "assets/images/ele.png");

  this.load.image('p4', "assets/images/cat.png");

  this.load.image('p5', "assets/images/dog.png");

  this.load.image('p6', "assets/images/mountain.jpg");

  this.load.image('p7', "assets/images/river.jpg");

  this.load.image('p8', "assets/images/tree.jpg");

  this.load.image('p9', "assets/images/sunset.jpg");
  
 
 
  }

  create() {
    // if (this.parentObject.backgroundName !== "blank") {
      // this.load.image("background", "assets/images/background/"++".png");
   
    this.background = this.add.image(0, 0, "background1")
      .setOrigin(0, 0);

    // // // Based on your game size, it may "stretch" and distort.
    this.background.displayWidth = this.sys.canvas.width;
    this.background.displayHeight = this.sys.canvas.height;


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
   
    });

  

  }

  update() {
   
    
    
    if(this.parentObject.dragObject=='dog'){
      let image5 = this.add.sprite(1600, 400, 'p5').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      
      this.input.setDraggable(image5);
      // image5.setRandomPosition(0,-700);
     
      image5.on('pointerdown', (pointer, localX, localY, event)=>{

     
       image5.setTint(0xff0000)
    
      });

      image5.on('pointerout', function (pointer) {

      this.clearTint();

  });

  image5.on('pointerup', function (pointer) {

      this.clearTint();

  });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='cat'){
      let image4 = this.add.sprite(1300, 400, 'p4').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image4);
      image4.setRandomPosition(0,-700)
       
      image4.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image4.setTint(0xff0000)
     
       });
 
       image4.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image4.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='horse'){
      let image2 = this.add.sprite(600, 400, 'p2').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image2);
      image2.setRandomPosition(0,-700)
       
      image2.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image2.setTint(0xff0000)
     
       });
 
       image2.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image2.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='ele'){
      let image3=this.add.sprite(1000, 400, 'p3').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image3);
      image3.setRandomPosition(0,-700)
       
      image3.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image3.setTint(0xff0000)
     
       });
 
       image3.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image3.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='mountain'){
      let image6 = this.add.sprite(1300, 400, 'p6').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image6);
      image6.setRandomPosition(0,-700);
       
      image6.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image6.setTint(0xff0000)
     
       });
 
       image6.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image6.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='river'){
      let image7 = this.add.sprite(600, 400, 'p7').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image7);
      image7.setRandomPosition(0,-700)
       
      image7.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image7.setTint(0xff0000)
     
       });
 
       image7.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image7.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='tree'){
      let image8=this.add.sprite(1000, 400, 'p8').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image8);
      image8.setRandomPosition(0,-700)
       
      image8.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image8.setTint(0xff0000)
     
       });
 
       image8.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image8.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='sunset'){
      let image9=this.add.sprite(1000, 400, 'p9').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image9);
      image9.setRandomPosition(0,-700)
       
      image9.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image9.setTint(0xff0000)
     
       });
 
       image9.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image9.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }
    
  }

 
}

class NewScene2 extends Phaser.Scene {
  clickMatchObject: object = { "key": '', "match": '' };
  firstClick: boolean = false;
  puzzlePieceMatch: object[] = [];
  parentObject: any;
  backgroundName: any = '';


  public background: Phaser.GameObjects.Image;
  image: any;

  constructor(test) {

    super({ key: 'new2' });

    this.parentObject = test;
  }

  preload() {
 console.log('here')
  this.load.image("background2", "assets/images/background/bg4.png");

  this.load.image('p2', "assets/images/horse.png");

  this.load.image('p3', "assets/images/ele.png");

  this.load.image('p4', "assets/images/cat.png");

  this.load.image('p5', "assets/images/dog.png");

  this.load.image('p6', "assets/images/mountain.jpg");

  this.load.image('p7', "assets/images/river.jpg");

  this.load.image('p8', "assets/images/tree.jpg");

  this.load.image('p9', "assets/images/sunset.jpg");
  
 
 
  }

  create() {
    // if (this.parentObject.backgroundName !== "blank") {
      // this.load.image("background", "assets/images/background/"++".png");
   
    this.background = this.add.image(0, 0, "background2")
      .setOrigin(0, 0);

    // // // Based on your game size, it may "stretch" and distort.
    this.background.displayWidth = this.sys.canvas.width;
    this.background.displayHeight = this.sys.canvas.height;


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
   
    });

  }

  update() {
   
    
    
    if(this.parentObject.dragObject=='dog'){
      let image5 = this.add.sprite(1600, 400, 'p5').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      
      this.input.setDraggable(image5);
      // image5.setRandomPosition(0,-700);
     
      image5.on('pointerdown', (pointer, localX, localY, event)=>{

     
       image5.setTint(0xff0000)
    
      });

      image5.on('pointerout', function (pointer) {

      this.clearTint();

  });

  image5.on('pointerup', function (pointer) {

      this.clearTint();

  });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='cat'){
      let image4 = this.add.sprite(1300, 400, 'p4').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image4);
      image4.setRandomPosition(0,-700)
       
      image4.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image4.setTint(0xff0000)
     
       });
 
       image4.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image4.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='horse'){
      let image2 = this.add.sprite(600, 400, 'p2').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image2);
      image2.setRandomPosition(0,-700)
       
      image2.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image2.setTint(0xff0000)
     
       });
 
       image2.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image2.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='ele'){
      let image3=this.add.sprite(1000, 400, 'p3').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image3);
      image3.setRandomPosition(0,-700)
       
      image3.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image3.setTint(0xff0000)
     
       });
 
       image3.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image3.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='mountain'){
      let image6 = this.add.sprite(1300, 400, 'p6').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image6);
      image6.setRandomPosition(0,-700);
       
      image6.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image6.setTint(0xff0000)
     
       });
 
       image6.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image6.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='river'){
      let image7 = this.add.sprite(600, 400, 'p7').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image7);
      image7.setRandomPosition(0,-700)
       
      image7.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image7.setTint(0xff0000)
     
       });
 
       image7.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image7.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='tree'){
      let image8=this.add.sprite(1000, 400, 'p8').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image8);
      image8.setRandomPosition(0,-700)
       
      image8.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image8.setTint(0xff0000)
     
       });
 
       image8.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image8.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='sunset'){
      let image9=this.add.sprite(1000, 400, 'p9').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image9);
      image9.setRandomPosition(0,-700)
       
      image9.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image9.setTint(0xff0000)
     
       });
 
       image9.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image9.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }
    
  }

 
}

class NewScene3 extends Phaser.Scene {
  clickMatchObject: object = { "key": '', "match": '' };
  firstClick: boolean = false;
  puzzlePieceMatch: object[] = [];
  parentObject: any;
  backgroundName: any = '';


  public background: Phaser.GameObjects.Image;
  image: any;

  constructor(test) {

    super({ key: 'new3' });

    this.parentObject = test;
  }

  preload() {
 
  this.load.image("background3", "assets/images/background/bg5.png");

  this.load.image('p2', "assets/images/horse.png");

  this.load.image('p3', "assets/images/ele.png");

  this.load.image('p4', "assets/images/cat.png");

  this.load.image('p5', "assets/images/dog.png");

  this.load.image('p6', "assets/images/mountain.jpg");

  this.load.image('p7', "assets/images/river.jpg");

  this.load.image('p8', "assets/images/tree.jpg");

  this.load.image('p9', "assets/images/sunset.jpg");
 
 
  }

  create() {
    // if (this.parentObject.backgroundName !== "blank") {
      // this.load.image("background", "assets/images/background/"++".png");
   
    this.background = this.add.image(0, 0, "background3")
      .setOrigin(0, 0);

    // // // Based on your game size, it may "stretch" and distort.
    this.background.displayWidth = this.sys.canvas.width;
    this.background.displayHeight = this.sys.canvas.height;
  

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
   
    });

  }

  update() {
   
    
    
    if(this.parentObject.dragObject=='dog'){
      let image5 = this.add.sprite(1600, 400, 'p5').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      
      this.input.setDraggable(image5);
      // image5.setRandomPosition(0,-700);
     
      image5.on('pointerdown', (pointer, localX, localY, event)=>{

     
       image5.setTint(0xff0000)
    
      });

      image5.on('pointerout', function (pointer) {

      this.clearTint();

  });

  image5.on('pointerup', function (pointer) {

      this.clearTint();

  });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='cat'){
      let image4 = this.add.sprite(1300, 400, 'p4').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image4);
      // image4.setRandomPosition(0,-700)
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='horse'){
      let image2 = this.add.sprite(600, 400, 'p2').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image2);
      // image2.setRandomPosition(0,-700)
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='ele'){
      let image3=this.add.sprite(1000, 400, 'p3').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image3);
      // image3.setRandomPosition(0,-700)
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='mountain'){
      let image6 = this.add.sprite(1300, 400, 'p6').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image6);
      image6.setRandomPosition(0,-700)
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='river'){
      let image7 = this.add.sprite(600, 400, 'p7').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image7);
      image7.setRandomPosition(0,-700)
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='tree'){
      let image8=this.add.sprite(1000, 400, 'p8').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image8);
      image8.setRandomPosition(0,-700)
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='sunset'){
      let image9=this.add.sprite(1000, 400, 'p9').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image9);
      image9.setRandomPosition(0,-700)
      this.parentObject.dragObject='';
    }
    
  }

 
}

class NewScene4 extends Phaser.Scene {
  clickMatchObject: object = { "key": '', "match": '' };
  firstClick: boolean = false;
  puzzlePieceMatch: object[] = [];
  parentObject: any;
  backgroundName: any = '';


  public background: Phaser.GameObjects.Image;
  image: any;

  constructor(test) {

    super({ key: 'new4' });

    this.parentObject = test;
  }

  preload() {
 
  this.load.image("background5", "assets/images/background/bg6.png");


  this.load.image('p2', "assets/images/horse.png");

  this.load.image('p3', "assets/images/ele.png");

  this.load.image('p4', "assets/images/cat.png");

  this.load.image('p5', "assets/images/dog.png");

  this.load.image('p6', "assets/images/mountain.jpg");

  this.load.image('p7', "assets/images/river.jpg");

  this.load.image('p8', "assets/images/tree.jpg");

  this.load.image('p9', "assets/images/sunset.jpg");
  
 
 
  }

  create() {
    // if (this.parentObject.backgroundName !== "blank") {
      // this.load.image("background", "assets/images/background/"++".png");
   
    this.background = this.add.image(0, 0, "background5")
      .setOrigin(0, 0);

    // // // Based on your game size, it may "stretch" and distort.
    this.background.displayWidth = this.sys.canvas.width;
    this.background.displayHeight = this.sys.canvas.height;
  

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
   
    });

  }

  update() {
   
    
    
    if(this.parentObject.dragObject=='dog'){
      let image5 = this.add.sprite(1600, 400, 'p5').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      
      this.input.setDraggable(image5);
      // image5.setRandomPosition(0,-700);
     
      image5.on('pointerdown', (pointer, localX, localY, event)=>{

     
       image5.setTint(0xff0000)
    
      });

      image5.on('pointerout', function (pointer) {

      this.clearTint();

  });

  image5.on('pointerup', function (pointer) {

      this.clearTint();

  });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='cat'){
      let image4 = this.add.sprite(1300, 400, 'p4').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image4);
      image4.setRandomPosition(0,-700)
       
      image4.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image4.setTint(0xff0000)
     
       });
 
       image4.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image4.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='horse'){
      let image2 = this.add.sprite(600, 400, 'p2').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image2);
      image2.setRandomPosition(0,-700)
       
      image2.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image2.setTint(0xff0000)
     
       });
 
       image2.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image2.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='ele'){
      let image3=this.add.sprite(1000, 400, 'p3').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image3);
      image3.setRandomPosition(0,-700)
       
      image3.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image3.setTint(0xff0000)
     
       });
 
       image3.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image3.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='mountain'){
      let image6 = this.add.sprite(1300, 400, 'p6').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image6);
      image6.setRandomPosition(0,-700);
       
      image6.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image6.setTint(0xff0000)
     
       });
 
       image6.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image6.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='river'){
      let image7 = this.add.sprite(600, 400, 'p7').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image7);
      image7.setRandomPosition(0,-700)
       
      image7.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image7.setTint(0xff0000)
     
       });
 
       image7.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image7.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='tree'){
      let image8=this.add.sprite(1000, 400, 'p8').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image8);
      image8.setRandomPosition(0,-700)
       
      image8.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image8.setTint(0xff0000)
     
       });
 
       image8.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image8.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='sunset'){
      let image9=this.add.sprite(1000, 400, 'p9').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image9);
      image9.setRandomPosition(0,-700)
       
      image9.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image9.setTint(0xff0000)
     
       });
 
       image9.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image9.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }
    
  }

 
}

class NewScene5 extends Phaser.Scene {
  clickMatchObject: object = { "key": '', "match": '' };
  firstClick: boolean = false;
  puzzlePieceMatch: object[] = [];
  parentObject: any;
  backgroundName: any = '';


  public background: Phaser.GameObjects.Image;
  image: any;

  constructor(test) {

    super({ key: 'new5' });

    this.parentObject = test;
  }

  preload() {
 
  this.load.image("background6", "assets/images/background/bg7.png");


  this.load.image('p2', "assets/images/horse.png");

  this.load.image('p3', "assets/images/ele.png");

  this.load.image('p4', "assets/images/cat.png");

  this.load.image('p5', "assets/images/dog.png");

  this.load.image('p6', "assets/images/mountain.jpg");

  this.load.image('p7', "assets/images/river.jpg");

  this.load.image('p8', "assets/images/tree.jpg");

  this.load.image('p9', "assets/images/sunset.jpg");
  
 
 
  }

  create() {
    // if (this.parentObject.backgroundName !== "blank") {
      // this.load.image("background", "assets/images/background/"++".png");
   
    this.background = this.add.image(0, 0, "background6")
      .setOrigin(0, 0);

    // // // Based on your game size, it may "stretch" and distort.
    this.background.displayWidth = this.sys.canvas.width;
    this.background.displayHeight = this.sys.canvas.height;
  

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
   
    });

  }

  update() {
   
    
    
    if(this.parentObject.dragObject=='dog'){
      let image5 = this.add.sprite(1600, 400, 'p5').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      
      this.input.setDraggable(image5);
      // image5.setRandomPosition(0,-700);
     
      image5.on('pointerdown', (pointer, localX, localY, event)=>{

     
       image5.setTint(0xff0000)
    
      });

      image5.on('pointerout', function (pointer) {

      this.clearTint();

  });

  image5.on('pointerup', function (pointer) {

      this.clearTint();

  });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='cat'){
      let image4 = this.add.sprite(1300, 400, 'p4').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image4);
      image4.setRandomPosition(0,-700)
       
      image4.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image4.setTint(0xff0000)
     
       });
 
       image4.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image4.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='horse'){
      let image2 = this.add.sprite(600, 400, 'p2').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image2);
      image2.setRandomPosition(0,-700)
       
      image2.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image2.setTint(0xff0000)
     
       });
 
       image2.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image2.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='ele'){
      let image3=this.add.sprite(1000, 400, 'p3').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image3);
      image3.setRandomPosition(0,-700)
       
      image3.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image3.setTint(0xff0000)
     
       });
 
       image3.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image3.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='mountain'){
      let image6 = this.add.sprite(1300, 400, 'p6').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image6);
      image6.setRandomPosition(0,-700);
       
      image6.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image6.setTint(0xff0000)
     
       });
 
       image6.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image6.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='river'){
      let image7 = this.add.sprite(600, 400, 'p7').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image7);
      image7.setRandomPosition(0,-700)
       
      image7.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image7.setTint(0xff0000)
     
       });
 
       image7.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image7.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='tree'){
      let image8=this.add.sprite(1000, 400, 'p8').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image8);
      image8.setRandomPosition(0,-700)
       
      image8.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image8.setTint(0xff0000)
     
       });
 
       image8.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image8.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='sunset'){
      let image9=this.add.sprite(1000, 400, 'p9').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image9);
      image9.setRandomPosition(0,-700)
       
      image9.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image9.setTint(0xff0000)
     
       });
 
       image9.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image9.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }
    
  }

 
}

class NewScene6 extends Phaser.Scene {
  clickMatchObject: object = { "key": '', "match": '' };
  firstClick: boolean = false;
  puzzlePieceMatch: object[] = [];
  parentObject: any;
  backgroundName: any = '';


  public background: Phaser.GameObjects.Image;
  image: any;

  constructor(test) {

    super({ key: 'new6' });

    this.parentObject = test;
  }

  preload() {
 
  // this.load.image("background6", "assets/images/background/bg7.png");


  this.load.image('p2', "assets/images/horse.png");

  this.load.image('p3', "assets/images/ele.png");

  this.load.image('p4', "assets/images/cat.png");

  this.load.image('p5', "assets/images/dog.png");

  this.load.image('p6', "assets/images/mountain.jpg");

  this.load.image('p7', "assets/images/river.jpg");

  this.load.image('p8', "assets/images/tree.jpg");

  this.load.image('p9', "assets/images/sunset.jpg");
  
 
 
  }

  create() {
    


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
   
    });

  }
  update() {
   
    
    
    if(this.parentObject.dragObject=='dog'){
      let image5 = this.add.sprite(1600, 400, 'p5').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      
      this.input.setDraggable(image5);
      // image5.setRandomPosition(0,-700);
     
      image5.on('pointerdown', (pointer, localX, localY, event)=>{

     
       image5.setTint(0xff0000)
    
      });

      image5.on('pointerout', function (pointer) {

      this.clearTint();

  });

  image5.on('pointerup', function (pointer) {

      this.clearTint();

  });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='cat'){
      let image4 = this.add.sprite(1300, 400, 'p4').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image4);
      image4.setRandomPosition(0,-700)
       
      image4.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image4.setTint(0xff0000)
     
       });
 
       image4.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image4.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='horse'){
      let image2 = this.add.sprite(600, 400, 'p2').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image2);
      image2.setRandomPosition(0,-700)
       
      image2.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image2.setTint(0xff0000)
     
       });
 
       image2.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image2.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='ele'){
      let image3=this.add.sprite(1000, 400, 'p3').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image3);
      image3.setRandomPosition(0,-700)
       
      image3.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image3.setTint(0xff0000)
     
       });
 
       image3.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image3.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='mountain'){
      let image6 = this.add.sprite(1300, 400, 'p6').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image6);
      image6.setRandomPosition(0,-700);
       
      image6.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image6.setTint(0xff0000)
     
       });
 
       image6.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image6.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='river'){
      let image7 = this.add.sprite(600, 400, 'p7').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image7);
      image7.setRandomPosition(0,-700)
       
      image7.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image7.setTint(0xff0000)
     
       });
 
       image7.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image7.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='tree'){
      let image8=this.add.sprite(1000, 400, 'p8').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image8);
      image8.setRandomPosition(0,-700)
       
      image8.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image8.setTint(0xff0000)
     
       });
 
       image8.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image8.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }

    if(this.parentObject.dragObject=='sunset'){
      let image9=this.add.sprite(1000, 400, 'p9').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
      this.input.setDraggable(image9);
      image9.setRandomPosition(0,-700)
       
      image9.on('pointerdown', (pointer, localX, localY, event)=>{

     
        image9.setTint(0xff0000)
     
       });
 
       image9.on('pointerout', function (pointer) {
 
       this.clearTint();
 
   });
 
   image9.on('pointerup', function (pointer) {
 
       this.clearTint();
 
   });
      this.parentObject.dragObject='';
    }
    
  }

 
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
  backgroundName: any = 'bg'
  dragObject='';
  panalScene=true
  @ViewChild('content') content;

  constructor(private router: Router, private modalService: NgbModal) {
    this.scheneConfig();
  }

  scheneConfig() {
    this.config = {
      type: Phaser.AUTO,
      scene: [new NewScene(this), new NewScene1(this), new NewScene2(this), new NewScene3(this), new NewScene4(this), new NewScene5(this),new NewScene6(this)],
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
      },
      dom: {
        createContainer: true
      }
    };
  }

  ngOnInit() {
    // localStorage.clear()
    this.phaserGame = new Phaser.Game(this.config);
  }

  changeBg(name) {
  //  document.getElementsByTagName('canvas')[0].remove();
    this.backgroundName = name;
   
   
    this.phaserGame.scene.sleep(this.phaserGame.scene.getScenes()[0].scene.key)
   
    if(this.backgroundName=='bg'){
      
      this.phaserGame.scene.run('new')
    }
   if(this.backgroundName=='bg1'){
 
  this.phaserGame.scene.run('new1')
}
if(this.backgroundName=='bg2'){
  
  this.phaserGame.scene.run('new2')
}
if(this.backgroundName=='bg3'){
  
  this.phaserGame.scene.run('new3')
}
if(this.backgroundName=='bg4'){
 
  this.phaserGame.scene.run('new4')
}
if(this.backgroundName=='bg5'){
 
  this.phaserGame.scene.run('new5')
}

if(this.backgroundName=='blank'){
  
  this.phaserGame.scene.run('new6')
}

   
    // this.scheneConfig();
    // this.phaserGame = new Phaser.Game(this.config);
  }

  dragObj(name){
    this.dragObject=name;
  }

  ngAfterViewInit() {
    this.open(this.content);
  }


  open(content) {
    localStorage.removeItem('popupClose')
    this.modalService.open(content, { size: 'xl' }).result.then((result) => {
    }, (reason) => {
      localStorage.setItem('popupClose', JSON.stringify(true))
    });
  }

}

