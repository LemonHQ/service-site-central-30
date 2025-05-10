
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/sonner";

export interface NewsletterSubscription {
  email: string;
}

export const subscribeToNewsletter = async (email: string): Promise<boolean> => {
  try {
    console.log("Subscribing email to newsletter:", email);
    
    const { error } = await supabase
      .from("newsletter_subscriptions")
      .insert([{ email }]);

    if (error) {
      console.error("Error subscribing to newsletter:", error);
      
      // If it's a unique violation, provide a friendly message
      if (error.code === "23505") {
        toast.error("This email is already subscribed to our newsletter");
        return false;
      }
      
      toast.error("Failed to subscribe. Please try again later");
      return false;
    }

    toast.success("Successfully subscribed to newsletter!");
    return true;
  } catch (error) {
    console.error("Exception when subscribing to newsletter:", error);
    toast.error("An unexpected error occurred. Please try again later");
    return false;
  }
};
