---
title: "WOK - the Wide OpenTV Kit"
description: "A PC reimplementation of the OpenTV C API that cut the time to see a code change from about 10 minutes to 10 seconds."
order: 3
featured: true
role: "Creator and programmer"
studio: "NDS Denmark"
year: "2008"
platforms: "OpenTV & PC"
technology: "C++, C, Cygwin, SDL, GNU Tools"
screenshots:
  - file: /assets/images/wok-logo.png
    alt: Redrew the logo for having some grahpics on this page
---

## Background

Developing games for the OpenTV platform was a very tedious affair at NDS Denmark.

We had some old Unix build servers that would compile and broadcast our games on our internal TV network. Each developer then had an OpenTV developer box (and a TV) on their desk to see if a change was good.

It took about 10 minutes to see any change we made in the source code.

## The idea

It occurred to me one day that we were just writing C code, so why not compile and run it locally?

I first built a small demo to win over management and the other architects. Building WOK took about a month.

Getting that idea and convincing others it was worth doing were the two hardest parts.

## What I built

I reimplemented the game parts of the OpenTV API on PC (using Cygwin and SDL): visuals, audio, input and timers. Everything else, such as handling MPEG streams, was stubbed out.

We kept using the official OpenTV header files. The whole idea was that the exact same source code would build both on the slow Unix servers (for running on the real boxes) and on a PC with WOK.

That gave us compiling and testing in seconds instead of minutes, native execution, and debugging with GDB.

I also added input recording and replay, for reproducing bugs.

WOK was a tool for faster game development. Games still had to be tested and release on the real boxes in the end.

## Results

All 20 OpenTV developers in the company used WOK for their daily development.

The tool died with the company, when NDS Denmark closed in 2011.
