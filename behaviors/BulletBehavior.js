class BulletBehavior extends Behavior{
  constructor(){
    super();
    this.speed = 20;
  }
  start(){

  }
  update(gameObject){
    gameObject.transform.position.y += this.speed * Time.deltaTime;
  }
  
  onCollision(collider, gameObject, otherCollider, otherGameObject) {
   //Add particle system
   //Destroy game object
   if(otherGameObject.name == "Baddie"){
    SceneManager.currentScene.destroy(otherGameObject);
    //update score
    SceneManager.currentScene.getGameObjectByName("GameController").getComponent(GameControllerBehavior).score++;
   }
  }
}