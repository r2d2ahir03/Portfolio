import React, { useState, useEffect } from 'react';
import { Code2, ExternalLink, Github, Linkedin, Mail, Phone, Download, Menu, X, ChevronRight, Briefcase, Award, GraduationCap } from 'lucide-react';
import { personalInfo, aboutMe, skills, projects, experience, certifications, education } from '../mock';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-[#1a1c1b] text-[#dfddd6]">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1a1c1b]/95 backdrop-blur-sm border-b border-[#3f4816]/50' : 'bg-transparent'
      }`}>
        <div className="max-w-[87.5rem] mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => scrollToSection('home')} 
              className="flex items-center gap-2 text-[#d9fb06] hover:opacity-80 transition-opacity"
            >
              <Code2 size={28} />
              <span className="font-bold text-lg">GDY</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-base font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'text-[#d9fb06]' 
                      : 'text-[#dfddd6] hover:text-[#d9fb06]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                className="bg-[#d9fb06] text-[#1a1c1b] hover:opacity-90 rounded-full px-6 font-semibold"
                onClick={() => scrollToSection('contact')}
              >
                LET'S TALK
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-[#d9fb06]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-[#3f4816]/50 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-3 px-4 transition-colors ${
                    activeSection === item.id 
                      ? 'text-[#d9fb06] bg-[#3f4816]/30' 
                      : 'text-[#dfddd6] hover:text-[#d9fb06] hover:bg-[#3f4816]/20'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-8 pt-20">
        <div className="max-w-[87.5rem] w-full">
          <div className="max-w-4xl">
            <div className="mb-6">
              <Badge className="bg-[#3f4816] text-[#d9fb06] border-[#d9fb06]/30 text-xs uppercase font-semibold tracking-wider px-4 py-2">
                Full-Stack MERN Developer
              </Badge>
            </div>
            <h1 className="font-black text-[clamp(4rem,8vw,8rem)] leading-[0.9] uppercase text-[#d9fb06] mb-6">
              GAGAN DEEP
              <br />
              YADAV
            </h1>
            <p className="text-2xl text-[#888680] mb-8 max-w-2xl font-medium leading-relaxed">
              {aboutMe.summary}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-[#d9fb06] text-[#1a1c1b] hover:opacity-90 rounded-full px-8 py-6 text-base font-semibold uppercase transition-transform hover:scale-105"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
                <ChevronRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline"
                className="border-[#d9fb06] text-[#d9fb06] hover:bg-[#d9fb06] hover:text-[#1a1c1b] rounded-full px-8 py-6 text-base font-semibold uppercase transition-all"
                onClick={() => window.open(personalInfo.github, '_blank')}
              >
                <Github className="mr-2" size={20} />
                GitHub
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl">
              <div>
                <div className="text-5xl font-black text-[#d9fb06] mb-2">{aboutMe.yearsOfExperience}</div>
                <div className="text-sm text-[#888680] uppercase tracking-wider">Years Experience</div>
              </div>
              <div>
                <div className="text-5xl font-black text-[#d9fb06] mb-2">{aboutMe.projectsCompleted}</div>
                <div className="text-sm text-[#888680] uppercase tracking-wider">Projects Done</div>
              </div>
              <div>
                <div className="text-5xl font-black text-[#d9fb06] mb-2">{aboutMe.technologiesMastered}</div>
                <div className="text-sm text-[#888680] uppercase tracking-wider">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8 bg-[#302f2c]">
        <div className="max-w-[87.5rem] mx-auto">
          <h2 className="font-black text-6xl md:text-8xl uppercase text-[#d9fb06] mb-12 leading-tight">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-xl text-[#dfddd6] mb-6 leading-relaxed">
                I'm a passionate Full-Stack Developer specializing in the MERN stack with a strong foundation in modern web technologies and DevOps practices.
              </p>
              <p className="text-lg text-[#888680] leading-relaxed">
                My expertise lies in building scalable, real-time applications with clean architecture. I've worked on projects ranging from real-time messaging platforms to automated deployment systems, always focusing on performance and user experience.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button 
                  className="bg-[#d9fb06] text-[#1a1c1b] hover:opacity-90 rounded-full px-6 font-semibold uppercase"
                  onClick={() => window.open(personalInfo.resume, '_blank')}
                >
                  <Download className="mr-2" size={18} />
                  Download Resume
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-[#1a1c1b] border-[#3f4816]">
                <CardHeader>
                  <CardTitle className="text-[#d9fb06] flex items-center gap-2">
                    <GraduationCap size={24} />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-[#dfddd6]">
                  <p className="font-semibold">{education.degree}</p>
                  <p className="text-[#888680] mt-1">{education.institution}</p>
                  <p className="text-sm text-[#888680] mt-1">{education.graduation}</p>
                </CardContent>
              </Card>
              <Card className="bg-[#1a1c1b] border-[#3f4816]">
                <CardHeader>
                  <CardTitle className="text-[#d9fb06] flex items-center gap-2">
                    <Award size={24} />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {certifications.map((cert, index) => (
                      <li key={index} className="text-[#dfddd6] flex items-start gap-2">
                        <ChevronRight size={18} className="text-[#d9fb06] mt-0.5 flex-shrink-0" />
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-8">
        <div className="max-w-[87.5rem] mx-auto">
          <h2 className="font-black text-6xl md:text-8xl uppercase text-[#d9fb06] mb-4 leading-tight">
            Featured
            <br />
            Projects
          </h2>
          <p className="text-xl text-[#888680] mb-16 max-w-2xl">
            A showcase of my technical expertise through real-world applications
          </p>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={project.id} className="bg-[#302f2c] border-[#3f4816] overflow-hidden group hover:border-[#d9fb06]/50 transition-all">
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <div className="relative h-full min-h-[400px] overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1b] via-transparent to-transparent opacity-60"></div>
                    </div>
                  </div>
                  <div className="p-10 flex flex-col justify-center">
                    <Badge className="bg-[#3f4816] text-[#d9fb06] border-[#d9fb06]/30 text-xs uppercase font-semibold tracking-wider px-3 py-1 w-fit mb-4">
                      {project.category}
                    </Badge>
                    <h3 className="font-black text-4xl uppercase text-[#d9fb06] mb-3">
                      {project.title}
                    </h3>
                    <p className="text-lg text-[#888680] mb-2 font-medium">{project.tagline}</p>
                    <p className="text-[#dfddd6] mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-6">
                      <p className="text-sm text-[#888680] uppercase tracking-wider mb-3">Key Features</p>
                      <ul className="grid grid-cols-1 gap-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="text-[#dfddd6] flex items-start gap-2">
                            <ChevronRight size={18} className="text-[#d9fb06] mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="border-[#888680] text-[#888680] hover:border-[#d9fb06] hover:text-[#d9fb06] transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <Button 
                        variant="outline"
                        className="border-[#d9fb06] text-[#d9fb06] hover:bg-[#d9fb06] hover:text-[#1a1c1b] rounded-full font-semibold uppercase"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="mr-2" size={18} />
                        Code
                      </Button>
                      <Button 
                        className="bg-[#d9fb06] text-[#1a1c1b] hover:opacity-90 rounded-full font-semibold uppercase"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="mr-2" size={18} />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-8 bg-[#302f2c]">
        <div className="max-w-[87.5rem] mx-auto">
          <h2 className="font-black text-6xl md:text-8xl uppercase text-[#d9fb06] mb-16 leading-tight">
            Technical
            <br />
            Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-[#1a1c1b] border-[#3f4816] hover:border-[#d9fb06]/50 transition-all">
              <CardHeader>
                <CardTitle className="text-[#d9fb06] text-xl uppercase">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill, idx) => (
                    <Badge key={idx} className="bg-[#3f4816] text-[#dfddd6] border-[#888680]/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1c1b] border-[#3f4816] hover:border-[#d9fb06]/50 transition-all">
              <CardHeader>
                <CardTitle className="text-[#d9fb06] text-xl uppercase">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill, idx) => (
                    <Badge key={idx} className="bg-[#3f4816] text-[#dfddd6] border-[#888680]/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1c1b] border-[#3f4816] hover:border-[#d9fb06]/50 transition-all">
              <CardHeader>
                <CardTitle className="text-[#d9fb06] text-xl uppercase">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill, idx) => (
                    <Badge key={idx} className="bg-[#3f4816] text-[#dfddd6] border-[#888680]/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1c1b] border-[#3f4816] hover:border-[#d9fb06]/50 transition-all">
              <CardHeader>
                <CardTitle className="text-[#d9fb06] text-xl uppercase">DevOps & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.devops.map((skill, idx) => (
                    <Badge key={idx} className="bg-[#3f4816] text-[#dfddd6] border-[#888680]/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1c1b] border-[#3f4816] hover:border-[#d9fb06]/50 transition-all md:col-span-2">
              <CardHeader>
                <CardTitle className="text-[#d9fb06] text-xl uppercase">CS Fundamentals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.fundamentals.map((skill, idx) => (
                    <Badge key={idx} className="bg-[#3f4816] text-[#dfddd6] border-[#888680]/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-8">
        <div className="max-w-[87.5rem] mx-auto">
          <h2 className="font-black text-6xl md:text-8xl uppercase text-[#d9fb06] mb-16 leading-tight">
            Experience
          </h2>
          
          <div className="space-y-8">
            {experience.map((exp) => (
              <Card key={exp.id} className="bg-[#302f2c] border-[#3f4816] hover:border-[#d9fb06]/50 transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <CardTitle className="text-[#d9fb06] text-2xl mb-2 flex items-center gap-2">
                        <Briefcase size={24} />
                        {exp.role}
                      </CardTitle>
                      <CardDescription className="text-[#dfddd6] text-lg">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge className="bg-[#3f4816] text-[#d9fb06] border-[#d9fb06]/30 text-xs uppercase font-semibold tracking-wider px-3 py-1">
                      {exp.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#888680] mb-4 leading-relaxed">{exp.description}</p>
                  <div>
                    <p className="text-sm text-[#888680] uppercase tracking-wider mb-3">Key Achievements</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-[#dfddd6] flex items-start gap-2">
                          <ChevronRight size={18} className="text-[#d9fb06] mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8 bg-[#302f2c]">
        <div className="max-w-[87.5rem] mx-auto text-center">
          <h2 className="font-black text-6xl md:text-8xl uppercase text-[#d9fb06] mb-8 leading-tight">
            Let's Work
            <br />
            Together
          </h2>
          <p className="text-xl text-[#888680] mb-12 max-w-2xl mx-auto">
            I'm currently open to new opportunities. Whether you have a project in mind or just want to chat about tech, feel free to reach out!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <Button 
              className="bg-[#d9fb06] text-[#1a1c1b] hover:opacity-90 rounded-full px-8 py-6 text-base font-semibold uppercase transition-transform hover:scale-105"
              onClick={() => window.open(`mailto:${personalInfo.email}`)}
            >
              <Mail className="mr-2" size={20} />
              Email Me
            </Button>
            <Button 
              variant="outline"
              className="border-[#d9fb06] text-[#d9fb06] hover:bg-[#d9fb06] hover:text-[#1a1c1b] rounded-full px-8 py-6 text-base font-semibold uppercase transition-all"
              onClick={() => window.open(`tel:${personalInfo.phone}`)}
            >
              <Phone className="mr-2" size={20} />
              Call Me
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <Button
              variant="ghost"
              size="icon"
              className="w-14 h-14 rounded-full border border-[#3f4816] text-[#d9fb06] hover:bg-[#d9fb06] hover:text-[#1a1c1b] transition-all"
              onClick={() => window.open(personalInfo.github, '_blank')}
            >
              <Github size={24} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-14 h-14 rounded-full border border-[#3f4816] text-[#d9fb06] hover:bg-[#d9fb06] hover:text-[#1a1c1b] transition-all"
              onClick={() => window.open(personalInfo.linkedin, '_blank')}
            >
              <Linkedin size={24} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-14 h-14 rounded-full border border-[#3f4816] text-[#d9fb06] hover:bg-[#d9fb06] hover:text-[#1a1c1b] transition-all"
              onClick={() => window.open(`mailto:${personalInfo.email}`)}
            >
              <Mail size={24} />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-[#3f4816]">
        <div className="max-w-[87.5rem] mx-auto text-center">
          <p className="text-[#888680]">
            © 2025 Gagan Deep Yadav. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;