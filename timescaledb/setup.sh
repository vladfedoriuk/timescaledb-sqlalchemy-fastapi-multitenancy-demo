#!/bin/bash

set -euxo pipefail # https://vaneyckt.io/posts/safer_bash_scripts_with_set_euxo_pipefail/

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
	CREATE USER docker;
	ALTER USER docker WITH PASSWORD 'docker';
	CREATE DATABASE docker;
	GRANT ALL PRIVILEGES ON DATABASE docker TO docker;
	ALTER DATABASE docker OWNER TO docker;
	\connect docker;
	CREATE EXTENSION IF NOT EXISTS timescaledb CASCADE;
EOSQL
