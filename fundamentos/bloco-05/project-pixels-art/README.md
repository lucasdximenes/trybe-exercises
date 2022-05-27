# Welcome to the Art with Pixels project repository!

> ## [Live Version](https://lucasdximenes.github.io/other/projects/project-pixels-art/)

It was a project carried out as a full-stack web student at Trybe. The acquired knowledge was HTML, CSS, JavaScript and Programming Logic.

---

# Mandatory requirements

## 1 - Add the title "Color Palette" to the page.

<details>
  <summary>Your page should contain the title "Color Palette"</summary><br />

- The title must be inside a `h1` tag with the `id` called `title`;

- Title text must be **exactly** "Color Palette".

**What will be verified**

- Checks if it contains an `h1` element;
- Checks if it has id `title`;
- Checks if the title `Color Palette` exists.

</details>

## 2 - Add a palette containing four different colors to the page.

<details>
  <summary>Your page must contain a four-color palette</summary>

- The color palette must be an element with `id` called `color-palette`, and each individual color contained in the color palette must have a `class` called `color`;

- The background color of each element in the palette must be the color that the element represents. **The only color not allowed in the palette is white**;

- Each element of the color palette must have a black border, solid and 1 pixel wide;

- The color palette should list all the colors available for use side by side, and should be placed under the heading `Color Palette`;

- The color palette must not contain repeated colors.

**What will be verified**

- The color palette must be an element with `id` called `color-palette`;

- Each individual color in the color palette has a `class` called `color`;

- The background color of each element in the palette is the color that the element represents :warning: **The only color not allowed in the palette is white** :warning:;

- Checks if each element of the color palette has a solid black border 1 pixel wide;

- The palette lists all the colors available for use, side by side;

- The color palette is positioned under the heading `Color Palette`;

- The color palette does not contain repeating colors.

</details>

## 3 - Add the color **black** as the first color of the color palette.

<details>
  <summary>The first color in the palette created in requirement 2 must be black </summary><br />

**What will be verified**

- Checks if the first color of the palette has `background-color` black;

- The other colors can be chosen freely.

</details>

## 4 - Add a frame containing 25 pixels to the page.

<details>
  <summary>Your page must contain a 5x5 pixel frame</summary>

- The "pixel" frame must be 5 elements wide and 5 elements long;

- The "pixel" frame must have the `id` called `pixel-board`, while each individual "pixel" within the frame must have the `class` called `pixel`;

- When opening the page, the initial color of the "pixels" that make up the pixel frame must be white;

- The "pixel" frame should appear below the color palette.

**What will be verified**

- The "pixel" board has the `id` called `pixel-board`;

- Each individual pixel within the frame has a `class` called `pixel`;

- The initial color of the "pixels" inside the frame, when opening the page, is white;

- The "pixel" frame appears below the color palette.

</details>

## 5 - Make each pixel of the frame 40 pixels wide and high and 1 pixel thick black border.

<details>
  <summary>Each <code>pixel</code> in the frame must be 40px wide and 40px tall and have a solid black border 1px thick</summary><br />

**What will be verified**

- The "pixel" frame has a height and length of 5 elements;

- Checks that 40 pixels high and 40 pixels wide is the total size of the element, including its content and excluding the black border, which must be created separately.

</details>

## 6 - Set black color as initial color of color palette

<details>
  <summary>When loading the page, black should already be selected in the palette to paint the pixels of the frame.</summary>

- The black element must initially have the `selected` class;

- The element that must receive the `selected` class must be one of the elements that have the `color` class, as specified in **requirement 2**.

**What will be verified**

- The black element initially has the `selected` class;

- No other color in the palette has the `selected` class when loading the page.

</details>

## 7 - Select a color from the color palette and fill the pixels in the frame.

<details>
  <summary>When clicking on other colors in the color palette, the color must be selected and can be used to fill the frames</summary>

- The `class` `selected` must be added to the selected color in the palette, at the same time it is removed from the previously selected color;

- Only one of the colors in the palette should have the `selected` class at a time;

- The elements that must receive the `class` `selected` must be the same elements that have the `color` class, as specified in **requirement 2**.

**What will be verified**

- Checks if only one color from the color palette has the `selected` class at a time;

- Checks that pixels inside the frame do not have the `selected` class when clicked.

</details>

## 8 - Fill a pixel of the frame with the color selected in the color palette.

<details>
  <summary>When clicking on any <code>pixel</code> in the frame, its color must be changed to the color selected in the color palette</summary><br />

**What will be verified**

- When loading the page, it must be possible to paint the pixels of the frame in black;

- After selecting another color in the color palette, it is possible to paint the pixels of the frame with that color;

- Only the pixel that was clicked was filled with the selected color, without influencing the color of the other pixels.

</details>

## 9 - Create a button that returns the frame color to the initial color.

<details>
  <summary>Your page should have a button that, when clicked, turns all <code>pixels</code> in the frame to white</summary><br />

**What will be verified**

- The button has the `id` called `clear-board`;

- The button is positioned between the color palette and the pixel frame;

- The button text is `Clear`;

- When clicking the button, the pixel frame is completely filled with white.

</details>

# Bonus requirements

## 10 - Make the pixel frame have its size defined by the user.

<details>
  <summary>Your page must contain an input so that the user can set the pixel frame size</summary>

- Create an input and a button that allow defining a frame of pixels with a size between 5 and 50. When clicking on the button, a frame of **N** pixels wide and **N** pixels high must be generated, where **N** is the number entered in the input. That is, if the value passed to the input is equal to 7, clicking the button will generate a frame of 49 pixels (7 pixels wide x 7 pixels high);

- The input must have the `id` called `board-size` and the button must have the `id` called `generate-board`;

- The input must only accept numbers greater than zero. This restriction **must** be done using the attributes of the `input` element;

- The button must contain the text "VQV";

- The input must be positioned between the color palette and the pixel frame;

- The button must be positioned next to the input;

- If no value is placed in the input when clicking the button, show an `alert` with the text: "Invalid board!";

- The new frame must have all pixels filled with white color.

**What will be verified**

- There is an input with the id `board-size`;

- There is a button with the id `generate-board`;

- The input only accepts numbers greater than zero. This restriction must be done using the attributes of the `input` element;

- The button contains the text `VQV`;

- The input is positioned between the color palette and the pixel frame;

- The button is positioned on the right side of the input;

- If no value is placed in the input when clicking on the button, an `alert` is displayed with the text: `Invalid board!`;

- When clicking on the button with a value filled in, the size of the board changes;

- The new frame has all pixels filled with white color.

</details>

## 11 - Limit the minimum and maximum pixel frame size.

<details>
  <summary>The user cannot define a frame with less than 5 and more than 50 <code>pixels</code></summary>

- If the value entered in the `board-size` input is outside the range of 5 to 50, do:

1. If the value of `board-size` is less than 5, consider 5 `pixels` as default;

2. If the value of `board-size` is greater than 50, consider 50 `pixels` as default.

**What will be verified**

- The maximum height of the board is 50;

- The height of the board is 5 pixels when a value less than 5 is input;

- The height of the board is 50 pixels when a value greater than 50 is input.

</details>

## 12 - Make the palette colors randomly generated when loading the page.

<details>
  <summary>Black still needs to be present and should be first in your color palette.</summary><br />

**What will be verified**

- The colors generated in the palette are different with each page load;

- The black color is still present and is first in your color palette.

</details>
