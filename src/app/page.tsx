import Home from '@/components/home/Home';
import Skills from '@/components/skills/Skills';
import Experience from '@/components/experience/Experience';
import SectionWrapper from '@/components/SectionWrapper';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/Footer';

export default function Page() {
  return(
    <div className='py-2'>
      <div className='px-[30px]'>
        
          <Home />
        
          <Experience />
        
          <Skills />
      
      </div>
     
        <Contact />

        <Footer />

    </div>
  );
}