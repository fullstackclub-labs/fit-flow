#!/bin/bash

set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE DATABASE fitflow_test;
    GRANT ALL PRIVILEGES ON DATABASE fitflow_test TO fitflow;
EOSQL
