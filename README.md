# Mixed Messages Project

## What is this project ?

The goal of this project is to generate a random sentence based on the theme of our choice.
I decided to write a lovely message to motivate my girlfriend each morning.
I wrote the sentence in french so that she can understand it.

The message is composed of the following components.

- a loving name to make her happy
- a positive adjective that describes her mood of the day.
- a positive sentence to motivate her for the day.

The output looks like :

"Hello ${lovingName}, you look ${positive adjective} today. :) Here is a sentence to motivate you for your day : ${positiveSentence}.

## How does it work ?

1. We have 3 arrays containing a list of loving name, a positive adjective and a positive sentence.
2. A function that takes an array generates a random number based on the array's length in order to use this number as an index for the array.
3. A function called mixedMessage that return the random sentence.

## Additional notes

Thank you to all people that will take time to read and comment my code.
