
import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import SectionHeading from '../components/ui/SectionHeading';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { toast } from '../components/ui/sonner';
import { Upload } from 'lucide-react';

const CvSubmission = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      // Only allow PDF or DOC/DOCX files
      if (file.type === "application/pdf" || 
          file.type === "application/msword" || 
          file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        setSelectedFile(file);
      } else {
        toast.error("Please upload a PDF or Word document");
        e.target.value = "";
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedFile) {
      toast.error("Please upload your CV");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Your CV has been submitted successfully!");
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setSelectedFile(null);
      setIsSubmitting(false);
      
      // Reset the file input
      const fileInput = document.getElementById('cv-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    }, 1500);
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-700 to-brand-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 font-thin text-slate-50">Join Our Team</h1>
            <p className="text-xl md:text-2xl mb-8 text-brand-100">
              Submit your CV to be considered for current and future opportunities at LemonHQ.
            </p>
          </div>
        </div>
      </section>

      {/* CV Submission Form */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeading 
              title="Submit Your CV" 
              subtitle="We're always looking for talented individuals to join our team."
              centered
            />
            
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea 
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your interests, relevant experience, or anything else you'd like us to know"
                    rows={5}
                  />
                </div>
                
                <div>
                  <Label htmlFor="cv-upload">Upload Your CV (PDF or Word Document)</Label>
                  <div className="mt-1 flex items-center">
                    <label className="block w-full">
                      <div className="flex items-center justify-center w-full px-4 py-6 border-2 border-dashed border-gray-300 rounded-md">
                        <div className="space-y-1 text-center">
                          <Upload className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="flex text-sm text-gray-600">
                            <label htmlFor="cv-upload" className="relative cursor-pointer rounded-md font-medium text-brand-400 hover:text-brand-500">
                              <span>Upload a file</span>
                              <Input 
                                id="cv-upload"
                                name="cv-upload"
                                type="file"
                                className="sr-only"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileChange}
                                required
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">PDF, DOC, or DOCX up to 10MB</p>
                        </div>
                      </div>
                    </label>
                  </div>
                  {selectedFile && (
                    <p className="mt-2 text-sm text-green-600">
                      Selected file: {selectedFile.name}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-brand-400 hover:bg-brand-500 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CvSubmission;
