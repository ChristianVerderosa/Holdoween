'use strict';
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
  updateCountdown();
  setInterval(updateCountdown, 1000);
  function enableCopy(buttonId, textId, statusId, successMessage) {
    let timeout;
    document.getElementById(buttonId).addEventListener('click', async () => {
      const source = document.getElementById(textId);
      const status = document.getElementById(statusId);
      clearTimeout(timeout);
      try {
        await navigator.clipboard.writeText(source.textContent.trim());
        status.textContent = successMessage;
      } catch {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(source);
        selection.removeAllRanges();
        selection.addRange(range);
        status.textContent = 'Text selected. Use your device copy command, or press Ctrl+C / Command+C.';
      }
      timeout = setTimeout(() => { status.textContent = ''; }, 8000);
    });
  }
  enableCopy('copy-contract', 'contract-address', 'copy-status', 'Contract copied. Stay spooky.');
  enableCopy('copy-referral', 'fomo-code', 'referral-status', 'Code copied. Enter it in Fomo if prompted.');
}
if (typeof module !== 'undefined') module.exports = { getHalloweenCountdown };
