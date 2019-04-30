//The main scene in our game
class RectangleScene extends Scene {
  constructor() {
    super("Bounce Scene"); //The name of our scene
  }
  start() {
    

    
    this.camera = new Camera(20, "black");// Add a camera game object
    this.camera.transform.position = new Vector2(1 / 2, 1 / 2); //Set its position
    this.hierarchy.push(this.camera);

    var guiText = new GameObject("GUI Text");
    var textComponent = new GUITextComponent("Physics Test Game.", "white", "30px Arial");
    textComponent.justify = "left";
    guiText.components.push(textComponent);
    guiText.rendererGUI = textComponent;
    guiText.transform.position = new Vector2(100, 100);
    var textBehavior = new TextBehavior();
    guiText.components.push(textBehavior);
    this.hierarchy.push(guiText);

    
    this.instantiate(Prefabs.getPrefabByName("MainPlayer"), new Vector2(0,-4));

    this.instantiate(Prefabs.getPrefabByName("Baddie"), new Vector2(0, 4));

    
    var emptyObject = new GameObject("GameController");
    emptyObject.components.push(new GameControllerBehavior());
    this.hierarchy.push(emptyObject);
  }
}