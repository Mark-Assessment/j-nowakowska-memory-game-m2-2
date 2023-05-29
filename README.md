# Summertime Memory Card Game

<p>
  <img src="" width="100%" alt="mock up photos">
</p>

[Click here to view the live project]
<https://8000-juginowakowska-milestone-fnq0hpynqj.us2.codeanyapp.com/>

## Table of contents

1. Introduction
2. UX
    1. User Demographic
    2. User Stories
    3. Development Planes
    4. Design
3. Features
    1. Design Features
    2. Existing Features
    3. Features to Implement in the Future
4. Issues and Bugs
5. Technologies Used
     1. Main Languages Used
     3. Frameworks, Libraries & Programs Used
6. Testing
    1. Testing User Stories
    2. Manual Testing
    3. Automated Testing
     - Code Validation
     - Browser Validation
    4. User Testing
7. Deployment
     1. Deploying on GitHub Pages
8. Credits
     1. Content
     2. Media
     3. Code
9. Acknowledgements

***

## Introduction

The goal of this website is to provide an entertaining memory-card game. The Summertime Memory Card Game website was created as the second part of the five Milestone projects required to obtain the Diploma in Full Stack Software development program at The Code Institute.

The inspiration for this site came from well-known and loved memory games, that everyone should have the opportunity to play. The theme derives from the summer holidays, the time that family gets together and spends time playing board games and taking part in various activities together.

The main requirements of this project are to build a responsive, simple, single-player pattern-matching memory game that is fun to play, using HTML, CSS and JavaScript.

[Back to the top](#memory-card-game)

## UX

### User Demographic

The ideal user for this website is:
- New player
- Returning player
- Person with an interest in card memory games

### User-Stories

#### New Player

1. As a new player, I want to access the web game easily and be able to play the memory-card game on a computer, tablet or phone.
2. As a new player, I want to be able to navigate through the site with ease and access the information I require to play the game aka game rules.
3. As a new player, I want to easily navigate to content I have previously viewed within a small number of steps.

#### Returning Player

1. As a returning player, I want to be able to access the game straight away.
2. As a returning player, I want the information I seek to be easily accessible, like game rules.
3. As a returning player, I expect to play a fully functional game.

#### Person with an interest in memory card games

1. As a person with an interest in memory card games, I want to be able to expand on my knowledge by finding factually accurate content.
2. As a person with an interest in memory card games, I want to access a sight with a functional memory card game
3. As a person with an interest in memory card games, I want to easily navigate the entire site intuitively.

### Development-Planes

For the site to function as intended and fulfil its purpose for the user, the developer needs to develop all aspects of a functional memory card game. This includes the game itself, rules on how to play, an about section for some background information and a timer to measure progress so that the user can enjoy the game experience.

#### Strategy

Strategy incorporates user needs as well as product objectives. This website will focus on the following target audience, divided into three main categories:

- **Roles:**
  - New player
  - Returning player
  - A person with an interest in memory card games

- **Demographic:**
  - children
  - teens
  - adults
  - people interested in playing an online game to relax

- **Psychographic:**
  - Any socioeconomic status and age group
  - Interested in testing memory
  - Fun focused

The website needs to enable the **user** to:

- Play the memory card game :
  - Timer visible and working on the screen
  - Start/Quit buttons
  - Game working in the expected manner
  - Social media available for further reserch of the company or memory card games in general

The website needs to enable the **site manager** to:

- View the game and check for any bugs
- Improve the site as necessary with various difficulty levels or other games  

#### Scope

The scope plane is about defining requirements based on the goals established on the strategy plane. Using the information in the strategy plane, the identified required features have been broken into the following two categories.

- Content Requirements:
  - The user will be looking for:
    - The game board and the timer
    - Visible buttons to start and stop the game
    - Game rules description
    - Social Media links to confirm if one one is further interested in memory games
    - About page with further information on memory card games
- Functionality Requirements
  - The user will be able to:
    - Play the game using the start button
    - Be able to easily navigate the site to find the information they require, like social media link and about page
    - Get a notification if they lost or won the game
    - Ability to select the difficulty level using the radio buttons
    - See how much time they have left to play by looking at the timer

#### Structure

The information above were organized in a hierarchical tree structure, showing how users can navigate through the interactive site and play the memory game with ease and efficiency, with the following results:
<details>

<summary>Structure of the Site</summary>

<p>
  <img src="assets/images/readme img/site structure.png" width="100%" alt="structure photos">
</p>

</details>

### Skeleton

Wireframes were made to showcase the appearance of the site pages while keeping a positive user experience in mind. The wireframes were created using an online version of [Figma](https://www.figma.com).

<p>
    <img src="assets/images/readme img/wireframes back.png" width="100%" alt="Home page back-card wireframes">
    <img src="assets/images/readme img/wireframes front.png" width="100%" alt="Home page front-card wireframes">
    <img src="assets/images/readme img/wireframes about.png" width="100%" alt="About page wireframes">
</p>

</details>

### Design

#### Colour Scheme

I have chosen my colour scheme by using [SheCodes](https://palettes.shecodes.io/) colour scheme palette with a bright orange (#f96d00)contrast colour, which carries a connection to the sun and summer.

This is complemented by a Grey95 (#f2f2f2), black (#000000) and dark grey (#393e46).

The Grey95 shade (#f2f2f2) was used as the background colour for the website and the memory cards.  
The main content text is in a black (#000000) shade, as this colour creates the best contrast to guarantee the high readability of the text. Dark grey (#393e46)is used for the buttons.
Shades picked are generally soft with one dominating orange tone to make it easier to view the site and play the game for visually impaired individuals.

#### Typography

The typography pairing used on this site is [Marcellus, serif](https://fonts.google.com/specimen/Marcellus?preview.text=Summertime%20Memory%20Card%20Game&preview.text_type=custom). A backup of Sans-Serif had been applied in case of an error.

#### Imagery

The selected imagery has been sourced from various sites. There are two png graphics included in the top left corner on the 'home' and 'about' pages. There is also an image showcasing a card memory game in the 'about' section.

[Back to the top](#memory-game)

## Features

### Design Features

Each page within the site has a responsive and consistent navigation system. Detailed features are included below.

- The **Header** is across the top of the page. It is 100% in width and includes the title of the page.
- The **Navigation Bar** is positioned on the right-hand side of the title, it includes the "Home" and "About" section links. It appears on all screen sizes. If the page is active it will appear on orange background.
- The **Footer** is 100% in width. The footer is located permanently at the bottom of the page on all screen sizes. The footer contains all social media links and corresponding media logos and a copywrite text at the bottom of the footer.

<dl>
    <dt><a href="index.html" target="_blank alt="Summertime Memory Card Game Home Page">Home Page</a></dt>
    <dd>
        The <em>Home Page</em> is a scrollable page and it includes a navigation bar, main game board, buttons, timer and rules on how to play.
        <ul>
            <li>
            <em>Main Game Board</em> - This is main focus on the page. The game board designed for this project is a card memory game.
            </li>
            <li>
            <em>Timer</em> - The clock is designed to count down seconds whilst the player tries to match all the cards. If the player matches all the cards before the clock hits 00:00 then an alert will appear with "You won!" confirmation. In any other case, it will show a "You lost!" alert.
            </li>
            <li>
            <em>Buttons</em> - This page includes Start, Quit and radio buttons that allow the player to start the game, quit the game, and select the game's difficulty level respectively
            </li>
            <li>
            <em>The Rules</em> - This section contains a set of instructions as to how to play the game and what to expect as a result.
            </li>
	     <li>
            <em>Footer</em> - This section contains social media links to Facebook, Gitpod and Twitter.
            </li>
        </ul>
    </dd>
</dl>
<dl>
    <dt><a href="about.html" target="_blank alt="Summertime Memory Card Game About page">About Page</a></dt>
    <dd>
        The <em>About</em> is a scrollable page that is lined in a single column. It consists of a title; text relating to the history of memory card games and an image that reflects the topic.
        <ul>
            <li>
            <em>Title</em> - this reflect the sites purpose.
            </li>
            <li>
            <em>Main Content</em> - It consists of a text relating to the history of memory card games and an image that reflects the topic.
            </li>
            <li>
            <em>Footer</em> - This section contains social media links to Facebook, Gitpod and Twitter.
            </li>
        </ul>
    </dd>
</dl>

### Existing Features

- **Header** - Appears on every page; This includes the title of the page and a graphic that carries the theme of the game.
- **Navigation Bar** - Appears on every page to provide visible and easily accessible navigation.
- **Footer** - Appears on the bottom of every page. This provides easy access to external links.
- **Social Media Links** - Appears in the footer, at the bottom of every page. Links are embedded in the social media icons and open in a new tab to provide a better user experience.
- **Memory game field** - Appears at the epicentre of the Home page. It consists of a playing field that includes 16, double-sided cards(8 originals and 8 duplicated), that need to be matched before time runs out for the player to win.
- **Cards** - Included in the memory game field. The player can only flip two cards before the system will inform them if the answer is right or wrong. If the answer is wrong the cards will shake and automatically flip back; if the answer is right the cards will stay flipped.
- **Timer** - The timer is visible on the Home Page, below the game. The timer starts after the user picks a level using the radio button and then presses the "Start" button, which is also below the main game field. The timer won't stop until the player flips all the cards or clicks the "Quit" button.
- **Start/Quit** - The "Start" button needs to be pressed for the timer to start counting down, therefore for the game to start. Then the "Start" button is disabled until the timer runs out or all cards will get matched. The "Quit" button will reset the game to its default, original form (before the "Start" button was pressed).
- **Radio Buttons** - Radio buttons indicate the level of difficulty the player has chosen. This happens by the timer decreases the amount of time a player has to match all the cards. The easy level (first button on the left) gives a player 1 minute to match the cards. The hard level ( second button from the left) gives a player 30 seconds to match all the cards.
- **Social Media Links** - Social media links will open a new tab with a chosen site, as per the logo.

### Features To Implement In The Future

- **Different types of Memory Games and Memory training**
  - **Feature** - create a "Games" section in the navigation bar that will include different memory games and memory exercises for children and adults.
  - **Reasons For The Feature Not Being Currently Included** - not a sufficient amount of time to execute this on a desired level as well as more coding practice required.
- **More variations on difficulty**
  - **Feature** - Create a menu where a player can choose different timing speeds and a customizable amount of cards they need to match before the timer runs out.
  - **Reasons For The Feature Not Being Currently Included** - not a sufficient amount of time to execute this on a desired level;
- **Different backgrounds**
  - **Feature** - create a button that will allow users to switch between backgrounds and card sizes. This could help people with disabilities, learning difficulties or even a colourblind person to enjoy the game and customise it as they wish.
  - **Reasons For The Feature Not Being Currently Included** - not a sufficient amount of time to execute this on a desired level. More practice is needed.
- **Music**
  - **Feature** - create a selection of different music to be able to play in the background.
  - **Reasons For The Feature Not Being Currently Included** - not a sufficient amount of time to execute this on a desired level.
## Issues and Bugs
The developer runs into several issues during the development of this site. The most interesting ones have been described below, this includes the fix for the bug.

**shuffleCard function bug** - A bug was detected whilst the developer was playing the game to check if the radio buttons and timer were working. During the test, the developer noticed that despite creating a function shuffleCard(); the cards kept appearing in the same spots. The developer has tried to fix the bug by creating an array and assigning a number to each card and utilising Math. random(); method so the cards would randomly swap locations. Later, the developer tried to utilise the appendChild(); method with their mentor as it turned out the cards were not shuffling because they were part of a Node list, therefore, being overwritten upon the shuffle function being called as an array was used for that. After extensive research, the developer has finally managed to find a way to rectify this issue by using both appendChild and Math random methods just in different capacities. With the help of their mentor, Owonikoko Oluwaseun, the issue was permanently rectified.
**clockInterval bug** - A bug was detected by the developer upon creating a "Start" button. The button would trigger the game as expected after selecting the level with a radio button but the timer would speed up every time a different level was selected and the "Start" button would be repeatedly pressed. After an extensive search, I have found that this was caused by the clockInterval method in the timer itself and the new game function. This confused the Javascript code that kept adding to the already working timer, hence speeding it up after every click. The developer removed the clockInterval from the timer and put it only in the function itself.
**Quit button** - Upon creating the quit button the developer realised that it did not trigger the desired behaviour. After utilising the eventLisener the button seems to speed up the timer but does not reset the game at all. The "quit" button was selected by id and a function was created for it. The function was supposed to reset the game to default by shuffling and flipping cards, resetting the timer and allowing the "Start" button to be clicked again. Initially, none of these were working. The developer instead of setting the new time interval (which was speeding it up ) decided to use the textContent to reset the clock back to 0 and clearInterval to keep the clock from restarting automatically. Then the eventListener for the "Start" button was added so that the player can start the game without the need to reload the window. The eventListener for the "Quit" button was also placed in the root of the document. These steps finally rectified the issue.
## Technologies Used
### Main Languages Used
- HTML5
- CSS3
-JavaScript

### Frameworks, Libraries & Programs Used
[GitHub](https://github.com/ "Link to Github") - was used to store the project after pushing from Codeanywhere.
[Codeanywhere](https://codeanywhere.com/signin"Link to Codeanywhere") - was used to write and commit the code as well as push it to GitHub.
[Font Awesome](https://fontawesome.com/ "Link to Font Awesome") - was used to obtain icons for the project.
[Figma](https://www.figma.com/ "Link to Figma") - was used to create Wireframes
[Google Fonts](https://fonts.google.com/ "Link to Google fonts")- was used to source fonts for the project.
[Canva](https://www.canva.com/ "Link to Canva") - was used to create graphics for the project (Like the logo and memory card images)
[Bootstrap](https://getbootstrap.com/ "Link to Bootstrap") - was utilised for the flex-box method.
[Am I Responsive?](https://ui.dev/amiresponsive "Link to Am I Responsive?") -  was utilised to check if the site is responsive 
[Favicon](https://favicon.io/ "Link to Favicon") - was used to create a logo for the business and browser tab.
 

[Back to the top](#memory-card-game)

## Testing
## Testing User Stories

#### New Player Goals:
1. As a new player, I want to access the web game easily and be able to play the memory-card game on a computer, tablet or phone.

    - The game is visible and easily accessible by being in the centre of the home page. 
    - The site is responsive on the devices outlined above. 
  - Website layout is easy to navigate. 

2. As a new player, I want to be able to navigate through the site with ease and access the information I require to play the game aka game rules.

    - The navigation bar is easily accessible and visible at the top of the page.
    - The navigation bar takes the user to the correct destination and is labelled correctly.
    - The rules are outlined underneath the game, easily visible due to its black, big lettering that contrasts with the background.

3. As a new player, I want to easily navigate to content I have previously viewed within a small number of steps.

    - The navigation bar is easily accessible and visible at the top of the page.
    - The navigation bar takes the user to the correct destination and is labelled correctly
    - Website layout is easy to navigate. 

#### Returning Player Goals:

1. As a returning player, I want to be able to access the game straight away.

    - The game is situated in the centre of the home page, therefore easily accessible.
    -  The game loads and gives the player time to start the game.
    - Website layout is easy to navigate 

2. As a returning player, I want the information I seek to be easily accessible, like game rules.

    - Rules are situated below the game in the focal point of the site.  
    - Website layout is easy to navigate.
    - The navigation bar is easily accessible and visible at the top of the page.

3. As a returning player, I expect to play a fully functional game.

    - The game is functional and logically designed
    - The game is working correctly and an alert will inform a player if they won or lost.
    - The game has required the cards to get matched and it is disabled if the start button was not pressed.

#### Person with an interest in memory card games Goals :
1. As a person with an interest in memory card games, I want to be able to expand on my knowledge by finding factually accurate content.

    - The About page includes a brief history of memory card games.
    - The navigation bar is easily accessible and visible at the top of the page.

2. As a person with an interest in memory card games, I want to access a site with a functional memory card game.

    - The game is fully functional including the timer and all the buttons.
    - The game works as intended and informs the player if they won or lost.
    - The game rules are outlined below the game board to help the user understand the game.

3. As a person with an interest in memory card games, I want to easily navigate the entire site intuitively.

    - The navigation bar is easily accessible and visible at the top of the page.
    - The navigation bar takes the user to the correct destination and is labelled correctly.
    - Website layout is easy to navigate. 