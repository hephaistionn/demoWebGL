

Engine.prototype.initMeshs = function(){

    var gl = this.gl;

    var vertices = [
        -1, -1.00, 1.00,
        -1.00, -1.00, -1.00,
        1.00, -1.00, -1.00,
        1.00, -1.00, -1.00,
        1.00, -1.00, 1.00,
        -1, -1.00, 1.00,
        -1.00, 1.00, 1.00,
        1.00, 1.00, 1.00,
        1.00, 1.00, -1.00,
        1.00, 1.00, -1.00,
        -1.00, 1.00, -1.00,
        -1.00, 1.00, 1.00,
        -1, -1.00, 1.00,
        1.00, -1.00, 1.00,
        1.00, 1.00, 1.00,
        1.00, 1.00, 1.00,
        -1.00, 1.00, 1.00,
        -1, -1.00, 1.00,
        1.00, -1.00, 1.00,
        1.00, -1.00, -1.00,
        1.00, 1.00, -1.00,
        1.00, 1.00, -1.00,
        1.00, 1.00, 1.00,
        1.00, -1.00, 1.00,
        1.00, -1.00, -1.00,
        -1.00, -1.00, -1.00,
        -1.00, 1.00, -1.00,
        -1.00, 1.00, -1.00,
        1.00, 1.00, -1.00,
        1.00, -1.00, -1.00,
        -1.00, -1.00, -1.00,
        -1, -1.00, 1.00,
        -1.00, 1.00, 1.00,
        -1.00, 1.00, 1.00,
        -1.00, 1.00, -1.00,
        -1.00, -1.00, -1.00
    ];

    var mesh = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, mesh);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    mesh.itemSize = 3;
    mesh.numItems = vertices.length/3;

    this.mesh = mesh;

};