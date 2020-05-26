# Not Busy App - Web App

Not Busy App is a web-based solution for patrons to find the least busy businesses in their area. Currently running on a firebase instance at: https://not-busy-front.web.app/ 

## Purpose

Since COVID-19 we citizens have struggled with the balance of social distance and fulfilment of basic needs. For some who are at special risk, this pandemic has been a nightmare to collect basic necessities for daily life. I wanted to make a proof-of-concept for an app which can be used to help citizens find the least busy businesses to patronize. 

## Description

Not Busy App is an Angular 9 web app which requires the user’s location. Using the location we query some basic data using the “not-busy-backend” api (also public source). This API returns a list of places and their relevant “popularity” data. Subsequent searches of this api can also include a keyword to filter resulting places. Authenticated users can “heart” (favourite) and save a specific set of places, to be retrieved and popular-time data gathered in realtime.

## Other considerations

- This app is just a proof-of-concept to be presented as an idea in the meantime. If I continue to create some more functionality and finish up the final basic components I will consider making this a real open source project.  I will gladly accept any ideas or issues in the issue tracker, or PRs if anyone is really interested.
- Many people before COVID-19 would go to specific businesses with little provocation to do so. This app assumes that many patron-business loyalties have fallen by the wayside with availability.

## Under Development

- A place “detail” page on long-press of a summary item which displays all relevant data available including opening hours and a map+link
- Extending the front-end unit tests
- Social OAuth (Twitter, FB, Google) setup 

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