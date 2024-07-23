import "./Navbar.css";

function Appbar({ about }) {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <div class="dropdown">
                <a
                  data-mdb-button-init
                  data-mdb-ripple-init
                  data-mdb-dropdown-init
                  class="nav-link dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Link
                </a>
                <ul
                  class="dropdown-menu mx-auto"
                  style={{ width: "100%" }}
                   aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <div class="dropdown">
                <a
                  data-mdb-button-init
                  data-mdb-ripple-init
                  data-mdb-dropdown-init
                  class="nav-link dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li class="nav-item">
              <div class="dropdown">
                <a
                  data-mdb-button-init
                  data-mdb-ripple-init
                  data-mdb-dropdown-init
                  class="nav-link dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Appbar;
