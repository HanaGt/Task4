// This is a simplified example implementation for demonstration purposes.
// In a real application, you would fetch job data from a database or an API.

interface Job {
    id: number;
    title: string;
    logo: string;
    organization: string;
    description: string; // Assuming the job data includes a description
  }
  
  const jobs: Job[] = [
    {
      id: 1,
      title: "Social Media Assistant",
      logo: "logo1.jpg",
      organization: "Young Men Christians Association. Addis Ababa, Ethiopia",
      description: "Description for Social Media Assistant"
    },
    {
      id: 2,
      title: "Social Media Assistant",
      logo: "logo2.jpg",
      organization: "Young Men Christians Association, Addis Ababa, Ethiopia",
      description: " As a Social Media Assistant, you will work closely with the social media manager or marketing team to execute social media strategies and campaigns. You will be responsible for assisting in the creation and scheduling of engaging content, monitoring social media channels, and interacting with followers."
    },
    {
        id: 3,
        title: "Volenteer Teacher",
        logo: "logo3.jpg",
        organization: "School Under Tree, Addis Ababa, Ethiopia",
        description: "  As a Teacher, you will work closely with the social media manager or marketing team to execute social media strategies and campaigns. You will be responsible for assisting in the creation and scheduling of engaging content, monitoring social media channels, and interacting with followers."
      },
      {
        id: 4,
        title: "Social Media Assistant",
        logo: "logo4.jpg",
        organization: "Young Men Christians Association, Addis Ababa, Ethiopia",
        description: "  As a Social Media Assistant, you will work closely with the social media manager or marketing team to execute social media strategies and campaigns. You will be responsible for assisting in the creation and scheduling of engaging content, monitoring social media channels, and interacting with followers."
      },
   
  ];
  
  export const getJob = (id: number): Job | undefined => {
    return jobs.find(job => job.id === id);
  };
  