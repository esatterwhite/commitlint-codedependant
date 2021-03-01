## commitlint-config-codedependant

[Commitlint][] configuration to enforce commit message best practices

## Installation

```bash
$ npm install commitlint commitlint-config-codedependant
```

## Usage

To enable commit linting, you need two things in `package.json`

1. `npm` script exposing commitlint
2. `commitlint` configuration that extends the codedependant base configuration
Adding a script to expose `commitlint` in the package.json `scripts`.
Below is an example of linting all commits on the active branch that have not been merged into master

```json
"commitlint": {
  "extends": "commitlint-config-codedependant"
},
"scripts": {
  "commitlint": "commitlint --from=origin/main --to=HEAD",
  "pretest": "npm run commitlint"
}
```

### Command Line Tool

This package may additionally be installed globally as a command lint tool (`commitlint-codedependant`)

```bash
$ npm install -g commitlint-config-codedependant
$ commitlint-codedependant <options>
```

or executed immediately with `npx`

```bash
$ npx commitlint-config-codedependant -f origin/master
```

#### OPTIONS

```bash
  -h, --help                 show help and usage
  -v, --version              show version
  -f, --from [origin/main]   the git ref where linting should begin
  -t, --to [HEAD]            the git ref where linting should end
  -p, --pwd <path>           set the root directory
  --config <path>            path to an alternate commitlint config module
```

## Commit Format

Commit message should follow the [Conventional Commit Standard][], and be be
written in imperative form.

* A proper title - This summarizes what was done in the commit
* A descriptive commit body. This says WHY the change was made in addition to
what it was. A blank line should start and end the commit body.
* Break lines of text at 72 columns.  This is for readability.
* `Ref:` tag at the bottom of the body.

Example:

```shell
fix(test): Add tests for component XYZ

The component for XYZ was missing a test which resulted in a
production bug.  There was an unchecked reference that caused
a `TypeError`.  This change adds the reference fix and a
corresponding test.

Ref: LOG-1234
```

## Authors

* [**Eric Satterwhite**](mailto:esatterwhite@wi.rr.com) &lt;esatterwhite@wi.rr.com.com&gt;

[Commitlint]: https://commitlint.js.org
[Conventional Commit Standard]: https://www.conventionalcommits.org/en/v1.0.0/

