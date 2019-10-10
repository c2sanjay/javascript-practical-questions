function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
}
function showHideInputBox() {
    clearAll();
    var addButton = document.getElementById("addnewbutton");
    var select = document.getElementById("selectOption").value;
    if (select == 5) {
        addButton.style.display = "none";
        addFields(3);
        // $('#AddNewIputDiv .z').hide();
    }
    else if (select == 4) {
        addButton.style.display = "none";
        addFields(2)
    }
    else if (select == 3) {
        addFields(4)
        addButton.style.display = "inline-block";
    }
    else if (select == 2) {
        addButton.style.display = "none";
        addFields(1)
    }
    else {
        addButton.style.display = "none";
        addFields(0)
    }
}

function clearAll() {
    var elements = document.getElementsByTagName("input")
    clearDiv();
    for (i = 0; i < elements.length; i++) {
        elements[i].value = "";
    }
}

function clearDiv() {
    document.getElementById("lineDraw").innerHTML = "";
}

function GetValues() {
    var elements = document.getElementsByTagName("input")
    var rows = elements.length / 3;
    var arr = [];
    var counter = 0;
    for (var i = 0; i < rows; i++) {
        var obj = new Object();
        obj.x = elements[counter].value;
        obj.y = elements[counter + 1].value;
        obj.z = elements[counter + 2].value;
        counter += 3;
        arr.push(obj);
    }
    return arr;
}

function addFields(n) {
    var divIds = document.getElementById("cloneDiv");
    if (divIds.innerHTML != "")
        divIds.innerHTML = "";
    for (i = 0; i < n; i++) {
        var container = document.getElementById("cloneDiv");
        var div = document.getElementById('inputbox'),
            clone = div.cloneNode(true); // true means clone all childNodes and all event handlers
        clone.id = "inputbox_Clone" + i;
        clone.value = "";
        container.appendChild(clone);
    }
}

function GetCalculation() {
    clearDiv();
    var type = document.getElementById("selectOption").value;
    var arr = GetValues();
    if (type == 1) {  // Point
        var _point = new Point(arr[0].x, arr[0].y, (arr[0].z == "") ? undefined : arr[0].z);
        var _response = _point.getPoints();
        if (_response.z == undefined) {
            $('#lineDraw').html('Created 2D Point <br/>x = ' + _response.x + '<br/>y = ' + _response.y + '<br/>z = ' + _response.z);
        }
        else {
            $('#lineDraw').html('Created 3D Point <br/>x = ' + _response.x + '<br/>y = ' + _response.y + '<br/>z = ' + _response.z);
        }
        var _response = _point.updatePoint(11, 22, 33);
        $('#lineDraw').append('<br/><hr/><br/>updatePoint(11,22,33)<br/>');
        $('#lineDraw').append('Updated Point <br/> x = ' + _response.x + '<br/>y = ' + _response.y + '<br/>z = ' + _response.z);

        var _response = _point.deletePoint();
        $('#lineDraw').append('<br/><hr/><br/>DeletePoint()<br/>');
        $('#lineDraw').append('x = ' + _response.x + '<br/>y = ' + _response.y + '<br/>z = ' + _response.z);

        var _response = _point.updatePoint(11, 22);
        $('#lineDraw').append('<br/><hr/><br/>updatePoint(11,22)<br/>');
        $('#lineDraw').append('Updated Point <br/> x = ' + _response.x + '<br/>y = ' + _response.y + '<br/>z = ' + _response.z);

        var _response = _point.convertTo3d(44);
        $('#lineDraw').append('<br/><br/>convertTo3d(44)<br/>');
        $('#lineDraw').append('x = ' + _response.x + '<br/>y = ' + _response.y + '<br/>z = ' + _response.z);

        var _response = _point.convertTo2d();
        $('#lineDraw').append('<br/><hr/><br/>convertTo2d()<br/>');
        $('#lineDraw').append('x = ' + _response.x + '<br/>y = ' + _response.y + '<br/>z = ' + _response.z);

        //Created GetChords and SetChords by Komal

        var _response = _point.getChords('x');
        $('#lineDraw').append('<br/><hr/><br/>GetChords(x)<br/>');
        $('#lineDraw').append('X: ' + (_response == undefined ? 'undefined' : _response));
        var _response = _point.getChords('y');
        $('#lineDraw').append('<br/>GetChords(y)<br/>');
        $('#lineDraw').append('Y: ' + (_response == undefined ? 'undefined' : _response));
        var _response = _point.getChords('z');
        $('#lineDraw').append('<br/>GetChords(z)<br/>');
        $('#lineDraw').append('Z: ' + (_response == undefined ? 'undefined' : _response));

        var _response = _point.setChords({ 'x': 1 });
        $('#lineDraw').append('<br/><hr/><br/>setChords({\'x\' : 1})<br/>');

        $('#lineDraw').append('x = ' + _response.x + '<br/>y = ' + _response.y + '<br/>z = ' + _response.z);
        var _response = _point.setChords({ 'y': 2 });
        $('#lineDraw').append('<br/>setChords({\'y\' : 2})<br/>');
        $('#lineDraw').append('x = ' + _response.x + '<br/>y = ' + _response.y + '<br/>z = ' + _response.z);
        var _response = _point.setChords({ 'z': 1 });
        $('#lineDraw').append('<br/>setChords({\'z\' : 1})<br/>');
        $('#lineDraw').append('x = ' + _response.x + '<br/>y = ' + _response.y + '<br/>z = ' + _response.z);
    }
    else if (type == 2) { //Line
        var linePoints = [];
        for (i = 0; i < arr.length; i++) {
            var p1 = new Point(arr[i].x, arr[i].y, (arr[i].z == "" || arr[i].z == undefined) ? 0 : arr[i].z)
            linePoints.push(p1);
        }
        var l1 = new Line(linePoints[0], linePoints[1]);
        console.log(linePoints);
        $('#lineDraw').append('Created Line Point1 <br/>x1 = ' + linePoints[0].x + '<br/>y1 = ' + linePoints[0].y + '<br/>z1 = ' + linePoints[0].z + '<br/><br/>Created Line Point2<br/>x2 = ' + linePoints[1].x + '<br/>y2 = ' + linePoints[1].y + '<br/>z2 = ' + linePoints[1].z);
        l1.drawLine();

        var lineMagnitude = l1.lineMagnitude();
        console.log(lineMagnitude);
        $('#lineDraw').append('<br/><hr/><br/>Line Magnitude  = ' + lineMagnitude);

        var movelineDraw = l1.moveLine('y', 35);
        $('#lineDraw').append('<br/><hr/><br/>Move Line to Y Axis  =  35 <br> <br> Created Line Point1 <br/>x1 = ' + linePoints[0].x + '<br/>y1 = ' + linePoints[0].y + '<br/>z1 = ' + linePoints[0].z +
            '<br/><br/>Created Line Point2<br/>x2 = ' + linePoints[1].x + '<br/>y2 = ' + linePoints[1].y + '<br/>z2 = ' + linePoints[1].z);

        var currentline = new Line(linePoints[0], linePoints[1]);
        $('#lineDraw').append('<br/><hr/><br/>Line Point1 <br/>x1 = ' + linePoints[0].x + '<br/>y1 = ' + linePoints[0].y + '<br/>z1 = ' + linePoints[0].z + '<br/><br/>Line Point2<br/>x2 = ' + linePoints[1].x + '<br/>y2 = ' + linePoints[1].y + '<br/>z2 = ' + linePoints[1].z);

        updateLine = currentline.updateLine({ x: 33, y: 20, z: 11 }, { x: 22, y: 45, z: 18 });
        $('#lineDraw').append('<br/><br/>Update static varriable <br/>Point1 = x: 33, y: 20, z:11<br/>Point2 =x: 22, y: 45, z:18 <br/> <br> Created Line Point1 <br/>x1 = ' + linePoints[0].x + '<br/>y1 = ' + linePoints[0].y + '<br/>z1 = ' + linePoints[0].z +
            '<br/><br/>Created Line Point2<br/>x2 = ' + linePoints[1].x + '<br/>y2 = ' + linePoints[1].y + '<br/>z2 = ' + linePoints[1].z);
    }
    else if (type == 3) {  //polygon
        var pts = [];
        for (i = 0; i < arr.length; i++) {
            pts.push(new Point(arr[i].x, arr[i].y, (arr[i].z == "") ? undefined : arr[i].z));
        }
        var polygon = new Polygon(pts);
        $('#lineDraw').append('<br/> Declare a Polygon');
        for (i = 0; i < arr.length; i++) {
            pts.push(new Point(arr[i].x, arr[i].y, (arr[i].z == "") ? undefined : arr[i].z));
            $('#lineDraw').append('<br/>Point ' + (i + 1) + ':<br/> x = ' + pts[i].x + ', y = ' + pts[i].y + ', z = ' + pts[i].z);
        }
        polygon.polygon_Draw();
        //  var _response = polygon.getPoints();
        $('#lineDraw').append('<br/><hr/><br/>Surface Area of Polygon: ' + polygon.getArea().toFixed(2) + ' <br/>');
        $('#lineDraw').append('<br/><hr/><br/>Perimeter of Polygon: ' + polygon.getPerimeter().toFixed(2) + ' <br/>');
        var _response = polygon.getCenter();
        $('#lineDraw').append('<br/><hr/><br/>Center of Polygon: <br/>X = ' + _response.x.toFixed(2) + ', Y = ' + _response.y.toFixed(2) + '  <br/>');
        polygon.translate('x', 3);
        $('#lineDraw').append('<br/><hr/><br/>Move Polygon center to other location. translate(\'x\',3)   ');
        for (i = 0; i < arr.length; i++) {
            $('#lineDraw').append('<br/>Point ' + (i + 1) + ':<br/> x = ' + (parseInt(pts[i].x) + 3) + ', y = ' + pts[i].y + ', z = ' + pts[i].z);
        }

    }
    else if (type == 4) { //triangle
        var pts = [];
        for (i = 0; i < arr.length; i++) {
            pts.push(new Point(arr[i].x, arr[i].y, (arr[i].z == "") ? undefined : arr[i].z));
        }
        var triangle = new Triangle(pts);
        $('#lineDraw').append('<br/> Declare a Triangle');
        for (i = 0; i < arr.length; i++) {
            $('#lineDraw').append('<br/>Point ' + (i + 1) + ':<br/> x = ' + pts[i].x + ', y = ' + pts[i].y + ', z = ' + pts[i].z);
        }
        triangle.Triangle_Draw();
        $('#lineDraw').append('<br/><hr/><br/>Surface Area of Triangle: ' + triangle.getArea().toFixed(2) + ' <br/>');
        $('#lineDraw').append('<br/><hr/><br/>Perimeter of Triangle: ' + triangle.getPerimeter().toFixed(2) + ' <br/>');
        var _response = triangle.getCenter();
        triangle.translate('x', 3);
        $('#lineDraw').append('<br/><hr/><br/>Move Triangle point to other location. translate(\'x\',3)   ');
        for (i = 0; i < arr.length; i++) {
            $('#lineDraw').append('<br/>Point ' + (i + 1) + ':<br/> x = ' + (parseInt(pts[i].x) + 3) + ', y = ' + pts[i].y + ', z = ' + pts[i].z);
        }
        $('#lineDraw').append('<br/><hr/><br/>Type of Triangle : ' + triangle.getTriangleType() + ' <br/>');
        $('#lineDraw').append('<br/><hr/><br/>Draw of Triangle : ' + triangle.Triangle_Draw() + ' <br/>');
    }
    else if (type == 5) {    //Quadrilateral
        var pts = [];
        for (i = 0; i < arr.length; i++) {
            pts.push(new Point(arr[i].x, arr[i].y, (arr[i].z == "") ? undefined : arr[i].z));
        }
        var quad = new Quad(pts);
        $('#lineDraw').append('<br/> Declare a Quadrilateral');
        for (i = 0; i < arr.length; i++) {
            $('#lineDraw').append('<br/>Point ' + (i + 1) + ':<br/> x = ' + pts[i].x + ', y = ' + pts[i].y + ', z = ' + pts[i].z);
        }
        quad.Quad_Draw();
        $('#lineDraw').append('<br/><hr/><br/>Surface Area of Quadrilateral: ' + quad.getArea().toFixed(2) + ' <br/>');
        $('#lineDraw').append('<br/><hr/><br/>Perimeter of Quadrilateral: ' + quad.getPerimeter().toFixed(2) + ' <br/>');
        var _response = quad.getCenter();
        $('#lineDraw').append('<br/><hr/><br/>Center of Quadrilateral: <br/>X = ' + _response.x.toFixed(2) + ', Y = ' + _response.y.toFixed(2) + '  <br/>');
        quad.translate('x', 3);
        $('#lineDraw').append('<br/><hr/><br/>Move Quad points to other location. translate(\'x\',3)   ');
        for (i = 0; i < arr.length; i++) {
            $('#lineDraw').append('<br/>Point ' + (i + 1) + ':<br/> x = ' + (parseInt(pts[i].x) + 3) + ', y = ' + pts[i].y + ', z = ' + pts[i].z);
        }
        $('#lineDraw').append('<br/><hr/><br/>Type of Quadrilateral : ' + quad.getQuadType() + ' <br/>');
    }

}