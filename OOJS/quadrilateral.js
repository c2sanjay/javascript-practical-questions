function Quad(points) {
    this.points = points;
    this.getPoints = function () {
        return this;
    }

    this.Quad_Draw = function () {
        points.forEach(function (element, index, array) {
            var startPoint = array[index];
            var endPoint = array.length - 1 == index ? array[0] : array[index + 1];
            var line = new Line(startPoint, endPoint);
            line.drawLine();
        });
    }

    this.getArea = function () {
        var x = [this.points[0].x, this.points[1].x, this.points[2].x, this.points[3].x, this.points[0].x];
        var y = [this.points[0].y, this.points[1].y, this.points[2].y, this.points[3].y, this.points[0].y];

        area = 0.0;
        for (k = 0; k < 4; k++) {
            xDiff = x[k + 1] - x[k];
            yDiff = y[k + 1] - y[k];
            area = area + x[k] * yDiff - y[k] * xDiff;
        }
        return Math.abs(0.5 * area);
    }

    this.getPerimeter = function () {
        var x = [this.points[0].x, this.points[1].x, this.points[2].x, this.points[3].x, this.points[0].x];
        var y = [this.points[0].y, this.points[1].y, this.points[2].y, this.points[3].y, this.points[0].y];

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

    this.getCenter = function () {
        var point = new Point();

        point.x = (parseFloat(this.points[0].x) + parseFloat(this.points[1].x) + parseFloat(this.points[2].x) + parseFloat(this.points[3].x)) / 4;
        point.y = (parseFloat(this.points[0].y) + parseFloat(this.points[1].y) + parseFloat(this.points[2].y) + parseFloat(this.points[3].y)) / 4;
        point.z = (parseFloat(this.points[0].z) + parseFloat(this.points[1].z) + parseFloat(this.points[2].z) + parseFloat(this.points[3].z)) / 4;
        return point;
    }


    this.translate = function (axis, units) {
        if (axis == 'x') {
            this.points[0].x = parseFloat(this.points[0].x) + units;
            this.points[1].x = parseFloat(this.points[1].x) + units;
            this.points[2].x = parseFloat(this.points[2].x) + units;
            this.points[3].x = parseFloat(this.points[3].x) + units;
        }
        else if (axis == 'y') {
            this.points[0].y = parseFloat(this.points[0].y) + units;
            this.points[1].y = parseFloat(this.points[1].y) + units;
            this.points[2].y = parseFloat(this.points[2].y) + units;
            this.points[3].y = parseFloat(this.points[3].y) + units;
        }
        return this;
    }


    this.getQuadType = function () {
        var point1 = new Point(this.points[0].x, this.points[0].y);
        var point2 = new Point(this.points[1].x, this.points[1].y);
        var point3 = new Point(this.points[2].x, this.points[2].y);
        var point4 = new Point(this.points[3].x, this.points[3].y);

        if (this.points[0].x && this.points[1].x && this.points[2].x && this.points[3].x && this.points[0].y && this.points[1].y && this.points[2].y && this.points[3].y) {
            var line1 = new Line(point1, point2);
            var oneTwo = line1.lineMagnitude();

            var line2 = new Line(point2, point3);
            var twoThree = line2.lineMagnitude();

            var line3 = new Line(point3, point4);
            var threeFour = line3.lineMagnitude();

            var line4 = new Line(point4, point1);
            var fourOne = line4.lineMagnitude();


            var line5 = new Line(point1, point3);
            var diag13 = line5.lineMagnitude();

            var line6 = new Line(point2, point4);
            var diag24 = line6.lineMagnitude();

            if (oneTwo == twoThree && twoThree == threeFour && threeFour == fourOne) {
                if (diag13 == diag24)
                    return "Square";
                else
                    return "Rhombus";
            }
            else {
                if (diag13 == diag24)
                    return "Rectangle";
                else
                    return "Quadrilateral"
            }
        }
        else
            return "Please Enter Positive Values!";
    }
}