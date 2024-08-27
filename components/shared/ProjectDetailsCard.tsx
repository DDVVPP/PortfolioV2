const ProjectDetailsCard = ({
  overview,
  learnings,
  challenges,
}: {
  overview: string;
  learnings: string[];
  challenges: string[];
}) => {
  return (
    <>
      <div className="rounded-md bg-slate-800/70 p-6 text-slate-300">
        <p className="mb-3 text-base font-semibold text-slate-200">Overview</p>
        <p className="text-sm font-light">{overview}</p>
      </div>

      <div className="rounded-md bg-slate-800/70 p-6 text-slate-300">
        <p className="mb-3 text-base font-semibold text-slate-200">Learnings</p>
        <ol className="ml-4 flex list-decimal flex-col gap-y-1 ">
          {learnings.map((item, idx) => {
            return (
              <li key={idx} className="text-sm font-light text-slate-300">
                {item}
              </li>
            );
          })}
        </ol>
      </div>

      <div className="rounded-md bg-slate-800/70 p-6 text-slate-300">
        <p className="mb-3 text-base font-semibold text-slate-200">
          Challenges
        </p>
        <ol className="ml-4 flex list-decimal flex-col gap-y-1 ">
          {challenges.map((item, idx) => {
            return (
              <li key={idx} className="text-sm font-light text-slate-300">
                {item}
              </li>
            );
          })}
        </ol>
      </div>

      <section className="flex gap-x-4">
        <div className="w-1/2 rounded-md bg-slate-800/70 p-6 text-slate-300">
          <p className="mb-3 text-base font-semibold text-slate-200">
            Updates from v1.0 to v2.0
          </p>
          <ul className="ml-3 flex list-['-_'] flex-col gap-y-1 text-sm font-light text-slate-300">
            <li>
              Style updates:
              <ul className="ml-3 flex list-['-_'] flex-col gap-y-1">
                <li>
                  Updated hover states throughout app: post cards, hearts,
                  buttons, the sort & filter menu
                </li>
                <li>Removed arrow icons throughout if no content available</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="w-1/2 rounded-md bg-slate-800/70 p-6 text-slate-300">
          <p className="mb-3 text-base font-semibold text-slate-200">
            Future Updates to v2.0
          </p>
          <ul className="ml-3 flex list-['-_'] flex-col gap-y-1 text-sm font-light text-slate-300">
            <li>Connecting notifications to user actions</li>
            <li>Group Details Page:</li>
            <ul className="ml-3 flex list-['-_'] flex-col gap-y-1">
              <li>Delete group</li>
              <li>View all members and admins</li>
              <li>Remove a user or assign a user the admin role</li>
            </ul>
            <li>Profile Page:</li>
            <ul className="ml-3 flex list-['-_'] flex-col gap-y-1">
              <li>
                No content text for content tabs, performance, and recent posts
              </li>
              <li>Hover effect on Edit Profile button</li>
            </ul>
            <li>Edit Profile Page:</li>
            <ul className="ml-3 flex list-['-_'] flex-col gap-y-1">
              <li>
                &ldquo;Cancel&ldquo; button triggers a profile update and a
                loading state on the &ldquo;Update Profile&ldquo; button
              </li>
              <li>Hover effect on Edit Profile button</li>
            </ul>
            <li>Add missing loading states between route changes</li>
            <li>Tags to be clickable and linked to content</li>
            <li>Pull out light/dark mode from Clerk menu</li>
            <li>Share post functionality</li>
            <li>Live values for number of views</li>
            <li>Create an admin panel</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ProjectDetailsCard;
