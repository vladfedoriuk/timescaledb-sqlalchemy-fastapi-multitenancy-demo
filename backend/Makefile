 # we want bash behaviour in all shell invocations
SHELL := bash
# Run each target in a separate shell
.ONESHELL:
 # Fail on error inside any functions or subshells
.SHELLFLAGS := -eu -o pipefail -c
 # Remove partially created files on error
.DELETE_ON_ERROR:
 # Warn when an undefined variable is referenced
MAKEFLAGS += --warn-undefined-variables
# Disable built-in rules
MAKEFLAGS += --no-builtin-rules
# A catalog of requirements files
REQUIREMENTS?=requirements

help: # Show this help
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@echo "  help               Show this help"
	@echo "  requirements-base  Compile base requirements"
	@echo "  requirements-dev   Compile dev requirements"
	@echo "  requirements       Compile all requirements"
	@echo "  install            Install the app locally"
	@echo "  install-dev        Install the app locally with dev dependencies"
	@echo "  init-dev           Install the app locally with dev dependencies. Also install pre-commit hooks."
	@echo "  reinit-dev         Reinstall pre-commit hooks and dev dependencies"
	@echo "  lint               Run linters"
	@echo "  run                Run the app"

requirements-base: # Compile base requirements
	python -m piptools compile \
	--output-file=requirements/base.txt \
	-v \
	pyproject.toml
.PHONY: requirements-base

requirements-dev: requirements-base # Compile dev requirements
	python -m piptools compile \
	--extra=dev \
	--output-file=requirements/dev.txt \
	-v \
	pyproject.toml
.PHONY: requirements-dev

requirements: requirements-base requirements-dev  # Compile all requirements
.PHONY: requirements

install:  # Install the app locally
	python -m pip install -r $(REQUIREMENTS)/base.txt .
.PHONY: install

install-dev: # Install the app locally with dev dependencies
	python -m pip install \
		-r $(REQUIREMENTS)/base.txt \
		-r $(REQUIREMENTS)/dev.txt \
		--editable .
.PHONY: install-dev

init-dev: install-dev # Install the app locally with dev dependencies. Also install pre-commit hooks.
	pre-commit install
.PHONY: init--dev

reinit-dev: init-dev # Reinstall the app locally with dev dependencies. Also reinstall pre-commit hooks.
	pre-commit install --install-hooks --overwrite
.PHONY: reinit-dev

lint: # Run linters
	pre-commit run --all-files
.PHONY: lint

run: # Run the app
	uvicorn main:app --reload --host 0.0.0.0 --port 8000
.PHONY: run


.DEFAULT_GOAL := init-dev # Set the default goal to init-dev
