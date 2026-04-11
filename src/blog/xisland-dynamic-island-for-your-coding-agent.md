---
title: 'xisland: monitor your AI coding agents from the macOS notch'
pubDate: 2026-04-10
description: 'Why I built a free, open-source macOS app to monitor Claude Code, Codex, Gemini CLI, and OpenCode from the notch.'
author: 'dan'
tags: ['launch', 'open-source', 'macos']
---

I run multiple coding agents at the same time. Claude Code in one terminal, Codex in another, sometimes Gemini CLI doing something else. That's three agents doing real work in background terminals I can't see.

The problem isn't that they're slow. The problem is they ask questions. They need permission to run tools. They finish tasks and I don't notice for minutes. I'm tabbing between terminals trying to figure out which one needs me.

macOS has a notch. It just sits there. Dead pixels.

So I thought — what if the notch showed me what my agents are doing? A small, persistent status indicator. Green dot means running. Orange means it needs approval. Red means it has a question. Click to jump to the right terminal.

That's xisland.

No dashboard. No web UI. No electron app eating 400MB of RAM. Just a native Swift overlay that reads hook events from your terminal and shows them in the notch.

## What it actually does

Your agent emits events through hooks — session start, tool use, permission requests, questions. xisland picks those up through a unix socket and renders them. If Claude Code wants to delete a file, you see it in the notch before it happens. Approve or deny without leaving your editor.

It supports Claude Code, Codex, OpenCode, and Gemini CLI. Seven terminals. The whole thing runs local. No server, no cloud, no telemetry.

## Why open source

I looked at existing tools and they were either closed-source with license keys, or they were overcomplicated. I wanted something I'd actually use every day. Something that does one thing and does it well.

I also wanted to learn Swift. Building xisland was a good excuse.

The code is GPL-3.0. Fork it, break it, improve it. If you use coding agents daily, you'll probably want something like this. Maybe you'll want it to work differently. That's fine — that's why it's open.

## What's next

Better Gemini CLI support. Linux port (eventually). More terminals. Maybe sound alerts for when an agent finishes a long task.

If you try it, file issues. I read all of them.

[github.com/bluedusk/xisland](https://github.com/bluedusk/xisland)
