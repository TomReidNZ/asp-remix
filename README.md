# Hi Seth

Make sure you have docker installed and running. It should just work with the CLI or visual studio.

The main thing probably to note (other than I haven't done much with the ASP settings) is the dev environment isn't working properly between the two. I assume it's running npm build then npm start. I got around this by changing the npm start in the `package.json`

```
    "start": "cross-env NODE_ENV=production remix-serve ./build/server/index.js",
```

The Remix instance is simply the latest with Vite and tailwind. There's a bunch of extra telemetry within the ASP project for the Node instance which could be interesting (I assume that's one of the big benefits of running Node within ASP).

**There's no git ignore so it'll be a bit of a pain without a clean up.**

---
languages:
- csharp
- javascript
products:
- dotnet
- dotnet-aspire
page_type: sample
name: ".NET Aspire Node.js App sample"
urlFragment: "aspire-nodejs"
description: "An example of how to integrate a Node.js app into a .NET Aspire app."
---

# Integrating a Node.js app within a .NET Aspire application

This sample demonstrates an approach for integrating a Node.js app into a .NET Aspire application.

The app consists of two services:

- **NodeFrontend**: This is a simple Express-based Node.js app that renders a table of weather forecasts retrieved from a backend API and utilizes a Redis cache.
- **AspireWithNode.AspNetCoreApi**: This is an HTTP API that returns randomly generated weather forecast data.

## Pre-requisites

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Node.js](https://nodejs.org) - at least version 20.9.0
- **Optional** [Visual Studio 2022 17.10](https://visualstudio.microsoft.com/vs/preview/)

## Running the app

If using Visual Studio, open the solution file `AspireWithNode.sln` and launch/debug the `AspireWithNode.AppHost` project.

If using the .NET CLI, run `dotnet run` from the `AspireWithNode.AppHost` directory.
