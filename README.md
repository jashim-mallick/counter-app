# Counter App

## Description:

- An app that has a few plus(+) and minus(-) buttons and a countervalue info. if press (+) or (-), the counter value info will beincreased or decreased accordingly.

## Tech Stack :

- NextJS (AppRouter)
- TailwindCSS with ShadCn
- Theming with Next theme
- Lucide Icon - for icons.

## Features:

- Easy Navigation
- Clean UI & UX
- Dark & Light mode

## Eleboration :

- In the Counter app, have 3 pages[ Basic , Intermediate , Exper ]. Each page acts as a counter level. It has 3 Components.
- Basic page will have 2 buttons [(+), (-)] and a counter value
  info. The basic page will be the homepage.
- The intermediate page will have 4 buttons [(+) , (-) , (+10) ,
  (-10)] , and a counter Value info.
- The expert page will also have 4 buttons [(+) , (-) , (+10) ,
  (-10)] , and a counter Value info.
- All 3 pages will navigate through NavBar.

- A card has been used on all 3 pages. And inside component A logic folder has 3 components where all logic and work is done.

- In all 3 Components, 1 State is defined where count is the name
  and setCount is a setter function to track down the counter value
  info.

- For the Basic, Intermediate, and Expert counter app, when the
  button is pressed onclick Event will trigger, and when the event
  is triggered, it triggers the function attached to it. in those
  funtions setter function[setCount] are commanded to
  change[increase or decrease] the count value accordingly.

- For Basic and Intermediate counter apps, have no limit on
  increasing or decreasing their value.
- And for Expert counter app value cant be went to negative or more
  than +100. And buttons on it are disabled accordingly, like when
  the counter value is 0, (-) & (-10) buttons will be disabled. and
  when counter value is 100 , (+) ,(+10) button will be disabled.
