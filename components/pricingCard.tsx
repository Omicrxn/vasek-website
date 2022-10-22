import { spawn } from "child_process";
import { Card } from "flowbite-react";
export default function PricingCard({
  plan,
  price,
  free,
  monthPercentage,
  monthPercentageValue,
  features,
}: {
  plan: string;
  price: number;
  free: boolean;
  monthPercentage: boolean;
  monthPercentageValue: number;
  features: string[];
}) {
  return (
    <div className="max-w-sm">
      <Card>
        <h5 className="text-vasek-h5 font-satoshi font-medium text-vasek-purple-500">
          {plan}
        </h5>
        <h3 className="text-vasek-h3 font-satoshi font-bold">
          {free ? "Gratiutio" : `${price}€`}
          {monthPercentage ? (
            <span className="text-vasek-large font-normal font-generalSans text-vasek-black/50">{` entrada + ${monthPercentageValue}% profits/mes`}</span>
          ) : (
            <p>{free ? "" : "/mes"}</p>
          )}
        </h3>
        <ul role="list" className="my-2 space-y-5">
          {features.map((value: string, index: number) => {
            return (
              <li className="flex space-x-3" key={index}>
                <svg
                  className="h-5 w-5 shrink-0 text-vasek-purple-500 dark:text-vasek-purple-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base text-vasek-medium font-normal leading-tight text-gray-500 dark:text-gray-400">
                  {value}
                </span>
              </li>
            );
          })}
        </ul>
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-lg bg-vasek-purple-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-vasek-purple-700 focus:outline-none focus:ring-4 focus:ring-vasek-purple-200 dark:focus:ring-vasek-purple-900"
        >
          Choose plan
        </button>
      </Card>
    </div>
  );
}
