

function Polygon(points)
{
   
   this.points = points;   
   points.forEach(function (element, index, array) {
   var startPoint = array[index];
   var endPoint = array.length - 1 == index ? array[0] : array[index+1];
   var line = new Line(startPoint, endPoint);
   line.drawLine();
   });

//calculate surface area polygon
   this.getArea = function () {
      // Initialze area 
      var area = 0.0; 
      var j = this.points.length - 1; 

      points.forEach(function (element, index, array) {
           area += (array[j].x + array[index].x) * (array[j].y - array[index].y);

           // j is previous vertex to index 
           j = index;

       });

       // Return absolute value 
       return Math.abs(area / 2.0); 
   }

// calculate perimeter
   this.getPerimeter = function () {
       var perimeter = 0.0
       var nextVal = 0;
       // Calculate the perimeter
       // in the arrays x and y
       this.points.forEach(function (element, index, array) {
        
           if (array.length - 1 == index) {
               nextVal = 0;
           }
           else {
               nextVal = index + 1;
           }

           xDiff = array[nextVal].x - array[index].x;
           yDiff = array[nextVal].y - array[index].y;

           perimeter = perimeter + Math.sqrt(xDiff * xDiff + yDiff * yDiff);

           });

       return perimeter;
   }

    // calculate centroid of the polygon
   this.getCenter = function () {
      
       var x = 0,
           y = 0,
           i,
           j,
           f,
           point1,
           point2;

       for (i = 0, j = this.points.length - 1; i < this.points.length; j = i, i += 1) {
           point1 = this.points[i];
           point2 = this.points[j];
           f = point1.x * point2.y - point2.x * point1.y;
           x += (point1.x + point2.x) * f;
           y += (point1.y + point2.y) * f;
       }

       f = this.getArea() * 6;

       return new Point(x / f, y / f);
   };

    //translate polygon to its axis.
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
   
   this.polygon_Draw = function () {
        points.forEach(function (element, index, array) {
            var startPoint = array[index];
            var endPoint = array.length - 1 == index ? array[0] : array[index + 1];
            var line = new Line(startPoint, endPoint);
            line.drawLine();
        });
    }
   

}

