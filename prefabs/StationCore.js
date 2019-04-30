class StationCore extends GameObject {
    constructor(){
        super();
        var myGeometry = new AxisAlignedRectangle(5/2, 5/2);
        this.components.push(myGeometry); 
        var myRenderer = new GeometryRendererComponent("white", myGeometry);
        this.components.push(myRenderer);
        this.renderer = myRenderer;
        var cmp = new StorageComp(2, "crew");
        this.components.push(cmp);
        cmp = new StorageComp(1000, "constructionMaterial");
        this.components.push(cmp);
        cmp = new StorageComp(250, "o2");
        this.components.push(cmp);
        cmp = new StorageComp(20, "food");
        this.components.push(cmp);
        cmp = new StorageComp(20, "water");
        this.components.push(cmp);
        cmp = new StorageComp(250, "power");
        this.components.push(cmp);
        cmp = new ProducerConsumerComp(2,"food");
        this.components.push(cmp);
        cmp = new ProducerConsumerComp(2, "water");
        this.components.push(cmp);
        cmp = new ProducerConsumerComp(20,"o2");
        this.components.push(cmp);
        cmp = new ProducerConsumerComp(25, "power");
        this.components.push(cmp);
    }
}