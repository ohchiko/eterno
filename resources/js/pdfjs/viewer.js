// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

// Hello world example for webpack.

var pdfjsLib = require('pdfjs-dist');

// Setting worker path to worker bundle.
pdfjsLib.GlobalWorkerOptions.workerSrc = './pdf.worker.js';
