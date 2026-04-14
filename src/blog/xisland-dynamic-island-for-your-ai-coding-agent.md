---
title: 'XIsland: Dynamic Island for your AI coding agent'
pubDate: 2026-04-14
description: 'AI coding agents run in background terminals you can''t see. XIsland puts them in your macOS notch so you stop missing things.'
author: 'dan'
tags: ['product', 'macos', 'ai-agents']
---

## The problem nobody talks about

You kick off Claude Code in one terminal. Codex in another. Maybe Gemini CLI is doing something in a third. You go back to your editor.

Five minutes later you check on Claude. It's been waiting for approval the entire time. You just lost five minutes. This happens constantly.

The core issue: AI coding agents are chatty. They ask questions, request permissions, finish tasks, hit errors — and all of this happens inside terminal windows you're not looking at. There's no notification. No indicator. Nothing.

You end up doing this dance where you cycle through terminal tabs every 30 seconds to see if anything needs you. It's dumb. It breaks your focus. And it gets worse the more agents you run.

I run 10+ sessions some days. The tab-cycling was killing me.

## What XIsland does about it

Your Mac has a notch. It's a chunk of dead screen real estate that does nothing. XIsland turns it into a status monitor for your coding agents.

Green dot — agent is running. Leave it alone.
Orange dot — it needs approval for a file edit, command, or deletion.
Red dot — it has a question and is blocked until you answer.

That's it. You glance up, you know where things stand. No context switch. No tab cycling.

When something does need attention, click or use a keyboard shortcut. XIsland opens a popup where you can approve the action or answer the question. Then you're back in your editor. The whole interaction takes two seconds.

## The features that matter

**Monitor everything from the notch.** Every agent session shows its status. You see which agent, what it's doing, and whether it needs you. Seven terminals supported — Ghostty, iTerm2, Terminal.app, WezTerm, Warp, Cmux.

**Approve actions without switching windows.** Claude wants to delete a file? You see it in the notch before it happens. Approve or deny from the popup. You never leave your editor.

**Answer questions inline.** Agent is blocked on a question. A popup appears, you type your answer, you're done. No hunting for the right terminal tab.

**Jump to the right terminal.** When you do need the full terminal, one click takes you to the exact window, the exact tab, the exact session. Not "somewhere in iTerm" — the right pane.

**Keyboard first.** Vim-style navigation. hjkl to move between sessions, enter to act. If you don't want to touch the mouse, you don't have to.

**Two display modes.** Notch mode lives inside the camera cutout and expands when something needs attention. Pill mode floats on the menu bar if you prefer that. Switch anytime.

**Native Swift.** No Electron. No web view. Built with SwiftUI and AppKit. It uses barely any resources because it doesn't need to.

## Who this is for

If you use one coding agent in one terminal and you're always looking at it — you probably don't need this.

If you run multiple agents, or you run one agent but keep switching to your editor, or you're tired of discovering your agent has been waiting for you for the last three minutes — you'll use this every day.

It's free. [Download it here](/download) or install via Homebrew:

```
brew install --cask bluedusk/xisland/x-island
```

If something's broken, [open an issue](https://github.com/bluedusk/xisland). I read all of them.
