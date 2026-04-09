import { Hospital } from '../types';

export default function HospitalCard({ hospital }: { hospital: Hospital }) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 p-6 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-800 leading-tight">{hospital.name}</h3>
                <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ml-3">
                    {hospital.area}
                </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
                {hospital.specialties.map((specialty, index) => (
                    <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md">
                        {specialty}
                    </span>
                ))}
            </div>

            <div className="space-y-2 text-sm text-gray-600 flex-grow">
                <p><strong className="text-gray-700">Languages:</strong> {hospital.languages}</p>
                <p><strong className="text-gray-700">Phone:</strong> {hospital.phone}</p>
                <p><strong className="text-gray-700">Hours:</strong> {hospital.hours}</p>
                <p><strong className="text-gray-700">Address:</strong> {hospital.address}</p>
            </div>

            <div className="mt-6 flex gap-3 border-t pt-4">
                <a
                    href={hospital.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
                >
                    Website
                </a>
                <a
                    href={hospital.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium py-2 px-4 rounded-lg transition-colors"
                >
                    Map
                </a>
            </div>
        </div>
    );
}