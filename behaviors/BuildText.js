class BuildText extends Behavior{
  constructor(){
    super();
    this.frames  = 0;
  }
  start(){

  }
  update(gameObject){
    this.frames++;
    let guiText = gameObject.getComponent(GUITextComponent);
    guiText.text = SceneManager.currentScene.getGameObjectByName("GUI Text").getComponent(Build).getCurrentRoom();
  }
}