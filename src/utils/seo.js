export const updateMetaTags = ({ title, description, ogTitle, ogDescription, ogImage }) => {
  document.title = `${title} | Alex Rivera - Portfolio`;
  
  const updateOrAddMeta = (name, content, isProperty = false) => {
    if (!content) return;
    const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
    let element = document.querySelector(selector);
    if (!element) {
      element = document.createElement('meta');
      if (isProperty) {
        element.setAttribute('property', name);
      } else {
        element.setAttribute('name', name);
      }
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  updateOrAddMeta('description', description);
  updateOrAddMeta('og:title', ogTitle || title, true);
  updateOrAddMeta('og:description', ogDescription || description, true);
  updateOrAddMeta('og:image', ogImage || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600', true);
  updateOrAddMeta('og:type', 'website', true);
  updateOrAddMeta('twitter:card', 'summary_large_image');
  updateOrAddMeta('twitter:title', ogTitle || title);
  updateOrAddMeta('twitter:description', ogDescription || description);
};
