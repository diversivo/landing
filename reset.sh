#!/bin/bash

knex migrate:rollback --env development
knex migrate:latest --env development
knex seed:run --env development
