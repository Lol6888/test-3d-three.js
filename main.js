// Khởi tạo các yếu tố cơ bản của Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Thêm ánh sáng vào cảnh
const light = new THREE.AmbientLight(0x404040);
scene.add(light);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 1, 0).normalize();
scene.add(directionalLight);

// Thêm OrbitControls để người dùng có thể xoay và di chuyển camera
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Tải mô hình GLB
const loader = new THREE.GLTFLoader();
loader.load('model/church+WEI.glb', function (gltf) {
    scene.add(gltf.scene);
    animate();
}, undefined, function (error) {
    console.error(error);
});

// Đặt vị trí của camera
camera.position.z = 5;

// Hàm animate để cập nhật và render cảnh
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
