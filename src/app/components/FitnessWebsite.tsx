import React, { useState } from 'react';

const FitnessWebsite = () => {
  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto">
      <PersonalTrainingSection />
      <ClassicCoursesSection />
    </div>
  );
};

// Personal Training Section Component
const PersonalTrainingSection = () => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div className="flex flex-col md:flex-row w-full bg-stone-50 mb-8">
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">ENTRAÎNEMENT PERSONNEL</h2>
        <p className="text-base md:text-lg mb-8 text-gray-800 leading-relaxed">
          Conçu pour franchir les obstacles, accélérer le pas et obtenir des résultats durables, 
          lentraînement personnel combine le savoir dune solide équipe à la discipline dune 
          approche sur mesure.
        </p>
        
        <button 
          className={`border border-gray-800 px-6 py-3 w-48 text-sm uppercase tracking-wide transition duration-300 ${hovered ? 'bg-gray-800 text-white' : 'bg-transparent text-gray-800'}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          EN SAVOIR PLUS
        </button>
      </div>
      
      <div className="w-full md:w-1/2 bg-gray-200 min-h-[400px] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute bottom-20 right-10 text-white text-right max-w-xs">
          <p className="text-xl md:text-2xl italic">
            « Le succès est à portée de main—et lentraînement personnel permet dy arriver plus rapidement. »
          </p>
        </div>
        <div className="absolute inset-0 flex items-end justify-center">
          <div className="w-full h-2/3 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

// Classic Courses Section Component
const ClassicCoursesSection = () => {
  // Using string as initial state instead of null to avoid type issues
  const [hoveredButton, setHoveredButton] = useState("");
  
  const courseTypes = [
    {
      id: 'boxe',
      title: 'BOXE',
      description: 'Une discipline authentique qui propose un enchaînement de rounds pour canaliser l énergie et travailler l endurance globale du corps.'
    },
    {
      id: 'yoga',
      title: 'YOGA',
      description: 'Dans un environnement à 32°C, une méditation en mouvements avec des enchaînements dynamiques pour développer amplitude, et encourager un renforcement musculaire global.'
    }
  ];
  
  return (
    <div className="flex flex-col md:flex-row w-full bg-stone-50">
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">COURS CLASSIQUES</h2>
        <p className="text-base md:text-lg mb-12 text-gray-800 leading-relaxed">
          Pour enrichir votre programme dentraînement, ils créent une dynamique
          puissante entre dépense énergétique, récupération active et amélioration de la
          mobilité.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {courseTypes.map(course => (
            <div key={course.id} className="flex flex-col">
              <h3 className="text-2xl font-semibold mb-4">{course.title}</h3>
              <p className="text-sm text-gray-700 mb-6 leading-relaxed">{course.description}</p>
              <button 
                className={`border border-gray-800 px-6 py-3 w-48 text-sm uppercase tracking-wide transition duration-300 ${hoveredButton === course.id ? 'bg-gray-800 text-white' : 'bg-transparent text-gray-800'}`}
                onMouseEnter={() => setHoveredButton(course.id)}
                onMouseLeave={() => setHoveredButton("")}
              >
                EN SAVOIR PLUS
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="w-full md:w-1/2 bg-gray-200 min-h-[400px] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default FitnessWebsite;