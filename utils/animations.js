export const fadeInUp = {
  initial: {
    opacity: 0,
    x: -100,
    
  },
  animate: {
    opacity: 1,
    x: 0,
    
  },
  transition: {
    duration: 0.5,
    ease: "easeInOut "
  }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}; 