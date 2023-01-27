# Chakra Email Subscribe

Simple email subscribe form component built with Typescript, NextJS, Chakra UI, and SendGrid.

![demo](https://user-images.githubusercontent.com/63591760/215101278-40ffa975-1a82-4a83-98a2-d3901bf51f2a.gif)

## Getting Started

### 1. Clone the repo and install dependencies

```bash
git clone https://github.com/Seth-McKilla/chakra-email-subscribe.git
cd chakra-email-subscribe
pnpm install
```

### 2. Create a SendGrid account

Create a SendGrid account and [obtain an API Key](https://docs.sendgrid.com/ui/account-and-settings/api-keys#creating-an-api-key). You can find the API key in your SendGrid account settings.

### 3. Update the environment variable

Rename the `.env.example` file to `.env.local` and update the `SENDGRID_API_KEY` variable with your SendGrid API key.

### 4. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
