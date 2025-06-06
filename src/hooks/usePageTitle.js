import { useEffect } from "react";

export const usePageTitle = (title, description = "") => {
  useEffect(() => {
    // Update page title
    const originalTitle = document.title;
    document.title = title
      ? `${title} | AI Dream Builders`
      : "AI Dream Builders - Innovative Technology Solutions";

    // Update meta description if provided
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.name = "description";
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = description;
    }

    // Cleanup function to restore original title
    return () => {
      document.title = originalTitle;
    };
  }, [title, description]);
};
