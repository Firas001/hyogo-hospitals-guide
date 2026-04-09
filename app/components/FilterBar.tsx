interface FilterBarProps {
    areas: string[];
    specialties: string[];
    selectedArea: string;
    setSelectedArea: (area: string) => void;
    selectedSpecialty: string;
    setSelectedSpecialty: (specialty: string) => void;
}

export default function FilterBar({
    areas,
    specialties,
    selectedArea,
    setSelectedArea,
    selectedSpecialty,
    setSelectedSpecialty,
}: FilterBarProps) {
    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-8 flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Area</label>
                <select
                    value={selectedArea}
                    onChange={(e) => setSelectedArea(e.target.value)}
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2.5 bg-gray-50 outline-none"
                >
                    <option value="">All Areas</option>
                    {areas.map((area) => (
                        <option key={area} value={area}>{area}</option>
                    ))}
                </select>
            </div>

            <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Specialty</label>
                <select
                    value={selectedSpecialty}
                    onChange={(e) => setSelectedSpecialty(e.target.value)}
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2.5 bg-gray-50 outline-none"
                >
                    <option value="">All Specialties</option>
                    {specialties.map((specialty) => (
                        <option key={specialty} value={specialty}>{specialty}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}