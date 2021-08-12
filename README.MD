# TouchOSC -> Browser

## How it works

#### TouchOSC -> UDP -> Websocket -> Browser

Actually you need only `bridge.js` file and `osc` module. [Read more](https://github.com/colinbdclark/osc.js/#udp-in-nodejs)


## Install
```
npm i
```

## Run Bridge (UDP -> Websocket)

```
npm start
```

## Testing

This files used to test bridge:

- `index.html`
- `socket-client.js`

1. Setup server's local ip or hostname in TouchOSC app.
2. Setup port (`57121` for example) in TouchOSC app.
3. In one terminal ```npm start```.
4. In another terminal ```npm test``.
5. Go to http://localhost:5000 and open console.
6. Change any slider in TouchOSC app and see objects in browser's console.
7. ???
8. PROFIT!

