Setup steps
## Install rbenv
https://github.com/rbenv/rbenv

```
brew install rbenv
rbenv install -l # list versions that can be installed
```

## Install dependencies using bundler
Note don't update the gh pages plugin it fails the build.

```
bundler install
```

## Run jekyll
This should start jekyll
```
bundle exec jekyll serve
```