export interface Version {
    /**
     * This must match your application's `CFBundleShortVersionString` (located in Info.plist)
     * in order for SideStore updates to work properly.
     */
    version: string;
    /**
     * This should be the date that you are releasing your application, and should be written
     * in the format `YYYY-MM-DD` (other formats standard formats will work as well, but this
     * is the only info required and shown to the user).
     *
     * If you are planning on releasing your application in the future, after everyone has
     * installed your source, there is an additional format available: `YYYY-MM-DDTHH:MM:SS`
     *
     * Using this format will create an automatic timer countdown to the release time specified.
     * Please note that the time is automatically assumed to be UTC and uses a 24 hour clock.
     *
     * If you would rather use the time in your timezone, add `-08:00` to the end of the date,
     * where that `-08` corresponds to the number of hours difference between UTC and your timezone.
     * It is also important to note that UTC does not change with daylight saving time, so be careful
     * if you are releasing around that time of year as it can be easy to miscalculate.
     */
    date: string;
    /** Use this to tell the user what new features you introduced or what bugs you squashed with the latest version. */
    localizedDescription?: string | undefined;
    /**
     * This should point directly to wherever your IPA is hosted.
     *
     * If you are planning on releasing your app in the future, this property is still required
     * but it doesn't have to actually point to a valid file.
     */
    downloadURL: string;
    /**
     * This is an integer value that should be set equivalent to the size of your IPA in
     * bytes. This gives the user an idea of how large the application is before they install.
     */
    size: number;
    /**
     * These are used to indicate the iOS version restrictions that your app may have (inclusively).
     * It also allows you to support multiple different versions of your app that can support
     * different iOS version ranges.
     */
    minOSVersion?: string | undefined;
    /**
     * These are used to indicate the iOS version restrictions that your app may have (inclusively).
     * It also allows you to support multiple different versions of your app that can support
     * different iOS version ranges.
     */
    maxOSVersion?: string | undefined;
}
