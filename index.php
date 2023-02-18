<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/4a077ed16e.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/dark-mode.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/animacoes2.css">
    <link rel="stylesheet" href="css/style-phone.css">
    <link rel="stylesheet" href="css/anim-phone.css">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>

    <script src="js/func-nightMode.js"></script>

    <title>Portfólio</title>

</head>

<?php include("menu.html"); ?>

<div id="menu"></div>

<script src="js/funcs-idioma.js"></script>

<body onload="idiomaSetado('1')">

    <div class="contentHome">

        <header class="container-header">

            <div class="languages">

                <div style="margin-right: 1080px;">
                    <a onclick="mode();"><i id="mode" class="" style="font-size: 30pt;"></i></a>
                </div>


                <div class="icon BR">
                    <div class="tooltip BR">Português</div>
                    <span> <a onclick="Idioma('BR', '1')"> <img src="img/Brasil.jpg" alt=""></a> </span>
                </div>

                <div class="icon USA">
                    <div class="tooltip USA">English</div>
                    <span onclick="Idioma('EN', '1')"> <a> <img src="img/EUA.png" alt=""></a> </span>
                </div>
            </div>

            <div class="infos">
                <h1> Gustavo Santos</h1>
                <h2> Desenvolvedor Júnior</h2>
                <h6 style="text-transform: uppercase"> <i class="fa-solid fa-location-dot"></i> Rio de Janeiro -
                    Brasil
                </h6>
                <h6> <i class="fa-solid fa-phone"></i> (21)99235-1782
                    <i style="margin-right: 10px; margin-left: 10px;"
                        class="fa-solid fa-envelope"></i>santos.gustavo.of@gmail.com
                </h6>
            </div>

            <div class="Social">
                <a href="https://www.linkedin.com/in/gustavo-santos-993436218/">
                    <i class="fa-brands fa-linkedin"></i> LinkedIn
                </a>

                <a href="https://github.com/GustavoOlSantos">
                    <i class="fa-brands fa-github"></i> Github
                </a>

            </div>


        </header>
    </div>

</body>

</html>