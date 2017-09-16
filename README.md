# Clean Log

Quick way to standardize your logging in any NodeJS application.

## Setup & Usage
```
npm install clean-log
```
```javascript
const log = require('clean-log')

log.info(`Interesting event`) // [INFO] interesting event
log.error(`Error object: ${{name: 'kizzle'}}`) // [ERROR] Error object: {name: 'kizzle'}
```

## Available Methods

- **log.debug()**: Detailed debug information
- **log.info()**: Interesting events. Example: user logs in, SQL logs
- **log.warning()**: Exceptional occurrences that are not errors. Examples: Use of deprecated APIs, poor use of an API, undesirable things that are not necessarily wrong.
- **log.error()**: Runtime errors that do not require immediate action but should typically be logged and monitored.
- **log.failure()**: Critical conditions. Example: Application component unavailable, unexpected exception.
- **log.alert()**: Action must be taken immediately. Example: Entire website down, database unavailable, etc. This should trigger the SMS alerts and wake you up.
- **log.success()**: Track successful actions
- **log.http()**: HTTP requests
