import { CheckIcon } from "@heroicons/react/24/solid";
import { Product } from "@stripe/firestore-stripe-payments";

interface Props {
  products: Product[];
  selectedPlan: Product;
}
function Table({ products, selectedPlan }: Props) {
  return (
    <table>
      <tbody className="divide-y divide-[gray]">
        <tr className="tableRow">
          <td className="tableDataTitle">Monthly Price</td>
          {products.map((plans) => (
            <td
              key={plans.id}
              className={`tableDataFeature ${
                selectedPlan?.id === plans.id ? "text-[#e50914]" : "text-[gray]"
              }`}
            >
              AUD{plans.prices[0].unit_amount! / 100}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Video Quality</td>
          {products.map((plans) => (
            <td
              key={plans.id}
              className={`tableDataFeature ${
                selectedPlan?.id === plans.id ? "text-[#e50914]" : "text-[gray]"
              }`}
            >
              {plans.metadata.videoQuality}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Resolution</td>
          {products.map((plans) => (
            <td
              key={plans.id}
              className={`tableDataFeature ${
                selectedPlan?.id === plans.id ? "text-[#e50914]" : "text-[gray]"
              }`}
            >
              {plans.metadata.resolution}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Watch on any device</td>
          {products.map((plans) => (
            <td
              key={plans.id}
              className={`tableDataFeature ${
                selectedPlan?.id === plans.id ? "text-[#e50914]" : "text-[gray]"
              }`}
            >
              {plans.metadata.devices === 'true' && (
                <CheckIcon className="inline-block h-8 w-8"/>
              )}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
