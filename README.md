# WatchStop.js
## What is WatchStop?
A simple, delightful, and fast framerate scheduling agent.
## How can I use WatchStop?
Start by including `watchstop.js` in your JavaScript app. For example, to use WatchStop in the browser, it's a simple `<script>` embed:
```html
<script src="watchstop.js"></script>
```
The entrypoint to WatchStop is `WatchStop.fps`. Call it like this:
```javascript
function foo(current) {
	/* 
	`foo` is passed one parameter, `current` in this case:
	`current.frame` is a zero-indexed frame number
	`current.last()` you can call this method to prevent WatchStop from scheduling your function any further
	*/
}
// Schedule `foo` to be run at 30fps.
WatchStop.fps(foo, 30);
```
`current.frame` is a zero-indexed frame number, which your function should use to figure out which "frame" (or state) to handle. WatchStop handles skipped frames for you, and guarantees not to run an instance of your function before the previous one is done.
## Who made this?
WatchStop written with care and love by [Chris](https://chrismatic.io/).
## License
See [LICENSE.md](LICENSE.md). Enjoy.
