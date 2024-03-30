interface JobState {
    opportunities: Opportunity[];
    selectedOpportunity: Opportunity | null;
  }
  
  interface Opportunities {
    data: any[];
    success: boolean;
    message: string;
    errors: null | any; 
    count: number;
  }

  
  interface SingleOpportunities {
    data: Opportunity;
    success: boolean;
    message: string;
    errors: null | any; 
    count: number;
  }
   interface Opportunity {
    id: string;
    title: string;
    description: string;
    responsibilities: string;
    requirements: string;
    idealCandidate: string;
    categories: string[];
    opType: "virtual" | "physical";
    startDate: string;
    endDate: string;
    deadline: string;
    location: string[];
    requiredSkills: string[];
    whenAndWhere: string;
    orgID: string;
    datePosted: string;
    status: "open" | "closed";
    applicantsCount: number;
    viewsCount: number;
    orgName: string;
    logoUrl: string;
    isBookmarked: boolean;
    isRolling: boolean;
    questions: any;
    perksAndBenefits: any;
    createdAt: string;
    updatedAt: string;
    orgEmail: string;
  }
  interface SignupRequest {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: string;
  }
  
  interface VerifyEmailRequest {
    Email: string;
    OTP: string;
  }
  
  interface User {
    accessToken: string;
    refreshToken: string;
    name: string;
    email: string;
    profilePicUrl: string;
    role: string;
    profileComplete: boolean;
    profileStatus: string;
  }
  
  interface VerifyEmailResponse {
    data: User;
    success: boolean;
    message: string;
    errors: null;
    count: number;
  }