# timescaledb-sqlalchemy-fastapi-multi-tenancy-demo
A demo showcasing the schema-based multi tenancy implementation using TimescaleDB, SQLAlchemy, and FastAPI.


## General Info
### Firebase
- Firebase Python SDK is used to authenticate users on the backend server.
    - Configuration instructions: https://firebase.google.com/docs/admin/setup#python
- Getting the default application credentials:
  - Firebase Python SDK setup:
    - Locally: https://firebase.google.com/docs/admin/setup#initialize_the_sdk_in_non-google_environments
      - Auth methods: https://cloud.google.com/docs/authentication
        - Setting up application default credentials:
          - https://cloud.google.com/docs/authentication/provide-credentials-adc#local-dev
          - https://cloud.google.com/docs/authentication/application-default-credentials#GAC
