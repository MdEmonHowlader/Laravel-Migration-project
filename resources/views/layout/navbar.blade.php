
<nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar" style="

    z-index: 1100;
    width: 100%;
    position: fixed;
">
    <div class="container">
        <a class="navbar-brand" href="{{ url('/') }}"><span class="flaticon-pawprint-1 mr-2"></span>Petdog</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
            aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="fa fa-bars"></span> Menu
        </button>
        <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item"><a href="{{ url('/') }}" class="nav-link">Home</a></li>
                <li class="nav-item"><a href="{{ url('/about') }}" class="nav-link">About</a></li>
                <li class="nav-item"><a href="{{ url('/vet') }}" class="nav-link">Veterinarian</a></li>
                <li class="nav-item"><a href="{{ url('/service') }}" class="nav-link">Services</a></li>
                <li class="nav-item"><a href="{{ url('/gallery') }}" class="nav-link">Gallery</a></li>
                <li class="nav-item"><a href="{{ url('/pricing') }}" class="nav-link">Pricing</a></li>
                <li class="nav-item"><a href="{{ url('/blog') }}" class="nav-link">Blog</a></li>
                <li class="nav-item"><a href="{{ url('/contact') }}" class="nav-link">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>
