'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { projects } from '@/lib/constants';
import Tag from './shared/Tag';

const DevToday = () => {
  const project = projects[1];

  return (
    <motion.section
      className="m-10 flex max-w-[600px] flex-col max-md:m-0 xl:m-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <header className="mb-9 text-center ">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <h3 className="mt-2 text-sm font-light text-slate-300">
          {project.description}
        </h3>
      </header>

      <div className="relative mb-8 max-md:size-28">
        <Image
          alt="dev-today"
          src={project.image}
          className="rounded-xl"
          placeholder="blur"
        />
      </div>

      <section className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-2">
          <h4 className="text-base font-medium">Deployed Sites</h4>

          <div className="flex flex-col text-sm text-slate-100">
            <p>Version 2 (with updates) - Solo developer</p>
            <a
              href="https://dev-today-v2.vercel.app/posts"
              target="_blank"
              className="w-fit font-light text-slate-300 duration-300 hover:text-red-400"
            >
              https://dev-today-v2.vercel.app
            </a>
          </div>
          <div className="flex flex-col text-sm text-slate-100">
            <p>Version 1 - Two person team</p>
            <a
              href="https://dev-today-v2.vercel.app/posts"
              target="_blank"
              className="w-fit font-light text-slate-300 duration-300 hover:text-red-400"
            >
              https://capstone-darshin-adam.vercel.app
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <h4 className="text-base font-medium">Features</h4>
          <ul className="ml-3 flex list-['-_'] flex-col gap-y-1 text-sm font-light text-slate-300">
            <li>Clerk authorization for sign-up and login</li>
            <li>Post and podcast feeds</li>
            <li>List of groups and meetups</li>
            <li>Users with profiles</li>
            <li>
              User specific actions such as:
              <ul className="ml-3 flex list-['-_'] flex-col gap-y-1">
                <li>Following other users</li>
                <li>Liking posts, podcasts, and comments</li>
                <li>Commenting on posts and podcasts</li>
                <li>
                  Editing, creating, and deleting posts, groups, meetups,
                  podcasts, and comments
                </li>
                <li>Joining and leaving groups</li>
              </ul>
            </li>
            <li>CmdK fuzzy search</li>
            <li>Notifications</li>
            <li>
              Use of Git and Github with an Asana board of tickets for efficient
              team collaboration.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-2">
          <h4 className="text-base font-medium">Tech Stack</h4>
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {project.tags.map((tag) => {
              return <Tag key={tag} text={tag} />;
            })}
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <h4 className="text-base font-medium">Learnings</h4>
          <ol className="ml-4 flex list-decimal flex-col gap-y-1">
            <li className="text-sm font-light text-slate-300">
              Acquired proficiency in NextJS: File based routing, server side
              and client side components, data fetching, caching and
              revalidation
            </li>
            <li className="text-sm font-light text-slate-300">
              Sharpened my backend skills: Prisma and Supabase, creating schemas
              with relations, CRUD operations SQL queries, and the creation of a
              seed file using prisma and faker.js.
            </li>
            <li className="text-sm font-light text-slate-300">
              Successfully incorporated 3rd party libraries and frameworks:
              TinyMCE, Framer Motion, Shadcn, Upload Dropzone, Google Maps Api,
              React Datepicker, Tailwind CSS
            </li>
            <li className="text-sm font-light text-slate-300">
              Gained a better understanding of form generation and zod
              validation
            </li>
            <li className="text-sm font-light text-slate-300">
              Advanced my knowledge of styling: Custom styling for 3rd party
              libraries and frameworks such as Clerk Authentication, TinyMCE,
              React Datepicker, and Google Maps Api, mobile responsiveness,
              light and dark modes, and flex
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-y-2">
          <h4 className="text-base font-medium">Challenges</h4>
          <ol className="ml-4 flex list-decimal flex-col gap-y-1">
            <li className="text-sm font-light text-slate-300">
              {/* As a user I want to be able to select a range of dates and times for
            my meetup. a) My start date should start on today @ the current time
            b) My end date and time should never be before my start date and
            time If I select a "start date" that extends past (After) my "end
            date", my "end date" should automatically reset to the current start
            date. If I select a new "start date" that's before my "end date",
            the "end date" does not have to reset. */}
              Create Meetup - React Datepicker: Start and end date and time
              custom logic selection - disable irrelevant dates and times and
              auto-select relavant date and time according to user selection.
            </li>
            <li className="text-sm font-light text-slate-300">
              {/* Adding a member to members input shouldn't make them show in admins box, and vice versa */}
              Create Group - Search and add members and/or admins: Adding a user
              to one input removes user from search in other input - ensure that
              there are no duplicates in either field or search.
            </li>
            <li className="text-sm font-light text-slate-300">
              Notifications: Deciding how to order notifications depending on
              recent vs read/unread status & inifinte scroll
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-y-2">
          <h4>Updates to Version 1</h4>
          <ul className="text-sm font-light text-slate-300">
            Style updates:
            <li>
              Updated hover states throughout app: post cards, hearts, buttons,
              the sort & filter menu
            </li>
            <li>Removed arrow icons throughout if no content available</li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-2">
          <h4>Future Updates to Version 2</h4>
          <ul className="ml-3 flex list-['-_'] flex-col gap-y-1 text-sm font-light text-slate-300">
            <li>Connecting notifications to user actions</li>
            <li>Group Details:</li>
            <ul className="ml-3 flex list-['-_'] flex-col gap-y-1">
              <li>Delete group</li>
              <li>View all members and admins</li>
              <li>Remove a user or assign a user the admin role</li>
            </ul>
            <li>Add missing loading states between route changes</li>
            <li>Tags to be clickable and linked to content</li>
            <li>Pull light/dark mode out of Clerk menu</li>
            <li>Share post</li>
            <li>Live values for number of views</li>
            <li>Create an admin panel</li>
          </ul>
        </div>
      </section>
    </motion.section>
  );
};

export default DevToday;
