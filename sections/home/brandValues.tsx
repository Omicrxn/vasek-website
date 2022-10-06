import Image from "next/image";
import { motion } from "framer-motion";
export default function BrandValues() {
  return (
    <div className="md:container relative md:mx-0 my-32 gap-y-16 flex flex-col px-4">
      <Mission />
      <Objectives />
      <Values />
    </div>
  );
}

function Mission() {
  return (
    <div className="flex md:flex-row flex-col items-center md:gap-12 gap-y-5">
      <div className="md:text-left md:w-1/2">
        <h4 className="text-vasek-h4 text-vasek-white font-satoshi font-bold">
          Nuestra misión
        </h4>
        <p className="text-vasek-medium text-vasek-white font-medium">
          Cambiar por completo el concepto que se está ofreciendo en el sector
          de las inversiones deportivas, dejar a un lado a los ‘influencers’ de
          apuestas y compartir contenido de valor relacionado con análisis
          estadísticos, fórmulas, estrategias, etc… Aportar un contenido que los
          peces gordos que actúan en la sombra no les interesa revelar y
          estrategias respaldadas por el uso de las matemáticas que no usan los
          ‘influencers’ de apuestas en Telegram.
        </p>
      </div>
      <div className="md:w-1/2 w-full  md:my-0">
        <Image
          src="/objectives.png"
          width={500}
          height={333.33}
          layout="responsive"
        />
      </div>
    </div>
  );
}
function Objectives() {
  return (
    <div className="flex md:flex-row flex-col-reverse items-center justify-around md:gap-12 gap-y-5">
      <div className="md:w-1/2 w-full md:my-0">
        <Image
          src="/mission.png"
          width={500}
          height={333.33}
          layout="responsive"
        />
      </div>
      <div className="text-left md:w-1/2">
        <h4 className="text-vasek-h4 text-vasek-white font-satoshi font-bold">
          Objetivo
        </h4>
        <p className="text-vasek-medium text-vasek-white font-medium">
          Vasek busca fomentar una mentalidad enfocada al trading de cuotas
          alimentando la importancia sobre el conocimiento de las matemáticas
          aplicadas a las inversiones en el trading deportivo así como promover
          el uso de fórmulas automatizadas para calcular cuotas justas y mucho
          más.
        </p>
      </div>
    </div>
  );
}

function Values() {
  return (
    <div className="flex flex-col">
      <h4 className="text-vasek-h4 text-vasek-white font-satoshi font-bold">
        Nuestros valores{" "}
      </h4>
      <div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.5,
              },
            },
          }}
        >
          <h2 className="md:text-vasek-extra-sm text-vasek-h3 text-vasek-white font-satoshi font-bold">
            Convicción
          </h2>
          <hr className="h-[2px] border-none bg-vasek-white" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.5,
              },
            },
          }}
        >
          <h2 className="md:text-vasek-extra-sm text-vasek-h3 text-vasek-white font-satoshi font-bold">
            Responsabilidad
          </h2>
          <hr className="h-[2px] border-none bg-vasek-white" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.5,
              },
            },
          }}
        >
          <h2 className="md:text-vasek-extra-sm text-vasek-h3 text-vasek-white font-satoshi font-bold">
            Honestidad
          </h2>
          <hr className="h-[2px] border-none bg-vasek-white" />
        </motion.div>
      
      </div>
    </div>
  );
}
