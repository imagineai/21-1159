import React, { useState } from 'react';

type Plan = {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
};

type PricingProps = {
  plans: Plan[];
};

const Pricing: React.FC<PricingProps> = ({ plans }) => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div>
      <button onClick={() => setIsAnnual(!isAnnual)}>
        {isAnnual ? 'Switch to Monthly' : 'Switch to Annual'}
      </button>
      {plans.map((plan) => (
        <div key={plan.name}>
          <h2>{plan.name}</h2>
          <p>{isAnnual ? plan.annualPrice : plan.monthlyPrice}</p>
          <ul>
            {plan.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Pricing;