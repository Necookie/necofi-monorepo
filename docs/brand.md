# NecoFi Brand, UI/UX, and Performance Guide

## 1. Purpose

This document defines how NecoFi should feel across `apps/landing`, `apps/web`, and `apps/mobile`.

It is not a general brand memo. It is a product-facing guide for building a premium minimalist experience with a simple, easy-to-use interface on the current stack:

- Tamagui as the shared component library
- `packages/theme` as the source of truth for tokens and themes
- `packages/ui` as the shared primitive layer
- Next.js for landing and web
- Expo for mobile

Every visual and interaction decision should support two outcomes:

- The product feels calm, premium, and effortless
- The product feels fast, light, and reliable

---

## 2. Brand Positioning

NecoFi should feel like a private financial companion, not a noisy finance dashboard.

The product experience should communicate:

- Premium through restraint
- Clarity through reduction
- Trust through consistency
- Ease through fewer decisions

The interface should never feel:

- Busy
- Technical for the sake of looking advanced
- Gamified
- Over-explained
- Visually loud

---

## 3. Core Experience Principles

### Premium Minimalism

- Keep the screen focused on one primary task at a time
- Use fewer elements with better spacing
- Let typography, spacing, and proportion create the premium feel
- Prefer quiet confidence over decorative styling

### Simple by Default

- The next action should be obvious without instruction
- Reduce visible options until they are needed
- Show summaries first, details second
- Use plain language and short labels

### Performance Is Part of the Brand

- Fast feedback is not an engineering bonus; it is part of the product identity
- Transitions should feel immediate and controlled
- Screens should load with clear structure and no visual instability
- Interaction cost should stay low on both mobile and web

### Cross-Platform Consistency

- The brand must survive platform differences
- Web, landing, and mobile should feel like the same product family
- Shared primitives and theme tokens should do most of the consistency work

---

## 4. Visual Direction

### Overall Feel

The visual language should be:

- Clean
- Quiet
- Precise
- Spacious
- Modern without trend-chasing

The UI should read as premium because it is disciplined, not because it is embellished.

### Surface Strategy

- Use layered surfaces sparingly
- Prefer clean backgrounds and subtle separation
- Avoid heavy card stacking
- Avoid decorative gradients in product surfaces unless they are extremely restrained

### Contrast Strategy

- Use strong readability with soft overall contrast
- Emphasize information hierarchy before color variety
- Use accent color only when it clarifies meaning or action

---

## 5. Color Guidance

The current shared theme already establishes a dark-first foundation with restrained neutrals and a blue accent. Brand decisions should stay aligned with that system unless the theme package is intentionally updated.

### Color Roles

- Background: quiet base layer
- Surface: primary container layer
- Text: high-legibility content layer
- Muted text: secondary information only
- Accent: action and meaning, used sparingly
- Border: subtle structure, not decoration

### Rules

- Neutrals should dominate the interface
- Accent color should be rare enough to retain meaning
- Positive, warning, and destructive colors should appear only when the data or action requires them
- Color should never be the only way meaning is communicated

### Avoid

- Rainbow dashboards
- Large saturated areas in the product UI
- Multiple competing accent colors on one screen
- Gradients used as decoration in core workflows

---

## 6. Typography

Typography should feel clear, composed, and unforced.

### Principles

- Prioritize legibility over personality in product UI
- Use weight and spacing to create hierarchy instead of excessive size jumps
- Keep headings concise and calm
- Keep body copy direct and low-friction

### Implementation Guidance

- Align product typography to shared Tamagui font definitions in `packages/theme`
- Do not introduce one-off font systems inside individual apps
- If font changes are needed, update them through the shared theme rather than per-screen styling

### Tone in Layout

- Short headlines
- Compact supporting copy
- Minimal label noise

---

## 7. Spacing and Layout

Spacing is one of the main sources of premium feel in NecoFi.

### Rules

- Prefer breathing room over density
- Use the shared token scale instead of arbitrary values
- Keep layout rhythm consistent across screens
- Avoid cramming charts, controls, and helper text into one block

### Layout Behavior

- One dominant action per view
- Clear grouping between information and controls
- Progressive disclosure over dense multi-section screens
- Mobile-first simplicity even on larger screens

### Avoid

- Tight clusters of controls
- Long walls of equally weighted content
- Multi-column layouts for core product tasks unless there is a clear usability gain

---

## 8. Tamagui System Rules

Tamagui is the component foundation, not just a convenience library. The product should look premium because the shared system is disciplined.

### Required Approach

- Build from shared primitives in `packages/ui` first
- Use tokens from `packages/theme` for color, spacing, radius, and typography
- Prefer Tamagui props and tokens over ad hoc CSS values
- Extend the shared system when a pattern repeats instead of creating isolated screen-level styling

### Component Philosophy

- Components should feel calm and intentional
- States should be obvious without being dramatic
- Radius, spacing, and border treatment should stay consistent across apps

### Avoid

- One-off visual exceptions that break system rhythm
- Per-app component behavior that changes the brand feel
- Styling shortcuts that ignore shared tokens

---

## 9. Component Feel

### Buttons

- Primary buttons should feel decisive, not loud
- Secondary buttons should support without competing
- Labels should be short and action-first
- Button density should stay low; avoid screens full of equal-priority actions

### Inputs

- Inputs should feel clear, stable, and low-friction
- Labels should remain visible
- Placeholder text should not carry essential meaning
- Focus states should be crisp and restrained

### Cards and Containers

- Use cards only when grouping improves comprehension
- Prefer subtle borders or surface separation over heavy framing
- Keep padding generous enough to feel premium

### Lists

- Lists should scan quickly
- Each row should have one clear purpose
- Supporting metadata should be secondary and quiet

---

## 10. Interaction Design

### Speed Expectations

- Frequent actions should take as few steps as possible
- UI response should feel immediate after input
- Loading should preserve structure and reduce perceived waiting

### Motion Principles

- Motion should clarify cause and effect
- Keep transitions short and smooth
- Use animation to support orientation, not decoration

### Feedback

- Success feedback should be subtle
- Error feedback should be clear and actionable
- Avoid celebratory or playful responses in core finance flows

### Navigation

- Navigation should be predictable and low-effort
- Users should not need to memorize where things live
- Important actions should stay discoverable without crowding the interface

---

## 11. Performance Standards

Performance is part of perceived product quality and must shape UI decisions from the start.

### UX Performance Rules

- Avoid layout shift
- Avoid heavy first-load experiences
- Avoid unnecessary spinners when skeletons or immediate structure can be shown
- Reduce animation and rendering work in repeated lists and dense views

### Implementation Rules

- Prefer shared primitives over bespoke heavy components
- Reuse theme tokens instead of calculating visual values ad hoc
- Keep screens focused so component trees stay lean
- Treat every extra visual effect as a performance cost that must justify itself

### Product Standard

If a screen looks premium but feels slow, it is off-brand.

---

## 12. Content and Microcopy

The voice should be calm, direct, and respectful.

### Tone

- Clear
- Neutral
- Reassuring without sounding soft
- Reflective without sounding judgmental

### Writing Rules

- Use short sentences
- Use plain language
- Say what happened and what the user can do next
- Remove filler copy that does not help decision-making

### Avoid

- Alarmist wording
- Shame-based financial language
- Excessive finance jargon
- Clever copy that slows comprehension

---

## 13. States

### Empty States

- Calm and useful
- Explain the next step simply
- Avoid pressure, guilt, or fake enthusiasm

### Error States

- State the problem clearly
- Give a next action where possible
- Do not expose technical language unless it is truly useful

### Success States

- Confirm completion with restraint
- Do not over-celebrate routine actions

### Loading States

- Preserve layout structure
- Keep the interface feeling stable
- Favor subtle skeletons or placeholders over disruptive blockers

---

## 14. Accessibility and Ease of Use

Simple should also mean accessible.

### Rules

- Maintain strong text contrast
- Make touch targets comfortable on mobile
- Keep labels explicit
- Do not rely on hover-only behavior for important meaning
- Ensure flows are understandable without animation

Premium UI that creates friction is not premium.

---

## 15. What to Avoid

- Finance-dashboard clutter
- Too many charts on a single screen
- Overuse of accent color
- Decorative gradients in product workflows
- Dense control panels
- Multiple primary actions competing in one section
- Unnecessary motion
- Custom styling that bypasses Tamagui tokens
- Premium signifiers that hurt performance

---

## 16. Final Decision Filter

Before shipping a screen or component, ask:

- Does this feel simpler than the typical finance app?
- Does this feel premium because of discipline rather than decoration?
- Does this use the shared Tamagui and theme system correctly?
- Does this reduce cognitive load?
- Does this feel fast on both web and mobile?

If the answer is not clearly yes, revise it.
