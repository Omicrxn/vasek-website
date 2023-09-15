import Image from "next/image";
import { motion } from "framer-motion";
export default function BrandValues() {
  return (
    <div className=" relative md:mx-32 my-32 gap-y-16 flex flex-col">
      <Mission />
      <Objectives />
      <Values />
    </div>
  );
}

function Mission() {
  return (
    <div className="flex md:flex-row flex-col self-center items-center md:gap-12 gap-y-5">
      <div className="md:text-left md:w-1/2">
        <h4 className="text-vasek-h4 text-vasek-white font-satoshi font-bold">
          Nuestra misión
        </h4>
        <p className="text-vasek-medium text-vasek-white font-medium">
          Modificar la trayectoria del ámbito de las inversiones en eventos
          deportivos, que en la actualidad se encuentra saturado de "tipsters"
          que ofrecen sus pronósticos y se enfocan en la captación de clientes
          para las casas de apuestas, siendo así su única fuente de ingresos.
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
          Vasek busca fomentar una mentalidad inversora y de largo plazo,
          reconociendo la relevancia de las matemáticas en el contexto del
          trading deportivo y automatizando estas fórmulas correspondientes.
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
