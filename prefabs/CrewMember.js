class CrewMember extends GameObject{
    constructor(){
        super();
        var myGeometry = new Circle(0.125);
        var myGeometryComponent = new GeometryComponent(myGeometry);
        this.components.push(myGeometryComponent);

        var myRenderer = new GeometryRendererComponent("red", myGeometry);
        this.components.push(myRenderer);
        this.renderer = myRenderer;
        var cmp = new ProducerConsumerComp(-2, "o2");
        this.components.push(cmp);
        cmp = new ProducerConsumerComp(2, "stress");
        this.components.push(cmp);
        cmp = new StorageComp(100, "stress");
        this.components.push(cmp);
        cmp = new ProducerConsumerComp(3, "food");
        this.components.push(cmp);
        cmp = new ProducerConsumerComp(4, "water");
        this.components.push(cmp);
        cmp = new StorageComp(10, "o2");
        cmp.current = 10;
        this.components.push(cmp);
        cmp = new StorageComp(30, "food");
        cmp.current = 30;
        this.components.push(cmp);
        cmp = new StorageComp(10, "water");
        cmp.current = 10;
        this.components.push(cmp);
        
    }

    start(){

    }

    update(){
        
    }
    
}