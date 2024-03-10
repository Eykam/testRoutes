Table.csv contains all urls that currently 404

You have to implement a way to parse this csv, to get all the urls in an array

Basically what this script is doing is testing all the urls to see what status they return
when a request is sent to them.

Expect every url to return a 404. Make a list of all urls that don't, and try to figure out why they're
404'ing when google attempts to crawl them.

Run the script with `node testRoutes.js`
