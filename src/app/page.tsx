import Header from '@/components/Header';
import Home from '@/components/home/Home';
import Skills from '@/components/skills/Skills';
import Experience from '@/components/experience/Experience';
import SectionWrapper from '@/components/SectionWrapper';
import Contact from '@/components/contact/Contact';

export default function Page() {
  return(
    <div>
      <div className='px-[30px]'>
        <Header />
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
    </div>
  );
}