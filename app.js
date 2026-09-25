'use strict';
// Add a creator referral URL here when one is supplied; Dexscreener is the default.
const BUY_URL = 'https://dexscreener.com/solana/apy5fshcdsldyysh4hwgy8zsfj4at8fbkehzf3d72e9k';
const CONTRACT = 'BxftAowY2dVa2h9KMqDTPk4oMxzU9k6uVbZuoorXpump';
function getHalloweenCountdown(now) {
  const year = now.getFullYear();
  const isHalloween = now.getMonth() === 9 && now.getDate() === 31;
  let target = new Date(year, 9, 31);
  if (now > target && !isHalloween) target = new Date(year + 1, 9, 31);
  const remaining = isHalloween ? 0 : Math.max(0, Math.floor((target - now) / 1000));
  return { year: target.getFullYear(), isHalloween, days: Math.floor(remaining / 86400), hours: Math.floor(remaining / 3600) % 24, minutes: Math.floor(remaining / 60) % 60, seconds: remaining % 60 };
}
function updateCountdown() {
  const countdown = getHalloweenCountdown(new Date());
  for (const unit of ['days', 'hours', 'minutes', 'seconds']) document.getElementById(unit).textContent = String(countdown[unit]).padStart(2, '0');
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = countdown.year; });
  document.getElementById('countdown-note').textContent = countdown.isHalloween ? 'Happy Holdoween. The big night is here!' : 'Midnight. October 31. Your local time.';
}
if (typeof document !== 'undefined') {
  document.querySelectorAll('.button[data-dex]').forEach(link => { link.href = BUY_URL; });
  updateCountdown();
  setInterval(updateCountdown, 1000);
  let copyTimeout;
  document.getElementById('copy-contract').addEventListener('click', async () => {
    const status = document.getElementById('copy-status');
    clearTimeout(copyTimeout);
    try {
      await navigator.clipboard.writeText(CONTRACT);
      status.textContent = 'Contract copied. Stay spooky.';
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(document.getElementById('contract-address'));
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = 'Address selected. Press Ctrl+C (or ⌘C) to copy.';
    }
    copyTimeout = setTimeout(() => { status.textContent = ''; }, 5000);
  });
}
if (typeof module !== 'undefined') module.exports = { getHalloweenCountdown };
