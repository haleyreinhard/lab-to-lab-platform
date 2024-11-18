import { useState } from 'react';
import { Search, MapPin, Filter, Building2 } from 'lucide-react';

const realLabs = [
  {
    id: 1,
    name: "Quest Diagnostics",
    location: "Secaucus, NJ",
    services: ["Clinical Testing", "Drug Testing", "COVID-19 Testing"],
    certifications: ["CLIA", "CAP", "ISO 15189"],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2940"
  },
  {
    id: 2,
    name: "LabCorp",
    location: "Burlington, NC",
    services: ["Diagnostic Testing", "Genomic Testing", "Clinical Trials"],
    certifications: ["CLIA", "CAP"],
    image: "https://images.unsplash.com/photo-1581093458791-9d58946cc0d8?auto=format&fit=crop&q=80&w=2940"
  },
  {
    id: 3,
    name: "Mayo Clinic Laboratories",
    location: "Rochester, MN",
    services: ["Clinical Testing", "Research Testing", "Genetic Testing"],
    certifications: ["CLIA", "CAP", "AABB"],
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=2940"
  }
];

function Directory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredLabs, setFilteredLabs] = useState(realLabs);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    const filtered = realLabs.filter(lab => 
      lab.name.toLowerCase().includes(term) ||
      lab.location.toLowerCase().includes(term) ||
      lab.services.some(service => service.toLowerCase().includes(term))
    );
    
    setFilteredLabs(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search and Filter Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex-grow relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search labs by name, location, or services..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <Filter className="h-5 w-5 text-gray-600" />
            <span>Filters</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            <MapPin className="h-5 w-5" />
            <span>View Map</span>
          </button>
        </div>
      </div>

      {/* Results Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLabs.map((lab) => (
          <div key={lab.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <img src={lab.image} alt={lab.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{lab.name}</h3>
                  <div className="flex items-center text-gray-600 mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{lab.location}</span>
                  </div>
                </div>
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-900">Services:</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {lab.services.map((service, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-900">Certifications:</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {lab.certifications.map((cert, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              <button className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Directory;