# Not Busy App - Web App

Not Busy App is a web-based solution for patrons to find the least busy businesses in their area. Currently running on a firebase instance at: https://not-busy-front.web.app/ 

## Purpose

Since COVID-19 :microbe: we citizens have struggled with the balance of social distance and fulfilment of basic needs. For some who are at special risk, this pandemic has been a nightmare to collect basic necessities for daily life. I wanted to make a proof-of-concept for an app which can be used to help citizens find the least busy businesses to patronize. 

## Description

Not Busy App is an Angular 9 web app which requires the user’s location. Using the location we query some basic data using the “not-busy-backend” api (also public source). This API returns a list of places and their relevant “popularity” data. Subsequent searches of this api can also include a keyword to filter resulting places. Authenticated users can “heart” (favourite) and save a specific set of places, to be retrieved and popular-time data gathered in realtime.

## Installation

You must have the npm (~6.14) and node (~10.20) installed. See instructions here for OS X, Windows, and Linux: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm .

You must also have the angular CLI (>9.1) on your build machine. Use this command to install globally:

```
$ npm i -g @angular/cli
```

Then you can go into the root directory to install the required dependencies. To do this, run:
```
$ npm i
```
You can use your global installation of angular to run the app locally with:
```
$ ng serve
```
or if you did not install angular cli globally:
```
$ npm run start
```

## Deployment

See angular best practices for deployment/production build details here: https://angular.io/guide/deployment . If you install the firebase CLI and create a Firebase project you can use the npm command to 'build-and-deploy-firebase' to build a production build and send directly to a firebase live env.

## Samples

Here is an authenticated user searching for "Walmart" to find the least busy walmart in the area. 

![Searching for 'Walmart' authenticated](/sample_images/3.png)

Here is an authenticated user looking at their page of "hearted" places that they wanted saved. In future iterations each place will have at least an estimate of current popularity based on business type.


![An authenticated user's favourites list](/sample_images/2.png)

## App Structure

Highly modularized with lazy-loaded page components. All shared components reside in the "shared" folder (components, services, interfaces, and directives used by more than one component). A module is a mechanism to group the aforemention pieces into a working application. The basic structure of a module is defined by the module file and can include definitions/exports of components to be used elsewhere, or imports of other modules to use their pieces inside of this component.

```

└───src/
    ├───app/
    │   ├───{{function_grouping}}/
    │   │   ├───{{component_def}}/
    │   │   │   ├───components/
    │   │   │   ├───services/
    │   │   │   ├───resolvers/
    │   │   │   └───directives/
    |   |   └───{{function_grouping}}.module.ts
    │   ├───shared/
    │   │   ├───components/
    │   │   │   └───shared-header/
    │   │   │       ├───shared-header.component.html
    │   │   │       ├───shared-header.component.scss
    │   │   │       ├───shared-header.component.spec.ts
    │   │   │       └───shared-header.component.ts
    │   │   ├───directives/
    │   │   │   ├───no-request-page.directive.spec.ts
    │   │   │   └───no-request-page.directive.ts
    │   │   ├───interfaces/
    │   │   │   ├───lat-lng.interface.ts
    │   │   │   ├───place.interface.ts
    │   │   │   └───user.interface.ts
    │   │   ├───services/
    │   │   │   ├───base-api.service.spec.ts
    │   │   │   ├───base-api.service.ts
    │   │   │   ├───http-service.interceptor.spec.ts
    │   │   │   ├───http-service.interceptor.ts     --> Created this interceptor to help with the initial custom splash and detect the first http request completing before hiding the splash
    │   │   │   ├───location.service.spec.ts
    │   │   │   └───location.service.ts
    │   │   └───shared.module.ts    --> Modules used (and will be used) by components throughout the app
    │   ├───app-routing.module.ts   --> Base routing defined here
    │   ├───app.component.html      --> Root template
    │   ├───app.component.scss
    │   ├───app.component.spec.ts
    │   ├───app.component.ts
    │   └───app.module.ts   --> Global module definitions/imports
    ├───index.html      --> App root
    └───styles.scss     --> Global styles

```
## Dev History

This app was originally a one week coding challenge I made for myself to complete the full stack of an app that would aide the community during the pandemic. It was originally made as an attempt to sharpen my skills that I have been honing on the front-end, while giving me some reminders of Node/Express best practices developing an API on the back end.

## Other considerations

- This app is just a proof-of-concept to be presented as an idea in the meantime. If I continue to create some more functionality and finish up the final basic components I will consider making this a real open source project.  I will gladly accept any ideas or issues in the issue tracker, or PRs if anyone is really interested.
- Many people before COVID-19 would go to specific businesses with little provocation to do so. This app assumes that many patron-business loyalties have fallen by the wayside with availability.

## Under Development

- [ ] A place “detail” page on long-press of a summary item which displays all relevant data available including opening hours and a map+link
- [ ] Extending the front-end unit tests
- [ ] Social OAuth (Twitter, FB, Google) setup
- [ ] Estimate of current popularity (when not available) based on business type 
- [ ] Move the URL of api to an env variable

## Future Considerations
- Package the entire app into a docker instance (or other container platform)
- Larger desktop views
- Opt-in business data for business times (either for regular popularity data or for a current surge/dip)
- HTTP-only cookies for auth token
- Email verification/Forgot password

## Author

Max Gardiner
https://github.com/max-in-to

## License

None (All rights are reserved to author)