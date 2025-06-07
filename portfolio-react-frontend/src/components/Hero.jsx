const Hero = () => {
    return (
      <section id="hero" className="min-h-screen bg-gray-50 flex items-center justify-center px-4 pt-24">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900">Hi, I'm Shaique Aijaz</h1>
          <p className="mt-4 text-lg text-gray-600">A Full-Stack Developer crafting digital experiences</p>
          <a href="#projects" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">View My Work</a>
        </div>
      </section>
    );
  };
  
  export default Hero;