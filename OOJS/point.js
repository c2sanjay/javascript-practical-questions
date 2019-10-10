function Point(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
            this.getPoints = function () {
                return this;
            }

            this.updatePoint = function (x, y, z) {
                if (!x == null || !x == '') {
                    this.x = x;
                }
                if (!y == null || !y == '') {
                    this.y = y;
                }
                if (!z == null || !z == '') {
                    this.z = z;
                }
                return this;
            }

            this.deletePoint = function () {
                delete this.x;
                delete this.y;
                delete this.z;
                return this;
            }

            this.convertTo3d = function (z) {
                if (z == null || z == '') {
                    this.z = 0;
                }
                else {
                    this.z = z;
                }
                return this;
            }
            this.convertTo2d = function () {
                //this.x = x;
                //this.y = y;
                delete this.z;
                return this;
            }


//Created GetChords and SetChords by Komal
            this.getChords = function (chord) {
                if (chord == 'x') {
                    return this.x;
                } else if (chord == 'y') {
                    return this.y;
                } else if (chord == 'z') {
                    return this.z;
                }
                else {
                    return '...';
                }
            }

            this.setChords = function (obj) {
                if (obj.x != undefined) {
                    this.x = obj.x;
                }
                if (obj.y != undefined) {
                    this.y = obj.y;
                }
                if (obj.z != undefined) {
                    this.z = obj.z;
                }
                return this.getPoints();
            }


    
}
