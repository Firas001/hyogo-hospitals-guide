'use client';

import { useState, useMemo } from 'react';
import { hospitals } from '@/data/hospitals';
import HospitalCard from '@/components/HospitalCard';
import FilterBar from '@/components/FilterBar';
import ContributeSection from '@/components/ContributeSection';
import { useTranslations } from 'next-intl';

export default function Home() {
  const [selectedArea, setSelectedArea] = useState<string>('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('');

  const areas = useMemo(() => Array.from(new Set(hospitals.map(h => h.area))).sort(), []);
  const specialties = useMemo(() => {
    const allSpecialties = hospitals.flatMap(h => h.specialties);
    return Array.from(new Set(allSpecialties)).sort();
  }, []);

  const filteredHospitals = useMemo(() => {
    return hospitals.filter(hospital => {
      const matchArea = selectedArea ? hospital.area === selectedArea : true;
      const matchSpecialty = selectedSpecialty
        ? hospital.specialties.includes(selectedSpecialty)
        : true;
      return matchArea && matchSpecialty;
    });
  }, [selectedArea, selectedSpecialty]);

  const t = useTranslations('common');

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden border-b border-gray-100 shadow-sm">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-500/5 mix-blend-multiply" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        </div>
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-5xl bg-clip-text text-transparent bg-linear-to-r from-blue-700 to-indigo-700">
            {t('title')}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed font-light">
            {t('heroDescription')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters Panel */}
        <div className="relative -mt-20 z-10">
          <FilterBar
            areas={areas}
            specialties={specialties}
            selectedArea={selectedArea}
            setSelectedArea={setSelectedArea}
            selectedSpecialty={selectedSpecialty}
            setSelectedSpecialty={setSelectedSpecialty}
          />
        </div>

        {/* Results Info */}
        <div className="mt-8 mb-6 flex items-center justify-between border-b border-slate-200 pb-4">
          <h2 className="text-xl font-semibold text-slate-800">
            {t('searchResults')}
          </h2>
          <span className="bg-white px-4 py-1.5 rounded-full shadow-sm text-sm font-medium text-slate-600 border border-slate-200">
            <span className="text-blue-600 font-bold">{filteredHospitals.length}</span> {t('facilitiesFound')}
          </span>
        </div>

        {/* Hospitals Grid */}
        {filteredHospitals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHospitals.map((hospital, index) => (
              <HospitalCard key={index} hospital={hospital} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-2xl border border-dashed border-slate-300 shadow-sm">
            <div className="w-20 h-20 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="mt-2 text-lg font-medium text-slate-900">{t('noFacilitiesFound')}</h3>
            <p className="mt-1 text-slate-500 mb-6 max-w-md mx-auto">{t('noFacilitiesDesc')}</p>
            <button
              onClick={() => { setSelectedArea(''); setSelectedSpecialty(''); }}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              {t('clearAllFilters')}
            </button>
          </div>
        )}
      </div>

      <ContributeSection />
    </main>
  );
}