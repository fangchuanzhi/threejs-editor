/**
 * @author mrdoob / http://mrdoob.com/
 */

var Strings = function (config) {

	var language = config.getKey('language');

	var values = {

		en: {

			'menubar/file': 'File',
			'menubar/file/new': 'New',
			'menubar/file/import': 'Import',
			'menubar/file/export/geometry': 'Export Geometry',
			'menubar/file/export/object': 'Export Object',
			'menubar/file/export/scene': 'Export Scene',
			'menubar/file/export/dae': 'Export DAE',
			'menubar/file/export/glb': 'Export GLB',
			'menubar/file/export/gltf': 'Export GLTF',
			'menubar/file/export/obj': 'Export OBJ',
			'menubar/file/export/stl': 'Export STL',
			'menubar/file/export/stl_binary': 'Export STL (Binary)',
			'menubar/file/publish': 'Publish',

			'menubar/edit': 'Edit',
			'menubar/edit/undo': 'Undo (Ctrl+Z)',
			'menubar/edit/redo': 'Redo (Ctrl+Shift+Z)',
			'menubar/edit/clear_history': 'Clear History',
			'menubar/edit/clone': 'Clone',
			'menubar/edit/delete': 'Delete (Del)',
			'menubar/edit/minify_shaders': 'Minify Shaders',
			'menubar/edit/fixcolormaps': 'Fix Color Maps',

			'menubar/add': 'Add',
			'menubar/add/group': 'Group',
			'menubar/add/plane': 'Plane',
			'menubar/add/box': 'Box',
			'menubar/add/circle': 'Circle',
			'menubar/add/cylinder': 'Cylinder',
			'menubar/add/ring': 'Ring',
			'menubar/add/sphere': 'Sphere',
			'menubar/add/dodecahedron': 'Dodecahedron',
			'menubar/add/icosahedron': 'Icosahedron',
			'menubar/add/octahedron': 'Octahedron',
			'menubar/add/tetrahedron': 'Tetrahedron',
			'menubar/add/torus': 'Torus',
			'menubar/add/tube': 'Tube',
			'menubar/add/torusknot': 'TorusKnot',
			'menubar/add/lathe': 'Lathe',
			'menubar/add/sprite': 'Sprite',
			'menubar/add/pointlight': 'PointLight',
			'menubar/add/spotlight': 'SpotLight',
			'menubar/add/directionallight': 'DirectionalLight',
			'menubar/add/hemispherelight': 'HemisphereLight',
			'menubar/add/ambientlight': 'AmbientLight',
			'menubar/add/perspectivecamera': 'PerspectiveCamera',
			'menubar/add/orthographiccamera': 'OrthographicCamera',

			'menubar/status/autosave': 'autosave',

			'menubar/play': 'Play',
			'menubar/play/stop': 'Stop',
			'menubar/play/play': 'Play',

			'menubar/examples': 'Examples',
			'menubar/examples/Arkanoid': 'Arkanoid',
			'menubar/examples/Camera': 'Camera',
			'menubar/examples/Particles': 'Particles',
			'menubar/examples/Pong': 'Pong',
			'menubar/examples/Shaders': 'Shaders',

			'menubar/help': 'Help',
			'menubar/help/source_code': 'Source Code',
			'menubar/help/about': 'About',

			'sidebar/scene': 'Scene',
			'sidebar/scene/background': 'Background',
			'sidebar/scene/fog': 'Fog',

			'sidebar/properties/object': 'Object',
			'sidebar/properties/geometry': 'Geometry',
			'sidebar/properties/material': 'Material',
			'sidebar/properties/script': 'Script',

			'sidebar/object/type': 'Type',
			'sidebar/object/new': 'New',
			'sidebar/object/uuid': 'UUID',
			'sidebar/object/name': 'Name',
			'sidebar/object/position': 'Position',
			'sidebar/object/rotation': 'Rotation',
			'sidebar/object/scale': 'Scale',
			'sidebar/object/fov': 'Fov',
			'sidebar/object/left': 'Left',
			'sidebar/object/right': 'Right',
			'sidebar/object/top': 'Top',
			'sidebar/object/bottom': 'Bottom',
			'sidebar/object/near': 'Near',
			'sidebar/object/far': 'Far',
			'sidebar/object/intensity': 'Intensity',
			'sidebar/object/color': 'Color',
			'sidebar/object/groundcolor': 'Ground Color',
			'sidebar/object/distance': 'Distance',
			'sidebar/object/angle': 'Angle',
			'sidebar/object/penumbra': 'Penumbra',
			'sidebar/object/decay': 'Decay',
			'sidebar/object/shadow': 'Shadow',
			'sidebar/object/cast': 'cast',
			'sidebar/object/receive': 'receive',
			'sidebar/object/visible': 'Visible',
			'sidebar/object/frustumcull': 'Frustum Cull',
			'sidebar/object/renderorder': 'Render Order',
			'sidebar/object/userdata': 'User data',

			'sidebar/object/reset': 'Reset',

			'sidebar/geometry/type': 'Type',
			'sidebar/geometry/new': 'New',
			'sidebar/geometry/uuid': 'UUID',
			'sidebar/geometry/name': 'Name',
			'sidebar/geometry/bounds': 'Bounds',

			'sidebar/geometry/box_geometry/width': 'Width',
			'sidebar/geometry/box_geometry/height': 'Height',
			'sidebar/geometry/box_geometry/depth': 'Depth',
			'sidebar/geometry/box_geometry/widthseg': 'Width Seg',
			'sidebar/geometry/box_geometry/heightseg': 'Height Seg',
			'sidebar/geometry/box_geometry/depthseg': 'Depth Seg',

			'sidebar/geometry/buffer_geometry/attributes': 'Attributes',
			'sidebar/geometry/buffer_geometry/index': 'index',

			'sidebar/geometry/circle_geometry/radius': 'Radius',
			'sidebar/geometry/circle_geometry/segments': 'Segments',
			'sidebar/geometry/circle_geometry/thetastart': 'Theta start',
			'sidebar/geometry/circle_geometry/thetalength': 'Theta length',

			'sidebar/geometry/cylinder_geometry/radiustop': 'Radius top',
			'sidebar/geometry/cylinder_geometry/radiusbottom': 'Radius bottom',
			'sidebar/geometry/cylinder_geometry/height': 'Height',
			'sidebar/geometry/cylinder_geometry/radialsegments': 'Radial segments',
			'sidebar/geometry/cylinder_geometry/heightsegments': 'Height segments',
			'sidebar/geometry/cylinder_geometry/openended': 'Open ended',

			'sidebar/geometry/extrude_geometry/curveSegments': 'Curve Segments',
			'sidebar/geometry/extrude_geometry/steps': 'Steps',
			'sidebar/geometry/extrude_geometry/depth': 'Depth',
			'sidebar/geometry/extrude_geometry/bevelEnabled': 'Bevel?',
			'sidebar/geometry/extrude_geometry/bevelThickness': 'Thickness',
			'sidebar/geometry/extrude_geometry/bevelSize': 'Size',
			'sidebar/geometry/extrude_geometry/bevelOffset': 'Offset',
			'sidebar/geometry/extrude_geometry/bevelSegments': 'Segments',
			'sidebar/geometry/extrude_geometry/shape': 'Convert to Shape',

			'sidebar/geometry/geometry/vertices': 'Vertices',
			'sidebar/geometry/geometry/faces': 'Faces',

			'sidebar/geometry/dodecahedron_geometry/radius': 'Radius',
			'sidebar/geometry/dodecahedron_geometry/detail': 'Detail',

			'sidebar/geometry/icosahedron_geometry/radius': 'Radius',
			'sidebar/geometry/icosahedron_geometry/detail': 'Detail',

			'sidebar/geometry/octahedron_geometry/radius': 'Radius',
			'sidebar/geometry/octahedron_geometry/detail': 'Detail',

			'sidebar/geometry/tetrahedron_geometry/radius': 'Radius',
			'sidebar/geometry/tetrahedron_geometry/detail': 'Detail',

			'sidebar/geometry/lathe_geometry/segments': 'Segments',
			'sidebar/geometry/lathe_geometry/phistart': 'Phi start (°)',
			'sidebar/geometry/lathe_geometry/philength': 'Phi length (°)',
			'sidebar/geometry/lathe_geometry/points': 'Points',

			'sidebar/geometry/plane_geometry/width': 'Width',
			'sidebar/geometry/plane_geometry/height': 'Height',
			'sidebar/geometry/plane_geometry/widthsegments': 'Width segments',
			'sidebar/geometry/plane_geometry/heightsegments': 'Height segments',

			'sidebar/geometry/ring_geometry/innerRadius': 'Inner radius',
			'sidebar/geometry/ring_geometry/outerRadius': 'Outer radius',
			'sidebar/geometry/ring_geometry/thetaSegments': 'Theta segments',
			'sidebar/geometry/ring_geometry/phiSegments': 'Phi segments',
			'sidebar/geometry/ring_geometry/thetastart': 'Theta start',
			'sidebar/geometry/ring_geometry/thetalength': 'Theta length',

			'sidebar/geometry/shape_geometry/curveSegments': 'Curve Segments',
			'sidebar/geometry/shape_geometry/extrude': 'Extrude',

			'sidebar/geometry/sphere_geometry/radius': 'Radius',
			'sidebar/geometry/sphere_geometry/widthsegments': 'Width segments',
			'sidebar/geometry/sphere_geometry/heightsegments': 'Height segments',
			'sidebar/geometry/sphere_geometry/phistart': 'Phi start',
			'sidebar/geometry/sphere_geometry/philength': 'Phi length',
			'sidebar/geometry/sphere_geometry/thetastart': 'Theta start',
			'sidebar/geometry/sphere_geometry/thetalength': 'Theta length',

			'sidebar/geometry/torus_geometry/radius': 'Radius',
			'sidebar/geometry/torus_geometry/tube': 'Tube',
			'sidebar/geometry/torus_geometry/radialsegments': 'Radial segments',
			'sidebar/geometry/torus_geometry/tubularsegments': 'Tubular segments',
			'sidebar/geometry/torus_geometry/arc': 'Arc',

			'sidebar/geometry/torusKnot_geometry/radius': 'Radius',
			'sidebar/geometry/torusKnot_geometry/tube': 'Tube',
			'sidebar/geometry/torusKnot_geometry/tubularsegments': 'Tubular segments',
			'sidebar/geometry/torusKnot_geometry/radialsegments': 'Radial segments',
			'sidebar/geometry/torusKnot_geometry/p': 'P',
			'sidebar/geometry/torusKnot_geometry/q': 'Q',

			'sidebar/geometry/tube_geometry/path': 'Path',
			'sidebar/geometry/tube_geometry/radius': 'Radius',
			'sidebar/geometry/tube_geometry/tube': 'Tube',
			'sidebar/geometry/tube_geometry/tubularsegments': 'Tubular segments',
			'sidebar/geometry/tube_geometry/radialsegments': 'Radial segments',
			'sidebar/geometry/tube_geometry/closed': 'Closed',
			'sidebar/geometry/tube_geometry/curvetype': 'Curve Type',
			'sidebar/geometry/tube_geometry/tension': 'Tension',

			'sidebar/material/new': 'New',
			'sidebar/material/copy': 'Copy',
			'sidebar/material/paste': 'Paste',
			'sidebar/material/type': 'Type',
			'sidebar/material/uuid': 'UUID',
			'sidebar/material/name': 'Name',
			'sidebar/material/program': 'Program',
			'sidebar/material/info': 'Info',
			'sidebar/material/vertex': 'Vertex',
			'sidebar/material/fragment': 'fragment',
			'sidebar/material/color': 'Color',
			'sidebar/material/depthPacking': 'Depth Packing',
			'sidebar/material/roughness': 'Roughness',
			'sidebar/material/metalness': 'Metalness',
			'sidebar/material/sheen': 'Sheen',
			'sidebar/material/emissive': 'Emissive',
			'sidebar/material/specular': 'Specular',
			'sidebar/material/shininess': 'Shininess',
			'sidebar/material/clearcoat': 'Clearcoat',
			'sidebar/material/clearcoatroughness': 'Clearcoat Roughness',
			'sidebar/material/vertexcolors': 'Vertex Colors',
			'sidebar/material/vertexcolors/no': 'No',
			'sidebar/material/vertexcolors/face': 'Face',
			'sidebar/material/vertexcolors/vertex': 'Vertex',
			'sidebar/material/skinning': 'Skinning',
			'sidebar/material/matcap': 'Matcap',
			'sidebar/material/map': 'Map',
			'sidebar/material/alphamap': 'Alpha Map',
			'sidebar/material/bumpmap': 'Bump Map',
			'sidebar/material/normalmap': 'Normal Map',
			'sidebar/material/clearcoatnormalmap': 'Clearcoat Normal Map',
			'sidebar/material/displacemap': 'Displace Map',
			'sidebar/material/roughmap': 'Rough. Map',
			'sidebar/material/metalmap': 'Metal. Map',
			'sidebar/material/specularmap': 'Specular Map',
			'sidebar/material/envmap': 'Env Map',
			'sidebar/material/lightmap': 'Light Map',
			'sidebar/material/aomap': 'AO Map',
			'sidebar/material/emissivemap': 'Emissive Map',
			'sidebar/material/gradientmap': 'Gradient Map',
			'sidebar/material/side': 'Side',
			'sidebar/material/side/front': 'Front',
			'sidebar/material/side/back': 'Back',
			'sidebar/material/side/double': 'Double',
			'sidebar/material/flatshaded': 'Flat Shaded',
			'sidebar/material/blending': 'Blending',
			'sidebar/material/blending/no': 'No',
			'sidebar/material/blending/normal': 'Normal',
			'sidebar/material/blending/additive': 'Additive',
			'sidebar/material/blending/subtractive': 'Subtractive',
			'sidebar/material/blending/multiply': 'Multiply',
			'sidebar/material/blending/custom': 'Custom',
			'sidebar/material/opacity': 'Opacity',
			'sidebar/material/transparent': 'Transparent',
			'sidebar/material/alphatest': 'Alpha Test',
			'sidebar/material/wireframe': 'Wireframe',

			'sidebar/script': 'Script',
			'sidebar/script/new': 'New',
			'sidebar/script/edit': 'Edit',
			'sidebar/script/remove': 'Remove',

			'sidebar/project': 'Project',
			'sidebar/project/title': 'Title',
			'sidebar/project/editable': 'Editable',
			'sidebar/project/vr': 'VR',
			'sidebar/project/renderer': 'Renderer',
			'sidebar/project/antialias': 'antialias',
			'sidebar/project/shadows': 'shadows',
			'sidebar/project/materials': 'Materials',

			'sidebar/settings': 'Settings',
			'sidebar/settings/language': 'Language',

			'sidebar/settings/shortcuts/translate': 'Translate',
			'sidebar/settings/shortcuts/rotate': 'Rotate',
			'sidebar/settings/shortcuts/scale': 'Scale',
			'sidebar/settings/shortcuts/undo': 'Undo',
			'sidebar/settings/shortcuts/focus': 'Focus',

			'sidebar/settings/viewport/grid': 'Grid',

			'sidebar/history': 'History',
			'sidebar/history/persistent': 'persistent',


			// feng
			'sidebar/select': 'Control',
			'sidebar/select/floor': 'Select Floor',
			'sidebar/select/addTitle': 'Add Device',
			'sidebar/select/save': 'Save',

			'message/unsave': 'Any unsaved data will be lost. Are you sure?',




			'toolbar/translate': 'Translate',
			'toolbar/rotate': 'Rotate',
			'toolbar/scale': 'Scale',
			'toolbar/local': 'Local',

			'viewport/info/objects': 'Objects',
			'viewport/info/vertices': 'Vertices',
			'viewport/info/triangles': 'Triangles'

		},

		zh: {

			'menubar/file': '文件',
			'menubar/file/new': '新建',
			'menubar/file/import': '导入',
			'menubar/file/export/geometry': '导出几何体',
			'menubar/file/export/object': '导出物体',
			'menubar/file/export/scene': '导出场景',
			'menubar/file/export/dae': '导出DAE',
			'menubar/file/export/glb': '导出GLB',
			'menubar/file/export/gltf': '导出GLTF',
			'menubar/file/export/obj': '导出OBJ',
			'menubar/file/export/stl': '导出STL',
			'menubar/file/export/stl_binary': '导出STL(二进制)',
			'menubar/file/publish': '发布',

			'menubar/edit': '编辑',
			'menubar/edit/undo': '撤销 (Ctrl+Z)',
			'menubar/edit/redo': '重做 (Ctrl+Shift+Z)',
			'menubar/edit/clear_history': '清空历史记录',
			'menubar/edit/clone': '拷贝',
			'menubar/edit/delete': '删除 (Del)',
			'menubar/edit/minify_shaders': '压缩着色器',
			'menubar/edit/fixcolormaps': '修复颜色贴图',

			'menubar/add': '添加',
			'menubar/add/group': '组',
			'menubar/add/plane': '平面',
			'menubar/add/box': '正方体',
			'menubar/add/circle': '圆',
			'menubar/add/cylinder': '圆柱体',
			'menubar/add/ring': '环',
			'menubar/add/sphere': '球体',
			'menubar/add/dodecahedron': '十二面体',
			'menubar/add/icosahedron': '二十面体',
			'menubar/add/octahedron': '八面体',
			'menubar/add/tetrahedron': '四面体',
			'menubar/add/torus': '圆环体',
			'menubar/add/torusknot': '环面纽结体',
			'menubar/add/tube': '管',
			'menubar/add/lathe': '酒杯',
			'menubar/add/sprite': '精灵',
			'menubar/add/pointlight': '点光源',
			'menubar/add/spotlight': '聚光灯',
			'menubar/add/directionallight': '平行光',
			'menubar/add/hemispherelight': '半球光',
			'menubar/add/ambientlight': '环境光',
			'menubar/add/perspectivecamera': '透视相机',
			'menubar/add/orthographiccamera': '正交相机',

			'menubar/status/autosave': '自动保存',

			'menubar/play': '启动',
			'menubar/play/stop': '暂停',
			'menubar/play/play': '启动',

			'menubar/examples': '示例',
			'menubar/examples/Arkanoid': '打砖块',
			'menubar/examples/Camera': ' 摄像机',
			'menubar/examples/Particles': '粒子',
			'menubar/examples/Pong': '乒乓球',
			'menubar/examples/Shaders': '着色器',

			'menubar/help': '帮助',
			'menubar/help/source_code': '源码',
			'menubar/help/about': '关于',

			'sidebar/scene': '场景',
			'sidebar/scene/background': '背景',
			'sidebar/scene/fog': '雾',

			'sidebar/properties/object': '属性',
			'sidebar/properties/geometry': '几何组件',
			'sidebar/properties/material': '材质组件',
			'sidebar/properties/script': '脚本',

			'sidebar/object/type': '类型',
			'sidebar/object/new': '更新',
			'sidebar/object/uuid': '识别码',
			'sidebar/object/name': '名称',
			'sidebar/object/position': '位置',
			'sidebar/object/rotation': '旋转',
			'sidebar/object/scale': '缩放',
			'sidebar/object/fov': '视角',
			'sidebar/object/left': '左',
			'sidebar/object/right': '右',
			'sidebar/object/top': '上',
			'sidebar/object/bottom': '下',
			'sidebar/object/near': '近点',
			'sidebar/object/far': '远点',
			'sidebar/object/intensity': '强度',
			'sidebar/object/color': '颜色',
			'sidebar/object/groundcolor': '基色',
			'sidebar/object/distance': '距离',
			'sidebar/object/angle': '角度',
			'sidebar/object/penumbra': '边缘',
			'sidebar/object/decay': '衰减',
			'sidebar/object/shadow': '阴影',
			'sidebar/object/cast': '产生',
			'sidebar/object/receive': '接受',
			'sidebar/object/visible': '可见性',
			'sidebar/object/frustumcull': '视锥体裁剪',
			'sidebar/object/renderorder': '渲染次序',
			'sidebar/object/userdata': '自定义数据',

			'sidebar/object/reset': '重置',

			'sidebar/geometry/type': '类型',
			'sidebar/geometry/new': '更新',
			'sidebar/geometry/uuid': '识别码',
			'sidebar/geometry/name': '名称',
			'sidebar/geometry/bounds': '界限',

			'sidebar/geometry/box_geometry/width': '宽度',
			'sidebar/geometry/box_geometry/height': '高度',
			'sidebar/geometry/box_geometry/depth': '深度',
			'sidebar/geometry/box_geometry/widthseg': '宽度分段',
			'sidebar/geometry/box_geometry/heightseg': '高度分段',
			'sidebar/geometry/box_geometry/depthseg': '深度分段',

			'sidebar/geometry/buffer_geometry/attributes': '属性',
			'sidebar/geometry/buffer_geometry/index': '索引',

			'sidebar/geometry/circle_geometry/radius': '半径',
			'sidebar/geometry/circle_geometry/segments': '分段',
			'sidebar/geometry/circle_geometry/thetastart': '弧度起点',
			'sidebar/geometry/circle_geometry/thetalength': '弧度长度',

			'sidebar/geometry/cylinder_geometry/radiustop': '顶部半径',
			'sidebar/geometry/cylinder_geometry/radiusbottom': '底部半径',
			'sidebar/geometry/cylinder_geometry/height': '高度',
			'sidebar/geometry/cylinder_geometry/radialsegments': '径向分段',
			'sidebar/geometry/cylinder_geometry/heightsegments': '高度分段',
			'sidebar/geometry/cylinder_geometry/openended': '开端',

			'sidebar/geometry/geometry/vertices': '顶点',
			'sidebar/geometry/geometry/faces': '面',

			'sidebar/geometry/dodecahedron_geometry/radius': '半径',
			'sidebar/geometry/dodecahedron_geometry/detail': '面片分段',

			'sidebar/geometry/icosahedron_geometry/radius': '半径',
			'sidebar/geometry/icosahedron_geometry/detail': '面片分段',

			'sidebar/geometry/octahedron_geometry/radius': '半径',
			'sidebar/geometry/octahedron_geometry/detail': '面片分段',

			'sidebar/geometry/tetrahedron_geometry/radius': '半径',
			'sidebar/geometry/tetrahedron_geometry/detail': '面片分段',

			'sidebar/geometry/lathe_geometry/segments': '分段',
			'sidebar/geometry/lathe_geometry/phistart': '经度起点',
			'sidebar/geometry/lathe_geometry/philength': '经度长度',
			'sidebar/geometry/lathe_geometry/points': '点',

			'sidebar/geometry/plane_geometry/width': '宽度',
			'sidebar/geometry/plane_geometry/height': '长度',
			'sidebar/geometry/plane_geometry/widthsegments': '宽度分段',
			'sidebar/geometry/plane_geometry/heightsegments': '长度分段',

			'sidebar/geometry/ring_geometry/innerRadius': '内半径',
			'sidebar/geometry/ring_geometry/outerRadius': '外半径',
			'sidebar/geometry/ring_geometry/thetaSegments': '弧度分段',
			'sidebar/geometry/ring_geometry/phiSegments': '经度分段',
			'sidebar/geometry/ring_geometry/thetastart': '弧度起点',
			'sidebar/geometry/ring_geometry/thetalength': '弧度长度',

			'sidebar/geometry/sphere_geometry/radius': '半径',
			'sidebar/geometry/sphere_geometry/widthsegments': '宽度分段',
			'sidebar/geometry/sphere_geometry/heightsegments': '长度分段',
			'sidebar/geometry/sphere_geometry/phistart': '经度起点',
			'sidebar/geometry/sphere_geometry/philength': '经度长度',
			'sidebar/geometry/sphere_geometry/thetastart': '纬度起点',
			'sidebar/geometry/sphere_geometry/thetalength': '纬度长度',

			'sidebar/geometry/torus_geometry/radius': '半径',
			'sidebar/geometry/torus_geometry/tube': '管厚',
			'sidebar/geometry/torus_geometry/radialsegments': '半径分段',
			'sidebar/geometry/torus_geometry/tubularsegments': '管厚分段',
			'sidebar/geometry/torus_geometry/arc': '弧度',

			'sidebar/geometry/torusKnot_geometry/radius': '半径',
			'sidebar/geometry/torusKnot_geometry/tube': '管厚',
			'sidebar/geometry/torusKnot_geometry/tubularsegments': '管厚分段',
			'sidebar/geometry/torusKnot_geometry/radialsegments': '半径分段',
			'sidebar/geometry/torusKnot_geometry/p': '管长弧度',
			'sidebar/geometry/torusKnot_geometry/q': '扭曲弧度',

			'sidebar/material/new': '更新',
			'sidebar/material/copy': '复制',
			'sidebar/material/paste': '粘贴',
			'sidebar/material/type': '类型',
			'sidebar/material/uuid': '识别码',
			'sidebar/material/name': '名称',
			'sidebar/material/program': '程序',
			'sidebar/material/info': '信息',
			'sidebar/material/vertex': '顶点',
			'sidebar/material/fragment': '片元',
			'sidebar/material/color': '颜色',
			'sidebar/material/roughness': '粗糙度',
			'sidebar/material/metalness': '金属度',
			'sidebar/material/emissive': '自发光',
			'sidebar/material/specular': '高光',
			'sidebar/material/shininess': '高光大小',
			'sidebar/material/clearcoat': '透明贴图',
			'sidebar/material/clearcoatroughness': '透明贴图粗糙度',
			'sidebar/material/vertexcolors': '顶点颜色',
			'sidebar/material/vertexcolors/no': '无',
			'sidebar/material/vertexcolors/face': '面',
			'sidebar/material/vertexcolors/vertex': '顶点',
			'sidebar/material/skinning': '皮肤',
			'sidebar/material/map': '贴图',
			'sidebar/material/alphamap': '透明贴图',
			'sidebar/material/bumpmap': '凹凸贴图',
			'sidebar/material/normalmap': '法线贴图',
			'sidebar/material/clearcoatnormalmap': 'Clearcoat Normal Map',
			'sidebar/material/displacemap': '置换贴图',
			'sidebar/material/roughmap': '粗糙贴图',
			'sidebar/material/metalmap': '金属贴图',
			'sidebar/material/specularmap': '高光贴图',
			'sidebar/material/envmap': '环境贴图',
			'sidebar/material/lightmap': '光照贴图',
			'sidebar/material/aomap': '环境光遮蔽贴图',
			'sidebar/material/emissivemap': '自发光贴图',
			'sidebar/material/side': '面',
			'sidebar/material/side/front': '正面',
			'sidebar/material/side/back': '背面',
			'sidebar/material/side/double': '双面',
			'sidebar/material/flatshaded': '平面着色',
			'sidebar/material/blending': '混合',
			'sidebar/material/blending/no': '无',
			'sidebar/material/blending/normal': '正常混合',
			'sidebar/material/blending/additive': '和混合',
			'sidebar/material/blending/subtractive': '差混合',
			'sidebar/material/blending/multiply': '积混合',
			'sidebar/material/blending/custom': '自定义混合',
			'sidebar/material/opacity': '透明度',
			'sidebar/material/transparent': '透明性',
			'sidebar/material/alphatest': 'α测试',
			'sidebar/material/wireframe': '线框',

			'sidebar/script': '脚本',
			'sidebar/script/new': '新建',
			'sidebar/script/edit': '编辑',
			'sidebar/script/remove': '删除',

			'sidebar/project': '项目',
			'sidebar/project/title': '标题',
			'sidebar/project/editable': '编辑性',
			'sidebar/project/vr': '虚拟现实',
			'sidebar/project/renderer': '渲染器',
			'sidebar/project/antialias': '抗锯齿',
			'sidebar/project/shadows': '阴影',
			'sidebar/project/materials': 'Materials',



			'sidebar/settings': '设置',
			'sidebar/settings/language': '语言',

			'sidebar/settings/shortcuts/translate': '移动',
			'sidebar/settings/shortcuts/rotate': '旋转',
			'sidebar/settings/shortcuts/scale': '缩放',
			'sidebar/settings/shortcuts/undo': '撤销',
			'sidebar/settings/shortcuts/focus': '聚焦',

			'sidebar/settings/viewport/grid': '网格',

			'sidebar/history': '历史记录',
			'sidebar/history/persistent': '本地存储',

			// feng
			'sidebar/select': '操作',
			'sidebar/select/floor': '楼层',
			'sidebar/select/addTitle': '添加设备',
			'sidebar/select/save': '保存',

			'message/unsave': '没有保存的数据将会丢失,确认吗?',


			'toolbar/translate': '移动',
			'toolbar/rotate': '旋转',
			'toolbar/scale': '缩放',
			'toolbar/local': '本地',

			'viewport/info/objects': '物体',
			'viewport/info/vertices': '顶点',
			'viewport/info/triangles': '三角形'

		}

	};

	return {

		getKey: function (key) {

			// return values[language][key] || '???';
			var value = values[language][key]

			if (!value) {
				var other = language === 'en' ? 'zh' : 'en'
				return values[other][key] || '???'
			} else {
				return value
			}

		}

	};

};
