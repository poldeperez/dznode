import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

// Register plugins once
gsap.registerPlugin(useGSAP, ScrollTrigger);

// Export for use elsewhere
export { gsap, useGSAP, ScrollTrigger };