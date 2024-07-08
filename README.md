This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, copy **.env.example** and paste in **.env.local**
```bash
NEXT_PUBLIC_API_ENDPOINT="https://swapi.dev/api"
NEXT_PUBLIC_IMG_URL="https://starwars-visualguide.com/assets/img"
```

then install packages used in project with **pnpm**
```bash
pnpm i
```

run the development server
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

[https://tribegroup.notion.site/Front-End-Developer-Take-Home-Test-33224b9e3b5b488fab5ec670643ddf1a](https://tribegroup.notion.site/Front-End-Developer-Take-Home-Test-33224b9e3b5b488fab5ec670643ddf1a)

# Front End Developer Take-Home Test

# Brief

### Overview

This take-home exercise is designed to evaluate your ability to build a simple yet functional front-end application using React and the Star Wars API. Please read the requirements carefully and submit your work according to the guidelines provided. You will be asked questions about your code and to make some modifications during the interview.

### Requirements

### Main Features

1. **Fetch Star Wars Characters**: Using the Star Wars API (https://swapi.dev/), fetch a list of all Star Wars characters and display them in a grid or list layout.
2. **Character Card**: For each character, display a card with the character's name.
3. **Character Details Modal**: When a user clicks on a character card, display a modal with the following information about the character:
    - Name (as the header of the modal)
    - Height (in meters)
    - Mass (in kg)
    - Birth Year
    - Gender

### Bonus Points

- Implement pagination to handle the large number of characters available in the API.
- Display a random picture for each character.
- Color the character card border based on their species.
- Display the character's homeworld details in the modal, including name, rotation period, orbital period, diameter, and climate.
- Implement error handling to manage any issues that may arise during API requests, such as server downtime or network errors.

### UI Implementation

You are free to use simple CSS or an external UI library (e.g., Material-UI, Ant Design, Bootstrap) to implement the user interface. The choice of UI implementation approach is up to you.

### Tech Stack

- React
- JavaScript
- CSS/SCSS

### Submission Requirements

- **GitHub Repository**: Provide a GitHub link with a README file detailing how to run the application locally.
- **Hosted Demo**: Provide a Vercel link to a hosted working demo of the application. You may use other hosting platforms if desired.

### Timeline

Please complete this take-home assignment within 4-6 hours.
