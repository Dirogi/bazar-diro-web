# Decisions

## D-001 — Room navigation model

- Status: Accepted
- Decision: Initial rooms will be controlled by application state rather than separate routes.
- Reason: The experience is a single, continuous interactive shop with horizontal room transitions.

## D-002 — Application scope

- Status: Accepted
- Decision: Do not add a backend, database, authentication, or real payments.
- Reason: Bazar Diro is a frontend portfolio experience with fictional commerce interactions.

## D-003 — Product turnaround scope

- Status: Accepted
- Decision: Product turnaround is outside the MVP and may be added later if time permits.
- Reason: A high-quality static product image is sufficient for the first working version.

## D-004 — Responsive priority

- Status: Accepted
- Decision: Develop desktop first, using 1920x1080 as the primary visual reference.
- Reason: The experience prioritizes a premium desktop composition before adapting to smaller screens.

## D-005 — Implementation approach

- Status: Accepted
- Decision: Keep the project visually ambitious while using technically simple solutions where practical.
- Reason: The goal is a polished, maintainable portfolio project rather than unnecessary complexity.

## D-006 — Agent collaboration

- Status: Accepted
- Decision: Codex and Claude Code will work sequentially and never simultaneously on the same task or files.
- Reason: Sequential work prevents conflicting edits and preserves shared context.

## D-007 — Documentation boundary

- Status: Accepted
- Decision: `README.md` is public-facing documentation and must not be used as internal agent memory.
- Reason: Project state and agent context belong in the shared files under `docs/`.

## D-008 - Global shop state

- Status: Accepted
- Decision: Use a typed React Context provider and `useShop` hook for the initial global interactive state.
- Reason: The experience has one client-side state tree and currently needs no external state dependency or reducer complexity.

## D-009 - Fictional currency model

- Status: Accepted
- Decision: Each experience starts with 2,000 coins, and the available balance is derived from `INITIAL_COINS - cartTotal`. Products that exceed this balance are blocked before cart insertion.
- Reason: Derived state keeps cart removal and experience reset consistent without a persistent economy or duplicated balance state.
