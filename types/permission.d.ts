export type PermissionType =
    | "photos"
    | "camera"
    | "location"
    | "contacts"
    | "reminders"
    | "music"
    | "microphone"
    | "speech-recognition"
    | "background-audio"
    | "background-fetch"
    | "bluetooth"
    | "network"
    | "calendars"
    | "faceid"
    | "siri"
    | "motion";

export interface Permission {
    /**
     * The accepted permission types are the following:
     *
     * - photos
     * - camera
     * - location
     * - contacts
     * - reminders
     * - music
     * - microphone
     * - speech-recognition
     * - background-audio
     * - background-fetch
     * - bluetooth
     * - network
     * - calendars
     * - faceid
     * - siri
     * - motion
     */
    type: PermissionType;
    /** This should explain what the permission is and why your app needs it. */
    usageDescription: string;
}
