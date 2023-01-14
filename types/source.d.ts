import type { App } from "./app";
import type { News } from "./news";

/** Based on https://github.com/SideStore/SideStore-Docs/blob/main/references/sources.md */
export interface Source {
    /** The name of your source. This will appear in SideStore. */
    name: string;
    /**
     * This is a bundle identifier SideStore uses to keep your source separate
     * from every other source. For this reason, it is recommended to follow Apple's
     * standard for an identifier.
     *
     * It's important to note here that changing this identifier down the road will
     * have **consequences**. Users with the source already installed will suddenly have
     * conflicting identifiers with the online source and will cause an error in SideStore
     * that will require them to completely remove the source before they can add it back.
     */
    identifier: string;
    /**
     * If your user adds your Source using a URL shortener or you have the link to file
     * stored on CDN, it is recommended that you include this property. This allows
     * SideStore to save the exact link to the file which speeds up retrieval time.
     */
    sourceURL?: string | undefined;
    apps: App[];
    news?: News[] | undefined;
}
