
import React from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  fullBio?: string;
  image?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

interface TeamMemberDrawerProps {
  member: TeamMember | null;
  open: boolean;
  onClose: () => void;
}

const TeamMemberDrawer: React.FC<TeamMemberDrawerProps> = ({ member, open, onClose }) => {
  if (!member) return null;

  // Use placeholder image if no image is provided
  const imageSrc = member.image || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80";

  return (
    <Drawer open={open} onOpenChange={onClose}>
      <DrawerContent className="bg-background border-t border-border backdrop-blur-none">
        <div className="max-w-3xl mx-auto w-full bg-background p-2">
          <DrawerHeader>
            <DrawerTitle className="text-2xl font-semibold text-brand-700">
              {member.name}
            </DrawerTitle>
            <DrawerDescription className="text-lg font-medium text-brand-400">
              {member.role}
            </DrawerDescription>
          </DrawerHeader>
          
          <div className="px-4 pb-4 pt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-square md:aspect-auto md:h-72 overflow-hidden rounded-lg shadow">
                <img 
                  src={imageSrc} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center" 
                />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Bio</h4>
                  <p className="text-gray-600">
                    {member.fullBio || member.bio}
                  </p>
                </div>
                
                <div className="pt-4">
                  <h4 className="font-semibold text-lg mb-2">Contact</h4>
                  <div className="space-y-2">
                    {member.email && (
                      <p className="flex items-center">
                        <span className="font-medium mr-2">Email:</span>
                        <a href={`mailto:${member.email}`} className="text-brand-500 hover:underline">
                          {member.email}
                        </a>
                      </p>
                    )}
                    
                    {member.linkedin && (
                      <p className="flex items-center">
                        <span className="font-medium mr-2">LinkedIn:</span>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">
                          Profile
                        </a>
                      </p>
                    )}
                    
                    {member.twitter && (
                      <p className="flex items-center">
                        <span className="font-medium mr-2">Twitter:</span>
                        <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">
                          @{member.twitter.split('/').pop()}
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default TeamMemberDrawer;
