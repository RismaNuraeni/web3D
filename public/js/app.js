import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.165/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.165/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.165/examples/jsm/loaders/GLTFLoader.js';

// ─── Scene Setup ─────────────────────────────────────────────────────────────

const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();
scene.background = new THREE.Color('#dff8ff');

const camera = new THREE.PerspectiveCamera(
  45,
  container.clientWidth / container.clientHeight,
  0.1,
  1000
);
camera.position.set(0, 2, 8);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.shadowMap.enabled = true;
container.appendChild(renderer.domElement);

// ─── Lighting ────────────────────────────────────────────────────────────────

const ambient = new THREE.AmbientLight(0xffffff, 2);
scene.add(ambient);

const directional = new THREE.DirectionalLight(0xffffff, 3);
directional.position.set(8, 10, 5);
directional.castShadow = true;
scene.add(directional);

const hemisphere = new THREE.HemisphereLight(0xb1e1ff, 0x2e7d32, 1);
scene.add(hemisphere);

// ─── Ground ──────────────────────────────────────────────────────────────────

const ground = new THREE.Mesh(
  new THREE.CircleGeometry(30, 64),
  new THREE.MeshStandardMaterial({ color: 0xd7f4d2 })
);
ground.rotation.x = -Math.PI / 2;
ground.position.y = -1.3;
ground.receiveShadow = true;
scene.add(ground);

// ─── Model ───────────────────────────────────────────────────────────────────

let village;
const loader = new GLTFLoader();
loader.load(
  'assets/models/ecovillage.glb',
  (gltf) => {
    village = gltf.scene;
    village.scale.set(1.5, 1.5, 1.5);
    village.position.y = 0;
    scene.add(village);

    // Sembunyikan loader setelah model selesai dimuat
    const loaderEl = document.getElementById('loader');
    if (loaderEl) loaderEl.classList.add('hidden');
  },
  (xhr) => {
    // Update progress bar loading
    if (xhr.lengthComputable) {
      const pct = (xhr.loaded / xhr.total * 100).toFixed(0);
      const bar = document.getElementById('loading-bar');
      if (bar) bar.style.width = pct + '%';
    }
  },
  (err) => {
    console.error(err);
    // Tetap sembunyikan loader walau error, biar halaman tidak stuck
    const loaderEl = document.getElementById('loader');
    if (loaderEl) loaderEl.classList.add('hidden');
  }
);

// ─── Controls ────────────────────────────────────────────────────────────────

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enableZoom = false;
controls.enablePan = false;
controls.maxPolarAngle = Math.PI / 2;
controls.minPolarAngle = Math.PI / 3;

// ─── Clouds ──────────────────────────────────────────────────────────────────

const clouds = [];
for (let i = 0; i < 10; i++) {
  const cloud = new THREE.Mesh(
    new THREE.SphereGeometry(0.3 + Math.random() * 0.4, 20, 20),
    new THREE.MeshStandardMaterial({ color: 0xffffff })
  );
  cloud.position.set(
    (Math.random() - 0.5) * 15,
    2 + Math.random() * 4,
    (Math.random() - 0.5) * 15
  );
  scene.add(cloud);
  clouds.push(cloud);
}

// ─── Fireflies ───────────────────────────────────────────────────────────────

const fireflies = [];
for (let i = 0; i < 80; i++) {
  const fly = new THREE.Mesh(
    new THREE.SphereGeometry(0.03),
    new THREE.MeshBasicMaterial({ color: 0xffff66 })
  );
  fly.position.set(
    (Math.random() - 0.5) * 10,
    Math.random() * 3,
    (Math.random() - 0.5) * 10
  );
  // Simpan posisi Y awal supaya bobbing tidak naik terus
  fly.userData.baseY = fly.position.y;
  scene.add(fly);
  fireflies.push(fly);
}

// ─── Mouse Tracking ──────────────────────────────────────────────────────────

let mouseX = 0;
document.addEventListener('mousemove', (e) => {
  mouseX = (e.clientX / window.innerWidth) - 0.5;
});

// ─── Scroll Effects ──────────────────────────────────────────────────────────

window.addEventListener('scroll', () => {
  const scroll = window.scrollY;

  // Camera zoom with scroll
  camera.position.z = 8 + scroll * 0.002;
  camera.position.y = 2 + scroll * 0.0008;

  // Navbar scrolled class
  document.getElementById('navbar')?.classList.toggle('scrolled', scroll > 80);

  // Progress bar
  const total = document.body.scrollHeight - window.innerHeight;
  const progress = (scroll / total) * 100;
  document.getElementById('progress-bar').style.width = progress + '%';
});

// ─── Smooth Nav Links ────────────────────────────────────────────────────────

document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// ─── Day / Night Toggle ──────────────────────────────────────────────────────

let darkMode = false;
const btn = document.getElementById('themeBtn');
btn.addEventListener('click', () => {
  darkMode = !darkMode;
  document.body.classList.toggle('dark', darkMode);
  if (darkMode) {
    scene.background = new THREE.Color('#07141f');
    ambient.intensity = 0.5;
    directional.intensity = 0.7;
    btn.innerHTML = '☀ Day';
  } else {
    scene.background = new THREE.Color('#dff8ff');
    ambient.intensity = 2;
    directional.intensity = 3;
    btn.innerHTML = '🌙 Night';
  }
});

// ─── Hamburger Menu (mobile) ─────────────────────────────────────────────────

const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuBtn.classList.toggle('open', isOpen);
  menuBtn.setAttribute('aria-expanded', isOpen);
});

// Tutup menu kalau klik link
navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuBtn?.classList.remove('open');
    menuBtn?.setAttribute('aria-expanded', 'false');
  });
});

// ─── Active Nav Link on Scroll ───────────────────────────────────────────────

const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav__links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navAnchors.forEach((a) => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach((s) => sectionObserver.observe(s));

// ─── Drag Hint (hilang setelah 3 detik atau saat user mulai drag) ─────────────

const dragHint = document.getElementById('drag-hint');
if (dragHint) {
  setTimeout(() => dragHint.classList.add('hidden'), 3000);
  renderer.domElement.addEventListener('pointerdown', () => {
    dragHint.classList.add('hidden');
  }, { once: true });
}

// ─── GSAP Animations ─────────────────────────────────────────────────────────

gsap.from('.hero-text', { opacity: 0, y: 100, duration: 1.5 });

gsap.utils.toArray('.card').forEach((card) => {
  gsap.from(card, { scrollTrigger: card, opacity: 0, y: 80, duration: 1 });
});

gsap.from('.gallery img', {
  scrollTrigger: '.gallery',
  opacity: 0,
  scale: 0.8,
  stagger: 0.2,
  duration: 1,
});

// ─── Animation Loop ──────────────────────────────────────────────────────────

const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);

  const elapsed = clock.getElapsedTime();

  // Village float + slow rotation
  if (village) {
    village.position.y = Math.sin(elapsed) * 0.15;
    village.rotation.y += 0.002;
  }

  // Cloud drift
  clouds.forEach((c) => {
    c.position.x += 0.002;
    if (c.position.x > 8) c.position.x = -8;
  });

  // Firefly bobbing (pakai baseY supaya tidak naik terus)
  fireflies.forEach((f, i) => {
    f.position.y = f.userData.baseY + Math.sin(elapsed + i) * 0.3;
  });

  // Mouse parallax on camera
  camera.position.x += (mouseX * 2 - camera.position.x) * 0.03;
  camera.lookAt(scene.position);

  controls.update();
  renderer.render(scene, camera);
}

animate();

// ─── Resize Handler ──────────────────────────────────────────────────────────

window.addEventListener('resize', () => {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
});