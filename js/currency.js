/**
 * Currency converter - USD to CNY
 * Free tier: uses public API with client-side caching
 */

class CurrencyConverter {
  constructor() {
    this.rates = { CNY: 7.19 }; // Fallback rate
    this.lastUpdate = null;
    this.init();
  }
  
  async init() {
    // Try to fetch fresh rates
    await this.fetchRates();
    // Update all price displays
    this.updatePrices();
    // Refresh every hour
    setInterval(() => this.fetchRates(), 3600000);
  }
  
  async fetchRates() {
    try {
      // Free public API - no auth required
      const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
      const data = await res.json();
      
      if (data?.rates?.CNY) {
        this.rates.CNY = data.rates.CNY;
        this.lastUpdate = new Date();
        this.updatePrices();
      }
    } catch (err) {
      console.warn('Currency fetch failed, using fallback:', err);
      // Keep using fallback rates
    }
  }
  
  usdToCny(usd) {
    const cny = usd * this.rates.CNY;
    // Chinese pricing: round to nearest 10 for psychological appeal
    return Math.round(cny / 10) * 10;
  }
  
  formatCny(amount) {
    return `¥${amount.toLocaleString('zh-CN')}`;
  }
  
  updatePrices() {
    document.querySelectorAll('[data-price-usd]').forEach(el => {
      const usd = parseFloat(el.dataset.priceUsd);
      if (isNaN(usd)) return;
      
      const cny = this.usdToCny(usd);
      const cnyEl = el.querySelector('.price-cny');
      const rateNote = el.querySelector('.rate-note');
      
      if (cnyEl) {
        cnyEl.textContent = `${this.formatCny(cny)} /人`;
      }
      if (rateNote && this.lastUpdate) {
        const time = this.lastUpdate.toLocaleTimeString('zh-CN', {
          hour: '2-digit', minute: '2-digit'
        });
        rateNote.textContent = `汇率更新: ${time}`;
      }
    });
  }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  window.currency = new CurrencyConverter();
});