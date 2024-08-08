let iphone = document.getElementById("imgIphone");
let Samsung = document.getElementById("imgSamsung");
let opcionesI = document.getElementById("cmbIPhone");
let opcionesS = document.getElementById("cmbSamsung");
let txtIPhone = document.getElementById("txtIPhone");
let txtSamsung = document.getElementById("txtSamsung");




opcionesI.addEventListener("change", function(){


    //console.log(opcion.value);



    switch(opcionesI.value){
        case "0":
            alert("Favor de seleccionar una opción");
            break;


        case "1":
        iphone.src ="img/iphone13.jpg";
        txtIPhone.textContent = "Especificaciones: Dispositivo bien construido, ligero,\ny con tamaño que se adapta perfecto a la mano.  \nRAM: 16 GB\nCPU: Snap dragon\nAlmacenamiento: 268 GB\nCamara: 100px \nPantalla: 20plg"
        break;

        case "2":
        iphone.src ="img/iphone14.jpg";
        txtIPhone.textContent = "Especificaciones: Sistema de mensajería de emergencia vía\nsatélite, y resiste el polvo y agua. \nRAM: 8 GB \nCPU:  chip A15 Bionic \nAlmacenamiento: 64GB\nCamara: La cámara selfie es de 12MP \nPantalla:  6.1 pulgadas"
        break;

        case "3":
        iphone.src ="img/iphone15.jpg";
        txtIPhone.textContent = "Especificaciones: Conserva el diseño de la generación\nanterior pero incorpora el Dynamic Island  \nRAM:16 GB \nCPU: Dynamic Island  \nAlmacenamiento: 268 GB\nCamara: Dual de 48MP + 12MP, selfie es de 12 MP \nPantalla:  6.1 pulgadas."
        break;
        

        
       








    }
    
});




opcionesS.addEventListener("change", function(){


    //console.log(opcion.value);



    switch(opcionesS.value){
        case "0":
            alert("Favor de seleccionar una opción");
            break;


        case "1":
        Samsung.src ="img/samsung1.jpg";
        txtSamsung.textContent = "Especificaciones: Tiene un diseño premium con un\ncuerpo de vidrio y metal, lo que le da una\nsensación de robustez y elegancia\nRAM:16 GB \nCPU: Snapdragon 8 Gen 1 o Exynos 2200 \nAlmacenamiento: 268Gb  \nCamara: 108MP\nPantalla: Dynamic AMOLED 2X de 6.8 pulgadas con\nuna resolución de 1440 x 3088 píxeles  "
        break;

        case "2":
        Samsung.src ="img/samsung2.jpg";
        txtSamsung.textContent = "Especificaciones: Lector de huellas bajo la pantalla,\nresistencia al polvo y agua de nivel IP68, tiene\nparlantes stereo y corre Android 13.\nRAM: 12 GB\nCPU: Snapdragon 8 Gen 2\nAlmacenamiento: 268Gb  \nCamara: 108 MP\nPantalla: 6.7 pulgadas Super AMOLED con resolución QHD"

        break;

        case "3":
        Samsung.src ="img/sansung3.jpeg";
        txtSamsung.textContent = "Especificaciones: Con carga rápida inalámbrica,\ncarga reversible para funcionar como power bank y \nAndroid 9.0 Pie con la interfaz One UI.\nRAM: 8 GB \nCPU: Exynos 9820\nAlmacenamiento: 164Gb  \nCamara: 10 megapíxeles f/1.9 Dual Pixel\nPantalla: Dynamic AMOLED de 6,1 " 
        break;

        
       








    }
    
});









