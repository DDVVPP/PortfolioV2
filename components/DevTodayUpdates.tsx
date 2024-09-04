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
              Updated seed file to non lorem-ipsum text and added demo user
              content
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
            <li className="text-slate-200">Header</li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li>
                Clicking on a dropdown item in the &ldquo;Create Content&ldquo;
                button should close the menu
              </li>
              <li>
                Notification profile images should be cropped to a perfect
                circle
              </li>
            </ul>

            <li className="text-slate-200">Home Page</li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li>
                Groups Tab: Fix each card height to include icons in the bottom
              </li>
            </ul>

            <li className="text-slate-200">Group Details Page</li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li>Add &ldquo;Delete group&ldquo; functionality</li>
              <li>
                Add &ldquo;View all&ldquo; members and admins link and page
              </li>
              <li>Remove a user or assign a user the admin role</li>
            </ul>

            <li className="text-slate-200">Post Details Page</li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li>
                Add same hover effect to &ldquo;More from ...&ldquo; as other
                detail pages
              </li>
            </ul>

            <li className="text-slate-200">Profile Page</li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li>
                Add no content text for content tabs, performance, and recent
                posts
              </li>
              <li>
                Add hover effect on &ldquo;Edit Profile&ldquo; and
                &ldquo;Follow&ldquo; buttons, links in the
                &ldquo;Performance&ldquo; section, and &ldquo;Posts&ldquo;,
                &ldquo;Meetups&ldquo;, &ldquo;Podcasts&ldquo;, and
                &ldquo;Groups&ldquo; tabs
              </li>
              <li>
                Add hover effect links in &ldquo;Performance&ldquo; section
              </li>
              <li>
                Fix &ldquo;Posts&ldquo; tab width to shrink with changing screen
                sizes
              </li>
            </ul>

            <li className="text-slate-200">Create Pages</li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li>
                Add hover effect on &ldquo;Cancel&ldquo; and &ldquo;Publish
                Meetup&ldquo; buttons
              </li>
              <li>
                Add infinite scroll to &ldquo;Select Group&ldquo; dropdown and
                fix group hover styles
              </li>
              <li>
                Create Group: Add hover effect on &ldquo;Set a Profile
                Photo&ldquo; and &ldquo;Upload a cover image&ldquo; buttons
              </li>
              <li>
                Create Podcast: Fix light mode input style on &ldquo;Podcast
                Audio File&ldquo; input
              </li>
              <li>
                Add &ldquo;cursor: pointer&ldquo; style update to &ldquo;Drag &
                Drop or upload png or jpeg up to 16MB&ldquo;
              </li>
            </ul>

            <li className="text-slate-200">Edit Profile Page</li>
            <ul className="ml-3 flex list-[circle] flex-col gap-y-1">
              <li>
                &ldquo;Cancel&ldquo; button should not trigger a profile update
                and a loading state on the &ldquo;Update Profile&ldquo; button
              </li>
              <li>Add hover effect on Edit Profile button</li>
              <li>
                Fix &ldquo;Interested Tech&ldquo; input width - wrap tech tags
                and fix spacing of icon and text within tag
              </li>
            </ul>

            <li className="text-slate-200">
              Connect notifications to user actions
            </li>
            <li className="text-slate-200">
              Add missing loading states between route changes
            </li>
            <li className="text-slate-200">
              Tags to be clickable and linked to content
            </li>
            <li className="text-slate-200">
              Pull out light/dark mode from Clerk menu
            </li>
            <li className="text-slate-200">
              Link to the profile of the author of each comment
            </li>
            <li className="text-slate-200">
              Refactor code to eliminate duplication throughout
            </li>
            <li className="text-slate-200">
              Add &ldquo;Share post&ldquo; functionality
            </li>
            <li className="text-slate-200">
              Add live values for number of views
            </li>
            <li className="text-slate-200">Create an admin panel</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default DevTodayUpdates;
