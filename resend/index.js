import { Resend } from 'resend';

const resend = new Resend('re_U49aAc3m_Ka5aswZ7hErbFw7vZTP2f6qY');

var correo ="kevinkobenresendizramirez@gmail.com";
let num=parseInt(Math.random()*(1000000000000,9999999999999));
var evento ="Mistery Land";


(async function () {
  const { data, error } = await resend.emails.send({
    from: 'Empresa ticket (proyecto) <onboarding@resend.dev>',
    to: [correo],
    subject: 'Boleto del evento'+evento,
    html:"Gracias por su compra para el evento " +evento +". <br>Aqui esta su codigo de acceso para el evento, muestre este codigo para que los empleados lo puedan mirar: <br>" +String(num),
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();
