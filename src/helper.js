export function obtenerDiferenciaAnio(year) {
    return new Date().getFullYear() - year;
 }
 
 export function calcularMarca( modelo ) {
     let incremento;
 
     switch (modelo) {
         case 'europeo':
             incremento = 1.10;
             break;
         case 'americano':
             incremento = 1.05;
             break;
         case 'asiatico':
             incremento = 1.01;
             break;
         default:
             break;
     }
 
     return incremento;
 }
 export function obtenerPlan( plan ) {
     return (plan === 'completo') ? 1.50
     : 1.20
     
 }
 export function primeraMayuscula(texto) {
     return texto.charAt(0).toUpperCase() + texto.slice(1);
 }