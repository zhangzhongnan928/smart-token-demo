const mainContent = document.getElementById('main-content');
const popup = document.getElementById('simulationPopup');
const popupMessage = document.getElementById('popupMessage');

// --- Navigation/Content Loading ---

function loadTwitterFeed() {
    mainContent.innerHTML = `
        <h2>Simulated Twitter Feed</h2>
        <div class="twitter-feed">
            <div class="tweet">
                <div class="tweet-header">
                    <span class="tweet-author">@Victor928</span>
                </div>
                <p>Hey Fans! ✨ Get your exclusive Smart Membership Card now at <a href="#" onclick="loadMembershipLanding()">mingxing.xxx.com</a>! Unlock special content, event access & more! #SmartMembership #FanLove</p>
                <div class="tweet-footer">
                    <span>10:30 AM - Nov 15, 2023</span>
                </div>
            </div>
        </div>
        <p class="instructions">Click the link in the tweet to proceed.</p>
    `;
}

function loadMembershipLanding() {
    mainContent.innerHTML = `
        <h1>Welcome Fans!</h1>
        <h2>Get Your Smart Membership Card</h2>
        <div style="text-align: center;">
            <button class="button" onclick="claimMembershipCard()">Sign in with Twitter to Claim</button>
        </div>
    `;
}

function claimMembershipCard() {
    // Simulate authentication delay
    mainContent.innerHTML = `<p style="text-align:center;">Authenticating with Twitter...</p>`;
    setTimeout(() => {
        loadMembershipCardView();
    }, 1500); // 1.5 second delay
}

function loadMembershipCardView(showMessage = '') {
    mainContent.innerHTML = `
        <h2>Your Smart Membership Card</h2>
        ${showMessage ? `<p style="text-align:center; color: green;">${showMessage}</p>` : ''}
        <div class="smart-card membership-card">
            <h3>Victor Zhang Fan Club</h3>
            <p class="card-id">Gold Tier Fan #12345</p>
            <img src="images/@Member QR.png" alt="Membership QR Code" style="width: 100px; height: 100px; margin: 15px auto; display: block;">
            <p>@chloe_fan</p>

            <div class="card-actions">
                <button class="button" onclick="showPopupMessage('Accessing Exclusive Content...')">独家内容 (Exclusive Content)</button>
                <button class="button" onclick="showPopupMessage('Opening Event Sign-up...')">活动报名 (Event Sign-up)</button>
                <button class="button" onclick="showPopupMessage('Checking for Benefits...')">领取福利 (Claim Benefits)</button>
                <button class="button" onclick="showPopupMessage('Entering Fan Community...')">粉丝社区 (Fan Community)</button>
                <button class="button" onclick="showPopupMessage('Initiating Chat with AI Avatar...')">与AI分身对话 (Chat with AI Avatar)</button>
                <button class="button" onclick="loadMerchStoreLanding()">周边商城 (Merch Store)</button>
                <hr style="margin: 20px 0;">
                <button class="button secondary" onclick="showPopupMessage('Simulation: Added to Apple/Google Wallet! (Redirects to mingxing.xxx.com in real scenario)')">添加到 Apple/Google Wallet</button>
                <button class="button secondary" onclick="loadTelegramView('membership')">添加到 Telegram</button>
                <button class="button secondary" onclick="loadCryptoWalletView('membership')">转移到钱包 (Crypto Wallet)</button>
                <button class="button secondary" onclick="loadPartnerEcommSite()">访问合作电商 (Visit Partner Ecomm)</button>
            </div>
        </div>
    `;
}

function loadTelegramView(cardType) {
    const cardHtml = cardType === 'membership' ? getMembershipCardHtml('Telegram Mini App') : getMerchTokenHtml('Telegram Mini App');
    mainContent.innerHTML = `
        <h2>Simulated Telegram Mini App View</h2>
        <p style="text-align:center; font-style: italic;">This simulates how the card might look embedded in Telegram.</p>
        <div style="border: 2px dashed #0088cc; padding: 10px; margin-top: 15px;">
            ${cardHtml}
        </div>
         <button class="button secondary" onclick="${cardType === 'membership' ? 'loadMembershipCardView' : 'loadMerchTokenView'}()">Back to Main View</button>
    `;
}

function loadCryptoWalletView(cardType) {
    const cardName = cardType === 'membership' ? 'Membership Card #12345' : 'Victor Signed T-Shirt #15/100';
    const imageUrl = cardType === 'membership' ? 'images/victor_avatar.jpg' : 'images/victor_tshirt.png'; // Use avatar for membership card, t-shirt for merch

    mainContent.innerHTML = `
        <h2>Simulated Crypto Wallet View (e.g., MetaMask)</h2>
         <p style="text-align:center; font-style: italic;">This simulates the token as an NFT in a wallet.</p>
        <div style="border: 1px solid #ccc; padding: 15px; margin: 15px auto; max-width: 350px; background: #f9f9f9;">
            <h4>My NFTs</h4>
            <div style="display: flex; align-items: center; border-bottom: 1px solid #eee; padding-bottom: 10px;">
                <img src="${imageUrl}" alt="NFT Image" width="50" height="50" style="margin-right: 10px; background-color: #ddd; object-fit: cover;"> // Use the specific image
                <div>
                    <strong>${cardName}</strong><br>
                    <small>Victor Zhang Collection</small>
                </div>
            </div>
            <div style="text-align: center; margin-top: 10px;">
                 <button class="button" onclick="showPopupMessage('Wallet would typically link to token details or website (mingxing.xxx.com or mingxing.zhoubian.com)')">View Details</button>
            </div>
        </div>
         <button class="button secondary" onclick="${cardType === 'membership' ? 'loadMembershipCardView' : 'loadMerchTokenView'}()">Back to Main View</button>
    `;
}


function loadPartnerEcommSite() {
    mainContent.innerHTML = `
        <h2>Simulated Partner E-commerce Site</h2>
        <h3>Checkout</h3>
        <div style="border: 1px dashed #aaa; padding: 15px; margin-bottom: 15px;">
            <p>Item 1: Star T-Shirt - $25.00</p>
            <p>Item 2: Concert Ticket - $75.00</p>
            <hr>
            <p>Subtotal: $100.00</p>
            <p id="discount-line" style="color: green; display: none;"></p>
            <p><strong>Total: <span id="total-price">$100.00</span></strong></p>
        </div>
        <button class="button" id="discount-button-member" onclick="applyMembershipDiscount()">出示会员卡获取折扣</button>
        <button class="button" id="discount-button-both" onclick="applyBothDiscount()" style="display: none;">出示会员卡与商品Token获取更大折扣</button>
        <br>
        <button class="button secondary" onclick="loadMembershipCardView()">Back to Membership Card</button>
        <button class="button secondary" onclick="loadMerchTokenView()">Back to Merchandise Token</button> // Add if coming from merch flow
    `;
}

function applyMembershipDiscount() {
    document.getElementById('discount-line').innerText = "-10% Fan Discount Applied: -$10.00";
    document.getElementById('discount-line').style.display = 'block';
    document.getElementById('total-price').innerText = "$90.00";
    document.getElementById('discount-button-member').disabled = true;
    document.getElementById('discount-button-member').innerText = "Discount Applied";
    // Optionally show the 'both' button if relevant
    // document.getElementById('discount-button-both').style.display = 'inline-block';
}

function applyBothDiscount() {
     document.getElementById('discount-line').innerText = "-15% Super Fan Discount Applied: -$15.00";
     document.getElementById('discount-line').style.display = 'block';
    document.getElementById('total-price').innerText = "$85.00";
    document.getElementById('discount-button-member').style.display = 'none'; // Hide member button if both applied
    document.getElementById('discount-button-both').disabled = true;
    document.getElementById('discount-button-both').innerText = "Discount Applied";
}


// --- Case 2: Merchandise Store ---

function loadMerchStoreLanding(showMessage = '') {
     mainContent.innerHTML = `
        <h1>Victor Zhang Official Merchandise</h1>
         ${showMessage ? `<p style="text-align:center; color: green;">${showMessage}</p>` : ''}
        <div style="text-align: center; margin-bottom: 20px;">
             <button class="button" onclick="merchLoginWithCard()">使用会员卡登录 (Login with Membership Card)</button>
             <button class="button secondary" onclick="merchRegisterAndGetCard()">注册并领取会员卡 (Register & Get Card)</button>
        </div>
        <hr>
        <h2>Featured Items</h2>
        <div style="border: 1px solid #eee; padding: 10px; margin: 10px; text-align:center;">
            <img src="images/victor_tshirt.png" alt="Victor Signed T-Shirt" width="150" style="margin-bottom: 10px; display: block; margin-left: auto; margin-right: auto;">
            <p><strong>Victor Signed T-Shirt - NFT Edition</strong></p>
            <p>Price: $50.00</p>
             <button class="button" onclick="simulatePurchase()">立即购买 (Buy Now)</button>
        </div>
         <button class="button secondary" onclick="loadMembershipCardView()">Back to Membership Card</button>
     `;
}

function merchLoginWithCard() {
    mainContent.innerHTML = `<p style="text-align:center;">Authenticating with Membership Card...</p>`;
    setTimeout(() => {
        loadMerchStoreLanding('Logged in using Membership Card!');
    }, 1000);
}

function merchRegisterAndGetCard() {
     // Simplified flow for demo: directly grant card and log in
    mainContent.innerHTML = `<p style="text-align:center;">Registering and issuing Membership Card...</p>`;
    setTimeout(() => {
        // In a real app, this might involve more steps
        loadMerchStoreLanding('Registered and logged in! Membership Card issued.');
    }, 1500);
}

function simulatePurchase() {
     mainContent.innerHTML = `
        <h2>Checkout</h2>
        <div style="border: 1px dashed #aaa; padding: 15px; margin-bottom: 15px;">
             <p>Item: Victor Signed T-Shirt - NFT Edition</p>
             <p>Price: $50.00</p>
             <hr>
             <p>Simulated Credit Card Payment</p>
             <label>Card Number: **** **** **** 1234</label><br>
             <label>Expiry: 12/25</label><br><br>
             <button class="button" onclick="completePurchase()">Confirm Purchase</button>
        </div>
         <button class="button secondary" onclick="loadMerchStoreLanding()">Cancel</button>
     `;
}

function completePurchase() {
     mainContent.innerHTML = `<p style="text-align:center;">Processing Payment...</p>`;
     setTimeout(() => {
        loadMerchTokenView('Purchase Complete! You received the Merchandise Smart Token.');
    }, 1500);
}

function loadMerchTokenView(showMessage = '') {
     mainContent.innerHTML = `
        <h2>Your Merchandise Smart Token</h2>
         ${showMessage ? `<p style="text-align:center; color: green;">${showMessage}</p>` : ''}
        <div class="smart-card merch-token">
             <h3>Victor Signed T-Shirt</h3>
             <p class="card-id">Token #15/100</p>
              <img src="images/victor_tshirt.png" alt="Victor Signed T-Shirt" width="150" style="margin: 15px auto; display:block;">

             <div class="card-actions">
                 <button class="button" onclick="loadInternalMarketplace()">转卖 (Resell)</button>
                 <button class="button" onclick="loadRedemptionForm()">领取实物 (Redeem Physical Item)</button>
                 <button class="button" onclick="showRefundOptions()">退款 (Refund)</button>
                 <hr style="margin: 20px 0;">
                 <button class="button secondary" onclick="showPopupMessage('Simulation: Added to Apple/Google Wallet! (Redirects to mingxing.zhoubian.com in real scenario)')">添加到 Apple/Google Wallet</button>
                 <button class="button secondary" onclick="loadTelegramView('merch')">添加到 Telegram</button>
                 <button class="button secondary" onclick="loadCryptoWalletView('merch')">转移到钱包 (Crypto Wallet)</button>
                 <hr style="margin: 20px 0;">
                 <button class="button secondary" onclick="showPopupMessage('Simulation: Listing on OpenSea initiated...')">在 OpenSea 上架</button>
                 <button class="button secondary" onclick="showPopupMessage('Simulation: Listing on Taobao/eBay initiated...')">在淘宝/eBay上架</button>
                 <hr style="margin: 20px 0;">
                 <button class="button secondary" onclick="loadPartnerEcommSiteMerch()">访问合作电商 (Visit Partner Ecomm)</button>

             </div>
         </div>
     `;
}

function loadRedemptionForm() {
    mainContent.innerHTML = `
        <h2>Redeem Physical Item</h2>
        <p>Enter your shipping details to receive the physical version of your 'Victor Signed T-Shirt'.</p>
        <form onsubmit="event.preventDefault(); simulateRedemption();">
            <label for="name">Full Name:</label><br>
            <input type="text" id="name" name="name" value="Chloe" required style="width: 90%; padding: 8px; margin-bottom: 10px;"><br>
            <label for="address">Shipping Address:</label><br>
            <textarea id="address" name="address" required style="width: 90%; padding: 8px; margin-bottom: 10px;"></textarea><br>
            <p>Simulated Shipping Cost: $5.00</p>
            <button type="submit" class="button">Submit Address & Pay Shipping</button>
        </form>
        <button class="button secondary" onclick="loadMerchTokenView()">Cancel</button>
    `;
}

function simulateRedemption() {
     mainContent.innerHTML = `<p style="text-align:center;">Processing redemption request...</p>`;
     setTimeout(() => {
        loadMerchTokenView('Redemption successful! Your item will be shipped soon.');
    }, 1500);
}

function showRefundOptions() {
    showPopupMessage(`
        <p>Choose Refund Option:</p>
        <button class='button' onclick='processRefund("Fiat")'>退回法币 (Refund Fiat)</button>
        <button class='button' onclick='processRefund("Crypto")'>退回Crypto (Refund Crypto)</button>
    `, false); // Don't auto-add the default close button
}

function processRefund(type) {
    closePopup('simulationPopup');
    mainContent.innerHTML = `<p style="text-align:center;">Processing ${type} refund...</p>`;
    setTimeout(() => {
        // Go back to store landing, as the token is now 'gone'
        loadMerchStoreLanding(`Refund successful (${type}). Your token has been returned.`);
    }, 1500);
}

function loadInternalMarketplace() {
    mainContent.innerHTML = `
        <h2>Internal Marketplace - List Your Item</h2>
        <p>Your 'Victor Signed T-Shirt - Token #15/100' is ready to be listed.</p>
         <div style="border: 1px solid #eee; padding: 10px; margin: 10px; text-align:center; max-width: 300px; margin: auto;">
            <img src="images/victor_tshirt.png" alt="Victor Signed T-Shirt" width="100" style="margin-bottom: 10px; display: block; margin-left: auto; margin-right: auto;">
            <p><strong>Victor Signed T-Shirt #15/100</strong></p>
            <label for="price">Listing Price ($):</label>
            <input type="number" id="price" name="price" value="60" style="padding: 5px; margin-bottom: 10px;"><br>
            <button class="button" onclick="simulateListing('Internal')">List for Sale</button>
        </div>
        <button class="button secondary" onclick="loadMerchTokenView()">Back to Token View</button>
    `;
}

function simulateListing(platform) {
    mainContent.innerHTML = `<p style="text-align:center;">Listing item on ${platform} Marketplace...</p>`;
    setTimeout(() => {
        loadMerchTokenView(`Item successfully listed on ${platform} Marketplace!`);
    }, 1500);
}

function loadPartnerEcommSiteMerch() {
    // Similar to loadPartnerEcommSite, but ensures the 'both' button is visible
    loadPartnerEcommSite();
    // Need a slight delay for the DOM to update
    setTimeout(() => {
         if(document.getElementById('discount-button-both')) {
            document.getElementById('discount-button-both').style.display = 'inline-block';
         }
          if(document.getElementById('discount-button-member')) {
             // If navigating directly here, maybe don't disable member button yet
             // Or assume member status is known
         }
    }, 100);
}

// --- Helper Functions --- 

function showPopupMessage(message, addCloseButton = true) {
    let content = message;
    if (addCloseButton) {
         content += `<br><br><button class="button secondary" onclick="closePopup('simulationPopup')">Close</button>`;
    }
     popupMessage.innerHTML = content;
    popup.style.display = 'block';
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

function getMembershipCardHtml(context = 'Main View') {
    // Reusable HTML structure for the membership card
    // Context might change minor details or button actions if needed
    return `
        <div class="smart-card membership-card">
            <h3>Victor Zhang Fan Club (${context})</h3>
            <p class="card-id">Gold Tier Fan #12345</p>
            <img src="images/@Member QR.png" alt="Membership QR Code" style="width: 100px; height: 100px; margin: 15px auto; display: block;">
            <p>@chloe_fan</p>
            <div class="card-actions">
                <button class="button" onclick="showPopupMessage('Action Simulation (${context}): Exclusive Content')">独家内容</button>
                <button class="button" onclick="showPopupMessage('Action Simulation (${context}): Event Sign-up')">活动报名</button>
                <button class="button" onclick="showPopupMessage('Action Simulation (${context}): Claim Benefits')">领取福利</button>
                <button class="button" onclick="showPopupMessage('Action Simulation (${context}): Fan Community')">粉丝社区</button>
                <button class="button" onclick="showPopupMessage('Action Simulation (${context}): AI Chat')">与AI分身对话</button>
                 ${context !== 'Telegram Mini App' ? '<button class="button secondary" onclick="loadMembershipCardView()">Back to Main View</button>' : ''}
             </div>
        </div>
    `;
}

function getMerchTokenHtml(context = 'Main View') {
     // Reusable HTML structure for the merchandise token
     return `
        <div class="smart-card merch-token">
            <h3>Victor Signed T-Shirt (${context})</h3>
            <p class="card-id">Token #15/100</p>
             <img src="images/victor_tshirt.png" alt="Victor Signed T-Shirt" width="150" style="margin: 15px auto; display:block;">
            <div class="card-actions">
                 <button class="button" onclick="showPopupMessage('Action Simulation (${context}): Resell')">转卖</button>
                 <button class="button" onclick="showPopupMessage('Action Simulation (${context}): Redeem Physical')">领取实物</button>
                 <button class="button" onclick="showPopupMessage('Action Simulation (${context}): Refund')">退款</button>
                 ${context !== 'Telegram Mini App' ? '<button class="button secondary" onclick="loadMerchTokenView()">Back to Main View</button>' : ''}
            </div>
        </div>
     `;
}


// --- Initial Load ---
window.onload = loadTwitterFeed; 