---
title: "TurnHero"
description: "The Unity client for a new generic board games platform."
order: 1
featured: true
role: "Unity Game Developer"
studio: "TurnHero"
year: "2020 to 2021"
platforms: "Desktop and Mobile"
technology: "Unity / C#"
screenshots:
  - file: /assets/images/projects/TurnHero/Screen - example background 1.png
    alt: The card game Combo Fighter in the TurnHero client, with both players' cards and decks on a table
  - file: /assets/images/projects/TurnHero/Screen - my overview.png
    alt: TurnHero's main menu, with Champions of Midgard selected above a row of active games
  - file: /assets/images/projects/TurnHero/Gif - move piece.gif
    thumb: /assets/images/projects/TurnHero/move-piece-still.jpg
    alt: A highlighted red game piece being moved onto a board of tiles
  - file: /assets/images/projects/TurnHero/Git - thumb buttons.gif
    thumb: /assets/images/projects/TurnHero/thumb-buttons-still.jpg
    alt: Round portrait buttons offering a choice between re-rolling a die and accepting the roll
---

## Overview

TurnHero was an online board gaming platform designed to let users play board games across devices and platforms. It combined high-quality graphics, built-in rule enforcement, and a simple user interface with features for spectating, streaming, casting, and post-game analysis.

The vision was to become a leading platform for digital board gaming, supporting official tournaments, content creators, and independent developers through an open API.

The platform consisted of a cloud-based backend handling game logic and state management, and a Unity client featuring a flexible, data-driven game interface capable of rendering different board games based on backend-provided data.

## My role

I designed and implemented the Unity client.

## Technical challenges

### Generic board game engine

The goal was to create a generic board game player capable of supporting a wide variety of games without requiring changes to the Unity application for each new game.

The Unity client was designed to render games based on data received from the backend. Adding a new game would primarily involve uploading the required assets and implementing its rules on the server.

### Client-server architecture

I developed the Unity client in collaboration with another programmer responsible for the backend. Together, we designed the communication protocol connecting the two systems.

The backend was responsible for all game logic and state management, while the Unity client handled rendering, player interaction and presentation.

This separation allowed new games to be implemented independently of the Unity client.

## Results

We made a successful demo / vertical slice, with some fun playable board games.

[More info](https://github.com/TurnHero/th-collaboration/blob/main/TurnHero/About.md)
