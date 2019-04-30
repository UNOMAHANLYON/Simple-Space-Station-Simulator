class StorageComp extends Component {
    //accepted types: food, water, power, particle, constructionMaterial, o2
    constructor(cap, type){
        super();
        this.type = type;
        if(this.type !== "food" && this.type !== "water" && this.type !== "power" && this.type !== "particle" && this.type !== "constructionMaterial" && this.type !== "o2" && this.type !== "crew" && this.type !== "stress")
            throw `Type ${this.type} must be of the following: food, water, power, particle, constructionMaterial, o2, crew, or stress`; 
        this.capacity = cap;
        this.current = 0;
        this.overage = 0;
    }

    adjustCurrent(delta){
        this.current += delta;
        if(this.current > this.capacity ){
            this.overage = this.current - this.capacity;
            this.current = this.capacity;
        }
    }
}