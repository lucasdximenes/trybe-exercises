# Welcome to the Meme Generator repository!

> ## [Live Version](https://lucasdximenes.github.io/other/projects/project-meme-generator/)

Here you will find a project developed by [Lucas Ximenes](https://www.linkedin.com/in/lucasdximenes/) as a full-stack web development student at trybe.
The acquired knowledge was HTML, CSS, JavaScript and Programming Logic.

# Mandatory requirements

## 1. Create a text box

<details>

  <summary>Create a text box that users can interact with to insert text over the chosen image.</summary><br/>

- The box where the text is inserted must have an `id` called `text-input`;
- You must create an element to serve as a _"container"_ for the **image** and **text** of the meme. This element must have an `id` called `meme-image-container`;
- Inside the container element, you must create another element to show the typed text. The text element must be fully contained within the container and have the `id` named `meme-text`;
- If there is no image inserted, it must be inserted and be visible inside the empty container where the image will appear.

**What will be tested:**

- The text input exists and we were able to input text into it;
- The text typed in the input is visible on the screen;
- There is a container element where the text will be displayed.

</details>

## 2. Create an image upload logic

<details>

  <summary>The site must allow users to upload an image from their computer.</summary><br/>

- Inside the container element, you must create another element to show the selected image. This element must have an `id` called `meme-image`;
- The element where the image is uploaded must be identified with the `id` called `meme-insert`. This element does not need to be inside the container element;
- The image must be completely contained within the element identified as `meme-image-container` ~~("fully contained" means that there must be no space between the container and the image, and the image must not exceed the size of the container )~~;
- The text inserted in the `text-input` element must be inserted over the chosen image `meme-image`.

**What will be tested:**

- It is possible to load an image through the correct element;
- The loaded image is displayed inside the correct element;
- The text is correctly inserted over the image.

</details>

## 3. Add a frame to the container

<details>

  <summary>Add a frame to the container. The frame must be 1 pixel wide, black and 'solid' type. The area where the image will appear must have a white background.</summary><br/>

- The element that serves as a container for the image must have a white background color;
- The element that serves as a container for the image must have a solid black border, 1 pixel wide;
- The image must be completely contained within the element identified as `meme-image-container` ("totally contained" means that there must be no space left between the container and the image, and the image must not exceed the size of the container).

**What will be tested:**

- The element that serves as a container for the image has a white background color;
- The element that serves as a container for the image has a solid black border, 1 pixel wide;
- The image must be fully contained within the element identified as `meme-image-container`.

</details>

## 4. Add the text that will be inserted over the image

<details>

  <summary>Add the text that will be inserted over the image. It must be a specific color, shade, and size.</summary><br/>

- The text of the `meme-text` element must have:
  - A black shadow, 5 pixels horizontally, 5 pixels vertically and a blur radius of 5 pixels;
  - A font with the size of 30 pixels;
  - Must be white in color.

**What will be tested:**

- The text of the `meme-text` element has a black shadow, 5 pixels horizontally, 5 pixels vertically and a blur radius of 5 pixels;
- The text of the `meme-text` element has a font size of 30 pixels;
- The text of the `meme-text` element must be white.

</details>

## 5. Limit meme text size

<details>

  <summary>Limit the size of text the user can enter</summary><br/>

- The maximum amount of typeable characters in the `text-input` element must be 60.

**What will be tested:**

- The maximum number of typeable characters in the `text-input` element does not exceed 60.

</details>

# Bonus requirements

## 6. Allow customization of meme borders by the user

<details>

  <summary>The page must have three buttons, which, when clicked, must each change its own border around the container (there are three different borders)</summary><br/>

- Borders must be added to the container, identified as `meme-image-container`;
- The three buttons must be `button` elements;
- Each `button` element must be styled so that the background color is the same color as the frame that will be placed in the container;
- Each `button` must have the respective `id` and style the container as specified:
  - A button identified with the `id` called `fire` should style the image container with a 3 pixel border, _dashed_ and red (`rgb(255, 0, 0)`).
  - A button with `id` called `water` should style the image container with a blue border (`rgb(0, 0, 255)`), with 5 pixels of type _double_ .
  - A button with `id` called `earth` should style the image container with a border of type _groove_, green (`rgb(0, 128, 0)`) and with 6 pixels.
- After one of the three borders is selected, the default border specified in requirement 3 should no longer appear.

**What will be tested:**

- The button with id `fire` works correctly;
- The button with id `water` works correctly;
- The button with id `earth` works correctly.

</details>

## 7. Create a set of four pre-made images for the user to choose from.

<details>

  <summary>Show thumbnails of the images and, upon click of the user, that image should appear inside the frame of the container element.</summary><br/>

- The element that shows the thumbnails of the memes (images) must be identified an `id` named `meme-1` for the first meme, `meme-2` for the second, `meme-3` for the third and `meme -4` for the fourth.
- The images that identify the memes must be inside the application, in a directory called `imgs` with the respective names `meme1.png`, `meme2.png`, `meme3.png` and `meme4.png`. Also pay attention to the format of the images! ⚠️
- The images must appear inside the container in a similar way to the images sent by _upload_ to the page.

**What will be tested:**

- The finished images present the expected behavior.

</details>
