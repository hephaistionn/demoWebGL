

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

    var normals = [
        0.00, -1.00, -0.00,
        0.00, -1.00, -0.00,
        0.00, -1.00, -0.00,
        0.00, -1.00, -0.00,
        0.00, -1.00, -0.00,
        0.00, -1.00, -0.00,
        0.00, 1.00, -0.00,
        0.00, 1.00, -0.00,
        0.00, 1.00, -0.00,
        0.00, 1.00, -0.00,
        0.00, 1.00, -0.00,
        0.00, 1.00, -0.00,
        0.00, 0.00, 1.00,
        0.00, 0.00, 1.00,
        0.00, 0.00, 1.00,
        0.00, 0.00, 1.00,
        0.00, 0.00, 1.00,
        0.00, 0.00, 1.00,
        1.00, 0.00, -0.00,
        1.00, 0.00, -0.00,
        1.00, 0.00, -0.00,
        1.00, 0.00, -0.00,
        1.00, 0.00, -0.00,
        1.00, 0.00, -0.00,
        0.00, 0.00, -1.00,
        0.00, 0.00, -1.00,
        0.00, 0.00, -1.00,
        0.00, 0.00, -1.00,
        0.00, 0.00, -1.00,
        0.00, 0.00, -1.00,
        -1.00, 0.00, -0.00,
        -1.00, 0.00, -0.00,
        -1.00, 0.00, -0.00,
        -1.00, 0.00, -0.00,
        -1.00, 0.00, -0.00,
        -1.00, 0.00, -0.00
    ];

    var meshVertices = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, meshVertices);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    meshVertices.itemSize = 3;
    meshVertices.numItems = vertices.length/3;

    var meshNormals = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, meshNormals);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
    meshNormals.itemSize = 3;
    meshNormals.numItems = normals.length/3;

    this.meshVertices = meshVertices;
    this.meshNormals = meshNormals;

};