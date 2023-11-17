# Setup
- Install `Python 3.12.0`
```shell
pyenv install 3.12.0
```
- Create a virtual environment
```shell
pyenv virtualenv 3.12.0 tsdb-sqlalchemy-fastapi-multitenancy-demo
```
- Activate the virtual environment
```shell
pyenv local tsdb-sqlalchemy-fastapi-multitenancy-demo
```
- Install dependencies and pre-commit hooks
```shell
make
```
## Running the server
- Run the server with `uvicorn` (with hot reloading)
```shell
make run
```
## Integrating with `Sensor Logger`
- Check out the `Awesoe Sensor Logger` repository
https://github.com/tszheichoi/awesome-sensor-logger
- One needs to configure the `Sensor Logger` to send data to the `backend` server
- To get the IP address of the `backend` server, run
```shell
make get-host-ip
```
- Update the `Sensor Logger` settings: `All settings / Data streaming`
  - `Push URL` can be set to `http://<backend-ip>:8000/sensors-data-test`
    for testing purposes to check if the connection can be established.
  - `Push URL` can be set to `http://<backend-ip>:8000/sensors-data`
    for target deployment

## Setting up Application Default Credentials for local development
- The project on firebase is assumed to be `sqlalchemy-multi-tenancy-demo`
- Visit: https://console.firebase.google.com/u/1/project/sqlalchemy-multi-tenancy-demo/settings/serviceaccounts/adminsdk
- Generate a new private key and store it in `./firebase-adminsdk.json`
- Set the environment variable `GOOGLE_APPLICATION_CREDENTIALS` to the path of the private key file:
```shell
export GOOGLE_APPLICATION_CREDENTIALS="firebase-adminsdk.json"
echo $GOOGLE_APPLICATION_CREDENTIALS
```
