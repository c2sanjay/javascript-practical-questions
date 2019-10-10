function Triangle(points) {
    this.points = points;
	//get Area of Triangle
    this.getArea = function () {

        var x = [this.points[0].x, this.points[1].x, this.points[2].x, this.points[0].x];
        var y = [this.points[0].y, this.points[1].y, this.points[2].y, this.points[0].y];
        area = 0.0;
        for (k = 0; k < 3; k++) {
            xDiff = x[k + 1] - x[k];
            yDiff = y[k + 1] - y[k];
            area = area + x[k] * yDiff - y[k] * xDiff;
        }
        return Math.abs(0.5 * area);
    }
	// Draw the Triangle
    this.Triangle_Draw = function () {
        points.forEach(function (element, index, array) {
            var startPoint = array[index];
            var endPoint = array.length - 1 == index ? array[0] : array[index + 1];
            var line = new Line(startPoint, endPoint);
            line.drawLine();
        });
    }
    // Perimeter of Triangle
    this.getPerimeter = function () {
        var x = [this.points[0].x, this.points[1].x, this.points[2].x, this.points[0].x];
        var y = [this.points[0].y, this.points[1].y, this.points[2].y, this.points[0].y];

        perimeter = 0.0;
        for (i = 0; i < 3; i++) {

            xDiff = x[i + 1] - x[i];

            yDiff = y[i + 1] - y[i];

            perimeter = perimeter +
                Math.pow(xDiff * xDiff +
                    yDiff * yDiff, 0.5);
        }
        return perimeter;
    }
    //translate triangle to its axis.
    this.translate = function (obj) {


        this.points.forEach(function (element, index, array) {

            if (obj.x != undefined) {
                element.x = element.x + obj.x;
            }
            if (obj.y != undefined) {
                element.y = element.x + obj.y;
            }
            if (obj.z != undefined) {
                element.z = element.x + obj.z;
            }

            element.getPoints();

        });


    }
    //get Triangle Type
    this.getTriangleType = function () {
        var P1 = new getTriangleSide(this.points[0].x, this.points[0].y);
        var P2 = new getTriangleSide(this.points[1].x, this.points[1].y);
        var P3 = new getTriangleSide(this.points[2].x, this.points[2].y);

        triangleSidesArray = [
            P1.distanceTo(P2),
            P2.distanceTo(P3),
            P3.distanceTo(P1)
        ];

        triangleSidesArray.sort(function (a, b) {
            return b - a;
        });

        var longestSideSquare = Math.round(
            triangleSidesArray[0] * triangleSidesArray[0]
        );
        var secondLongestSide = Math.round(
            triangleSidesArray[1] * triangleSidesArray[1]
        );
        var thirdLongest = Math.round(
            triangleSidesArray[2] * triangleSidesArray[2]
        );

        if (longestSideSquare == secondLongestSide + thirdLongest) {
            var triangleType = "Right Type";
        } else if (longestSideSquare > secondLongestSide + thirdLongest) {
            var triangleType = "Obtuse Type";
        } else {
            var triangleType = "Acute Type";
        }
        return triangleType;
    }


    var getTriangleSide = function (x, y) {
        this.x = x;
        this.y = y;

        this.distanceTo = function (point) {
            var distance = Math.sqrt(
                Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2)
            );
            return distance;
        };
    };
// get Center
    this.getCenter = function () {
        var x = (this.points[0].x + this.points[1].x, this.points[2].x) / 3;
        var y = (this.points[0].y + this.points[1].y, this.points[2].y) / 3;


        var obj = new Object();

        obj.x = x;
        obj.y = y;
        return (obj);


    };
}

