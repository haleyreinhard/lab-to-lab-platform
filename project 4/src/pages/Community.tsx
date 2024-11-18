import React from 'react';
import { MessageSquare, Users, Newspaper } from 'lucide-react';

function Community() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Lab Community</h1>
        <p className="mt-4 text-xl text-gray-600">Connect, share, and grow with fellow laboratory professionals</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <MessageSquare className="h-8 w-8 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Discussion Forums</h2>
          <p className="text-gray-600">Join conversations about lab techniques, equipment, and industry trends.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <Users className="h-8 w-8 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Professional Groups</h2>
          <p className="text-gray-600">Connect with peers in your specific field or area of expertise.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <Newspaper className="h-8 w-8 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Industry News</h2>
          <p className="text-gray-600">Stay updated with the latest developments in laboratory science.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-bold mb-6">Recent Discussions</h2>
        <div className="space-y-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Latest Advances in PCR Testing</h3>
                  <p className="text-gray-600 mt-1">Discussion about new PCR techniques and applications...</p>
                </div>
                <span className="text-sm text-gray-500">2h ago</span>
              </div>
              <div className="flex items-center mt-4 space-x-4">
                <span className="text-sm text-gray-500">15 replies</span>
                <span className="text-sm text-gray-500">24 likes</span>
                <button className="text-blue-600 text-sm hover:text-blue-700">Join Discussion</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Community;