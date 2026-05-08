/**
 * WeChat integration for Chinese market
 * - QR modal for desktop
 * - Deep link for mobile
 * - Copy ID functionality
 */

class WeChatIntegration {
  constructor({ modalId = 'wechatModal', triggerId = 'wechatBtn', wechatId = 'SightSeekersCN' } = {}) {
    this.modal = document.getElementById(modalId);
    this.trigger = document.getElementById(triggerId);
    this.wechatId = wechatId;
    this.closeBtn = this.modal?.querySelector('.modal-close');
    this.copyBtn = this.modal?.querySelector('.copy-btn');
    
    this.init();
  }
  
  init() {
    if (!this.trigger || !this.modal) return;
    
    // Open modal
    this.trigger.addEventListener('click', (e) => {
      e.preventDefault();
      this.open();
      this.track('wechat_modal_open');
    });
    
    // Close modal
    this.closeBtn?.addEventListener('click', () => this.close());
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
    });
    
    // Copy WeChat ID
    this.copyBtn?.addEventListener('click', () => {
      navigator.clipboard.writeText(this.wechatId).then(() => {
        const original = this.copyBtn.textContent;
        this.copyBtn.textContent = '已复制!';
        setTimeout(() => this.copyBtn.textContent = original, 2000);
        this.track('wechat_id_copied');
      });
    });
    
    // Mobile: deep link on QR click
    const qr = this.modal?.querySelector('.qr-code');
    if (qr && this.isMobile()) {
      qr.addEventListener('click', () => {
        window.location.href = `weixin://dl/officialaccounts?username=${this.wechatId}`;
        setTimeout(() => {
          if (document.visibilityState === 'visible') {
            alert('如未跳转，请手动打开微信 → 发现 → 扫一扫');
          }
        }, 2000);
        this.track('wechat_deep_link');
      });
    }
  }
  
  open() {
    if (!this.modal) return;
    this.modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  
  close() {
    if (!this.modal) return;
    this.modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    this.trigger?.focus();
  }
  
  isMobile() {
    return /Android|iPhone|iPad|Weixin/i.test(navigator.userAgent);
  }
  
  track(action) {
    if (typeof _hmt !== 'undefined') {
      _hmt.push(['_trackEvent', 'wechat', action, this.wechatId]);
    }
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  window.wechat = new WeChatIntegration();
});