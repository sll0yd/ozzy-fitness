import React, { useState } from 'react';

const SignatureCoursesSection = () => {
  const [hoveredButton, setHoveredButton] = useState("");
  
  const courseTypes = [
    {
      id: 'athletique',
      title: 'ATHLÉTIQUE',
      description: 'Mouvements exécutés à différentes intensités, avec un accent sur la force, la puissance et lendurance, pour développer un physique athlétique et équilibrée.'
    },
    {
      id: 'metabolique',
      title: 'MÉTABOLIQUE',
      description: 'Mouvements exécutés à différentes intensités pour tester votre endurance, brûler des calories et stimuler votre métabolisme.'
    },
    {
      id: 'composition',
      title: 'COMPOSITION',
      description: 'Mouvements effectués à volume élevé et à tempo contrôlé pour développer lendurance musculaire et améliorer la composition corporelle.'
    }
  ];
  
  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Left side - Image with quote */}
      <div className="w-full md:w-2/5 bg-stone-100 relative">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 text-black max-w-xs">
          <p className="text-xl italic font-light">
            « Ça ne devient pas plus facile. Vous devenez plus fort.e à chaque séance. »
          </p>
        </div>
      </div>
      
      {/* Right side - Content */}
      <div className="w-full md:w-3/5 bg-gray-900 p-8 md:p-16 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">COURS SIGNATURES</h2>
        
        <p className="text-base mb-12 leading-relaxed">
          Chaque cours est efficace en soi, mais ensemble, ils forment un programme complet pour des résultats optimaux. 
          Conçus pour se compléter, ces séances offrent un équilibre parfait entre force, endurance et composition corporelle. 
          Structurés en cycles de 4 semaines, avec des ajustements stratégiques de lintensité et du volume pour correspondre 
          à vos progrès et encourager une amélioration continue.
        </p>
        
        <div className="space-y-12">
          {courseTypes.map(course => (
            <div key={course.id} className="border-t border-gray-700 pt-8">
              <h3 className="text-2xl font-semibold mb-4">{course.title}</h3>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">{course.description}</p>
              <button 
                className={`border border-white px-6 py-3 w-48 text-sm uppercase tracking-wide transition duration-300 ${hoveredButton === course.id ? 'bg-white text-gray-900' : 'bg-transparent text-white'}`}
                onMouseEnter={() => setHoveredButton(course.id)}
                onMouseLeave={() => setHoveredButton("")}
              >
                EN SAVOIR PLUS
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignatureCoursesSection;