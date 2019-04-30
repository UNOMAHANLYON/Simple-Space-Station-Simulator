class Build extends Behavior{
    constructor(){
        super();
        this.building = false;
        this.roomText = [
            "Corridor", 
            "Dormitory", 
            "Cantina", 
            "Food Replicator",
            "Industrial Replicator",
            "Life Support",
            "Particle Collector",
            "Rec Center",
            "Water Replicator",
            "Solar Array",
            "Solar Panel"
        ];

        this.roomIndex = 0;
        this.roomType = "default";
    }

    start(){
    }

    update(gameObject){
             
    }

    getCurrentRoom(){
        return this.roomText[this.roomIndex];
    }

    OnKeyDown(gameObject, key){
        if (key == "e") {
            this.roomIndex++;
            if (this.roomIndex >= this.roomText.length ) {
                this.roomIndex = 0;
            }
        }

        if (key == "q") {
            this.roomIndex--;
            if (this.roomIndex < 0) {
                this.roomIndex = this.roomText.length - 1;
            }
        }

        if (key == "f") {
            this.roomType = this.roomText[this.roomIndex];
            this.newRoom = new GameObject("New Room");
            let comp1;

            switch(this.roomType){
                    case "Corridor":
                        this.width = 1;
                        this.height = 2;
                        comp1 = new StorageComp(20, "o2");
                        this.newRoom.components.push(comp1);
                        break;
                    case "Cantina":
                        this.width = 5;
                        this.height = 7;
                        comp1 =  new StorageComp(90, "food");
                        this.newRoom.components.push(comp1);
                        comp1 = new StorageComp(90, "water");
                        this.newRoom.components.push(comp1);
                        comp1 = new ProducerConsumerComp(-25, "power");
                        this.newRoom.components.push(comp1);
                        comp1 = new StorageComp(350, "o2");
                        this.newRoom.components.push(comp1);
                        break;
                    case "Dormitory":
                        this.width = 5;
                        this.height = 7;
                        comp1 = new StorageComp(6, "crew");
                        this.newRoom.components.push(comp1);
                        comp1 = new StorageComp(350, "o2");
                        this.newRoom.components.push(comp1);
                        comp1 = new ProducerConsumerComp(-10, "power");
                        this.newRoom.components.push(comp1);
                        break;
                    case "Food Replicator":
                        this.width = 3;
                        this.height = 3;
                        comp1 = new ProducerConsumerComp(9, "food");
                        this.newRoom.components.push(comp1);
                        comp1 = new StorageComp(27, "food");
                        this.newRoom.components.push(comp1);
                        comp1 = new StorageComp(90, "o2");
                        this.newRoom.components.push(comp1);
                        comp1 = new ProducerConsumerComp(-50, "power");
                        this.newRoom.components.push(comp1);
                        comp1 = new ProducerConsumerComp(-25, "particle");
                        this.newRoom.components.push(comp1);
                        break;
                    case "Life Support":
                        this.width = 3;
                        this.height = 3;
                        comp1 = new ProducerConsumerComp(100, "o2");
                        this.newRoom.components.push(comp1);
                        comp1 = new StorageComp(90, "o2");
                        this.newRoom.components.push(comp1);
                        comp1 = new ProducerConsumerComp(-50, "power");
                        this.newRoom.components.push(comp1);
                        comp1 = new ProducerConsumerComp(-25, "particle");
                        this.newRoom.components.push(comp1);
                        break;
                    case "Water Replicator":
                        comp1 = new ProducerConsumerComp(9, "water");
                        this.newRoom.components.push(comp1);
                        comp1 = new StorageComp(27, "water");
                        this.newRoom.components.push(comp1);
                        comp1 = new StorageComp(90, "o2");
                        this.newRoom.components.push(comp1);
                        comp1 = new ProducerConsumerComp(-50, "power");
                        this.newRoom.components.push(comp1);
                        comp1 = new ProducerConsumerComp(-25, "particle");
                        this.newRoom.components.push(comp1);
                        break;
                    case "Industrial Replicator":
                        comp1 = new StorageComp(250, "o2");
                        this.newRoom.components.push(comp1);
                        comp1 = new StorageComp(1000, "constructionMaterial");
                        this.newRoom.components.push(comp1);
                        comp1 = new ProducerConsumerComp(15, "constructionMaterial");
                        this.newRoom.components.push(comp1);
                        comp1 = new ProducerConsumerComp(-50, "particle");
                        this.newRoom.components.push(comp1);
                        comp1 = new ProducerConsumerComp(-50, "power");
                        this.newRoom.components.push(comp1);
                        this.width = 5;
                        this.height = 5;
                        break;
                    case "Particle Collector":
                        this.width = 5;
                        this.height = 1;
                        comp1 = new StorageComp(50, "o2");
                        this.newRoom.components.push(comp1);
                        comp1 = new StorageComp(1000, "particle");
                        this.newRoom.components.push(comp1);
                        comp1 = new ProducerConsumerComp(100, "particle");
                        this.newRoom.components.push(comp1);
                        comp1 = new ProducerConsumerComp(-50, "power");
                        this.newRoom.components.push(comp1); 
                        break;
                    case "Rec Center":
                        this.width = 7;
                        this.height = 9;
                        comp1 = new StorageComp(630, "o2");
                        this.newRoom.components.push(comp1);
                        comp1 = new ProducerConsumerComp(50, "power");
                        this.newRoom.components.push(comp1);
                        comp1 = new ProducerConsumerComp(-10, "stress");
                        break;
                    case "Solar Panel":
                        this.width = 2;
                        this.height = 4;
                        comp1 = new StorageComp(500, "power");
                        this.newRoom.components.push(comp1);
                        comp1 = new ProducerConsumerComp(50, "power");
                        this.newRoom.components.push(comp1);
                        break;
                    case "Solar Array":
                        this.width = 4;
                        this.height = 8;
                        comp1 = new StorageComp(1250, "power");
                        this.newRoom.components.push(comp1);
                        comp1 = new ProducerConsumerComp(125, "power");
                        this.newRoom.components.push(comp1);
                        break;
                    default:
                        this.width = 1;
                        this.height = 1;
                        console.log("default room trigggerd");
            }
            var myGeometry = new AxisAlignedRectangle(this.width, this.height);
            var myGeometryComponent = new GeometryComponent(myGeometry);

            var myGeoRenderer = new GeometryRendererComponent("red", myGeometry)
            this.newRoom.components.push(myGeometryComponent);
            this.newRoom.components.push(myGeoRenderer);
            this.newRoom.renderer = myGeoRenderer;

            var placement = new BuildingMoveBehavior();
            this.newRoom.components.push(placement);
                
            SceneManager.currentScene.instantiate(this.newRoom, new Vector2());
        }
        
        if (key == "g") {
            var finalObject = SceneManager.currentScene.getGameObjectByName("New Room");
            finalObject.getComponent(BuildingMoveBehavior).disableMovement();
            finalObject.renderer.color = "white";
            finalObject.setName(this.roomType);
        }

        if (key == "r") {
            console.log("Rotate");
            SceneManager.currentScene.getGameObjectByName("New Room").rotate90();
        }
    }

}