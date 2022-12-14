# Black and White Bonsai

## Description

I created a customizable composition of unbalanced fractal trees. The user can adjust the fractal angles for each section of the tree and change the colors of these sections on a gradient from Black-> White. There are infinite combinations of these variables, keeping the user engaged and interested. The interface, of nine sliders is easy to use and experiment with. There are no directions needed because all you need to do is test them out. It is even possible to make parts of the tree disappear by making the color of these parts the same as the background color.

This recursive fractal algorithm was inspired by Daniel
Schiffman from the Coding Train:
https://thecodingtrain.com

## Why is it Meaningful?

This system is personally meaningful because it merges algorithms with beautiful fractals. I love mathematically generated art, and the combination of these ideas fits perfectly into that niche. The patterns that van be created using recursive fractals in reminiscent of another art form that I am passionate about, printmaking. Printmaking reuses patterns all the time because it is usually easy to reuse the same woodcuts or carvings multiple times. In my printmaking work, I loved to make one print in one color, and then use a different color and rotate the orientation slightly. Finally, I love the connection between trees and fractals in real life. Fractals show up in nature all the time. A popular example is a snowflake, but they are in trees as well. A first example is within the trunks of trees, they have many rings depending on how old the tree is. Another example is the branches which form in fractal patterns, and even the locations of trees can be fractally organized due to the patterns of light, water, and available space.

## Challenges

The most interesting challenge in this project was working beyond the simple tree fractal algorithm to make the trees more interesting. Here is how the original algorithm works:

![IMG_8E4439BD02F9-1](https://user-images.githubusercontent.com/61434761/207435929-852d5116-627b-48f8-8fec-2fd5a7e5972f.jpeg)

The theta value is what changes with the sliders, defining how much each recursive branch deviates from the original angular orientation. To get rid of the symmetry and add some more flow to the fractal I made the weights of Tao unequal for the two separate recursive calls. This meant that the left branch would be longer or shorter than the left for every recursive call pair:

![IMG_12A90166129D-1](https://user-images.githubusercontent.com/61434761/207435972-e78e8ac6-c42d-4af5-85af-70355f6055fa.jpeg)

By playing with these numbers, I found a flow that was uniquely aesthetic from the basic tree fractal. In future iterations of this project, I plan to integrate ways for there to be more than two recursive calls per branch divergence point. I also would love to add other fractal background patterns (ex. clouds, mountains). Some unique challenges in this project were learning the processing.js stack and conceptualizing the fractal tree algorithm. It was an important challenge because it pushed me to apply technical ideas beyond their usual use cases and use them to create something that is visually interesting.
