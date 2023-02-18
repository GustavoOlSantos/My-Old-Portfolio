function idiomaSetado(page) {

    const idioma = localStorage.getItem('idioma');

    if (!idioma) {
        localStorage.setItem('idioma', 'BR')
    }

    else if (idioma == 'BR') {
        switch (page) {

            case "1":

                localStorage.setItem('idioma', 'BR')
                $.ajax({

                    method: 'post',
                    dataType: 'html',
                    url: 'AjaxIdioma/home/homeBR.html',
                    data: 'idioma=' + idioma,
                    success: function (data) {
                        $('.contentHome').html(data);
                    }

                }); break;

            case "2":

                localStorage.setItem('idioma', 'BR')

                $.ajax({

                    method: 'post',
                    dataType: 'html',
                    url: 'AjaxIdioma/me/sobremimBR.html',
                    data: 'idioma=' + idioma,
                    success: function (data) {
                        $('.contentAll').html(data);
                    }

                }); break;

            case "3":

                $.ajax({

                    method: 'post',
                    dataType: 'html',
                    url: 'AjaxIdioma/projetos/projetosBR.html',
                    data: 'idioma=' + idioma,
                    success: function (data) {
                        $('.contentAll').html(data);
                    }

                }); break;
        }
    }

    else if (idioma == 'EN') {

        switch (page) {

            case "1":

                localStorage.setItem('idioma', 'EN')
                $.ajax({

                    method: 'post',
                    dataType: 'html',
                    url: 'AjaxIdioma/home/homeEN.html',
                    data: 'idioma=' + idioma,
                    success: function (data) {
                        $('.contentHome').html(data);
                    }

                }); break;

            case "2":

                localStorage.setItem('idioma', 'EN')

                $.ajax({

                    method: 'post',
                    dataType: 'html',
                    url: 'AjaxIdioma/me/sobremimEN.html',
                    data: 'idioma=' + idioma,
                    success: function (data) {
                        $('.contentAll').html(data);
                    }

                }); break;

            case "3":

                localStorage.setItem('idioma', 'EN')

                $.ajax({

                    method: 'post',
                    dataType: 'html',
                    url: 'AjaxIdioma/projetos/projetosEN.html',
                    data: 'idioma=' + idioma,
                    success: function (data) {
                        $('.contentAll').html(data);
                    }

                }); break;
        }
    }

}


function Idioma(idioma, page) {

    //Se a página for a Home
    if (page == 1) {

        if (idioma == "BR") {
            localStorage.setItem('idioma', 'BR')

            $.ajax({

                method: 'post',
                dataType: 'html',
                url: 'AjaxIdioma/home/homeBR.html',
                data: 'idioma=' + idioma,
                success: function (data) {
                    $('.contentHome').html(data);
                }

            });
        }

        else if (idioma == "EN") {
            localStorage.setItem('idioma', 'EN')

            $.ajax({

                method: 'post',
                dataType: 'html',
                url: 'AjaxIdioma/home/homeEN.html',
                data: 'idioma=' + idioma,
                success: function (data) {
                    $('.contentHome').html(data);
                }

            });
        }
    }

    else if (page == 2) {

        if (idioma == "BR") {
            localStorage.setItem('idioma', 'BR')

            $.ajax({

                method: 'post',
                dataType: 'html',
                url: 'AjaxIdioma/me/sobremimBR.html',
                data: 'idioma=' + idioma,
                success: function (data) {
                    $('.contentAll').html(data);
                }

            });
        }

        else if (idioma == "EN") {
            localStorage.setItem('idioma', 'EN')

            $.ajax({

                method: 'post',
                dataType: 'html',
                url: 'AjaxIdioma/me/sobremimEN.html',
                data: 'idioma=' + idioma,
                success: function (data) {
                    $('.contentAll').html(data);
                }

            });
        }

    }

    else if (page == 3) {

        if (idioma == "BR") {
            localStorage.setItem('idioma', 'BR')

            $.ajax({

                method: 'post',
                dataType: 'html',
                url: 'AjaxIdioma/projetos/projetosBR.html',
                data: 'idioma=' + idioma,
                success: function (data) {
                    $('.contentAll').html(data);
                }

            });
        }

        else if (idioma == "EN") {
            localStorage.setItem('idioma', 'EN')

            $.ajax({

                method: 'post',
                dataType: 'html',
                url: 'AjaxIdioma/projetos/projetosEN.html',
                data: 'idioma=' + idioma,
                success: function (data) {
                    $('.contentAll').html(data);
                }

            });
        }

    }




    // DEPOIS DE ATUALIZAR O IDIOMA DA PÁGINA, ALTERA O IDIOMA DO MENU

    if (!idioma) {
        localStorage.setItem('idioma', 'BR')

    } else if (idioma == 'BR') {
        $.ajax({

            method: 'post',
            dataType: 'html',
            url: 'AjaxIdioma/menu/menuBR.html',
            data: 'idioma=' + idioma,
            success: function (data) {
                $('.sidebar').html(data);
            }

        });
    } else if (idioma == 'EN') {
        $.ajax({

            method: 'post',
            dataType: 'html',
            url: 'AjaxIdioma/menu/menuEN.html',
            data: 'idioma=' + idioma,
            success: function (data) {
                $('.sidebar').html(data);
            }

        });
    }
}