# Holdoween

A responsive static website. No build step or dependencies.

## Preview

Open index.html directly, or run `python -m http.server 5173` in this folder and visit http://localhost:5173.

## Customize

- Update BUY_URL in app.js to add the creator's referral link. For visitors with JavaScript disabled, also update the three button hrefs in index.html.
- The countdown targets October 31 at midnight in each visitor's local timezone, celebrates throughout Halloween, then targets the next year.
- Before publishing, change og:image to the absolute production URL of assets/holdoween-banner.png.

## Assets and token

Artwork downloaded from the supplied Dexscreener pair's API metadata on September 25, 2026. Images are stored locally and require no runtime API connection.

Pair: https://dexscreener.com/solana/apy5fshcdsldyysh4hwgy8zsfj4at8fbkehzf3d72e9k
Avatar: https://cdn.dexscreener.com/cms/images/Xu4sVtXCEIj074mC
Banner: https://cdn.dexscreener.com/cms/images/cCTiGPPMSFMLIOUX
Token: BxftAowY2dVa2h9KMqDTPk4oMxzU9k6uVbZuoorXpump
Community: https://x.com/i/communities/1956875128828027022

Typography uses Google Fonts with system fallbacks. No analytics, wallet connection, or live price feed is included.
