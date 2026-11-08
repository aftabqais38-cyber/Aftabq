export interface Program {
  id: string;
  name: string;
  badge: string;
  duration: string;
  category: string;
  description: string;
  subjects: string[];
  eligibility: string;
  careerPath: string;
  evaluationScheme?: string[];
}

export interface Facility {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'campus' | 'labs' | 'students' | 'events';
  categoryLabel: string;
  image: string;
}

export interface AdmissionInquiry {
  studentName: string;
  fatherName: string;
  phone: string;
  marks: string;
  totalMarks?: string;
  program: string;
  message?: string;
  consent: boolean;
}

export interface InquiryRecord extends AdmissionInquiry {
  id: string;
  referenceCode: string;
  status: 'pending' | 'contacted' | 'approved' | 'rejected';
  createdAt: string;
}

export interface ContactSubmission {
  fullName: string;
  phone: string;
  message: string;
}
