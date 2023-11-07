# Discord Quiz Bot using OpenAI API

Welcome to the Discord Quiz Bot project! This bot utilizes the power of OpenAI's API to generate general knowledge quiz questions and interact with users on a Discord channel.

## Overview

The MVP (Minimum Viable Product) of this bot serves as a basic prototype to demonstrate the functionality of a Discord bot that can engage users in a general knowledge quiz. As a user enters the channel, the bot will greet them and offer a chance to participate in the quiz. The bot fetches a set of 10 questions from the OpenAI API and presents them to the user. Each question is multiple-choice with one correct answer among five options. The user's responses are tracked, and at the end of the quiz, the bot provides a score to the user.

## Features

- Welcomes users upon entering the channel.
- Offers a general knowledge quiz with questions spanning various subjects (e.g., maths, geography, science, entertainment, etc.).
- Fetches 10 quiz questions with multiple choice answers (a to e) from the OpenAI API.
- Collects and processes user answers.
- Provides users with their final score upon completing the quiz.

## User Stories

1. **Greeting**: As a user, when I enter the channel, I want to be greeted by the bot so that I feel welcomed.
2. **Quiz Invitation**: As a user, I want the bot to offer me a chance to take a general knowledge quiz so that I can engage in a fun activity.
3. **Question Retrieval**: As a user, I want the bot to fetch unique and challenging questions for the quiz so that I'm not answering the same questions repeatedly.
4. **Interactive Responses**: As a user, I want to provide my answers by entering a simple letter (a-e) so that the interaction remains quick and seamless.
5. **Scoring Feedback**: As a user, once I've completed the quiz, I want to know my score so that I can see how well I performed.

## Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/hanleymark/discord-quiz-bot.git
   ```

2. **Install necessary dependencies**:

   ```bash
   npm install
   ```

3. **Setup your OpenAI API key and Discord Bot token**:

   - Create a `.env` file in the root directory.
   - Add your OpenAI API key and Discord Bot token:
     ```
     OPENAI_API_KEY=YOUR_API_KEY
     DISCORD_BOT_TOKEN=YOUR_BOT_TOKEN
     ```

4. **Run the bot**:
   ```bash
   npm run start
   ```

## Features for Future Development

1. **User Profiles**: Allow users to create profiles, save their quiz results, and track their progress over time.
2. **Leaderboard**: Introduce a leaderboard system where users can compare their scores with others in the server.
3. **Topic Selection**: Let users choose specific quiz topics or difficulty levels.
4. **Interactive UI**: Implement rich embeds and reactions in Discord for a more interactive quiz experience.
5. **Timed Quizzes**: Introduce a timer for each question, making the quiz more challenging and competitive.
6. **Daily/Weekly Challenges**: Create daily or weekly quiz challenges with special rewards for top scorers.
7. \*\*Display quiz data to user in textual graph format using fixed-width font codeblock

Feel free to suggest more features or contribute to the development of these planned features!

## Disclaimer

Please note that this is an MVP and might not include exhaustive features or handle all edge cases. Contributions and suggestions are welcomed to enhance the bot's functionality and user experience.

---

Feel free to raise issues or pull requests if you encounter any bugs or have feature recommendations. Let's make the Discord Quiz Bot even better together!
