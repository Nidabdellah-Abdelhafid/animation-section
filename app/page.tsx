'use client';

import { useEffect, useState } from 'react';

const cards = [
  {
    id: 1,
    bgColor: 'bg-cyan-50',
    accentColor: 'text-cyan-400',
    buttonColor: 'bg-cyan-400',
    iconColor: 'text-cyan-400',
    title: 'Built on Expertise',
    description: 'Une équipe pluridisciplinaire de designers, développeurs et stratèges unis par une même vision : créer de la valeur à travers le numérique.',
    icon: '🧠',
  },
  {
    id: 2,
    bgColor: 'bg-pink-50',
    accentColor: 'text-pink-400',
    buttonColor: 'bg-pink-400',
    iconColor: 'text-pink-400',
    title: 'Approche Transparente',
    description: 'Nous travaillons en toute clarté sur les objectifs, les délais et les résultats pour construire une relation de confiance durable.',
    icon: '📄',
  },
  {
    id: 3,
    bgColor: 'bg-amber-50',
    accentColor: 'text-amber-500',
    buttonColor: 'bg-amber-400',
    iconColor: 'text-amber-500',
    title: 'Impact Local et Durable',
    description: 'En tant que coopérative marocaine, nous soutenons l\'économie locale tout en garantissant des projets à fort impact digital.',
    icon: '📦',
  },
  {
    id: 4,
    bgColor: 'bg-emerald-50',
    accentColor: 'text-emerald-400',
    buttonColor: 'bg-emerald-400',
    iconColor: 'text-emerald-400',
    title: 'Innovation Continue',
    description: 'Nous améliorons sans cesse nos méthodes et technologies pour offrir des expériences digitales modernes et performantes.',
    icon: '⚙️',
  },
];

export default function Home() {
  const [activeCard, setActiveCard] = useState(0);
  const [showFixed, setShowFixed] = useState(false);
  const [cardVisibility, setCardVisibility] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Get the services section element
      const servicesSection = document.getElementById('services-section');
      const servicesSectionHeight = servicesSection?.offsetHeight || 0;

      // Show fixed section only after scrolling past services
      setShowFixed(scrollPosition > servicesSectionHeight - windowHeight / 2);

      // Calculate which card should be active based on scroll position after services section
      const relativeScroll = Math.max(0, scrollPosition - servicesSectionHeight);
      const cardIndex = Math.min(
        Math.floor(relativeScroll / (windowHeight * 0.8)),
        cards.length - 1
      );

      setActiveCard(cardIndex);

      // Calculate card visibility based on scroll position
      const visibleCards: number[] = [];
      cards.forEach((_, index) => {
        const cardElement = document.getElementById(`card-${index}`);
        if (cardElement) {
          const rect = cardElement.getBoundingClientRect();
          const isVisible = rect.top < windowHeight * 0.75 && rect.bottom > windowHeight * 0.25;
          if (isVisible) {
            visibleCards.push(index);
          }
        }
      });
      setCardVisibility(visibleCards);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentCard = cards[activeCard];

  return (
    <div>
      {/* Nos Services Section */}
      <section id="services-section" className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Graphic Design Card */}
            <div className="border border-amber-200 rounded-3xl p-8 bg-gradient-to-br from-amber-50/50 to-white hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Graphic Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Création d'identités visuelles, logos et supports de communication cohérents avec votre marque.
              </p>
            </div>

            {/* Développement Card */}
            <div className="border border-blue-200 rounded-3xl p-8 bg-gradient-to-br from-blue-50/50 to-white hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Développement</h3>
              <p className="text-gray-600 leading-relaxed">
                Solutions web et applications sur mesure, performantes et évolutives selon vos besoins.
              </p>
            </div>

            {/* Marketing Digital Card */}
            <div className="border border-pink-200 rounded-3xl p-8 bg-gradient-to-br from-pink-50/50 to-white hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Marketing Digital</h3>
              <p className="text-gray-600 leading-relaxed">
                Stratégies de visibilité en ligne pour attirer, engager et convertir vos audiences cibles.
              </p>
            </div>

            {/* E-commerce Solutions Card */}
            <div className="border border-pink-200 rounded-3xl p-8 bg-gradient-to-br from-pink-50/50 to-white hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">E-commerce Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Création de boutiques en ligne sécurisées, conçues pour maximiser vos ventes et votre impact.
              </p>
            </div>

            {/* Centre d'Appels Card */}
            <div className="border border-emerald-200 rounded-3xl p-8 bg-gradient-to-br from-emerald-50/50 to-white hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Centre d'Appels</h3>
              <p className="text-gray-600 leading-relaxed">
                Support client professionnel et gestion d'appels sortants pour renforcer la relation client.
              </p>
            </div>

            {/* UX/UI Design Card */}
            <div className="border border-amber-200 rounded-3xl p-8 bg-gradient-to-br from-amber-50/50 to-white hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">UX/UI Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Conception d'expériences utilisateurs intuitives et interfaces esthétiques pour vos produits digitaux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* tow Section */}
      <div className="relative flex flex-col lg:flex-row">

      {/* Sticky Left Section - stops at end of container */}
      <div className="lg:w-1/2 lg:sticky lg:top-0 lg:h-screen">
        <div className="h-screen flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-xl">
            <div className={`inline-block px-4 py-2 rounded-full border-2 ${currentCard.accentColor} border-current mb-6 text-sm`}>
              Pourquoi nous
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
              Pourquoi choisir
            </h1>
            <h1 className={`text-5xl lg:text-6xl font-bold mb-6 ${currentCard.accentColor}`}>
              ARCAD<span className="text-gray-900">?</span>
            </h1>

            <p className="text-gray-500 mb-8 text-lg leading-relaxed">
              ARCAD Collective est une coopérative digitale marocaine qui mise sur la collaboration, la transparence et l'expertise locale pour offrir des solutions sur mesure, durables et efficaces.
            </p>

            <button className={`${currentCard.buttonColor} text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity`}>
              About Us
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Right Section - Cards */}
      <div className="lg:w-1/2">
        {cards.map((card, index) => {
          const isVisible = cardVisibility.includes(index);
          return (
            <div
              key={card.id}
              id={`card-${index}`}
              className={`min-h-screen flex items-center justify-center p-8 lg:p-16 ${card.bgColor} transition-all duration-700`}
            >
              <div className={`max-w-md transition-all duration-700 transform ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}>
                <div className={`text-6xl mb-6 ${card.iconColor}`}>
                  {card.icon}
                </div>
                <h2 className={`text-3xl font-bold mb-4 ${card.iconColor}`}>
                  {card.title}
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      </div>

      {/* Nos partenaires Section - Full width below scroll section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            Nos partenaires de <span className="text-cyan-400">confiance</span>
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20">
            {/* Partner Logo 1 - Star */}
            <div className="opacity-40 hover:opacity-70 transition-opacity">
              <svg className="w-24 h-24 text-gray-400" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z" />
              </svg>
            </div>

            {/* Partner Logo 2 - Maroc Telecom */}
            <div className="opacity-40 hover:opacity-70 transition-opacity">
              <div className="text-gray-400 font-bold text-2xl">
                <span className="text-3xl">Maroc</span><br/>
                <span className="text-xl">Telecom</span>
              </div>
            </div>

            {/* Partner Logo 3 - Royal Air Maroc */}
            <div className="opacity-40 hover:opacity-70 transition-opacity">
              <svg className="w-28 h-28 text-gray-400" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M30 50 L50 30 L70 50 L50 40 Z"/>
                <text x="50" y="75" fontSize="12" textAnchor="middle" fill="currentColor">Royal Air Maroc</text>
              </svg>
            </div>

            {/* Partner Logo 4 - Société Générale */}
            <div className="opacity-40 hover:opacity-70 transition-opacity">
              <div className="flex items-center gap-3">
                <div className="w-3 h-12 bg-gray-400 rounded"></div>
                <div className="text-gray-400 font-bold">
                  <div className="text-xl tracking-wider">SOCIETE</div>
                  <div className="text-2xl tracking-wider">GENERALE</div>
                </div>
              </div>
            </div>

            {/* Partner Logo 5 - OCP */}
            <div className="opacity-40 hover:opacity-70 transition-opacity">
              <div className="text-center">
                <svg className="w-20 h-20 text-gray-400 mx-auto mb-2" viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="3" fill="none"/>
                  <path d="M40 45 Q50 35 60 45 Q50 55 40 45"/>
                </svg>
                <div className="text-gray-400 font-bold text-2xl tracking-widest">OCP</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  );
}
