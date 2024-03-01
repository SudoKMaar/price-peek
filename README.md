# Price Peek

Price Peek is an e-commerce product scraping web application developed using Next.js and Bright Data's webunlocker. It is designed to assist users in making informed decisions by providing timely notifications when a product drops in price or is out of stock. All these tasks are managed through automated cron jobs.

## Tech Stack

- Next.js
- Bright Data
- Cheerio
- Nodemailer
- MongoDB
- Headless UI
- Tailwind CSS

## Features

### Product Scraping

A search bar is provided for users to input Amazon product links for scraping.

### Scraped Projects

Displays the details of products scraped so far, offering insights into tracked items.

### Scraped Product Details

Showcases the product image, title, pricing, details, and other relevant information scraped from the original website.

### Track Option

A modal is provided for users to input their email addresses and opt-in for tracking.

### Email Notifications

Sends product alert emails for various scenarios, such as back in stock alerts or lowest price notifications.

### Automated Cron Jobs

Utilizes cron jobs to automate periodic scraping, ensuring data is up-to-date.

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`

## Contributing

Contributions are welcome!

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Thank you for choosing Price Peek for your needs. We hope you enjoy using it!
