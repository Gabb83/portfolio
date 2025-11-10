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
        <SectionWrapper>
          <Home />
        </SectionWrapper>
        <SectionWrapper delay={0.2}>
          <Experience />
        </SectionWrapper>
        <SectionWrapper delay={0.2}>
          <Skills />
        </SectionWrapper>
      </div>
      <SectionWrapper delay={0.2}>
        <Contact />
      </SectionWrapper>
      <SectionWrapper delay={0.2}>
        <Footer />
      </SectionWrapper>
    </div>
  );
}