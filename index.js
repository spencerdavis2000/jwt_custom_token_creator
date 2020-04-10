'use strict'

// jwt are http friendly
// they can be passed as a query string, a header element, or pretty much any way within the structure of http protocol

const path = require('path');
const fs = require('fs');

// https://github.com/auth0/node-jsonwebtoken

var jwt = require('jsonwebtoken');

// generate public and private keys here in PEM format
// http://travistidwell.com/jsencrypt/demo/
// private and public key (must read as utf8)
var privateKey = fs.readFileSync('./private.key', 'utf8');
var publicKey = fs.readFileSync('./public.key', 'utf8');

// sample claims payload with your user defined fields (this can be anything, but briefer is better)
// The algorithm must be set to RS256 otherwise sadness, lol
var payload = {
    'name': 'Spencer Davis',
    'email': 'spencer.w.davis@outlook.com'
};

// populate with fields and data
payload.field01 = "data 01";
payload.field02 = "data 02";
payload.field02 = "data 03";

console.log(`Payload: ${JSON.stringify(payload)}`);

// now we need to SIGN them
// in order to sign them we need an audience values for the rfc7519 fields

var iss = 'Blitzkrieg Software';
var sub = 'spencer@user.org';
var aud = 'http://blitzkriegsoftware.net'

// expiration timespan: https://github.com/auth0/node-jsonwebtoken#token-expiration-exp-claim

var exp = '24h'; // here setting it to 24 hours

var signOptions = {
    issuer: iss,
    subject: sub,
    audience: aud,
    expiresIn: exp,
    algorithm: 'RS256'
};

console.log(`Options:  ${JSON.stringify(signOptions)}`);

// notice when we sign we only use the private key.  We use the public key only to verify
var token = jwt.sign(payload, privateKey, signOptions);
console.log(`Token: ${token}`);


var verifyOptions = {
    issuer: iss,
    subject: sub,
    audience: aud,
    maxAge: exp,
    algorithms: ['RS256']
}

// notice when we verify we use the public key.  We only sign it with the private key
var verified = jwt.verify(token, publicKey, verifyOptions);
console.log(`Verified: ${JSON.stringify(verified)}`);

/*
    Decode
*/

console.log(' ');

var decoded = jwt.decode(token, {complete: true});
console.log(`Decoded Header: ${JSON.stringify(decoded.header)}`);
console.log(`Decoded Payload: ${JSON.stringify(decoded.payload)}`);

process.exitCode = 1;