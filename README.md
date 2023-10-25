#### multiple entrypoint just-in-time packages.

if your app uses `"moduleResolution": "node"`, the directory imports work
as expected on their paths. that's not the case with `"moduleResolution"` set
to `"nodenext"` or `"bundler"` because they need full extensions to be able
to detect the type of emit they'll generate when bundling. read [this][^1].

to summarize, `nodenext` & `bundler` dynamically detect if they wanna emit cjs
or esm for a given file. hence, they need to explicitly know the extension which
needs to specified in both `"exports"` and `"typesVersion"` keys.

everything else either compiles to cjs or esm and doesn't really care about
the file extensions. this has an added benefit that folder's would resolve
automatically so doing `x/*` works because it compiles every file depending upon
target.

#### what's in the code?

this is a very dumb imitation of a pnpm workspace. it contains
- an app
- a package

#### obeservation.
- the app consumes package.
- the package isn't transpiled before consumtion i.e. the app is the transpiler and bundler for package.
- moduleResolution

#### to play around
- keep `./app/src/app/page.tsx` open.
- change `"moduleResolution"` from `"node"` in `./app/tsconfig.json` to `"bundler"` and AAAAAAAA!
directory exports break. ;<
- why? read above.

[1]: https://www.typescriptlang.org/docs/handbook/modules/reference.html#module-format-detection
