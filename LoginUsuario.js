// Crear una clase
class Validarformulario{

    constructor(Nombre,Email,Contraseña){

        this.Nombre = Nombre;
        this.Email = Email;
        this.Contraseña = Contraseña;
    }
    validarnombre(){
        if (this.Nombre === ""){
            return "El nombre es obligatorio";
        }
        if (this.Nombre.length < 4){
            return "El nombre debe tener minimo 4  caracteres";
        }
        return ""; 
    }
    validarcorreo(){
        if(this.Email === ""){
            return "El correo es obligatorio";
        }
        if(!this.Email.includes("@")){
            return "Correo invalido"
        }
        return ""; 
    }
    validarpassword(){
        if(this.Contraseña === ""){
            return "Contraseña es obligatoria"
        }
        if(this.Contraseña.length<=8){
            return "La contraseña debe tener minimo 8 caracteres";
        }
        return ""; 
    }
}
//Evento del formulario
document.getElementById("Registroformu").addEventListener("submit", function(e){
    e.preventDefault();

    //Capturar
    let Nombre = document.getElementById("nombre").value;
    let Correo = document.getElementById("correo").value;
    let Contraseña = document.getElementById("password").value;


    //Crear objeto 

    let Formulario = new Validarformulario(Nombre,Correo,Contraseña);

    //Validaciones
    let errornombre = Formulario.validarnombre();
    let errorcorreo = Formulario.validarcorreo();
    let errorpassword = Formulario.validarpassword();

    //Mostrar los errores
    document.getElementById("errornombre").innerHTML = errornombre;
    document.getElementById("errorcorreo").innerHTML = errorcorreo;
    document.getElementById("errorpassword").innerHTML = errorpassword;

    // Si no hay errores
    if(errornombre === "" && errorcorreo === "" && errorpassword === ""){
        document.getElementById("mensaje").innerHTML = "Acceso permitido";
    }else{
        document.getElementById("mensaje").innerHTML = "";
    }

});