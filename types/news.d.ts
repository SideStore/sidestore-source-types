export interface News {
    /** Fairly straightforward, this will be the headline for your news item. */
    title: string;
    /** This must be a unique identifier that should not be used by any other news items in SideStore. */
    identifier: string;
    /**
     * Similar to the caption for your app listing, this should be about a sentence. While there is
     * technically no limit to the caption size, no one wants a giant text blob in their news feed.
     *
     * If there is more to your news than a couple sentences can deliver, try using an image or link
     * to a website.
     */
    caption: string;
    /**
     * This date should follow the same format as {@link Version.date} for app listings: `YYYY-MM-DD`.
     *
     * Please note that the date does not currently display on any news items and neither does the time
     * (if provided). Instead, it is required for SideStore to organize the news into chronological order.
     */
    date: string;
    /**
     * This has the same function as {@link App.tintColor}. The only difference is that now it will be
     * used as the background color for your news item. Keep in mind that it does not apply to the
     * app listing if you supplied an {@link appID}. The app listing that appears below the news
     * article will use the tintColor specific to that app.
     */
    tintColor?: string | undefined;
    /**
     * This should be a direct link to any image you want to feature on your news item. The recommended
     * size for this image is 960x540 or any image with a 16:9 aspect ratio. SideStore will also take
     * whatever image you provide it with, then crop and center it to the correct aspect ratio. Be careful
     * not to put any important information in the corners since the SideStore rounds the images corners by default.
     */
    imageURL?: string | undefined;
    /**
     * This should be used to link users to a website when they click the news item. The link will open
     * in SideStore's built-in web browser (based off safari).
     */
    url?: string | undefined;
    /**
     * This must be an exact match to the `bundleIdentifier` of the app listing in order for it to work properly.
     *
     * This is required if you want an app listing to appear below the news item for quick installation.
     *
     * It also makes it so that when a user click on the news item, it will take them to the specified
     * app's page. This will be overridden if a url is also specified.
     */
    appID?: string | undefined;
    /**
     * When set to true, SideStore will send all users of the source a notification with the title of the news item.
     *
     * Note that the notification will not be instantaneous: it will occur whenever SideStore attempts a
     * background refresh (the same time that update notifications occur) and it does require users to leave
     * SideStore running in the background.
     */
    notify?: boolean | undefined;
}
