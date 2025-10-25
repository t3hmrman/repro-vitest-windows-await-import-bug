import { availableParallelism } from 'node:os';

import { defineConfig } from 'vitest/config';

const DEFAULT_TIMEOUT_MS = 1000 * 60 * 10; // 10m

const REPORTERS = process.env.GITHUB_ACTIONS
    ? ['verbose', 'github-actions']
    : ['verbose'];

export default defineConfig({
    test: {
        reporters: REPORTERS,
        maxConcurrency: Math.max(availableParallelism() / 2, 5),
        disableConsoleIntercept: true,
        printConsoleTrace: true,
        passWithNoTests: false,
        include: ['test/unit/repro.ts'],
        // setupFiles: ['test/meta-resolve-stub.ts'],
    },
});
