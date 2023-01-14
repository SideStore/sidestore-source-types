import type { Source } from "sidestore-source-types";

// This obviously doesn't use every possible property, only the required ones
const source: Source = {
    name: "Test Source",
    identifier: "test.source",
    apps: [
        {
            name: "Test App",
            bundleIdentifier: "test.app",
            developerName: "Test",
            iconURL: "",
            localizedDescription: "Test App",
            versions: [],
        },
    ],
};
