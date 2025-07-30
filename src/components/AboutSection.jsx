import { Briefcase, Code, User } from "lucide-react";


export const AboutSection = () => {
    return (
      <section id="about " className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary"> Me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Aspiring Fullstack Developer & Tech Enthusiast</h3>
              <p className="text-muted-foreground">
                With five years of experience in the tech industry, I've had the unique opportunity to navigate both 
                the structured environments of large-scale organizations and the agile, innovative spaces of small-scale startups. 
                This diverse background has equipped me with a comprehensive understanding of various operational scales 
                and challenges. What's consistently energized me throughout this journey is the fast-paced, ever-evolving 
                nature of technology, a characteristic I find incredibly exciting and motivating.
              </p>

              <p className="text-muted-foreground">
                In my last role, I truly got to dive headfirst into building applications with Ruby on Rails. 
                It was an incredible opportunity to leverage the framework's power, allowing me to take on significant 
                responsibilities in developing robust and scalable solutions. I wasn't just using Rails; I was immersed in it, 
                constantly learning and applying its principles to create impactful features and contribute to the overall success 
                of our projects.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">
                  Get in Touch
                </a>

                <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                  Download CV
                </a>
              </div>
            </div>
            
              <div className="grid grid-cols-1 gap-6">
                <div className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-lg"> Web Development</h4>
                      <p className="text-muted-foreground"> 
                        Creating responsive websites and web applications with modern frameworks.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-lg"> UI/UX Design</h4>
                      <p className="text-muted-foreground"> 
                        Designing intuitive user interfaces and seamless user experiences.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-lg"> Project Management</h4>
                      <p className="text-muted-foreground"> 
                        Leading projects from conception to completion with agile methodologies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          </div>

        </div>
      </section>
    );
}