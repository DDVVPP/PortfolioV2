import Image from 'next/image';
import profile from '@/public/profile-pic.jpg';

const About = () => {
  return (
    <section className="flex h-dvh flex-col items-center justify-center gap-y-10 rounded-xl bg-slate-800 p-4">
      <div className="relative size-64 shrink-0 align-middle">
        <Image
          priority
          alt="profile-photo"
          src={profile}
          fill
          className="rounded-full"
        />
      </div>
      <div className="w-3/4 justify-center">
        <p className="text-center">
          Hi! I am an Architectural Designer turned Software Developer who lives
          in Los Angeles, California and likes to eat delicious food, workout,
          hike, and dance Brazilian Zouk (a latin partner dance). <br />
          <br />I have experience building applications in Typescript,
          Javascript, React, Next.js, PosGreSQL, and GraphQL using agile
          methodologies. <br />
          <br />
          My previous career in architecture has provided me with valuable
          skills, such as the implementation of the iterative process of design,
          team collaboration and coordination, and analysis and problem solving,
          which I have carried with me into my software engineer career.
          <br />
          <br />I enjoy coding on the frontend - natural capacity for - visuals
          testing- immediate- design. Enjoy backend - manage and be aware of
          entire process debuggin easier
        </p>
      </div>
    </section>
  );
};

export default About;
