# Proof of Concept: Using Maestro as an End-to-End Tool in the Ev.energy Project

This document outlines the proof of concept of using [Maestro](https://maestro.mobile.dev/getting-started/installing-maestro) as an end-to-end tool in the Ev.energy project. We tested the QA code challenge using Maestro with four different flows 
1. Asking for location permission and denying it.
2. Asking for location permission and allowing it.
3. Using the list of charge stations.
4. Using the map of charge stations.

### Norte: so far I have tested it in Ios simulator
## Setup

To run the proof of concept, follow these steps:

1. Clone the repository to your local machine.
2. Install Maestro by running `curl -Ls "https://get.maestro.mobile.dev" | bash`.
3. Before running Flows on iOS Simulator, install Facebook IDB tool 
   `brew tap facebook/fb
    brew install facebook/fb/idb-companion`
3. Install the project dependencies by running `npm install`.
4. Build the App

## Testing

To test the different flows fun in your termina:

1. `maestro test .maestro/flow-charge-stations-map.yml`
2. `maestro test .maestro/flow-charge-stations-list.yml`
3. `maestro test .maestro/flow-permissions-allowed.yml`
4. `maestro test .maestro/ flow-permissions-deny`
5. you can also run `maestro studio` is a personal assistant to help write your Maestro Flows

## Conclusion

pros:
In conclusion, Maestro is a valuable tool for developers and testers looking to streamline their mobile app testing process. has a quick and simple setup process and is easy to use thanks to its clear, human-readable syntax. it works very well on different operating systems and mobile platforms, and can be integrated easily into continuous integration workflows.

const:
There are some limitations and disadvantages to using the Maestro tool I have found so far, for example
it is not suitable for writing complex tests. Additionally, the Maestro community is relatively small compared to other frameworks. Maestro also doesn't generate detailed reports and does not yet support real iOS devices.

## Demo video

https://user-images.githubusercontent.com/23506210/234942371-6bf5220b-3b75-4e07-b685-b8991d9801b2.mov
