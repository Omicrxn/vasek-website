import { Accordion } from "flowbite-react";
export default function FaqTab() {
  return (
    <div id="faqAccordion">

  
    <Accordion alwaysOpen={true} flush={true}>
      <Accordion.Panel>
        <Accordion.Title >¿Qué aporta Vasek como proyecto?</Accordion.Title>
        <Accordion.Content>
          <p>
            Hemos venido para cambiar la dinámica actual que rodea a las
            inversiones en eventos deportivos, vamos a compartir contenido para
            introducir al público en el trading deportivo y respaldar el uso de
            las probabilidades y las métricas matemáticas que usamos en las
            operaciones del método Vasek, que se especializa en el mercado
            &quot;ganador del encuentro&quot; en el baloncesto europeo y acumula
            en los dos primeros años una efectividad de +90% en las operaciones.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          ¿Cómo puedo saber que el método Vasek funciona?
        </Accordion.Title>
        <Accordion.Content>
          <p>
            Tenéis en el apartado &quot;Resultados&quot; adjuntado un documento
            que recogen todas las operaciones realizadas a lo largo de las dos
            últimas temporadas, operaciones que durante los meses de Octubre y
            Septiembre se van a ofrecer de forma gratuita por el canal público
            de Vasek.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          ¿Cuál es la fórmula de haber conseguido esta rentabilidad?{" "}
        </Accordion.Title>
        <Accordion.Content>
          <p>
            Han sido muchas horas de análisis, prueba y error, estudio… Y al
            final todo se reduce a entender los números, usarlos a tu favor,
            encontrar el valor y hacerlo fácil. Por otra parte, tres elementos
            muy importantes a aplicar: Trading, interés compuesto y stake
            porcentual
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          ¿Es necesario entrar al premium para formarse con Vasek?{" "}
        </Accordion.Title>
        <Accordion.Content>
          <p>
            No, el concepto que hemos adaptado para las redes sociales es
            compartir contenido educativo para todos los públicos, el servicio
            Premium es para aquellos inversores que quieran tener todas las
            operaciones disponibles del método Vasek y contenido exclusivo.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          ¿Puedo ser cliente del servicio premium?{" "}
        </Accordion.Title>
        <Accordion.Content>
          <p>
            Sí, pero hay plazas limitadas y queremos seleccionar el tipo de
            clientes con el que queremos tratar. Para realizar la solicitud de
            entrada al premium envía tu mensaje a nuestra dirección de correo
            electrónico, intentaremos conceder una entrevista de la forma más
            eficaz posible.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    </div>
  );
}
