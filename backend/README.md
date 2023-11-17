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
- Run the server
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
