const DevTodayUpdates = () => {
  return (
    <>
      <section className="max-md: flex gap-4 max-lg:flex-col">
        <div className="w-1/2 rounded-md bg-slate-800/70 p-6 text-slate-300 max-lg:w-full">
          <p className="mb-3 text-base font-semibold text-slate-200 max-sm:text-sm">
            Updates from v1.0 to v2.0
          </p>
          <ul className="ml-3 flex list-disc flex-col gap-y-1 text-sm font-light text-slate-300 max-sm:text-xs">
            <li className="text-slate-200">Header</li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li>Added tooltip on hover</li>
              <li>Updated hover states on Search and Notification icons</li>
              <li>
                Updated DevToday logo (light and dark modes) to be clickable and
                directed to Home Page
              </li>
              <li>
                Added Create Group to Create dropdown and removed it from the
                All Groups Page
              </li>
              <li>Fixed Sign In button when not signed in</li>
              <li>Updated Clerk dropdown menu style</li>
            </ul>

            <li className="text-slate-200">Home Page</li>
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
                Middle Section: Updated hover states on cards, hearts, and
                pagination buttons, removed title for each section for
                consistency, fixed width of profile link, and added profile
                placeholder image to group cards
              </li>
              <li>Added Loading states</li>
            </ul>

            <li className="text-slate-200">Group Details Page</li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li>
                Updated hover state on hearts, each content card, and tooltip
                location and delay on member avatars
              </li>
              <li>Updated profile placeholder image</li>
              <li>Fixed width of profile link</li>
              <li>Added no content text for tabs with no content</li>
              <li>Included missing podcasts in getGroupById db action</li>
            </ul>

            <li className="text-slate-200">
              Post, Meetup, and Podcast Detail Pages
            </li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li>
                Temporarily removed arrow icon at &ldquo;More from&ldquo; cards
              </li>
              <li>
                Added missing hover states on Follow, Visit Profile, and Share
                Post buttons, on Profile and More Posts link
              </li>
              <li>Grouped comment card like button hover state</li>
              <li>Added unfollow and follow revalidate tags to db actions</li>
              <li>Podcast Details: Fixed order issue when liking a comment</li>
              <li>Podcast Details: Updated hover state on heart</li>
            </ul>

            <li className="text-slate-200">
              Updated seed file to non lorem-ipsum text
            </li>
            <li className="text-slate-200">
              Removed fill prop from the IconWrapper component and updated all
              components using the IconWrapper
            </li>

            <li className="text-slate-200">
              Added default &ldquo;dark&ldquo; theme to ThemeProvider to update
              3rd party library style overrides on page load
            </li>
          </ul>
        </div>

        <div className="w-1/2 rounded-md bg-slate-800/70 p-6 text-slate-300 max-lg:w-full">
          <p className="mb-3 text-base font-semibold text-slate-200 max-sm:text-sm">
            Future Updates to v2.0
          </p>
          <ul className="ml-3 flex list-disc flex-col gap-y-1 text-sm font-light text-slate-300 max-sm:text-xs">
            <li className="text-slate-200">
              Connecting notifications to user actions
            </li>
            <li className="text-slate-200">Group Details Page</li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li>Delete group</li>
              <li>View all members and admins</li>
              <li>Remove a user or assign a user the admin role</li>
            </ul>
            <li className="text-slate-200">Profile Page</li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li>
                No content text for content tabs, performance, and recent posts
              </li>
              <li>Hover effect on Edit Profile button</li>
            </ul>
            <li className="text-slate-200">Edit Profile Page</li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li>
                &ldquo;Cancel&ldquo; button triggers a profile update and a
                loading state on the &ldquo;Update Profile&ldquo; button
              </li>
              <li>Hover effect on Edit Profile button</li>
            </ul>
            <li className="text-slate-200">
              Add missing loading states between route changes
            </li>
            <li className="text-slate-200">
              Tags to be clickable and linked to content
            </li>
            <li className="text-slate-200">
              Pull out light/dark mode from Clerk menu
            </li>
            <li className="text-slate-200">Share post functionality</li>
            <li className="text-slate-200">Live values for number of views</li>
            <li className="text-slate-200">Create an admin panel</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default DevTodayUpdates;
