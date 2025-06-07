import Header from '@/components/Header';
import Home from '@/components/home/Home';
import Skills from '@/components/skills/Skills';
import Experience from '@/components/experience/Experience';
import SectionWrapper from '@/components/SectionWrapper';

export default function Page() {
  return(
    <div className='h-screen'>
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
  );
}