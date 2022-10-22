import PricingCard from "../components/pricingCard";

export default function Services() {
  return (
    <div className="md:container md:px-0 px-4">
      <h1 className="md:text-vasek-h1 text-vasek-h4 font-bold font-satoshi">
        Servicios
      </h1>

      <div className="flex flex-col items-center gap-5 md:m-0 mt-5">
        <h2 className="md:text-vasek-h2 text-vasek-h5 font-bold font-satoshi md:text-left text-center">
          Diseñado para gente como tú
        </h2>
        <p className="md:text-vasek-large text-vasek-medium text-center">
          En Vasek nos enfocamos en hacer llegar nuestro conocimiento a personas que creen en el valor a largo plazo.
        </p>
        <div className="flex md:flex-row flex-col h-full gap-12 px-8">
          <PricingCard
            plan="Público"
            free={true}
            price={0}
            monthPercentage={false}
            monthPercentageValue={0}
            features={[
              "Operaciones del método Vasek gratuitas hasta el 31 de Noviembre",
              "A partir de Diciembre se compartirán 1 de cada 5 operaciones del método",
            ]}
          />
          <PricingCard
            plan="Premium Vasek"
            free={false}
            price={297}
            monthPercentage={true}
            monthPercentageValue={10}
            features={[
              "Contenido exclusivo",
              "Grupo comunidad premium",
              "Se compartirán todas las operaciones",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
