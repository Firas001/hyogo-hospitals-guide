'use client';

import { useState, useMemo } from 'react';
import hospitalsData from './data/hospitals.json';
import HospitalCard from './components/HospitalCard';
import FilterBar from './components/FilterBar';
import { Hospital } from './types';

export default function Home() {
  const [selectedArea, setSelectedArea] = useState<string>('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('');

  const hospitals: Hospital[] = hospitalsData;

  // استخراج قائمة المناطق والتخصصات الفريدة للدروب داون
  const areas = useMemo(() => Array.from(new Set(hospitals.map(h => h.area))).sort(), [hospitals]);
  const specialties = useMemo(() => {
    const allSpecialties = hospitals.flatMap(h => h.specialties);
    return Array.from(new Set(allSpecialties)).sort();
  }, [hospitals]);

  // تطبيق الفلترة
  const filteredHospitals = useMemo(() => {
    return hospitals.filter(hospital => {
      const matchArea = selectedArea ? hospital.area === selectedArea : true;
      const matchSpecialty = selectedSpecialty
        ? hospital.specialties.includes(selectedSpecialty)
        : true;
      return matchArea && matchSpecialty;
    });
  }, [selectedArea, selectedSpecialty, hospitals]);

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Hyogo Medical Directory
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Find English-speaking clinics and hospitals in Kobe, Nishinomiya, and surrounding areas.
          </p>
        </div>

        {/* Filters */}
        <FilterBar
          areas={areas}
          specialties={specialties}
          selectedArea={selectedArea}
          setSelectedArea={setSelectedArea}
          selectedSpecialty={selectedSpecialty}
          setSelectedSpecialty={setSelectedSpecialty}
        />

        {/* Results Info */}
        <div className="mb-6 text-gray-600 font-medium">
          Showing {filteredHospitals.length} {filteredHospitals.length === 1 ? 'hospital' : 'hospitals'}
        </div>

        {/* Hospitals Grid */}
        {filteredHospitals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHospitals.map((hospital) => (
              <HospitalCard key={hospital.id} hospital={hospital} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-gray-100">
            <p className="text-gray-500 text-lg">No hospitals found matching your criteria.</p>
            <button
              onClick={() => { setSelectedArea(''); setSelectedSpecialty(''); }}
              className="mt-4 text-blue-600 hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}