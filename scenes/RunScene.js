class RunScene extends Scene {
  constructor() {
    super();
    
  }
  start() {
    super.start();

    this.starter = new StationCore();    
    this.crew1 = new CrewMember();
    //this.bg = new Background();


    this.camera = new Camera(40, "black");
    this.camera.transform.position = new Vector2(1 / 2, 1 / 2);


    //var rDimensions = positionGUI(width, height, 0.25, 20, 0.25);
    var guiText = new GameObject("GUI Text");
    var roomBuilder = new Build();
    var buildText = new BuildText();
    guiText.components.push(roomBuilder);
    guiText.components.push(buildText);
    var textComponent = new GUITextComponent("Building Select", "white", "30px Arial");
    
    textComponent.justify = "center";
    guiText.components.push(textComponent);
    guiText.rendererGUI = textComponent;
    guiText.transform.position = new Vector2(100, 100);
    
    this.hierarchy.push(guiText);

    //this.hierarchy.push(this.bg);
    this.hierarchy.push(this.starter);
    this.hierarchy.push(this.crew1);
    this.hierarchy.push(this.camera);
    

    //set initial resource deltas and maximums
    //calculateTotals();
  }
  eventPump(event) {
    super.eventPump(event);
    switch (event.name) {
      case "click":
        //this.nextScene();
        break;
      case "resize":
        var rDimensions = positionGUI(width, height, 0.25, 20, 0.25);
        this.guiComponent = new GUIRectangleComponent(new AxisAlignedRectangle(rDimensions.width, rDimensions.height), "rgba(255, 255, 255,.5)");
        this.guiContainer.components = [];
        this.guiContainer.components.push(this.guiComponent);
        this.guiContainer.rendererGUI = this.guiComponent;
        this.guiContainer.transform.position.x = rDimensions.x;
        this.guiContainer.transform.position.y = rDimensions.y;

        this.guiTextObject = new GUITextObject("Run Scene");
        this.guiTextObject.transform.position = new Vector2(width - 10, 0);

        break;

    }
  }
  
  isInCollision() {
    
    return false;
  }
  
  nextScene() {
    state = END_STATE;
    updateListeners.splice(updateListeners.indexOf(this), 1);
    updateStateHandler();
  }
  
  update() {
    //This is where I update my model. I don't do any rendering here.

    if (this.isInCollision()) {
      
    }
    
  }

}