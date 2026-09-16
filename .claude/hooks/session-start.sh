#!/bin/bash
# SessionStart hook for Claude Code on the web.
# Installs npm dependencies so `npm run lint` (tsc --noEmit) and any build/
# test commands work right away in future cloud sessions.
set -euo pipefail

# Only run in Claude Code on the web (remote) environments.
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "$CLAUDE_PROJECT_DIR"

# npm install is idempotent and reuses the lockfile (package-lock.json);
# it also updates node_modules in place if the lockfile changed, which
# plays well with the container-state cache.
npm install
