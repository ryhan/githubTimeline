githubTimeline
==============

githubTimeline is a simple tool that chronologically lists a user's github repositories. It's very simple, and I welcome contributions.

To see it in action, check out [ryhan.github.com](http://ryhan.github.com/ "ryhan.github.com")

## Usage

### Fork and rename to [username].github.com

If you haven't already, I recommend making use of github Pages to host your own version of githubTimeline for free. Forking and renaming this repository to "username.github.com" (where 'username' is replaced by your own username) will generate a public site that lists all of your public repositories.

To do this, fork this repository to your own account, click on 'Admin', and then change the 'Repository Name' to 'username.github.com'

Learn more about Github Pages at [pages.github.com](http://pages.github.com/ "pages.github.com").

### Add your name

By default, githubTimeline uses 'Ryhan' as the initial github user name. You should modify the `title` tag as well as the value attribute of `input` in index.html to be your own github handle.


### Register your application

Github now requires your application is registered to access the API. Fortunately, this is very simple. Go to [your profile](https://github.com/settings/profile) and click on 'Applications'. Fill in the following:

```text
Application Name: [username].github.com
Main URL: http://[username].github.com
Callback URL: http://[username].github.com
```

And click "Register Application".

Push all your changes and wait a few minutes for the caches to update.

## License

The MIT License

Copyright (c) 2012 Ryhan Hassan

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



