import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Milestones from './sections/Milestones';
import Documents from './sections/Documents';
import Contact from './sections/Contact';
import AIAssistant from './components/AIAssistant';

function App() {
  return (
    <main className="min-h-screen bg-black text-slate-50 font-sans selection:bg-blue-500/30 selection:text-blue-200 antialiased overflow-x-hidden">
      <Hero />
      <Skills />
      <Projects />
      <Milestones />
      <Documents />
      <Contact />
      {/* Floating AI chat widget — renders above all sections via fixed positioning */}
      <AIAssistant />
    </main>
  );
}

export default App;
