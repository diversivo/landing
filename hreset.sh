#!/bin/bash

heroku run knex migrate:rollback --env production
heroku run knex migrate:latest --env production
heroku run knex seed:run --env production
