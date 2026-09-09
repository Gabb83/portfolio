import Home from '@/components/home/Home';
import Skills from '@/components/skills/Skills';
import Experience from '@/components/experience/Experience';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/Footer';

export default function Page() {
  return(
    <div>
      <div className='px-3'>
        <Home />
        <Experience />
        <Skills />
      </div>
        <Contact />
        <Footer />
    </div>
  );
}