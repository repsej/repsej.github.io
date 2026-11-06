---
title: "WOK - the Wide Opentv Kit"
description: "A PC reimiplementaion of the OpenTV C API.  Allowing for much faster development."
order: 3
featured: true
role: "Idea and programming"
studio: "NDS Denamrk"
year: "2009"
platforms: "OpenTV & PC"
technology: "C++, C, Cygwin, SDL, GNU Tools"
image: /assets/images/projects/placeholder.svg
image_alt: Placeholder for a project screenshot
---

## Background

Developing games for the OpenTV platform was a very tedious affair.

We had some old unix build servers that also would mux and send out our games on our internal tv netwok.

Each developer then had a OpenTV developer box (and a tv) on his desk to see if the change was good.

It would take about 10 minutes to see any change we made in the source code.

## Overview

It occured to me that we were just writing C code that we could just compile locally.

So I reimplemented the OpenTV API on a PC (Cygwin and SDL) so we could compile and test our games locally in seconds instead of minutes.  We kept using the officual OpenTV header files.

It gave much faster compile time, native execution and GDB debugging of our games.

I also added input recording and deterministic replay for reproducible bug investigation.

## Results

WOK was a huge success, all 20 OpenTV developers in the company used it for their daily OpenTV development.
