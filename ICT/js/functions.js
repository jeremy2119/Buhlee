$(window).on('load', function () {
    $('#preload').fadeOut(800);
});

$(document).ready(function(){
    $("#todos").click(function(){
        $(".montana").slideDown(500);
        $(".montana").removeClass("fadeOut");
        $(".montana").addClass("fadeIn");
        $(".volcan").slideDown(500);
        $(".volcan").removeClass("fadeOut");
        $(".volcan").addClass("fadeIn");
        $(".playa").slideDown(500);
        $(".playa").removeClass("fadeOut");
        $(".playa").addClass("fadeIn");
        $("#titulo-destinos").fadeOut();
        $("#titulo-destinos").html("Todos los destinos");
        $("#titulo-destinos").fadeIn();
        $("#todos").addClass("select-categoria")
        $("#volcanes").removeClass("select-categoria")
        $("#montanas").removeClass("select-categoria")
        $("#playas").removeClass("select-categoria")
        $(document).scrollTop();
        
    });
    
    $("#playas").click(function(){
        $(".montana").slideUp(500);
        $(".montana").removeClass("fadeIn");
        $(".montana").addClass("fadeOut");
        $(".volcan").slideUp(500);
        $(".volcan").removeClass("fadeIn");
        $(".volcan").addClass("fadeOut");
        $(".playa").slideDown(500);
        $(".playa").removeClass("fadeOut");
        $(".playa").addClass("fadeIn");
        $("#titulo-destinos").fadeOut();
        $("#titulo-destinos").html("Playas");
        $("#titulo-destinos").fadeIn();
        $("#todos").removeClass("select-categoria")
        $("#volcanes").removeClass("select-categoria")
        $("#montanas").removeClass("select-categoria")
        $("#playas").addClass("select-categoria")
        
    });
    
    $("#montanas").click(function(){
       $(".montana").slideDown(500);
        $(".montana").removeClass("fadeOut");
        $(".montana").addClass("fadeIn");
        $(".volcan").slideUp(500);
        $(".volcan").removeClass("fadeIn");
        $(".volcan").addClass("fadeOut");
        $(".playa").slideUp(500);
        $(".playa").removeClass("fadeOut");
        $(".playa").addClass("fadeIn");
        $("#titulo-destinos").fadeOut();
        $("#titulo-destinos").html("Montanas");
        $("#titulo-destinos").fadeIn();
        $("#todos").removeClass("select-categoria")
        $("#volcanes").removeClass("select-categoria")
        $("#montanas").addClass("select-categoria")
        $("#playas").removeClass("select-categoria")
        
    });
    
    $("#volcanes").click(function(){
       $(".montana").slideUp(500);
        $(".montana").removeClass("fadeIn");
        $(".montana").addClass("fadeOut");
        $(".volcan").slideDown(500);
        $(".volcan").removeClass("fadeOut");
        $(".volcan").addClass("fadeIn");
        $(".playa").slideUp(500);
        $(".playa").removeClass("fadeIn");
        $(".playa").addClass("fadeOut");
        $("#titulo-destinos").fadeOut();
        $("#titulo-destinos").html("Volcanes");
        $("#titulo-destinos").fadeIn();
        $("#todos").removeClass("select-categoria")
        $("#volcanes").addClass("select-categoria")
        $("#montanas").removeClass("select-categoria")
        $("#playas").removeClass("select-categoria")
        
    });
    
    
    $("#monteverde").click(function(){
        $(".modal-title").html("MONTEVERDE");
        
        $("#img-carousel-1").attr("src","https://www.govisitcostarica.co.cr/images/photos/full-beautiful-suspension-bridge-monteverde.jpg");
        
        $("#img-carousel-2").attr("src","https://www.monteverdeinfo.com/sites/www-origin.monteverdeinfo.com/files/inline-images/monteverde-weather-landscape.jpg");
        
        $("#img-carousel-3").attr("src","https://cdn.kimkim.com/files/a/content_articles/featured_photos/84f97325f46689e0466c4f20671d4a8e4c782ac6/big-f075ab90b19b4909c6326aa48d54c550.jpg");
        
        $("#img-carousel-4").attr("src","https://live.staticflickr.com/7852/46830730964_48abaf2835_c.jpg");
        
        $("#img-carousel-5").attr("src","https://media.tacdn.com/media/attractions-splice-spp-674x446/07/82/0c/30.jpg");
        
        $("#desti-content").html("<p>Imagine caminar a través de las nubes a miles de pies sobre el nivel del mar. En la Reserva Biológica del Bosque Nuboso Monteverde, puede abrazar la atmósfera brumosa, que sirve como uno de los destinos de ecoturismo más codiciados de Costa Rica.</p><p>La reserva abarca una biozona de 26,000 acres, rebosante de una maravillosa diversidad de vida silvestre y vida vegetal. No hay duda de que el Bosque Nuboso de Monteverde es un verdadero paraíso para los amantes de la naturaleza.</p><p>Extendiéndose a través de ocho zonas biológicas distintas, la Reserva del Bosque Nuboso de Monteverde es el hogar de más de miles de especies de plantas y animales.Voltee su mirada hacia la cima de los gigantescos árboles donde viven más de 500 especies de aves. Las aves más populares en esta región son el esquivo queztal y el pájaron campana.</p><p>Descubra la flora y fauna, incluidos jaguares, tucancillos, pumas, monos y las ranas arbóreas de ojos rojos que han llegado para servir como el animal más popular y comercial de Costa Rica!</p><p>También hay 420 especies de orquídeas y 200 especies de helechos. Al explorar el bosque, seguramente se encontrará con una variedad de estos espectaculares animales salvajes. Incluso puede echar un vistazo al sapo dorado, una especie de sapo que solo se sabe que existe aquí en la Reserva del Bosque Nuboso de Monteverde, que se vio por última vez en 1989.</p><p>Ponga sus pies en la División Continental, donde un pie estará en el lado del Caribe y otro en el lado del Pacífico. Con vistas tanto del Océano Pacífico como del Mar Caribe, esta reserva está llena de una gran variedad de árboles elevados cargados de plantas epífitas.</p>");
        
        $("#local").html("Puntarenas");
        $("#pueblo").html("Santa Elena");
        $("#duracion").html("2 hrs desde San Jose");
        $("#cate").html("Montana");
        $("#maps").attr("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125622.48837547246!2d-84.88852776811446!3d10.285516178930614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0190abebeddc9%3A0x6655a93f1b3ad827!2sProvincia%20de%20Puntarenas%2C%20Monteverde!5e0!3m2!1ses-419!2scr!4v1574402950600!5m2!1ses-419!2scr");

    });
    
    //RINCON DE LA VIEJA//
    
    $("#rincon").click(function(){
        $(".modal-title").html("VOLCAN RINCON DE LA VIEJA");
        
        $("#img-carousel-1").attr("src","http://www.biocaminatascr.com/wp-content/uploads/2016/12/pn_rincon_de_la_vieja.jpg");
        
        $("#img-carousel-2").attr("src","https://fpn.cr/wp-content/uploads/2018/09/vieja1-820x534.jpg");
        
        $("#img-carousel-3").attr("src","https://www.govisitcostarica.co.cr/images/photos/full-canopy-zip-tour.jpg");
        
        $("#img-carousel-4").attr("src","https://images.costarica.org/wp-content/uploads/2014/12/Rincon-de-la-Vieja-Monkey.jpg");
        
        $("#img-carousel-5").attr("src","https://cdn-5da890f4f911c8130c44f10c.closte.com/wp-content/uploads/2015/07/Long-tailed-Manakin-in-Rincon-de-la-Vieja.jpg");
        
        $("#desti-content").html("<p>Imagine caminar a través de las nubes a miles de pies sobre el nivel del mar. En la Reserva Biológica del Bosque Nuboso Monteverde, puede abrazar la atmósfera brumosa, que sirve como uno de los destinos de ecoturismo más codiciados de Costa Rica.</p><p>La reserva abarca una biozona de 26,000 acres, rebosante de una maravillosa diversidad de vida silvestre y vida vegetal. No hay duda de que el Bosque Nuboso de Monteverde es un verdadero paraíso para los amantes de la naturaleza.</p><p>Extendiéndose a través de ocho zonas biológicas distintas, la Reserva del Bosque Nuboso de Monteverde es el hogar de más de miles de especies de plantas y animales.Voltee su mirada hacia la cima de los gigantescos árboles donde viven más de 500 especies de aves. Las aves más populares en esta región son el esquivo queztal y el pájaron campana.</p><p>Descubra la flora y fauna, incluidos jaguares, tucancillos, pumas, monos y las ranas arbóreas de ojos rojos que han llegado para servir como el animal más popular y comercial de Costa Rica!</p><p>También hay 420 especies de orquídeas y 200 especies de helechos. Al explorar el bosque, seguramente se encontrará con una variedad de estos espectaculares animales salvajes. Incluso puede echar un vistazo al sapo dorado, una especie de sapo que solo se sabe que existe aquí en la Reserva del Bosque Nuboso de Monteverde, que se vio por última vez en 1989.</p><p>Ponga sus pies en la División Continental, donde un pie estará en el lado del Caribe y otro en el lado del Pacífico. Con vistas tanto del Océano Pacífico como del Mar Caribe, esta reserva está llena de una gran variedad de árboles elevados cargados de plantas epífitas.</p>");
        
        $("#local").html("Guanacaste");
        $("#pueblo").html("Dos Rios");
        $("#duracion").html("6 hrs desde San Jose");
        $("#cate").html("Volcanes");
        $("#maps").attr("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.273289441464!2d-85.36561458466575!3d10.790368461885489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f757d1636b1ee43%3A0x1a60c9435d695090!2sParque%20Nacional%20Rinc%C3%B3n%20de%20la%20Vieja!5e0!3m2!1ses-419!2scr!4v1574460122014!5m2!1ses-419!2scr");

    });
    
    
    //MANZANILLO//
    
    $("#manza").click(function(){
        $(".modal-title").html("PLAYA MANZANILLO");
        
        $("#img-carousel-1").attr("src","https://live.staticflickr.com/3156/2390518566_ae5a258595_b.jpg");
        
        $("#img-carousel-2").attr("src","https://costa-rica-guide.com/wp-content/uploads/2015/04/IMG_2306.jpg");
        
        $("#img-carousel-3").attr("src","https://www.govisitcostarica.co.cr/images/photos/full-deserted-cove-manzanillo-caribbean.jpg");
        
        $("#img-carousel-4").attr("src","https://conozcasucanton.com/wp-content/uploads/sites/11/2016/09/11245794_1043038509095580_7223291370623201183_n.jpg");
        
        $("#img-carousel-5").attr("src","https://aramanzanillo.org/wp-content/uploads/2019/01/visit-us-ibox.jpg");
        
        $("#desti-content").html("<p>Imagine caminar a través de las nubes a miles de pies sobre el nivel del mar. En la Reserva Biológica del Bosque Nuboso Monteverde, puede abrazar la atmósfera brumosa, que sirve como uno de los destinos de ecoturismo más codiciados de Costa Rica.</p><p>La reserva abarca una biozona de 26,000 acres, rebosante de una maravillosa diversidad de vida silvestre y vida vegetal. No hay duda de que el Bosque Nuboso de Monteverde es un verdadero paraíso para los amantes de la naturaleza.</p><p>Extendiéndose a través de ocho zonas biológicas distintas, la Reserva del Bosque Nuboso de Monteverde es el hogar de más de miles de especies de plantas y animales.Voltee su mirada hacia la cima de los gigantescos árboles donde viven más de 500 especies de aves. Las aves más populares en esta región son el esquivo queztal y el pájaron campana.</p><p>Descubra la flora y fauna, incluidos jaguares, tucancillos, pumas, monos y las ranas arbóreas de ojos rojos que han llegado para servir como el animal más popular y comercial de Costa Rica!</p><p>También hay 420 especies de orquídeas y 200 especies de helechos. Al explorar el bosque, seguramente se encontrará con una variedad de estos espectaculares animales salvajes. Incluso puede echar un vistazo al sapo dorado, una especie de sapo que solo se sabe que existe aquí en la Reserva del Bosque Nuboso de Monteverde, que se vio por última vez en 1989.</p><p>Ponga sus pies en la División Continental, donde un pie estará en el lado del Caribe y otro en el lado del Pacífico. Con vistas tanto del Océano Pacífico como del Mar Caribe, esta reserva está llena de una gran variedad de árboles elevados cargados de plantas epífitas.</p>");
        
        $("#local").html("Limon");
        $("#pueblo").html("Puerto Viejo");
        $("#duracion").html("5 hrs desde San Jose");
        $("#cate").html("Playas");
        $("#maps").attr("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.5711867965883!2d-82.66411542892455!3d9.632140371921395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa645efa326956f%3A0xda91cc33eb767326!2sPlaya%20Manzanillo!5e0!3m2!1ses-419!2scr!4v1574464045818!5m2!1ses-419!2scr");

    });
    


//POAS//

$("#poas").click(function(){
        $(".modal-title").html("PARQUE NACIONAL VOLCAN POAS");
        
        $("#img-carousel-1").attr("src","https://u9b4k6n8.stackpathcdn.com/wp-content/uploads/2013/06/botos02.jpg");
        
        $("#img-carousel-2").attr("src","https://asuaire.com/blog/wp-content/uploads/2018/09/shutterstock_253647520-960x640.png");
        
        $("#img-carousel-3").attr("src","https://photo980x880.mnstatic.com/541532bfb4a02f57b3ae0250c58d28e8/parque-nacional-volcan-poas.jpg");
        
        $("#img-carousel-4").attr("src","https://www.govisitcostarica.co.cr/images/photos/full-crazy-tree-formation-hike-poas.jpg");
        
        $("#img-carousel-5").attr("src","https://aramanzanillo.org/wp-content/uploads/2019/01/visit-us-ibox.jpg");
        
        $("#desti-content").html("<p>Imagine caminar a través de las nubes a miles de pies sobre el nivel del mar. En la Reserva Biológica del Bosque Nuboso Monteverde, puede abrazar la atmósfera brumosa, que sirve como uno de los destinos de ecoturismo más codiciados de Costa Rica.</p><p>La reserva abarca una biozona de 26,000 acres, rebosante de una maravillosa diversidad de vida silvestre y vida vegetal. No hay duda de que el Bosque Nuboso de Monteverde es un verdadero paraíso para los amantes de la naturaleza.</p><p>Extendiéndose a través de ocho zonas biológicas distintas, la Reserva del Bosque Nuboso de Monteverde es el hogar de más de miles de especies de plantas y animales.Voltee su mirada hacia la cima de los gigantescos árboles donde viven más de 500 especies de aves. Las aves más populares en esta región son el esquivo queztal y el pájaron campana.</p><p>Descubra la flora y fauna, incluidos jaguares, tucancillos, pumas, monos y las ranas arbóreas de ojos rojos que han llegado para servir como el animal más popular y comercial de Costa Rica!</p><p>También hay 420 especies de orquídeas y 200 especies de helechos. Al explorar el bosque, seguramente se encontrará con una variedad de estos espectaculares animales salvajes. Incluso puede echar un vistazo al sapo dorado, una especie de sapo que solo se sabe que existe aquí en la Reserva del Bosque Nuboso de Monteverde, que se vio por última vez en 1989.</p><p>Ponga sus pies en la División Continental, donde un pie estará en el lado del Caribe y otro en el lado del Pacífico. Con vistas tanto del Océano Pacífico como del Mar Caribe, esta reserva está llena de una gran variedad de árboles elevados cargados de plantas epífitas.</p>");
        
        $("#local").html("Alajuela");
        $("#pueblo").html("Altura de Poas");
        $("#duracion").html("2 hrs desde San Jose");
        $("#cate").html("Volcanes");
        $("#maps").attr("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19638.506995495543!2d-84.2377467660866!3d10.187662048251578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f5216699bd5b%3A0xc6fba6adf4c227f1!2sMirador%20del%20cr%C3%A1ter%20del%20Volcan%20Po%C3%A1s!5e1!3m2!1ses-419!2scr!4v1574466003347!5m2!1ses-419!2scr");

    });
    
    
    //QUETZALES
    
    $("#quetza").click(function(){
        $(".modal-title").html("PARQUE NACIONAL LOS QUETZALES");
        
        $("#img-carousel-1").attr("src","https://media2.trover.com/T/5b195a286c70341c61005d22/fixedw_large_2x.jpg");
        
        $("#img-carousel-2").attr("src","https://photo620x400.mnstatic.com/285a9858a97a19e51ff5d1d0b8305ee6/parque-nacional-los-quetzales.jpg");
        
        $("#img-carousel-3").attr("src","https://puravidaguide.com/wp-content/uploads/2017/04/18119339_1901479293471500_2516786151243377762_n-5.jpg");
        
        $("#img-carousel-4").attr("src","https://media-cdn.tripadvisor.com/media/photo-s/12/b5/c4/fc/parque-nacional-los-quetzales.jpg");
        
        $("#img-carousel-5").attr("src","https://cdn.crhoy.net/imagenes/2016/11/Parque-Los-Quetzalez-1024x680.jpg");
        
        $("#desti-content").html("<p>Imagine caminar a través de las nubes a miles de pies sobre el nivel del mar. En la Reserva Biológica del Bosque Nuboso Monteverde, puede abrazar la atmósfera brumosa, que sirve como uno de los destinos de ecoturismo más codiciados de Costa Rica.</p><p>La reserva abarca una biozona de 26,000 acres, rebosante de una maravillosa diversidad de vida silvestre y vida vegetal. No hay duda de que el Bosque Nuboso de Monteverde es un verdadero paraíso para los amantes de la naturaleza.</p><p>Extendiéndose a través de ocho zonas biológicas distintas, la Reserva del Bosque Nuboso de Monteverde es el hogar de más de miles de especies de plantas y animales.Voltee su mirada hacia la cima de los gigantescos árboles donde viven más de 500 especies de aves. Las aves más populares en esta región son el esquivo queztal y el pájaron campana.</p><p>Descubra la flora y fauna, incluidos jaguares, tucancillos, pumas, monos y las ranas arbóreas de ojos rojos que han llegado para servir como el animal más popular y comercial de Costa Rica!</p><p>También hay 420 especies de orquídeas y 200 especies de helechos. Al explorar el bosque, seguramente se encontrará con una variedad de estos espectaculares animales salvajes. Incluso puede echar un vistazo al sapo dorado, una especie de sapo que solo se sabe que existe aquí en la Reserva del Bosque Nuboso de Monteverde, que se vio por última vez en 1989.</p><p>Ponga sus pies en la División Continental, donde un pie estará en el lado del Caribe y otro en el lado del Pacífico. Con vistas tanto del Océano Pacífico como del Mar Caribe, esta reserva está llena de una gran variedad de árboles elevados cargados de plantas epífitas.</p>");
        
        $("#local").html("Canton de Dota");
        $("#pueblo").html("Santa Maria de Dota");
        $("#duracion").html("2 hrs desde San Jose");
        $("#cate").html("Montana");
        $("#maps").attr("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20285.044162063856!2d-83.82451481429234!3d9.612658991321252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa29a25b4ea07aef8!2sParque%20Nacional%20Los%20Quetzales%20-%20Entrada%20Principal!5e1!3m2!1ses-419!2scr!4v1574467806727!5m2!1ses-419!2scr");

    });
    
    //AVELLANAS//
    
    
    $("#avellanas").click(function(){
        $(".modal-title").html("PLAYA AVELLANAS");
        
        $("#img-carousel-1").attr("src","https://media-cdn.tripadvisor.com/media/photo-s/07/29/0a/13/playa-avellanes.jpg");
        
        $("#img-carousel-2").attr("src","https://cdn1.vacationscostarica.com/crvacations/guide/around-costa-rica/beaches/playa-avellanas-2.jpg");
        
        $("#img-carousel-3").attr("src","https://i1.wp.com/www.drinkteatravel.com/wp-content/uploads/Costa-Rica-beach-turtles-05359.jpg?resize=1200%2C775&ssl=1");
        
        $("#img-carousel-4").attr("src","https://www.govisitcostarica.co.cr/images/photos/full_avellanasGirl.jpg");
        
        $("#img-carousel-5").attr("src","https://cdn.crhoy.net/imagenes/2017/04/pajarobobo-1024x703.jpg");
        
        $("#desti-content").html("<p>Imagine caminar a través de las nubes a miles de pies sobre el nivel del mar. En la Reserva Biológica del Bosque Nuboso Monteverde, puede abrazar la atmósfera brumosa, que sirve como uno de los destinos de ecoturismo más codiciados de Costa Rica.</p><p>La reserva abarca una biozona de 26,000 acres, rebosante de una maravillosa diversidad de vida silvestre y vida vegetal. No hay duda de que el Bosque Nuboso de Monteverde es un verdadero paraíso para los amantes de la naturaleza.</p><p>Extendiéndose a través de ocho zonas biológicas distintas, la Reserva del Bosque Nuboso de Monteverde es el hogar de más de miles de especies de plantas y animales.Voltee su mirada hacia la cima de los gigantescos árboles donde viven más de 500 especies de aves. Las aves más populares en esta región son el esquivo queztal y el pájaron campana.</p><p>Descubra la flora y fauna, incluidos jaguares, tucancillos, pumas, monos y las ranas arbóreas de ojos rojos que han llegado para servir como el animal más popular y comercial de Costa Rica!</p><p>También hay 420 especies de orquídeas y 200 especies de helechos. Al explorar el bosque, seguramente se encontrará con una variedad de estos espectaculares animales salvajes. Incluso puede echar un vistazo al sapo dorado, una especie de sapo que solo se sabe que existe aquí en la Reserva del Bosque Nuboso de Monteverde, que se vio por última vez en 1989.</p><p>Ponga sus pies en la División Continental, donde un pie estará en el lado del Caribe y otro en el lado del Pacífico. Con vistas tanto del Océano Pacífico como del Mar Caribe, esta reserva está llena de una gran variedad de árboles elevados cargados de plantas epífitas.</p>");
        
        $("#local").html("Guanacaste");
        $("#pueblo").html("Tamarindo");
        $("#duracion").html("4.5 hrs desde San Jose");
        $("#cate").html("Playas");
        $("#maps").attr("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4903.444923308!2d-85.84523143520387!3d10.238979592687539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9e38a9524e6387%3A0x2839c12e9717f21!2sPlaya%20Avellana!5e1!3m2!1ses-419!2scr!4v1574468925720!5m2!1ses-419!2scr");

    });
    
    
    
    
        $("#irazu").click(function(){
        $(".modal-title").html("PARQUE NACIONAL VOLCAN IRAZU");
        
        $("#img-carousel-1").attr("src","https://www.govisitcostarica.co.cr/images/photos/full-surrounding-irazu-volcano.jpg");
        
        $("#img-carousel-2").attr("src","https://i1.wp.com/presidencia.go.cr/wp-content/uploads/2017/03/IMG-20170317-WA0015.jpg?fit=1170%2C878&ssl=1");
        
        $("#img-carousel-3").attr("src","http://d1lofqbqbj927c.cloudfront.net/monumental/2019/05/09163748/IRAZ%C3%9A-450x300.jpg");
        
        $("#img-carousel-4").attr("src","https://www.conozcacostarica.com/parques/images/irazubird.jpg");
        
        $("#img-carousel-5").attr("src","https://i0.wp.com/amprensa.com/wp-content/uploads/2017/10/p855118056-3.jpg?fit=580%2C380&ssl=1");
        
        $("#desti-content").html("<p>Imagine caminar a través de las nubes a miles de pies sobre el nivel del mar. En la Reserva Biológica del Bosque Nuboso Monteverde, puede abrazar la atmósfera brumosa, que sirve como uno de los destinos de ecoturismo más codiciados de Costa Rica.</p><p>La reserva abarca una biozona de 26,000 acres, rebosante de una maravillosa diversidad de vida silvestre y vida vegetal. No hay duda de que el Bosque Nuboso de Monteverde es un verdadero paraíso para los amantes de la naturaleza.</p><p>Extendiéndose a través de ocho zonas biológicas distintas, la Reserva del Bosque Nuboso de Monteverde es el hogar de más de miles de especies de plantas y animales.Voltee su mirada hacia la cima de los gigantescos árboles donde viven más de 500 especies de aves. Las aves más populares en esta región son el esquivo queztal y el pájaron campana.</p><p>Descubra la flora y fauna, incluidos jaguares, tucancillos, pumas, monos y las ranas arbóreas de ojos rojos que han llegado para servir como el animal más popular y comercial de Costa Rica!</p><p>También hay 420 especies de orquídeas y 200 especies de helechos. Al explorar el bosque, seguramente se encontrará con una variedad de estos espectaculares animales salvajes. Incluso puede echar un vistazo al sapo dorado, una especie de sapo que solo se sabe que existe aquí en la Reserva del Bosque Nuboso de Monteverde, que se vio por última vez en 1989.</p><p>Ponga sus pies en la División Continental, donde un pie estará en el lado del Caribe y otro en el lado del Pacífico. Con vistas tanto del Océano Pacífico como del Mar Caribe, esta reserva está llena de una gran variedad de árboles elevados cargados de plantas epífitas.</p>");
        
        $("#local").html("Cartago");
        $("#pueblo").html("Tierra Blanca");
        $("#duracion").html("2 hrs desde San Jose");
        $("#cate").html("Volcanes");
        $("#maps").attr("src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39253.52671161275!2d-83.8490761!3d9.9799812!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0dc7db43e8a51%3A0x9d2ef5e48cccec68!2sVolc%C3%A1n%20Irazu!5e1!3m2!1ses-419!2scr!4v1574469698118!5m2!1ses-419!2scr");

    });
    
    
    
    
    
    $("#manuel").click(function(){
        $(".modal-title").html("PARQUE NACIONAL MANUEL ANTONIO");
        
        $("#img-carousel-1").attr("src","https://www.selina.com/blog/wp-content/uploads/Blog_Posts/hike-Manuel-Antonio-national-park.jpg");
        
        $("#img-carousel-2").attr("src","https://asuaire.com/wp-content/uploads/2017/12/0014_manuel-antonio_1.png");
        
        $("#img-carousel-3").attr("src","https://4.bp.blogspot.com/-e9xRRWieLKE/T1vDLzofKJI/AAAAAAAAFTk/8581ujMRv8E/s1600/Manuel+Antonio.jpg");
        
        $("#img-carousel-4").attr("src","https://www.telecablecr.com/wp-content/uploads/2017/06/Parque-Nacional-Manuel-Antonio-2.jpg");
        
        $("#img-carousel-5").attr("src","https://asuaire.com/blog/wp-content/uploads/2017/10/monos-960x640.png");
        
        $("#desti-content").html("<p>Imagine caminar a través de las nubes a miles de pies sobre el nivel del mar. En la Reserva Biológica del Bosque Nuboso Monteverde, puede abrazar la atmósfera brumosa, que sirve como uno de los destinos de ecoturismo más codiciados de Costa Rica.</p><p>La reserva abarca una biozona de 26,000 acres, rebosante de una maravillosa diversidad de vida silvestre y vida vegetal. No hay duda de que el Bosque Nuboso de Monteverde es un verdadero paraíso para los amantes de la naturaleza.</p><p>Extendiéndose a través de ocho zonas biológicas distintas, la Reserva del Bosque Nuboso de Monteverde es el hogar de más de miles de especies de plantas y animales.Voltee su mirada hacia la cima de los gigantescos árboles donde viven más de 500 especies de aves. Las aves más populares en esta región son el esquivo queztal y el pájaron campana.</p><p>Descubra la flora y fauna, incluidos jaguares, tucancillos, pumas, monos y las ranas arbóreas de ojos rojos que han llegado para servir como el animal más popular y comercial de Costa Rica!</p><p>También hay 420 especies de orquídeas y 200 especies de helechos. Al explorar el bosque, seguramente se encontrará con una variedad de estos espectaculares animales salvajes. Incluso puede echar un vistazo al sapo dorado, una especie de sapo que solo se sabe que existe aquí en la Reserva del Bosque Nuboso de Monteverde, que se vio por última vez en 1989.</p><p>Ponga sus pies en la División Continental, donde un pie estará en el lado del Caribe y otro en el lado del Pacífico. Con vistas tanto del Océano Pacífico como del Mar Caribe, esta reserva está llena de una gran variedad de árboles elevados cargados de plantas epífitas.</p>");
        
        $("#local").html("Puntarenas");
        $("#pueblo").html("Quepos");
        $("#duracion").html("3 hrs desde San Jose");
        $("#cate").html("Playas");
        $("#maps").attr("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39280.11041620321!2d-84.15570430708007!3d9.393973537196864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1719c9ba9f54b%3A0x95e66139ce5c4a86!2sParque%20Nacional%20Manuel%20Antonio!5e1!3m2!1ses-419!2scr!4v1574473580306!5m2!1ses-419!2scr");

    });
    
    
        $("#cahuita").click(function(){
        $(".modal-title").html("PARQUE NACIONAL CAHUITA");
        
        $("#img-carousel-1").attr("src","https://www.3bamboo.com/wp-content/uploads/2015/06/16665506_1821156014791355_6456280492408560888_o-1140x660.jpg");
        
        $("#img-carousel-2").attr("src","https://www.bautrip.com/images/what-to-visit/parque-cahuita-costa-rica.jpg");
        
        $("#img-carousel-3").attr("src","https://www.govisitcostarica.co.cr/images/photos/full-guady-leaf-frog-Costa-Rica.jpg");
        
        $("#img-carousel-4").attr("src","https://static.wixstatic.com/media/40e585_5b1eca8b982a4233beb9b59e52d608be~mv2.jpg");
        
        $("#img-carousel-5").attr("src","https://live.staticflickr.com/4297/35657397860_06262e852c_b.jpg");
        
        $("#desti-content").html("<p>Imagine caminar a través de las nubes a miles de pies sobre el nivel del mar. En la Reserva Biológica del Bosque Nuboso Monteverde, puede abrazar la atmósfera brumosa, que sirve como uno de los destinos de ecoturismo más codiciados de Costa Rica.</p><p>La reserva abarca una biozona de 26,000 acres, rebosante de una maravillosa diversidad de vida silvestre y vida vegetal. No hay duda de que el Bosque Nuboso de Monteverde es un verdadero paraíso para los amantes de la naturaleza.</p><p>Extendiéndose a través de ocho zonas biológicas distintas, la Reserva del Bosque Nuboso de Monteverde es el hogar de más de miles de especies de plantas y animales.Voltee su mirada hacia la cima de los gigantescos árboles donde viven más de 500 especies de aves. Las aves más populares en esta región son el esquivo queztal y el pájaron campana.</p><p>Descubra la flora y fauna, incluidos jaguares, tucancillos, pumas, monos y las ranas arbóreas de ojos rojos que han llegado para servir como el animal más popular y comercial de Costa Rica!</p><p>También hay 420 especies de orquídeas y 200 especies de helechos. Al explorar el bosque, seguramente se encontrará con una variedad de estos espectaculares animales salvajes. Incluso puede echar un vistazo al sapo dorado, una especie de sapo que solo se sabe que existe aquí en la Reserva del Bosque Nuboso de Monteverde, que se vio por última vez en 1989.</p><p>Ponga sus pies en la División Continental, donde un pie estará en el lado del Caribe y otro en el lado del Pacífico. Con vistas tanto del Océano Pacífico como del Mar Caribe, esta reserva está llena de una gran variedad de árboles elevados cargados de plantas epífitas.</p>");
        
        $("#local").html("Limon");
        $("#pueblo").html("Cahuita Centro");
        $("#duracion").html("4 hrs desde San Jose");
        $("#cate").html("Playas");
        $("#maps").attr("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19581.08558181373!2d-82.85238140856201!3d9.733933197654784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa651542eb98e83%3A0x3a448a31f3fab73d!2sParque%20nacional%20Cahuita!5e1!3m2!1ses-419!2scr!4v1574474111933!5m2!1ses-419!2scrr");

    });
    
    
    
    
    $("#teresa").click(function(){
        $(".modal-title").html("PLAYA SANTA TERESA");
        
        $("#img-carousel-1").attr("src","https://images.visitarcostarica.com/playa-santa-teresa-puntarenas.jpg");
        
        $("#img-carousel-2").attr("src","https://media-cdn.tripadvisor.com/media/photo-s/10/01/f8/22/photo1jpg.jpg");
        
        $("#img-carousel-3").attr("src","https://cdn.crhoy.net/imagenes/2019/09/Expert-SUP-Surfing-Santa-Teresa-Costa-Rica.jpg");
        
        $("#img-carousel-4").attr("src","http://www.manalahotel.com/hotel-santa-teresa/img/page1-img1.png");
        
        $("#img-carousel-5").attr("src","https://evadotravel.com/wp-content/uploads/2019/01/fullsizeoutput_49e.jpg");
        
        $("#desti-content").html("<p>Imagine caminar a través de las nubes a miles de pies sobre el nivel del mar. En la Reserva Biológica del Bosque Nuboso Monteverde, puede abrazar la atmósfera brumosa, que sirve como uno de los destinos de ecoturismo más codiciados de Costa Rica.</p><p>La reserva abarca una biozona de 26,000 acres, rebosante de una maravillosa diversidad de vida silvestre y vida vegetal. No hay duda de que el Bosque Nuboso de Monteverde es un verdadero paraíso para los amantes de la naturaleza.</p><p>Extendiéndose a través de ocho zonas biológicas distintas, la Reserva del Bosque Nuboso de Monteverde es el hogar de más de miles de especies de plantas y animales.Voltee su mirada hacia la cima de los gigantescos árboles donde viven más de 500 especies de aves. Las aves más populares en esta región son el esquivo queztal y el pájaron campana.</p><p>Descubra la flora y fauna, incluidos jaguares, tucancillos, pumas, monos y las ranas arbóreas de ojos rojos que han llegado para servir como el animal más popular y comercial de Costa Rica!</p><p>También hay 420 especies de orquídeas y 200 especies de helechos. Al explorar el bosque, seguramente se encontrará con una variedad de estos espectaculares animales salvajes. Incluso puede echar un vistazo al sapo dorado, una especie de sapo que solo se sabe que existe aquí en la Reserva del Bosque Nuboso de Monteverde, que se vio por última vez en 1989.</p><p>Ponga sus pies en la División Continental, donde un pie estará en el lado del Caribe y otro en el lado del Pacífico. Con vistas tanto del Océano Pacífico como del Mar Caribe, esta reserva está llena de una gran variedad de árboles elevados cargados de plantas epífitas.</p>");
        
        $("#local").html("Puntarenas");
        $("#pueblo").html("Cobano");
        $("#duracion").html("5 hrs desde San Jose");
        $("#cate").html("Playas");
        $("#maps").attr("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19758.7133785216!2d-85.17583094263667!3d9.650455070269608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9f6e5fe79b2d3b%3A0x1fd6d03ba10d8d85!2sPlaya%20Santa%20Teresa%2C%20Provincia%20de%20Puntarenas!5e1!3m2!1ses-419!2scr!4v1574477473031!5m2!1ses-419!2scr");

    });
    
});