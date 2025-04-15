/*
 * File: scrabbleScore.js
 * ------------------------
 * This program creates a function to find scores in scrabble.
 */

"use strict";

function scrabbleScore(word) {
let score =0;
for (let i = 0; i < word.length; i++) {
  let ch = word.charAt(i);
  if (isUpperCase(ch)) {
    score += scrabblePoints(ch);
  }
}
  return score;
}

function scrabblePoints(letter) {
  if ("AEILNORSTU".includes(letter)) return 1;
  if ("DG".includes(letter)) return 2;
  if ("BCMP".includes(letter)) return 3;
  if ("FHVWY".includes(letter)) return 4;
  if ("K".includes(letter)) return 5;
  if ("JX".includes(letter)) return 8;
  if ("QZ".includes(letter)) return 10;
  return 0;
}

function isUpperCase(ch) {
  return ch >= 'A' && ch <= 'Z';
}

function handleScore() {
    const input = document.getElementById("wordInput").value;
    const score = scrabbleScore(input);
    document.getElementById("scoreResult").textContent = `Score: ${score}`;
  }