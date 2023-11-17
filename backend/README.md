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
