import { Accordion } from "flowbite-react";
export default function FaqTab() {
  return (
    <div id="faqAccordion">
      <Accordion alwaysOpen={true} flush={true}>
        <Accordion.Panel>
          <Accordion.Title>
            ¿Cuál es la contribución del proyecto Vasek?
          </Accordion.Title>
          <Accordion.Content>
            <p>
              Hemos venido para cambiar la dinámica actual que rodea a las
              inversiones en eventos deportivos, vamos a compartir contenido
              para introducir al público en el trading deportivo y respaldar el
              uso de las probabilidades y las métricas matemáticas que usamos en
              las operaciones del método Vasek
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            ¿De qué manera puedo determinar la eficacia del Método Vasek?
          </Accordion.Title>
          <Accordion.Content>
            <p>
              En la sección de &quot;Resultados&quot;, encontrarán un documento que
              recopila todas las operaciones llevadas a cabo durante las tres
              últimas temporadas.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            ¿Cuál es la fórmula detrás de haber logrado esta rentabilidad?
          </Accordion.Title>
          <Accordion.Content>
            <p>
              La esencia radica en la comprensión de los números, su uso
              estratégico, la identificación del valor y la simplificación del
              proceso. Adicionalmente, tres componentes de vital importancia
              para aplicar son: el valor esperado, la mentalidad orientada al
              largo plazo y el interés compuesto.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            ¿Cuál es el procedimiento para convertirme en cliente y acceder a un
            servicio más individualizado?
          </Accordion.Title>
          <Accordion.Content>
            <p>
              Hasta el momento, en Vasek no disponemos de servicios de pago. Las
              operaciones del método son gratuitas y se comparten mediante el
              canal de Telegram, al cual puedes acceder mediante el siguiente
              enlace.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}
