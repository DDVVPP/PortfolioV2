const DevTodayUpdates = () => {
  return (
    <>
      <section className="max-md: flex gap-4 max-lg:flex-col">
        <div className="w-1/2 rounded-md bg-slate-800/70 p-6 text-slate-300 max-lg:w-full">
          <p className="mb-3 text-base font-semibold text-slate-200 max-sm:text-sm">
            Updates from v1.0 to v2.0
          </p>
          <ul className="ml-3 flex list-disc flex-col gap-y-1 text-sm font-light text-slate-300 max-sm:text-xs">
            <li>Header:</li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li>Added tooltip on hover</li>
              <li>Updated hover states on Search and Notification icons</li>
              <li>
                Updated DevToday logo to be clickable and directed to Home Page
              </li>
              <li>
                Added Create Group to Create dropdown and removed it from the
                All Groups Page
              </li>
              <li>Fixed Sign In button when not signed in</li>
            </ul>

            <li>Home Page:</li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li>
                Left Sidebar: Updated hover states on Popular Groups, Sort &
                Filter
              </li>
              <li>
                Right Sidebar: Added no content text, fixed origin point of
                scaling on hover, and removed arrow icons from card titles
              </li>
              <li>
                Middle Section: Updated hover states on cards and hearts,
                removed title for each section for consistency, fixed width of
                profile link
              </li>
              <li>Added Loading states</li>
            </ul>

            <li>Group Details Page:</li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li>
                Updated hover state on hearts, each content card, and tooltip
                location and delay on member avatars
              </li>
              <li>Updated profile placeholder image</li>
              <li>Fixed width of profile link</li>
              <li>Added a no content state for tabs with no content</li>
            </ul>

            <li>Post, Meetup, and Podcast Detail Pages:</li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li>
                Temporarily removed arrow icon at &ldquo;More from&ldquo; cards
              </li>
              <li>
                Updated hover states on Follow an Visit Profile buttons, on
                Share Post and button, on Profile Link and More Posts link
              </li>
            </ul>

            <li>Podcast Details Page:</li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li>Fixed order issue when liking a comment</li>
              <li>Updated hover state on heart</li>
            </ul>

            <li>Updated seed file to non lorem-ipsum text</li>
            <li>Updated the IconWrapper component</li>
          </ul>
        </div>

        <div className="w-1/2 rounded-md bg-slate-800/70 p-6 text-slate-300 max-lg:w-full">
          <p className="mb-3 text-base font-semibold text-slate-200 max-sm:text-sm">
            Future Updates to v2.0
          </p>
          <ul className="ml-3 flex list-disc flex-col gap-y-1 text-sm font-light text-slate-300 max-sm:text-xs">
            <li>Connecting notifications to user actions</li>
            <li>Group Details Page:</li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li>Delete group</li>
              <li>View all members and admins</li>
              <li>Remove a user or assign a user the admin role</li>
            </ul>
            <li>Profile Page:</li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li>
                No content text for content tabs, performance, and recent posts
              </li>
              <li>Hover effect on Edit Profile button</li>
            </ul>
            <li>Edit Profile Page:</li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
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

export default DevTodayUpdates;
