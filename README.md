<a id="readme-top"></a>

<br />
<div align="center">
  <img src="images/discord_bot.png" alt="Discord Bot" width="150" height="150">

  <h3 align="center">Holidays Discord Bot</h3>

</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

This project is a discord bot that interacts with user's through commands to check 10 upcoming holidays for several countries. <br/>
The API to make requests is: https://calendarific.com

### Built With
- ![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)
- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
- ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

## Getting Started

First of all you must download this repository from Github as ZIP or clone it.

### Installation

1. Clone or download as ZIP the repository
   ```sh
   git clone https://github.com/sanavalos/HolidaysDiscordBot.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Execute and start running the bot's server
   ```sh
   node index.js
   ```
4. Create .env file in root folder following .env.example


## Usage

To use the bot, invite it to your Discord server using the following link: https://discord.com/api/oauth2/authorize?client_id=1131010531881386064&permissions=8&scope=bot

Once the bot is on your server, you can interact with it using the predefined commands:

!getholidays <country_code>: Get upcoming holidays in the specified country. For example, !getholidays US will show upcoming holidays in the United States.

## Contact

Santiago Germán Avalos - santiago.avalos@outlook.com

Github repo: [Holidays Discord Bot](https://github.com/sanavalos/Holidays-Discord-Bot)

<p align="right"><a href="#readme-top">back to top</a></p>
