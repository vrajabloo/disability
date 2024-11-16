import React from 'react';
import { MapPin, Mail, Phone, Shield, Calendar } from 'lucide-react';
import type { UserProfile } from '../../types/user';

interface ProfileViewProps {
  profile: UserProfile;
}

export default function ProfileView({ profile }: ProfileViewProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-indigo-600 px-6 py-12">
          <div className="flex flex-col items-center">
            <div className="h-24 w-24 rounded-full bg-white p-1">
              <img
                src={profile.avatar || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'}
                alt={profile.name}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <h1 className="mt-4 text-3xl font-bold text-white">{profile.name}</h1>
            <div className="mt-2 flex items-center text-indigo-100">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{`${profile.location.city}, ${profile.location.state}, ${profile.location.country}`}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-8">
          {/* Contact Information */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-2" />
                <span>{profile.email}</span>
              </div>
              {profile.phone && (
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>{profile.phone}</span>
                </div>
              )}
            </div>
          </div>

          {/* Disabilities */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Disabilities</h2>
            <div className="space-y-4">
              {profile.disabilities.map((disability, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900">{disability.type}</h3>
                  <p className="mt-2 text-gray-600">{disability.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Needs */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Current Needs</h2>
            <div className="space-y-4">
              {profile.needs.map((need) => (
                <div key={need.id} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      {need.category}
                    </span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      need.priority === 'High' 
                        ? 'bg-red-100 text-red-800'
                        : need.priority === 'Medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {need.priority}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-600">{need.description}</p>
                  <div className="mt-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      need.status === 'Open'
                        ? 'bg-blue-100 text-blue-800'
                        : need.status === 'InProgress'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {need.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy Settings */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Shield className="h-5 w-5 text-indigo-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Privacy Settings</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 rounded-lg p-4">
              <div>
                <span className="block text-sm font-medium text-gray-700">Profile Visibility</span>
                <span className="mt-1 block text-sm text-gray-600">{profile.preferences.profileVisibility}</span>
              </div>
              <div>
                <span className="block text-sm font-medium text-gray-700">Preferred Contact Method</span>
                <span className="mt-1 block text-sm text-gray-600">{profile.preferences.contactMethod}</span>
              </div>
            </div>
          </div>

          {/* Member Since */}
          <div className="flex items-center text-gray-600">
            <Calendar className="h-5 w-5 mr-2" />
            <span>Member since {new Date(profile.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}