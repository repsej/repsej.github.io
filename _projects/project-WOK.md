---
title: "WOK - the Wide OpenTV Kit"
description: "Native PC OpenTV Development Runtime."
order: 3
featured: true
role: "Creator and programmer"
studio: "NDS Denmark"
year: "2007"
platforms: "OpenTV & PC"
technology: "C++, C, Cygwin, SDL, GNU Tools"
image: /assets/images/wok-build-paths.png
screenshots:
  - file: /assets/images/wok-build-paths.png
    alt: The two build pipelines
  - file: /assets/images/wok-logo.png
    alt: The WOK logo (as I remember it)
---

## Background

Developing games for the OpenTV platform at NDS Denmark was a rather tedious affair.

We had old Unix build servers that compiled our games into OpenTV bytecode and broadcast them onto our internal TV network (with MPEG magic). Each developer had an OpenTV developer box (and a TV) on their desk to see whether a change worked.

The whole process took approximately 10 minutes from making a change in the source code to seeing the result on screen.

## The idea

One day it occurred to me that I was just writing C code, so why not compile and run it locally on my development PC?

I built a small proof of concept to convince the other architects and management that it was feasible and worth pursuing.

The resulting tool, WOK, took me about a month to build (with help from some colleagues).

Getting the idea and convincing others were probably the two hardest parts.

## What I built

I reimplemented the game-related parts of the OpenTV C API on PC, using Cygwin and SDL.

This included graphics, audio, input handling, gadget tree and timers. Everything else, such as MPEG stream handling and broadcast-related functionality, was stubbed out.

We continued using the official OpenTV header files. So that exactly the same game source code could be compiled for both targets:

- OpenTV boxes (build by the Unix build servers)
- A native PC build using WOK

Games could now be compiled and running in seconds instead of minutes. Developers could also use normal GDB for debugging.

I also added input recording and replay, which made it possible to reproduce bugs reliably by replaying exactly the same sequence of user interactions. This turned out to be particularly useful when tracking down tricky bugs.

WOK was a development tool, not a replacement for the real platform. Games still had to be tested and run on actual OpenTV boxes.

## Results

All 20 OpenTV developers at the company used WOK in their daily development for years.

It reduced the development feedback loop from approximately 10 minutes to 10 seconds, while making debugging considerably easier.

The tool died when NDS Denmark closed in 2011.
