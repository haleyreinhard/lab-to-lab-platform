import { Briefcase, Clock } from 'lucide-react';

function Marketplace() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Lab Marketplace</h1>
        <p className="mt-4 text-xl text-gray-600">Find and post laboratory testing opportunities</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold">Latest Opportunities</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {[1, 2, 3].map((item) => (
                <div key={item} className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Environmental Water Testing Project</h3>
                      <p className="text-gray-600 mt-1">Looking for a certified lab to handle 500 water samples...</p>
                      <div className="flex items-center mt-4 space-x-4">
                        <span className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          Posted 2 days ago
                        </span>
                        <span className="flex items-center text-sm text-gray-500">
                          <Briefcase className="h-4 w-4 mr-1" />
                          5 bids
                        </span>
                      </div>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                      Bid Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Post New Opportunity</h2>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Create Listing
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <ul className="space-y-3">
              <li className="flex items-center justify-between text-gray-600 hover:text-blue-600 cursor-pointer">
                <span>Clinical Testing</span>
                <span className="text-gray-500">24</span>
              </li>
              <li className="flex items-center justify-between text-gray-600 hover:text-blue-600 cursor-pointer">
                <span>Environmental Analysis</span>
                <span className="text-gray-500">18</span>
              </li>
              <li className="flex items-center justify-between text-gray-600 hover:text-blue-600 cursor-pointer">
                <span>Food Safety</span>
                <span className="text-gray-500">12</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketplace;