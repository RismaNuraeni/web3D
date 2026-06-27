<?= $this->include('layout/header') ?>

<!-- <div id="loader">

    <h1>EcoVillage</h1>

    <p>Loading 3D World...</p>

</div> -->

<div id="infoPanel">

    <h3 id="objTitle"></h3>

    <p id="objDesc"></p>

</div>

<div id="progress"></div>

<nav>



    <div class="logo">

        EcoVillage

    </div>

    <ul>

        <li><a href="#home">Home</a></li>

        <li><a href="#about">About</a></li>

        <li><a href="#explore">Explore</a></li>

        <li><a href="#gallery">Gallery</a></li>

        <li><a href="#contact">Contact</a></li>

        <button id="themeBtn" class="theme-btn">

            🌙 Night

        </button>

    </ul>

</nav>

<section id="home">

    <div class="hero">

        <div class="hero-text">

            <h1>
                EcoVillage
            </h1>

            <p>

                Experience a sustainable village
                through immersive 3D technology.

            </p>

            <a href="#explore"
                class="btn">

                Explore Village

            </a>

        </div>

        <div id="canvas-container">

        </div>

    </div>

</section>

<section id="about">

    <div class="container">

        <h2>

            About EcoVillage

        </h2>

        <p>

            EcoVillage adalah website edukasi berbasis
            3D yang memperkenalkan konsep desa ramah
            lingkungan.

        </p>

    </div>

</section>

<section id="explore">

    <div class="container">

        <h2>

            Explore

        </h2>

        <div class="cards">

            <div class="card">

                🏡

                <h3>Village</h3>

                <p>

                    Traditional eco houses.

                </p>

            </div>

            <div class="card">

                🌲

                <h3>Forest</h3>

                <p>

                    Healthy green ecosystem.

                </p>

            </div>

            <div class="card">

                🏔

                <h3>Mountain</h3>

                <p>

                    Fresh water source.

                </p>

            </div>

        </div>

    </div>

</section>

<section id="gallery">

    <div class="container">

        <h2>Gallery</h2>

        <div class="gallery">

            <img src="<?= base_url('images/gallery1.jpg') ?>">

            <img src="<?= base_url('images/gallery2.jpg') ?>">

            <img src="<?= base_url('images/gallery3.jpg') ?>">

        </div>

    </div>

</section>

<section id="contact">

    <h2>

        Contact

    </h2>

    <form>

        <input
            type="text"
            placeholder="Name">

        <input
            type="email"
            placeholder="Email">

        <textarea
            placeholder="Message">

</textarea>

        <button>

            Send

        </button>

    </form>

</section>

<footer>

    <p>

        © 2026 EcoVillage

    </p>

</footer>

<?= $this->include('layout/footer') ?>