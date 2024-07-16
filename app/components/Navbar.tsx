const Navbar = () => {
  return (
    <section className="flex flex-col gap-y-8">
      <section className="flex flex-col">
        <h1>Darshin Van Parijs</h1>
        <div className="flex gap-x-2">
          <p>Resume</p>
          <p>linkedInIcon</p>
          <p>githubIcon</p>
        </div>
        <p>darshinvp@gmail.com</p>
      </section>
      <section>
        <p>About</p>
        <p>Work</p>
        <p>Projects</p>
        <p>Hobbies</p>
      </section>
    </section>
  );
};

export default Navbar;
