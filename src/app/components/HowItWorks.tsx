// HowItWorks.tsx
import { MapPin, Utensils, Receipt, Pizza } from "lucide-react";

const steps = [
  {
    icon: <MapPin className="w-8 h-8 text-white" />,
    title: "Select location",
    description: "Choose the location where your food will be delivered.",
  },
  {
    icon: <Utensils className="w-8 h-8 text-white" />,
    title: "Choose order",
    description: "Check over hundreds of menus to pick your favorite food.",
  },
  {
    icon: <Receipt className="w-8 h-8 text-white" />,
    title: "Pay advanced",
    description:
      "It's quick, safe, and simple. Select several methods of payment.",
  },
  {
    icon: <Pizza className="w-8 h-8 text-white" />,
    title: "Enjoy meals",
    description: "Food is made and delivered directly to your home.",
  },
];

export default function HowItWorks() {
  return (
    <div className="text-center py-10 bg-gradient-to-b from-white to-orange-50">
      <h2 className="text-2xl font-bold text-orange-600 mb-10">How does it work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="bg-yellow-400 rounded-xl p-4 shadow-lg mb-4">
              {step.icon}
            </div>
            <h3 className="font-semibold">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
