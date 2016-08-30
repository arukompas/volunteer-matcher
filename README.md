# Volunteer Matcher

## Team Members
* Sarah
* Titus
* Ben
* Noby
* Arunas

## Description
A job board for voluntary job opportunities including a rewards scheme.

## Technologies used
* Node.js
* MongoDB (via Mongoose)


## User stories

### MVP User stories
```
As a project manager or volunteer,
So that I can post and find projects to volunteer,
I would like to be able to sign up to the Volunteer Matcher.

As a project manager,
So that I can find volunteers for my project,
I would like to be able to post a project.

As a volunteer,
So I can contribute to a project,
I would like to be able to submit my offer/proposal.

As a project manager,
So I can accept volunteers,
I would like to see any offers from volunteers.

As a project manager,
So I can hire volunteers,
I would like to be able to accept volunteer offers.

As a last resort,
So we can have at least some users,
I would like to have some styling. SOMETHING. plz...
```

### Nice-to-have's
```
As a sponsor,
So I can help towards a project's goals,
I would like to contribute with resources.
```

## Structure

* A project
  * Status: pending/complete
  * Description
  * Timeframe (expected start/end of the project)
  * Skills needed
  * Rewards, if any
  * Sponsorships/Support, if any
    * Financial
    * Accommodation

* Volunteering Offer
  * Specify availability
  * Offers
    * Skills
    * Services
    * etc.
  * Requires
    * Accommodation
    * Resources
    * etc.

* Sponsorship offer
  * Can contribute towards other volunteers
  * Provide resources for projects and/or volunteers
