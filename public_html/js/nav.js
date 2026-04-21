const createNav = () =>{
    let navbar = document.querySelector('.nav-block');

    navbar.innerHTML=`
        

                <div class="brand-logo">
                    <a href="#inicio">
                        <img src="img/icons/icon.png" alt="brand-Logo-abystract">
                    </a>
                </div>

                <nav class="nav-bar">

                    <ul class="nav-items">
                        <li class="item"> <a class="link-item" href="#inicio"> Início</a></li>
                        <li class="item"> <a class="link-item" href="#sobre"> Sobre </a></li>
                        <li class="item"> <a class="link-item" href="#servicos"> Serviços </a></li>
                        <li class="item"> <a class="link-item" href="#projetos"> Projetos </a></li>
                        <li class="item"> <a class="link-item" href="#contato"> Contato </a></li>
                    </ul>
                    

                    <div class="menu">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                </nav>

                <div class="social-icons-block">

                    <div class="social-icons">
                        <div class="border">
                            <a href="https://www.instagram.com/_abystract/">
                                <img class="instagram-icon" src="img/icons/instagram-social.png" alt="Instagram icone">
                            </a>
                        </div>
                    </div>

                    <div class="social-icons">
                        <div class="border">
                            <a href="https://www.linkedin.com/company/abystract-digital-solutions/">
                                <img class="linkedin-icon" src="img/icons/Logo-linkedIn.png" alt="LinkedIn icone">
                            </a>
                        </div>
                    </div>
                </div>
    `;
}
    createNav();