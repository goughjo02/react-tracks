# React Tracks

## Resources

- https://docs.djangoproject.com/en/3.2/
- https://github.com/flavors/django-graphql-jwt/

## Setup

```
pip install -r requirements.txt
```

## Contributing

### pyenv + pyenv-virtualenv

#### To install new packages

```
pip install <package-name>
pip freeze > requirements.txt
```

### VS Code

#### Setup for pyenv + pyenv-virtualenv

1. Press `Command/Ctrl + Shift + P` and Look for _Python: Select Interpreter_
2. Select the desired python environment
3. Check your settings.json for changes and note the new value of `"python.pythonPath"`
4. Set up an environmental variable named `VSCODE_PYTHON_PATH` with the new value of `"python.pythonPath"`
5. revert the change in settings.json

for example,

```shell
# .bashrc
export VSCODE_PYTHON_PATH='/home/joey/.pyenv/versions/python-graphene/bin/python'
```

### Changing the model

If we change our database model, we must run:

```shell
python manage.py makemigrations
python manage.py migrate
```