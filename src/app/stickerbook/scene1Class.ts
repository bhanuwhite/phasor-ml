class NewScene1 extends Phaser.Scene {
    clickMatchObject: object = { "key": '', "match": '' };
    firstClick: boolean = false;
    puzzlePieceMatch: object[] = [];
    parentObject: any;
    backgroundName: any = '';
  
  
    private background: Phaser.GameObjects.Image;
    image: any;
  
    constructor(test) {
      console.log("scene2")
      super({ key: 'new1' });
  
      this.parentObject = test;
    }
  
    preload() {
     
      
        this.load.image("background", "assets/images/train/bg.png");
      
     
  
      this.load.image('p2', "assets/images/horse.png");
  
      this.load.image('p3', "assets/images/ele.png");
  
      this.load.image('p4', "assets/images/cat.png");
  
      this.load.image('p5', "assets/images/dog.png");
    
   
   
    }
  
    create() {
    
     
    this.background = this.add.image(0, 0, "background")
    .setOrigin(0, 0);
  
  // // // Based on your game size, it may "stretch" and distort.
  this.background.displayWidth = this.sys.canvas.width;
  this.background.displayHeight = this.sys.canvas.height;
      
  
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
     
    }
  
    update() {
      console.log('update',this.parentObject.dragObject);
      
      if(this.parentObject.dragObject=='dog'){
        let image5 = this.add.sprite(1600, 400, 'p5').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
        this.input.setDraggable(image5);
        this.parentObject.dragObject='';
      }
  
      if(this.parentObject.dragObject=='cat'){
        let image4 = this.add.sprite(1300, 400, 'p4').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
        this.input.setDraggable(image4);
        this.parentObject.dragObject='';
      }
  
      if(this.parentObject.dragObject=='horse'){
        let image2 = this.add.sprite(600, 400, 'p2').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
        this.input.setDraggable(image2);
        this.parentObject.dragObject='';
      }
  
      if(this.parentObject.dragObject=='ele'){
        let image3=this.add.sprite(1000, 400, 'p3').setInteractive({ cursor: 'pointer' }).setDisplaySize(280, 150);
        this.input.setDraggable(image3);
        this.parentObject.dragObject='';
      }
      
    }
  }