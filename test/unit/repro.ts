import { suite, test } from "vitest";

suite('windows', async () => {
    test.concurrent('hangs', async () => {
        const mod = await import("./import-target.js");
    });
});
