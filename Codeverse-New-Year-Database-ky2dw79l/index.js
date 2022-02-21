const express = require('express');
const socket = require('socket.io');
const Datastore = require('nedb');
const path = require('path');
const app = express();
const server = app.listen;