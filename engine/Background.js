class Background extends GameObject {
    constructor(){
        super();
        this.starCount = 180;
        this.backgroundColor = "black";
    }

    render(ctx, width, height){
        ctx.fillStyle = this.backgroundColor;
        ctx.fillRect(0, 0, width, height);

        for (var i = 0; i < this.starCount; i++) {
            var x = Math.random() * canv.offsetWidth;
            var y = Math.random() * canv.offsetHeight;
            ctx.fillStyle = "white";
            ctx.fillRect(x, y, 1, 1);
        }
    }
}