import { suite, test } from "vitest";

suite('windows', () => {
    test('hangs', async () => {
        const mod = await import("./import-target.js");
    });
});
