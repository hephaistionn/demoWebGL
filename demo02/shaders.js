
Engine.prototype.initShaders = function() {

    var gl = this.gl;

    /*------------------------------------------------------------------------------*/
    /*---------------------prepare VertexShader and FragmentShader------------------*/
    /*------------------------------------------------------------------------------*/

    //GLSL

    var vertexShaderCode = ''
        +'  attribute vec3 aVertexPosition;  '
        +'  attribute vec3 aVertexNormal;   '
        +'  uniform mat4 modelMatrix;  '
        +'  uniform mat4 viewMatrix;  '
        +'  uniform mat4 projectionMatrix;  '
        +'  varying vec4 vNormal;  '
        +'  void main(void) {  '
        +'    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(aVertexPosition, 1.0);  '
        +'    vNormal =  modelMatrix * vec4(aVertexNormal, 1.0);   '
        +'  }  ';

    var pixelShader = ''
        +'  precision mediump float;  '
        +'  uniform vec3 uLightingDirection;  '
        +'  uniform vec3 uLightColor;  '
        +'  varying vec4 vNormal;  '
        +'  void main(void) {  '
        +'    vec3 normal = normalize(vNormal.xyz);  '
        +'    float dotProduct = dot( normal, normalize(uLightingDirection) );  '
        +'    float pointDiffuseWeight = max( dotProduct, 0.0 );  '
        +'    gl_FragColor =  vec4(uLightColor * pointDiffuseWeight, 1.0) ;   '
        +'  }  ';


    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, pixelShader);
    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {alert('fragment : '+gl.getShaderInfoLog(fragmentShader));}


    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {alert('vertex : '+gl.getShaderInfoLog(vertexShader));}


    /*------------------------------------------------------------------------------*/
    /*---------------------new shader-----------------------------------------------*/
    /*------------------------------------------------------------------------------*/

    var program = gl.createProgram();

    gl.attachShader(program, vertexShader );
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        alert("Could not initialise shaders");
    }

    /*------------------------------------------------------------------------------*/
    /*---------------------Build Uniforms And Attributes----------------------------*/
    /*------------------------------------------------------------------------------*/

    var shader = {};
    shader.program = program;
    shader.setAttributVertexPosition = gl.getAttribLocation( program, "aVertexPosition" );
    gl.enableVertexAttribArray(program.setAttributVertexPosition);
    shader.setAttributVertexNormal = gl.getAttribLocation( program, "aVertexNormal" );
    gl.enableVertexAttribArray(program.setAttributVertexNormal);

    shader.setUniformVVMatrix = gl.getUniformLocation( program, "viewMatrix" );
    shader.setUniformVMatrix = gl.getUniformLocation( program, "modelMatrix" );
    shader.setUniformPMatrix = gl.getUniformLocation( program, "projectionMatrix" );
    shader.setUniformLightDirection = gl.getUniformLocation(program, "uLightingDirection");
    shader.setUniformLightColor = gl.getUniformLocation(program, "uLightColor");

    this.shader = shader;

};
