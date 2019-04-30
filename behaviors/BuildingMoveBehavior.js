class BuildingMoveBehavior extends Behavior {
    constructor(){
        super();
        this.movementActive = true;
        this.speed = 0.5;
    }

    start(){}

    update(gameObject){
        if (this.movementActive){
            if (keys["d"] || keys["ArrowRight"]) {
                gameObject.transform.position.x += this.speed * Time.deltaTime; /// speed is in units/s * s
            }

            if (keys["a"] || keys["ArrowLeft"]) {
                gameObject.transform.position.x -= this.speed * Time.deltaTime; /// speed is in units/s * s
            }

            if (keys["w"] || keys["ArrowUp"]) {
                gameObject.transform.position.y += this.speed * Time.deltaTime; /// speed is in units/s * s
            }
        
            if (keys["s"] || keys["ArrowDown"]) {
                gameObject.transform.position.y -= this.speed * Time.deltaTime; /// speed is in units/s * s
            }
        }
    }

    disableMovement(){
        this.movementActive = false;
    }
    
}