import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const useScrollReveal = (config = {}) => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '80px',
      duration: 2000,
      delay: 200,
      ...config
    });

    const revealElements = document.querySelectorAll('[data-scroll-reveal]');
    revealElements.forEach(element => {
      const options = {
        origin: element.dataset.origin || 'bottom',
        interval: element.dataset.interval ? parseInt(element.dataset.interval) : 200,
        ...JSON.parse(element.dataset.options || '{}')
      };
      sr.reveal(element, options);
    });

    return () => sr.destroy();
  }, [config]);
};

export default useScrollReveal; 