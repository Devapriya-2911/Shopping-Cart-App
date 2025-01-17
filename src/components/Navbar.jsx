import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <nav class="navbar bg-body-tertiary">
                        <div class="container">
                            <a class="navbar-brand" href="#">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoGzOl5wpyz22ZNvhu8GGoRbR_R2i2czuraw&s" alt="Bootstrap" width="30" height="24" />
                            </a>
                        </div>
                    </nav>
                    <a class="navbar-brand" href="#">Fake store</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/">ADD</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/search">SEARCH</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/view">VIEW</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>


    )
}

export default Navbar