---
layout: project
title: Montr
image: /images/montr_www_main.png
description: An app platform that enables digitizing mobile reporting. It is
  flexible, easy to use and integrates with other platforms. It helps you to
  build with no code the digitized surveys for end-users.
tags:
  - app
  - backend
  - frontend
order: 4
slug: app-digitized-surveys
published: false
---
![Montr app development](/images/montr_company_panel.png)

## Main features:

* Planning investigations
* Conducting a specific investigation
* Self-investigations for the inspection targets (with video chat option)
* Managing investigation projects 
* Creating questionnaires 
* Managing inspection targets and reporters
* Following ongoing investigations and their subjects on a map
* Generating PDF reports from investigations
* Offline mode
* Colours and logo customisation on a company level

## Skills:

**Frontend:** React

**Backend:** Node.js

**Database:** PostgreSQL + Azure and Docker containers

## About

[Montr](https://montr.nl/en/business-apps/) is a web solution that helps to digitize the company work. The app can be easily customised according to the user's business needs. Montr helps to create and share digital questionnaires, reports and surveys. It is a perfect tool for companies that provide inspections and audits. Also, this is the first dedicated app for the social care team.

![mobile app development](/images/montr_smartphone_mockup.png)

## Goal

The goal of Montr software development process was to build a solution that would be flexible, easy to adjust and available offline mode for users. Our aim was to develop a UX friendly no-code workflow that helped to create digital questionnaires or surveys by users to end-users in a convenient and quick way. For example, a real-estate agency could create a questionnaire for a client to establish what property they would like to buy.

![software development](/images/montr_mockuppng.png)

## Process

We have already worked with this client on a mobile version of the app with similar functionality. This time the client wanted us to create a web app with an independent backend from scratch. The app needed to be simple to use and able to work offline as well.

One of the key aspects of the app is the need to operate offline without any interruption and to synchronize whenever a connection is restored. This requirement determined the following technological solutions:

* localStorage, Redux persist – they allow us to keep the needed data within the web browser,
* Service worker – used for queuing requests sent while being offline.

What is more, the web app needed to be responsive and work well both on desktop and mobile devices (phones and tablets) as most of the users are expected to work in the terrain. We used the media queries to adjust the styles depending on the screen resolution. 

## Result

Currently, the app is used by end-users in the Netherlands to perform various types of questionnaire-based investigations. We take care of the maintenance and bug fixes, with some new features being introduced every now and then.