<?= $this->include('layout/header') ?>

<!-- ═══════════════════════════════════════════
     PROGRESS BAR
═══════════════════════════════════════════ -->
<div id="progress-bar" aria-hidden="true"></div>

<!-- ═══════════════════════════════════════════
     LOADING SCREEN
═══════════════════════════════════════════ -->
<div id="loader" aria-live="polite">
    <div class="loader__inner">
        <span class="loader__title">EcoVillage</span>
        <div class="loader__track">
            <div id="loading-bar"></div>
        </div>
        <span class="loader__label">Loading 3D World...</span>
    </div>
</div>

<!-- ═══════════════════════════════════════════
     NAVIGATION
═══════════════════════════════════════════ -->
<nav id="navbar" aria-label="Main navigation">
    <div class="nav__logo">EcoVillage</div>

    <!-- Hamburger (mobile) -->
    <button id="menuBtn" class="nav__hamburger" aria-label="Open menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
    </button>

    <ul class="nav__links" id="navLinks" role="list">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#explore">Explore</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>

    <button id="themeBtn" class="nav__theme-btn" aria-label="Toggle night mode">
        🌙 Night
    </button>
</nav>

<!-- ═══════════════════════════════════════════
     HERO
═══════════════════════════════════════════ -->
<section id="home" aria-label="Hero">
    <div class="hero">
        <div class="hero-text">
            <span class="hero__eyebrow">Welcome to the future of living</span>
            <h1>EcoVillage</h1>
            <p>Experience a sustainable village through immersive 3D technology.</p>
            <div class="hero__actions">
                <a href="#explore" class="btn btn--primary">Explore Village</a>
                <a href="#about" class="btn btn--ghost">Learn More</a>
            </div>
        </div>

        <div id="canvas-container" aria-label="Interactive 3D village scene">
            <div id="drag-hint" aria-hidden="true">
                <span>🖱 Drag to rotate</span>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════
     ABOUT
═══════════════════════════════════════════ -->
<section id="about" aria-labelledby="about-heading">
    <div class="container">
        <span class="section__eyebrow">Who we are</span>
        <h2 id="about-heading">About EcoVillage</h2>
        <p class="section__lead">
            EcoVillage adalah platform edukasi berbasis 3D yang memperkenalkan
            konsep desa ramah lingkungan — menggabungkan teknologi modern dengan
            nilai-nilai keberlanjutan.
        </p>

        <div class="about__stats">
            <div class="stat">
                <span class="stat__number">3D</span>
                <span class="stat__label">Interactive World</span>
            </div>
            <div class="stat">
                <span class="stat__number">100%</span>
                <span class="stat__label">Eco Friendly Concept</span>
            </div>
            <div class="stat">
                <span class="stat__number">∞</span>
                <span class="stat__label">Educational Value</span>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════
     EXPLORE
═══════════════════════════════════════════ -->
<section id="explore" aria-labelledby="explore-heading">
    <div class="container">
        <span class="section__eyebrow">Discover the village</span>
        <h2 id="explore-heading">Explore</h2>

        <div class="cards" role="list">
            <div class="card" role="listitem">
                <div class="card__icon" aria-hidden="true">🏡</div>
                <h3>Village</h3>
                <p>Traditional eco houses built in harmony with nature.</p>
            </div>
            <div class="card" role="listitem">
                <div class="card__icon" aria-hidden="true">🌲</div>
                <h3>Forest</h3>
                <p>A healthy green ecosystem that breathes life into the land.</p>
            </div>
            <div class="card" role="listitem">
                <div class="card__icon" aria-hidden="true">🏔</div>
                <h3>Mountain</h3>
                <p>Natural fresh water source for the entire community.</p>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════
     GALLERY
═══════════════════════════════════════════ -->
<section id="gallery" aria-labelledby="gallery-heading">
    <div class="container">
        <span class="section__eyebrow">Visual showcase</span>
        <h2 id="gallery-heading">Gallery</h2>

        <div class="gallery" role="list">
            <figure class="gallery__item" role="listitem">
                <img src="<?= base_url('images/gallery1.jpg') ?>" alt="EcoVillage view 1" loading="lazy">
            </figure>
            <figure class="gallery__item" role="listitem">
                <img src="<?= base_url('images/gallery2.jpg') ?>" alt="EcoVillage view 2" loading="lazy">
            </figure>
            <figure class="gallery__item" role="listitem">
                <img src="<?= base_url('images/gallery3.jpg') ?>" alt="EcoVillage view 3" loading="lazy">
            </figure>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════
     CONTACT
═══════════════════════════════════════════ -->
<section id="contact" aria-labelledby="contact-heading">
    <div class="container">
        <span class="section__eyebrow">Get in touch</span>
        <h2 id="contact-heading">Contact</h2>
        <p class="section__lead">Punya pertanyaan atau ingin berkolaborasi? Kirim pesan ke kami.</p>

        <form class="contact__form" id="contactForm" novalidate>
            <div class="form__group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" autocomplete="name" required>
            </div>

            <div class="form__group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" autocomplete="email" required>
            </div>

            <div class="form__group">
                <label for="message">Message</label>
                <textarea id="message" name="message" placeholder="Write your message here..." rows="5" required></textarea>
            </div>

            <button type="submit" class="btn btn--primary btn--full">Send Message</button>
        </form>
    </div>
</section>

<!-- ═══════════════════════════════════════════
     FOOTER
═══════════════════════════════════════════ -->
<footer>
    <div class="container">
        <div class="footer__inner">
            <span class="footer__logo">EcoVillage</span>
            <p>© 2026 EcoVillage. Built for a sustainable future.</p>
            <nav aria-label="Footer navigation">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    </div>
</footer>

<?= $this->include('layout/footer') ?>