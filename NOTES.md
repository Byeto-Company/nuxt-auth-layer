<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>


#### Type
If the prefix is feat, fix or perf, it will appear in the changelog. However if there is any BREAKING CHANGE, the commit will always appear in the changelog.

Other prefixes are up to your discretion. Suggested prefixes are build, ci, docs ,style, refactor, and test for non-changelog related tasks.

Details regarding these types can be found in the official Angular Contributing Guidelines.

#### Scope
The scope could be anything specifying place of the commit change. For example $location, $browser, $compile, $rootScope, ngHref, ngClick, ngView, etc...

#### Subject
The subject contains succinct description of the change:

use the imperative, present tense: "change" not "changed" nor "changes"
don't capitalize first letter
no dot (.) at the end
Body
Just as in the subject, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.

#### Footer
The footer should contain any information about Breaking Changes and is also the place to reference GitHub issues that this commit Closes.

Breaking Changes should start with the word BREAKING CHANGE: with a space or two newlines. The rest of the commit message is then used for this.

A detailed explanation can be found in this document.