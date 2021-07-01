# Learning-Data-Structures-and-algorithms

This is a repository containing popular data structures and algorithms questions based on The Coding Interview Bootcamp, that I include solutions as I learn how to solve them.

## How to get Started

Clone the repository using: git clone <url provided by github>

Install a node package called Jest which runs tests offline using:

<code>
npm install -g jest
</code>

To run a test:

<code>
cd path/to/exercises
</code>

for example to run day1 test:

<code>
jest reversestring/test.js --watch
</code>

## Day 1 : String Revesal

Used 3 solutions

- split().reverse().join()
- reduce()
- for of loop

## Day 2: Palindromes

A palindrome is a word that is the same when reversed eg. racecar
Used 2 solutions

- split().every()
- split().reverse().join() then a comparison of the two variables
