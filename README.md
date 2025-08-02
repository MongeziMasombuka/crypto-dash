````markdown
# Crypto Dash

A responsive React + TypeScript dashboard for tracking cryptocurrency data.  
Fetches real-time coin details and displays historical price charts using the CoinGecko API.

---

## 🚀 Features

- View detailed coin information: name, symbol, rank, current price, market cap, supply, and price changes.
- Interactive price charts powered by Chart.js showing 7-day historical prices.
- Responsive design for seamless experience on desktop and mobile.
- Search and filter coins by name or symbol.
- External links to official websites and blockchain explorers.
- Error handling and loading states for smooth UX.

---

## 🛠️ Technologies Used

- React 18 + TypeScript
- React Router DOM for routing
- Chart.js with react-chartjs-2 for charts
- CoinGecko API for cryptocurrency data
- date-fns for date formatting
- Vite for fast development and build

---

## 📦 Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/MongeziMasombuka/crypto-dash.git
   cd crypto-dash
````

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root with your API URL (if applicable):

   ```
   VITE_COIN_API_URL=https://api.coingecko.com/api/v3/coins
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and go to `http://localhost:5173` (or the port shown in the terminal).

---

## 🧩 Usage

* Use the search input to filter coins by name or symbol.
* Click on a coin to see detailed information and an interactive 7-day price chart.
* Use the sorting options to order coins by market cap, price, or price change percentage.

---

## ⚙️ Folder Structure

```
src/
├── assets/        # logo
├── components/    # Reusable UI components (Spinner, CoinChart, etc.)
├── pages/         # Route pages (Home, CoinDetailsPage)     
├── App.tsx        # Main app component with routing
├── index.css      # Global styles
└── main.tsx       # Entry point
```

---

## 🙏 Acknowledgements

* [CoinGecko API](https://www.coingecko.com/en/api) for free cryptocurrency data.
* [Chart.js](https://www.chartjs.org/) for beautiful charts.
* [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/).

```
