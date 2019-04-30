class ProducerConsumerComp extends Component {
    constructor(delta, type){
        super();
        if(type !== "food" && type !== "water" && type !== "power" && type !== "particle" && type !== "constructionMaterial" && type !== "o2" && type !== "crew" && type !== "stress")
            throw `Type ${type} must be of the following: food, water, power, particle, consructionMaterial, o2, crew, or stress`; 
        this.delta = delta;
        this.type = type; 
    }
}