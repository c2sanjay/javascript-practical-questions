function Line(point1, point2) {
    this.point1 = point1;
    this.point2 = point2;
    this.drawLine = function () {
		var myCanvasCheck = document.getElementById("myCanvas");
		if(myCanvasCheck == undefined || myCanvasCheck == null || myCanvasCheck == "")		{
			 $('#lineDraw').append('<br/><br/><canvas id="myCanvas" width="300" height="150" style="border:1px solid #d3d3d3;"> </canvas>');
			}
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(point1.x, point1.y, point1.z);
        ctx.lineTo(point2.x, point2.y, point2.z);
        ctx.stroke();
    }

    this.lineMagnitude = function () {
        var p1 = this.point1;
        var p2 = this.point2;
        var mag = Math.sqrt(Math.pow(Math.abs(p2.x - p1.x), 2) + Math.pow(Math.abs(p2.y - p1.y), 2));
        return mag;
    }

    this.updateLine = function (start, end) {
        var point1 = this.point1.updatePoint(start.x, start.y, start.z);
        var point2 = this.point2.updatePoint(end.x, end.y, end.z);
        return this;
    }
    //Create Move line Mandeep     
    this.moveLine = function (axis, value) {
        var p1 = this.point1;
        var p2 = this.point2;
        if (axis == 'x') {
            this.point1.x = Number(this.point1.x) + Number(value);
            this.point2.x = Number(this.point2.x) + Number(value);
        }
        else if (axis == 'y') {
            this.point1.y = Number(this.point1.y) + Number(value);
            this.point2.y = Number(this.point2.y) + Number(value);
        }
        else {
            console.log('wrong input');
        }
    }
}

