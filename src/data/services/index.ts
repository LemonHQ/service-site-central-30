
import { MainService, SubService } from "./types";
import { mainServices } from "./mainServices";
import { subServices } from "./subServices";

// Export types
export type { MainService, SubService };

// Export data
export { mainServices, subServices };

// Export helper functions
export function getMainServiceBySlug(slug: string): MainService | undefined {
  return mainServices.find(service => service.slug === slug);
}

export function getSubServiceBySlug(slug: string): SubService | undefined {
  return subServices.find(service => service.slug === slug);
}

export function getSubServicesByParentId(parentId: string): SubService[] {
  return subServices.filter(service => service.parentId === parentId);
}

export function getRelatedServices(currentSlug: string, count: number = 3): (MainService | SubService)[] {
  // First try to find related services from the same parent
  const currentService = getSubServiceBySlug(currentSlug);
  
  if (currentService) {
    // Get other subservices with the same parent
    const siblingServices = subServices
      .filter(s => s.parentId === currentService.parentId && s.slug !== currentSlug)
      .slice(0, count);
    
    // If we don't have enough, add some main services
    if (siblingServices.length < count) {
      const mainServicesToAdd = mainServices
        .filter(s => s.id !== currentService.parentId)
        .slice(0, count - siblingServices.length);
      
      return [...siblingServices, ...mainServicesToAdd];
    }
    
    return siblingServices;
  }
  
  // If not a subservice, return random main services
  return mainServices.slice(0, count);
}
