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
              <li>
                Added tooltips on hover for sticky header navbar items, and made
                DevToday logo (with light and dark modes) clickable to Home Page
              </li>
              <li>
                Moved &ldquo;Create Group&ldquo; to the Create dropdown menu and
                removed it from the &ldquo;All Groups&ldquo; Page
              </li>
              <li>
                Fixed &ldquo;Sign In&ldquo; button and updated Clerk dropdown
                menu style
              </li>
            </ul>

            <li className="text-slate-200">
              Home Pages (Post, Meetup, Podcast, Group)
            </li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li>
                Left Sidebar: Updated hover states on sections (Popular Groups,
                Sort & Filter)
              </li>
              <li>
                Right Sidebar: Added &ldquo;no content&ldquo; placeholder,
                corrected origin point of scaling on hover, and removed arrow
                icons from card titles
              </li>
              <li>
                Middle Section: Updated hover states on cards, hearts, and
                pagination buttons, removed section titles for consistency,
                adjusted profile link width, and added placeholder profile
                images on group cards
              </li>
              <li>Added skeleton loading states for route changes</li>
            </ul>

            <li className="text-slate-200">Group Details Page</li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li>
                Improved hover states on hearts and content cards, changed
                tooltip location and removed tooltip delay on member avatars
              </li>
              <li>Updated profile image placeholders</li>
              <li>Fixed profile link width</li>
              <li>
                Included &ldquo;no content&ldquo; placeholder for empty tabs
              </li>
              <li>
                Added missing podcasts in &ldquo;getGroupById&ldquo; db action
              </li>
            </ul>

            <li className="text-slate-200">
              Detail Pages (Post, Meetup, Podcast)
            </li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li>Removed arrow icon at &ldquo;More from&ldquo; cards</li>
              <li>
                Added missing hover states on buttons (Follow, Visit Profile,
                Share Post), and on links (Profile, More Posts)
              </li>
              <li>Grouped hover state in Comment card like button</li>
              <li>Added unfollow/follow revalidate tags to db actions</li>
              <li>Podcast Details: Fixed order issue when liking a comment</li>
              <li>Podcast Details: Updated hover state on heart</li>
            </ul>

            <li className="text-slate-200">Create Pages</li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li className="text-slate-200">
                Added default &ldquo;dark&ldquo; theme to ThemeProvider to
                trigger update on 3rd party library style overrides on page load
              </li>
              <li>
                Added &ldquo;cursor: pointer&ldquo; style update to &ldquo;Drag
                & Drop or upload png or jpeg up to 16MB&ldquo; text
              </li>
            </ul>

            <li className="text-slate-200">Miscellaneous Updates</li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li className="text-slate-200">
                Updated seed file with demo user content and non-lorem-ipsum
                text
              </li>
              <li className="text-slate-200">
                Removed fill prop from IconWrapper component and updated usage
                throughout code
              </li>
            </ul>
          </ul>
        </div>

        <div className="w-1/2 rounded-md bg-slate-800/70 p-6 text-slate-300 max-lg:w-full">
          <p className="mb-3 text-base font-semibold text-slate-200 max-sm:text-sm">
            Future Updates to v2.0
          </p>
          <ul className="ml-3 flex list-disc flex-col gap-y-1 text-sm font-light text-slate-300 max-sm:text-xs">
            <li className="text-slate-200">Header</li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li>
                Close menu when a selection is made from &ldquo;Create
                Content&ldquo; dropdown
              </li>
              <li>Crop notification profile images to a circle</li>
            </ul>

            <li className="text-slate-200">
              Home Pages (Post, Meetup, Podcast, Group)
            </li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li>
                Fix sticky footer jumps and scrollbar between route changes on
                small screens
              </li>
              <li>
                Ensure &ldquo;Posts&ldquo; content width adjusts to screen size
              </li>
            </ul>

            <li className="text-slate-200">Group Details Page</li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li>Add &ldquo;Delete group&ldquo; functionality</li>
              <li>
                Add &ldquo;View all&ldquo; members and admins link and page
              </li>
              <li>Add user removal or admin assignment functionality</li>
            </ul>

            <li className="text-slate-200">Post Details Page</li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li>
                Match hover effect on &ldquo;More from ...&ldquo; cards with
                other detail pages
              </li>
            </ul>

            <li className="text-slate-200">Profile Page</li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li>
                Add &ldquo;no content&ldquo; placeholder for tabs (Posts,
                Meetups, Podcasts, Groups), &ldquo;Performance&ldquo;, and
                &ldquo;Recent Posts&ldquo; sections
              </li>
              <li>
                Add missing hover states on buttons (Edit Profile, Follow) and
                links in the &ldquo;Performance&ldquo; section, and tabs (Posts,
                Meetups, Podcasts, Groups)
              </li>
              <li>
                Ensure &ldquo;Posts&ldquo; tab width adjusts to screen size
              </li>
            </ul>

            <li className="text-slate-200">Create Pages</li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li>
                Add missing hover effects on buttons (Cancel, Publish Meetup)
              </li>
              <li>
                Resolve Upload Dropzone&apos;s re-opening of the finder window
                on esc, when clicking on &ldquo;Drag & Drop or upload png or
                jpeg up to 16MB&ldquo; area
              </li>
              <li>Add skeleton loading states for route changes</li>
              <li>
                Add infinite scroll to &ldquo;Select Group&ldquo; dropdown and
                fix group hover styles
              </li>
              <li>
                Create Group: Add missing hover effects on buttons (Set a
                Profile Photo, Upload a cover image)
              </li>
              <li>
                Create Podcast: Fix light mode input style on &ldquo;Podcast
                Audio File&ldquo; input
              </li>
            </ul>

            <li className="text-slate-200">Edit Profile Page</li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li>
                &ldquo;Cancel&ldquo; button should not trigger a profile update
                and a loading state on the &ldquo;Update Profile&ldquo; button
              </li>
              <li>
                Add missing hover effect on &ldquo;Edit Profile&ldquo; button
              </li>
              <li>
                Fix &ldquo;Interested Tech&ldquo; input to wrap tags and space
                content correctly
              </li>
            </ul>

            <li className="text-slate-200">Miscellaneous Updates</li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li className="text-slate-200">
                Connect notifications to user actions
              </li>
              <li className="text-slate-200">
                Resolve lag between a user click and the loading.tsx file
              </li>
              <li className="text-slate-200">
                Make tags clickable and link to content
              </li>
              <li className="text-slate-200">
                Move light/dark mode toggle out of Clerk menu
              </li>
              <li className="text-slate-200">
                Link comment authors to their profiles
              </li>
              <li className="text-slate-200">
                Refactor code to remove duplication
              </li>
              <li className="text-slate-200">
                Add &ldquo;Share post&ldquo; functionality
              </li>
              <li className="text-slate-200">
                Add live values for number of views
              </li>
              <li className="text-slate-200">Build an admin panel</li>
            </ul>
          </ul>
        </div>
      </section>
    </>
  );
};

export default DevTodayUpdates;
