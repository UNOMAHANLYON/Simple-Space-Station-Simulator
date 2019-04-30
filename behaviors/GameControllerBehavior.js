class GameControllerBehavior extends Behavior {
  constructor() {
    super();
    //Track time
    this.timer = 0;
    //Time between enemy instantiate
    this.enemySpawn = 2;
    //Time between death and next scene
    this.endPhaseLength = 6;
    //Get reference to enemy prefab
    this.score = 0;

    //Possible states
    this.playing = 0;
    this.dead = 1;

    //current state
    this.state = this.playing;   
  }
  start() {

  }
  update(gameObject) {
    //Update time
    this.timer += Time.deltaTime;
    
    //Check state
    if (this.state == this.playing ){
      //Create enemies if needed
      if(this.timer > this.enemySpawn){
        let newBaddie = Prefabs.getPrefabByName("Baddie").copy();
        SceneManager.currentScene.instantiate(newBaddie, new Vector2((Math.random() * 2-1), (Math.random() * 2-1)));
        this.timer = 0;
      }
    } else {
      //Switch scenes if needed
      if(this.state == this.dead){
        if (this.timer > this.endPhaseLength){
            SceneManager.loadScene(SceneManager.getSceneByName("End Scene"));
        }
      }
    }   
    
  }
  destroyMainCharacter(mainCharacter) {

    //Destroy game object
    SceneManager.currentScene.destroy(mainCharacter);
    //Create new particle system from scratch
    //Change game state
    this.state = this.dead;
    this.timer = 0;

  }
}