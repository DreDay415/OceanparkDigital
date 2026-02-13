import React from 'react';
import { Waves } from '../components/Waves';
import { Services } from '../components/Services';
import { Code, Rocket, Search, ShoppingCart, Workflow, Globe2 } from 'lucide-react';

export function Home() {
  const services = [
    {
      title: 'SEO Optimization',
      description:
        'We optimize your website to rank higher for the keywords your clients are actively searching for, driving organic growth.',
      icon: Search,
    },
    {
      title: 'Paid Media Campaigns',
      description: 'We strategize, test, and optimize paid campaigns to maximize your ROAS and CTR.',
      icon: Rocket,
    },
    {
      title: 'Google Business Profile',
      description: 'We manage and optimize your Google Business Profile to boost local visibility.',
      icon: Globe2,
    },
    {
      title: 'Website Development',
      description: 'From landing pages to full-scale websites, we bring your brand to life.',
      icon: Code,
    },
    {
      title: 'AI Integrations',
      description: 'Seamlessly connect e-commerce with fulfillment, accounting, and more.',
      icon: Workflow,
    },
    {
      title: 'Digital Commerce',
      description: 'We help businesses monetize their domains and digital presence.',
      icon: ShoppingCart,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-gradient-to-r from-[#543ab7] to-[#00acc1]">
        <div className="container mx-auto px-4">
          <div className="inner-header flex h-[65vh] items-center justify-center">
            <div className="max-w-3xl mx-auto text-center text-white">
              <div className="flex items-center justify-center gap-6 mb-6">
                <svg
                  version="1.1"
                  className="w-[50px] h-[50px] shrink-0 fill-white"
                  baseProfile="tiny"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 500"
                >
                  <path d="M250.4,0.8C112.7,0.8,1,112.4,1,250.2c0,137.7,111.7,249.4,249.4,249.4c137.7,0,249.4-111.7,249.4-249.4 C499.8,112.4,388.1,0.8,250.4,0.8z M383.8,326.3c-62,0-101.4-14.1-117.6-46.3c-17.1-34.1-2.3-75.4,13.2-104.1 c-22.4,3-38.4,9.2-47.8,18.3c-11.2,10.9-13.6,26.7-16.3,45c-3.1,20.8-6.6,44.4-25.3,62.4c-19.8,19.1-51.6,26.9-100.2,24.6l1.8-39.7 c35.9,1.6,59.7-2.9,70.8-13.6c8.9-8.6,11.1-22.9,13.5-39.6c6.3-42,14.8-99.4,141.4-99.4h41L333,166c-12.6,16-45.4,68.2-31.2,96.2 c9.2,18.3,41.5,25.6,91.2,24.2l1.1,39.8C390.5,326.2,387.1,326.3,383.8,326.3z" />
                </svg>
                <h1 className="text-5xl font-light">OceanPark Digital</h1>
              </div>
              <p className="text-xl mb-8 text-white/90">
                Delete Outerspace. Bring Back Inner Space.
              </p>
              <a
                href="mailto:andrekirsch7@gmail.com"
                className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
        <Waves />
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Deploy Web Products Weekly </h2>
            <p className="text-xl text-gray-600">
              Build for Impact
            </p>
          </div>
        </div>
      </div>

      <Services services={services} />

      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <a href="mailto:partnerships@oceanparkdigital.com" className="connect-btn">
            Get Started Today
          </a>
          <p className="text-gray-600 mb-4">© 2024 Ocean Park Digital. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

