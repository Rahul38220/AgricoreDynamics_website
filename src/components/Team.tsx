import { Mail, Video, Users } from 'lucide-react';

export function Team() {
  const teamMembers = [
    {
      name: 'Yug Bhimani',
      grade: 'Grade 11',
      division: '11-A',
      bio: 'App, Working model',
      image: '/placeholder-member.jpg',
    },
    {
      name: 'Rahul Trivedi',
      grade: 'Grade 11',
      division: '11-A',
      bio: 'Coding, Working model',
      image: '/placeholder-member.jpg',
    },
    {
      name: 'Manan Parsana',
      grade: 'Grade 11',
      division: '11-A',
      bio: 'Website, Journey Video',
      image: '/placeholder-member.jpg',
    },
    {
      name: 'Darsh Ramani',
      grade: 'Grade 11',
      division: '11-A',
      bio: 'Poster, Working model',
      image: '/placeholder-member.jpg',
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4">The Team</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Meet the innovative minds behind AgriCore Dynamics. Our diverse team brings together expertise in chemistry, mathematics, computer science, and engineering to create solutions for modern agriculture.
          </p>
        </div>

        {/* Group Photo Section */}
        <div className="mb-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 p-6">
            <div className="flex items-center space-x-3 text-white">
              <Users size={32} />
              <h2>Team Photo</h2>
            </div>
          </div>
          <div className="p-8">
            <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Users size={64} className="mx-auto mb-4 text-gray-400" />
                <p className="text-lg">[Group Photo with Product]</p>
                <p className="text-sm">Placeholder for team photo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="mb-16">
          <h2 className="text-center mb-8">Team Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-blue-100 to-green-100 aspect-square flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                    <p className="text-sm">[Individual Photo]</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-gray-900">{member.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {member.grade}
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      {member.division}
                    </span>
                  </div>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Video */}
        <div className="mb-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 p-6">
            <div className="flex items-center space-x-3 text-white">
              <Video size={32} />
              <h2>Our Journey</h2>
            </div>
          </div>
          <div className="p-8">
            <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center mb-4">
              <div className="text-center text-gray-500">
                <Video size={64} className="mx-auto mb-4 text-gray-400" />
                <p className="text-lg">[Journey Video Placeholder]</p>
                <p className="text-sm">Link to project journey video</p>
              </div>
            </div>
            <div className="text-center">
              <a
                href="#"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-shadow"
              >
                <Video size={20} />
                <span>Watch Our Journey</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Mail className="text-blue-600" size={32} />
            <h2>Contact Us</h2>
          </div>
          <p className="text-gray-700 mb-4">
            Have questions about our project? We&apos;d love to hear from you!
          </p>
          <a
            href="mailto:ispc.agricoredynamics@snk.edu"
            className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-shadow"
          >
            ispc.agricoredynamics@snk.edu
          </a>
        </div>
      </div>
    </div>
  );
}