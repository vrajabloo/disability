export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  bio: string;
  needs: {
    id: string;
    category: 'Medical' | 'Equipment' | 'Transportation' | 'Housing' | 'Other';
    description: string;
    priority: 'Low' | 'Medium' | 'High';
    status: 'Open' | 'InProgress' | 'Fulfilled';
  }[];
  disabilities: {
    type: string;
    description: string;
  }[];
  preferences: {
    profileVisibility: 'Public' | 'Private' | 'Supporters';
    contactMethod: 'Email' | 'Phone' | 'Platform';
  };
  location: {
    city: string;
    state: string;
    country: string;
  };
  createdAt: string;
  updatedAt: string;
}