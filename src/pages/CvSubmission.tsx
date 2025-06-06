
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import MainLayout from '../components/layout/MainLayout';
import SectionHeading from '../components/ui/SectionHeading';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { toast } from '../components/ui/sonner';
import { Upload, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Checkbox } from '../components/ui/checkbox';
import { supabase } from '../integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PrivacyNotice from '../components/privacy/PrivacyNotice';

// Define form schema with validation
const formSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().optional(),
  file: z
    .instanceof(File)
    .refine(file => file.size <= 10 * 1024 * 1024, {
      message: "File size should be less than 10MB"
    })
    .refine(file => {
      const validTypes = [
        "application/pdf", 
        "application/msword", 
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ];
      return validTypes.includes(file.type);
    }, {
      message: "File must be PDF or Word document (.pdf, .doc, .docx)"
    }),
  consent: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions"
  }),
  marketing_consent: z.boolean().default(false)
});

type FormValues = z.infer<typeof formSchema>;

const CvSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const navigate = useNavigate();
  
  // Set up react-hook-form with zod validation
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      consent: false,
      marketing_consent: false,
    }
  });
  
  const { register, handleSubmit, formState, setValue, watch } = form;
  const { errors } = formState;

  // Watch for file changes to show file preview
  const selectedFile = watch('file');
  
  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setValue('file', file);
      setFilePreview(file.name);
    }
  };
  
  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true);
      
      // Upload file to Supabase storage
      const fileExtension = data.file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}.${fileExtension}`;
      const filePath = `${data.email.replace('@', '-at-')}/${fileName}`;
      
      // Create a custom upload handler to track progress
      const uploadFile = async () => {
        // Create blob reader to track progress
        const fileReader = new FileReader();
        
        // Set up promise to resolve when file is read
        const readPromise = new Promise<ArrayBuffer>((resolve, reject) => {
          fileReader.onload = () => {
            resolve(fileReader.result as ArrayBuffer);
          };
          fileReader.onerror = (error) => {
            reject(error);
          };
          
          // Set up progress tracking
          fileReader.onprogress = (event) => {
            if (event.lengthComputable) {
              const percent = (event.loaded / event.total) * 100;
              setUploadProgress(Math.round(percent));
            }
          };
        });
        
        // Read the file as array buffer
        fileReader.readAsArrayBuffer(data.file);
        
        // Wait for file to be read
        const fileContent = await readPromise;
        
        // Upload the file to Supabase
        const { error, data: uploadData } = await supabase.storage
          .from('cv-uploads')
          .upload(filePath, data.file, {
            cacheControl: '3600',
            upsert: false,
          });
          
        if (error) {
          throw new Error(`Error uploading file: ${error.message}`);
        }
        
        return uploadData;
      };
      
      // Upload the file and track progress
      await uploadFile();
      
      // Create record in cv_submissions table
      const { error: submissionError } = await supabase
        .from('cv_submissions')
        .insert({
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          message: data.message || null,
          file_path: filePath,
          file_name: data.file.name,
          file_type: data.file.type,
          file_size: data.file.size,
          consent_given: data.consent,
          marketing_consent: data.marketing_consent
        });
        
      if (submissionError) {
        throw new Error(`Error saving submission: ${submissionError.message}`);
      }
      
      // Show success message
      toast.success("Your CV has been submitted successfully!");
      
      // Redirect to thank you page
      navigate('/thank-you');
      
    } catch (error) {
      console.error('Submission error:', error);
      toast.error(error.message || "Failed to submit your CV. Please try again.");
    } finally {
      setIsSubmitting(false);
      setUploadProgress(0);
    }
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
            
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input 
                    id="name"
                    {...register('name')}
                    placeholder="John Doe"
                    aria-invalid={errors.name ? "true" : "false"}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input 
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="john@example.com"
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone"
                    {...register('phone')}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea 
                    id="message"
                    {...register('message')}
                    placeholder="Tell us about your interests, relevant experience, or anything else you'd like us to know"
                    rows={5}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="cv-upload">Upload Your CV (PDF or Word Document) *</Label>
                  <div className="mt-1 flex items-center">
                    <label className="block w-full">
                      <div className="flex items-center justify-center w-full px-4 py-6 border-2 border-dashed border-gray-300 rounded-md">
                        <div className="space-y-1 text-center">
                          <Upload className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="flex text-sm text-gray-600">
                            <label htmlFor="cv-upload" className="relative cursor-pointer rounded-md font-medium text-brand-400 hover:text-brand-500">
                              <span>Upload a file</span>
                              <input 
                                id="cv-upload"
                                name="file"
                                type="file"
                                className="sr-only"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileChange}
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">PDF, DOC, or DOCX up to 10MB</p>
                        </div>
                      </div>
                    </label>
                  </div>
                  {filePreview && (
                    <div className="mt-2 flex items-center text-sm text-green-600">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Selected file: {filePreview}
                    </div>
                  )}
                  {errors.file && (
                    <div className="mt-2 flex items-center text-sm text-red-500">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      {errors.file.message}
                    </div>
                  )}
                </div>
              </div>

              {/* Privacy Notice */}
              <PrivacyNotice formType="cv-submission" className="my-6" />
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <Checkbox 
                      id="consent"
                      {...register('consent')}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <Label 
                      htmlFor="consent" 
                      className="text-gray-700 font-normal"
                    >
                      I agree to the <Link to="/legal/terms-and-conditions" className="text-brand-500 hover:underline" target="_blank" rel="noopener noreferrer">Terms and Conditions</Link> and consent to the processing of my personal data for recruitment purposes. *
                    </Label>
                    {errors.consent && (
                      <p className="mt-1 text-sm text-red-500">{errors.consent.message}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <Checkbox 
                      id="marketing_consent"
                      {...register('marketing_consent')}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <Label 
                      htmlFor="marketing_consent" 
                      className="text-gray-700 font-normal"
                    >
                      I consent to receiving marketing communications about job opportunities and company updates. You can withdraw this consent at any time.
                    </Label>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-brand-400 hover:bg-brand-500 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {uploadProgress > 0 ? `Uploading... ${uploadProgress}%` : 'Submitting...'}
                    </>
                  ) : 'Submit Application'}
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
