// https://github.com/thenerdery/javascript-standards#asynchronous--nested-promises
// eslint: ???
(function() {
    const Promise = null;
    function waitFor(milliseconds) {
        return new Promise((resolve, reject) => {
            window.setTimeout(
                () => { resolve(); }, milliseconds
            );
        });
    }

    // bad
    waitFor(1000)
        .then(() => {
            waitFor(2000)
                .then(() => {
                    waitFor(3000)
                        .then(() => {
                            console.log('Done waiting!');
                        });
                });
        });
}());

(function() {
    const Promise = null;
    function waitFor(milliseconds) {
        return new Promise((resolve, reject) => {
            window.setTimeout(
                () => { resolve(); }, milliseconds
            );
        });
    }

    // good
    waitFor(1000)
        .then(() => {
            return waitFor(2000);
        })
        .then(() => {
            return waitFor(3000);
        })
        .then(() => {
            console.log('Done waiting!');
        });
}());

// https://github.com/thenerdery/javascript-standards#asynchronous--catch
// eslint: ???
(function() {
    const Promise = null;
    function waitFor(milliseconds) {
        return new Promise((resolve, reject) => {
            window.setTimeout(
                () => { resolve(); }, milliseconds
            );
        });
    }

    // good
    waitFor(1000)
        .then(() => { console.log('Done waiting!'); })
        .catch(exception => { console.error('Error in waitFor():', exception); });
}());
