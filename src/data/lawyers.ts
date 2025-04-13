
export interface Lawyer {
  id: number;
  name: string;
  image: string;
  specialization: string[];
  location: string;
  experience: number;
  rating: number;
  casesWon: number;
  totalCases: number;
  about: string;
  education: string[];
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
  availability: string[];
}

export const lawyers: Lawyer[] = [
  {
    id: 1,
    name: "Alexandra Johnson",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2187&auto=format&fit=crop",
    specialization: ["Criminal Law", "Civil Rights"],
    location: "New York, NY",
    experience: 12,
    rating: 4.8,
    casesWon: 87,
    totalCases: 103,
    about: "Alexandra Johnson is a highly respected criminal defense attorney with over 12 years of experience. She specializes in complex criminal cases and has successfully defended clients against serious charges, achieving impressive acquittal rates.",
    education: [
      "J.D., Harvard Law School",
      "B.A. in Political Science, Yale University"
    ],
    contactInfo: {
      phone: "(212) 555-1234",
      email: "alexandra.johnson@legalconsult.com",
      address: "123 Legal Avenue, New York, NY 10001"
    },
    availability: ["Monday", "Tuesday", "Thursday", "Friday"]
  },
  {
    id: 2,
    name: "Sarthak Singh",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop",
    specialization: ["Family Law", "Divorce"],
    location: "Chicago, IL",
    experience: 15,
    rating: 4.9,
    casesWon: 142,
    totalCases: 156,
    about: "Marcus Williams has dedicated his 15-year career to helping families navigate complex legal matters with compassion and expertise. His approach combines thorough legal knowledge with genuine care for his clients' well-being.",
    education: [
      "J.D., University of Chicago Law School",
      "B.A. in Psychology, Northwestern University"
    ],
    contactInfo: {
      phone: "(312) 555-5678",
      email: "marcus.williams@legalconsult.com",
      address: "456 Family Court Lane, Chicago, IL 60601"
    },
    availability: ["Monday", "Wednesday", "Thursday", "Friday"]
  },
  {
    id: 3,
    name: "Sophia Chen",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    specialization: ["Intellectual Property", "Corporate Law"],
    location: "San Francisco, CA",
    experience: 8,
    rating: 4.7,
    casesWon: 53,
    totalCases: 61,
    about: "Sophia Chen is a rising star in intellectual property law, with particular expertise in technology patents and startup legal matters. She brings innovative thinking and technical knowledge to complex IP challenges.",
    education: [
      "J.D., Stanford Law School",
      "B.S. in Computer Science, MIT"
    ],
    contactInfo: {
      phone: "(415) 555-9012",
      email: "sophia.chen@legalconsult.com",
      address: "789 Tech Boulevard, San Francisco, CA 94105"
    },
    availability: ["Tuesday", "Wednesday", "Thursday"]
  },
  {
    id: 4,
    name: "James Rodriguez",
    image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=2121&auto=format&fit=crop",
    specialization: ["Personal Injury", "Medical Malpractice"],
    location: "Los Angeles, CA",
    experience: 20,
    rating: 4.9,
    casesWon: 189,
    totalCases: 205,
    about: "With two decades of experience, James Rodriguez has built a reputation as a formidable advocate for injury victims. His thorough approach to case preparation and compelling courtroom presence have resulted in numerous landmark settlements.",
    education: [
      "J.D., UCLA School of Law",
      "B.A. in Biology, University of Southern California"
    ],
    contactInfo: {
      phone: "(310) 555-3456",
      email: "james.rodriguez@legalconsult.com",
      address: "1010 Victory Way, Los Angeles, CA 90001"
    },
    availability: ["Monday", "Tuesday", "Friday"]
  },
  {
    id: 5,
    name: "Amara Washington",
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=1986&auto=format&fit=crop",
    specialization: ["Civil Rights", "Constitutional Law"],
    location: "Washington, DC",
    experience: 18,
    rating: 4.8,
    casesWon: 112,
    totalCases: 130,
    about: "Amara Washington is a passionate civil rights attorney who has fought tirelessly for equality and justice. Her landmark cases have helped shape policy and protect the constitutional rights of marginalized communities.",
    education: [
      "J.D., Georgetown University Law Center",
      "B.A. in Political Science, Howard University"
    ],
    contactInfo: {
      phone: "(202) 555-7890",
      email: "amara.washington@legalconsult.com",
      address: "1600 Justice Circle, Washington, DC 20001"
    },
    availability: ["Monday", "Wednesday", "Thursday", "Friday"]
  },
  {
    id: 6,
    name: "Robert Kim",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    specialization: ["Immigration Law", "Human Rights"],
    location: "Boston, MA",
    experience: 10,
    rating: 4.7,
    casesWon: 124,
    totalCases: 146,
    about: "Robert Kim specializes in complex immigration cases, asylum applications, and human rights advocacy. His multilingual skills and cultural competence make him especially effective in representing diverse clientele.",
    education: [
      "J.D., Boston University School of Law",
      "B.A. in International Relations, Tufts University"
    ],
    contactInfo: {
      phone: "(617) 555-1212",
      email: "robert.kim@legalconsult.com",
      address: "888 Global Street, Boston, MA 02108"
    },
    availability: ["Tuesday", "Wednesday", "Thursday", "Friday"]
  }
];
