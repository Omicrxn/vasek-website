import PricingCard from "../components/pricingCard";

export default function Services() {
  return (
    <div className="container">
      <h1 className="text-vasek-h1 font-bold font-satoshi">Servicios</h1>

      <div className="flex flex-col items-center gap-5">
        <h2 className="text-vasek-h2 font-bold font-satoshi">
          Diseñado para gente como tú
        </h2>
        <p className="text-vasek-large text-center">
          En Vasek nos enfocamos en hacer llegar nuestro conocimiento a personas
          que creen en el valor a largo plazo.
        </p>
        <div className="flex h-full gap-12">

        <PricingCard
          plan="Público"
          free={true}
          price={0}
          features={[
            "Operaciones del método Vasek gratuitas hasta el 31 de Noviembre",
            "A partir de Diciembre se compartirán 1 de cada 5 operaciones del método"
          ]}
        />
        <PricingCard
          plan="Premium Vasek"
          free={false}
          price={297}
          features={[
            "Contenido exclusivo",
            "Grupo comunidad premium",
            "Se compartirán todas las operaciones"
          ]}
        />
                </div>

      </div>
    </div>
  );
}
