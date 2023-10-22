import Pricing from '../components/Pricing';

const plans = [
  {
    name: 'Basic',
    monthlyPrice: 10,
    annualPrice: 100,
    features: ['Feature 1', 'Feature 2'],
  },
  {
    name: 'Premium',
    monthlyPrice: 20,
    annualPrice: 200,
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
];

export default function PricingPage() {
  return <Pricing plans={plans} />;
}