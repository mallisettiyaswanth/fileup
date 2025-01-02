import CommonHeader from "@/components/global/common-header";
import Folder from "@/components/global/file-types/folder";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const tabs = [
  {
    title: "All folders",
    value: "all-folders",
  },
  {
    title: "My folders",
    value: "my-folders",
  },
  {
    title: "Shared folders",
    value: "shared-folders",
  },
  {
    title: "Archived",
    value: "archived-folders",
  },
];
const folders = [
  {
    name: "Brand Guidelines folders",
    created: "August 15, 2024",
    files: 3,
    folderType: "my-folders",
    type: "folder",
  },
  {
    name: "Meeting Notes",
    created: "July 25, 2024",
    files: 26,
    folderType: "shared-folders",
    type: "folder",
  },
  {
    name: "Design Assets",
    created: "July 18, 2024",
    files: 18,
    folderType: "shared-folders",
    type: "folder",
  },
  {
    name: "Resources",
    created: "June 19, 2024",
    files: 67,
    folderType: "archived-folders",
    type: "folder",
  },
  {
    name: "Client Invoice",
    created: "May 30, 2024",
    files: 15,
    folderType: "my-folders",
    type: "folder",
  },
  {
    name: "Presentation Deck",
    created: "April 29, 2024",
    files: 35,
    folderType: "archived-folders",
    type: "folder",
  },
  {
    name: "Product Roadmap",
    created: "March 10, 2024",
    files: 22,
    folderType: "shared-folders",
    type: "folder",
  },
  {
    name: "Q2 Financial Report",
    created: "July 5, 2024",
    files: 8,
    folderType: "archived-folders",
    type: "folder",
  },
  {
    name: "Sales Leads",
    created: "February 20, 2024",
    files: 12,
    folderType: "my-folders",
    type: "folder",
  },
  {
    name: "Marketing Strategies",
    created: "January 10, 2024",
    files: 40,
    folderType: "shared-folders",
    type: "folder",
  },
  {
    name: "Event Planning",
    created: "June 14, 2024",
    files: 14,
    folderType: "shared-folders",
    type: "folder",
  },
  {
    name: "Customer Feedback",
    created: "September 12, 2024",
    files: 33,
    folderType: "my-folders",
    type: "folder",
  },
  {
    name: "Employee Handbook",
    created: "December 1, 2024",
    files: 5,
    folderType: "archived-folders",
    type: "folder",
  },
  {
    name: "UX Research",
    created: "October 3, 2024",
    files: 19,
    folderType: "shared-folders",
    type: "folder",
  },
  {
    name: "Partnership Agreements",
    created: "November 18, 2024",
    files: 7,
    folderType: "my-folders",
    type: "folder",
  },
  {
    name: "Team Goals",
    created: "August 1, 2024",
    files: 10,
    folderType: "archived-folders",
    type: "folder",
  },
  {
    name: "Blog Drafts",
    created: "September 28, 2024",
    files: 27,
    folderType: "shared-folders",
    type: "folder",
  },
  {
    name: "Legal Contracts",
    created: "May 15, 2024",
    files: 13,
    folderType: "archived-folders",
    type: "folder",
  },
  {
    name: "Technical foldersation",
    created: "April 20, 2024",
    files: 45,
    folderType: "my-folders",
    type: "folder",
  },
  {
    name: "Company Policies",
    created: "July 8, 2024",
    files: 20,
    folderType: "archived-folders",
    type: "folder",
  },
  {
    name: "Social Media Assets",
    created: "February 14, 2024",
    files: 30,
    folderType: "shared-folders",
    type: "folder",
  },
  {
    name: "Annual Report",
    created: "November 30, 2024",
    files: 9,
    folderType: "archived-folders",
    type: "folder",
  },
  {
    name: "Hiring Pipeline",
    created: "March 6, 2024",
    files: 18,
    folderType: "my-folders",
    type: "folder",
  },
  {
    name: "Training Material",
    created: "June 25, 2024",
    files: 32,
    folderType: "shared-folders",
    type: "folder",
  },
  {
    name: "Support Tickets",
    created: "May 9, 2024",
    files: 16,
    folderType: "archived-folders",
    type: "folder",
  },
  {
    name: "Onboarding Docs",
    created: "August 22, 2024",
    files: 11,
    folderType: "my-folders",
    type: "folder",
  },
  {
    name: "SEO Reports",
    created: "July 12, 2024",
    files: 6,
    folderType: "archived-folders",
    type: "folder",
  },
  {
    name: "Code Reviews",
    created: "March 29, 2024",
    files: 25,
    folderType: "shared-folders",
    type: "folder",
  },
  {
    name: "Video Content",
    created: "January 22, 2024",
    files: 21,
    folderType: "archived-folders",
    type: "folder",
  },
  {
    name: "Internal Memos",
    created: "April 4, 2024",
    files: 8,
    folderType: "my-folders",
    type: "folder",
  },
  {
    name: "Risk Assessments",
    created: "February 28, 2024",
    files: 29,
    folderType: "shared-folders",
    type: "folder",
  },
  {
    name: "Press Releases",
    created: "October 16, 2024",
    files: 17,
    folderType: "my-folders",
    type: "folder",
  },
  {
    name: "Client Testimonials",
    created: "May 3, 2024",
    files: 4,
    folderType: "archived-folders",
    type: "folder",
  },
  {
    name: "Meeting Recordings",
    created: "September 2, 2024",
    files: 38,
    folderType: "shared-folders",
    type: "folder",
  },
  {
    name: "KPI Dashboards",
    created: "June 30, 2024",
    files: 14,
    folderType: "archived-folders",
    type: "folder",
  },
  {
    name: "Beta Test Results",
    created: "October 20, 2024",
    files: 19,
    folderType: "shared-folders",
    type: "folder",
  },
  {
    name: "E-Commerce Assets",
    created: "July 3, 2024",
    files: 31,
    folderType: "archived-folders",
    type: "folder",
  },
  {
    name: "Case Studies",
    created: "December 8, 2024",
    files: 23,
    folderType: "my-folders",
    type: "folder",
  },
  {
    name: "Product Feedback",
    created: "April 12, 2024",
    files: 12,
    folderType: "shared-folders",
    type: "folder",
  },
  {
    name: "Holiday Schedule",
    created: "November 2, 2024",
    files: 2,
    folderType: "archived-folders",
    type: "folder",
  },
  {
    name: "Customer Personas",
    created: "August 10, 2024",
    files: 36,
    folderType: "shared-folders",
    type: "folder",
  },
  {
    name: "Vendor Agreements",
    created: "March 12, 2024",
    files: 7,
    folderType: "my-folders",
    type: "folder",
  },
  {
    name: "Team Celebrations",
    created: "October 25, 2024",
    files: 5,
    folderType: "archived-folders",
    type: "folder",
  },
  {
    name: "Growth Strategies",
    created: "May 21, 2024",
    files: 28,
    folderType: "shared-folders",
    type: "folder",
  },
  {
    name: "Email Campaigns",
    created: "January 16, 2024",
    files: 24,
    folderType: "archived-folders",
    type: "folder",
  },
  {
    name: "App Wireframes",
    created: "February 4, 2024",
    files: 13,
    folderType: "my-folders",
    type: "folder",
  },
  {
    name: "Quarterly Goals",
    created: "March 19, 2024",
    files: 9,
    folderType: "shared-folders",
    type: "folder",
  },
  {
    name: "Security Guidelines",
    created: "December 14, 2024",
    files: 22,
    folderType: "archived-folders",
    type: "folder",
  },
];
type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="flex flex-col gap-10 p-5">
      <CommonHeader />
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl">Folders</h1>
        <Tabs
          defaultValue="all-folders"
          className="flex gap-3 flex-col items-start"
        >
          <TabsList>
            {tabs.map((tab) => {
              return <TabsTrigger value={tab.value}>{tab.title}</TabsTrigger>;
            })}
          </TabsList>
          <div className="p-5 w-full">
            {tabs.map((tab, index) => {
              if (tab.value === "all-folders") {
                return (
                  <TabsContent
                    value="all-folders"
                    className="w-full gap-3 grid grid-cols-4"
                  >
                    {folders.map((folder, folderIndex) => {
                      return <Folder folder={folder} key={folderIndex} />;
                    })}
                  </TabsContent>
                );
              }
              return (
                <TabsContent
                  key={index}
                  value={tab.value}
                  className="w-full gap-3 grid grid-cols-4"
                >
                  {folders
                    .filter((doc) => doc.folderType === tab.value)
                    .map((folder, folderIndex) => (
                      <Folder folder={folder} key={folderIndex} />
                    ))}
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
