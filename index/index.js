window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.spinner-border').style.display = 'none';
    }, 2000);
});

// Expanded chatResponses for more natural matching
const quickReplyOptions = [
    { text: 'How to buy a car?', key: 'how to buy a car' },
    { text: 'Financing options', key: 'financing options' },
    { text: 'Trade-in process', key: 'trade-in process' },
    { text: 'Electric vehicles', key: 'electric vehicles' },
    { text: 'Best selling cars', key: 'best selling cars' },
    { text: 'Test drive', key: 'test drive' },
    { text: 'Warranty', key: 'warranty' },
    { text: 'Sell my car', key: 'sell my car' },
    { text: 'Business hours', key: 'business hours' },
];

const chatResponses = {
    "hello": "👋 Hi there! How can I help you with vehicle trading today?",
    "hi": "👋 Hello! How can I assist you with your car buying or selling needs?",
    "hey": "👋 Hey there! Looking for help with vehicles? I'm here for you!",
    
    "how to buy a car": `🚗 Buying a car at CarTech is easy! Just follow these steps:
        <div class=\"bot-card\">
            <ol>
                <li>Browse our inventory online or visit our showroom</li>
                <li>Select a vehicle you're interested in</li>
                <li>Schedule a test drive</li>
                <li>Choose financing options</li>
                <li>Complete paperwork</li>
                <li>Drive home in your new car!</li>
            </ol>
        </div>
        Would you like to know more about any specific step?`,
    
    "financing options": `💰 We offer several financing options:
        <div class=\"bot-card\">
            <ul>
                <li><strong>Bank loans</strong> with competitive interest rates</li>
                <li><strong>In-house financing</strong> with flexible terms</li>
                <li><strong>Leasing options</strong> for those who prefer to upgrade regularly</li>
                <li><strong>Special promotions</strong> for qualified buyers</li>
            </ul>
        </div>
        Our finance team can help you find the best option based on your credit score and budget. Would you like to speak with a finance specialist?`,
    
    "trade-in process": `🔄 Our trade-in process is straightforward:
        <div class=\"bot-card\">
            <ol>
                <li>Bring your current vehicle to our dealership or submit details online</li>
                <li>Our team will inspect the vehicle and provide a fair market valuation</li>
                <li>The trade-in value can be applied as a down payment on your new purchase</li>
            </ol>
        </div>
        We aim to give you the best possible value for your trade-in!`,
    
    "electric vehicles": `⚡ We have a growing selection of electric vehicles (EVs):
        <div class=\"bot-card\">
            <ul>
                <li>Various brands including Tesla, Nissan, Ford, and Chevrolet</li>
                <li>Price ranges from affordable to luxury</li>
                <li>Both new and certified pre-owned options</li>
            </ul>
        </div>
        EVs offer benefits like lower operating costs, reduced emissions, and potential tax incentives. Would you like to explore our EV inventory?`,
    
    "warranty": `🛡️ All new vehicles come with manufacturer warranties. 
        <div class=\"bot-card\">
            <ul>
                <li>New vehicles: Full manufacturer warranty</li>
                <li>Used vehicles: 90-day CarTech certified warranty</li>
                <li>Extended warranties available for purchase</li>
            </ul>
        </div>
        Would you like details on specific warranty coverage?`,
    
    "best selling cars": `🏆 Our current best-selling models are:
        <div class=\"bot-card\">
            <ol>
                <li>Toyota RAV4 (SUV)</li>
                <li>Tesla Model 3 (Electric)</li>
                <li>Honda Civic (Sedan)</li>
                <li>Ford F-150 (Truck)</li>
            </ol>
        </div>
        Would you like more information about any of these vehicles?`,
    
    "test drive": `🔑 You can schedule a test drive easily!
        <div class=\"bot-card\">
            <p>Visit our website and select the 'Schedule Test Drive' option for your chosen vehicle, or call us at <strong>(555) 123-4567</strong>.</p>
            <p>We're open Monday-Saturday from 9 AM to 7 PM.</p>
        </div>`,
    
    "car insurance": `📋 While we don't provide insurance directly, we partner with several insurance providers who can offer competitive rates. 
        <div class=\"bot-card\">
            <p>Our team can connect you with these partners when you purchase a vehicle.</p>
            <p>Would you like me to have an insurance specialist contact you?</p>
        </div>`,
    
    "sell my car": `💵 We buy vehicles! To sell your car to CarTech:
        <div class=\"bot-card\">
            <ol>
                <li>Submit your vehicle details online or visit us</li>
                <li>Get a free appraisal</li>
                <li>Receive a cash offer</li>
                <li>Complete the sale if you accept</li>
            </ol>
        </div>
        The process is quick and we offer fair market values. Would you like to start with an online valuation?`,
    
    "business hours": `🕒 Our showroom is open:
        <div class=\"bot-card\">
            <ul>
                <li>Monday-Friday: 9 AM - 8 PM</li>
                <li>Saturday: 10 AM - 6 PM</li>
                <li>Sunday: 11 AM - 5 PM</li>
            </ul>
        </div>
        Our service center has slightly different hours. Would you like those details as well?`,
    
    "contact": `📱 You can reach us at:
        <div class=\"bot-card\">
            <ul>
                <li><strong>Phone:</strong> (555) 123-4567</li>
                <li><strong>Email:</strong> info@cartech.com</li>
                <li><strong>Address:</strong> 123 Auto Drive, Carville, CA 90210</li>
            </ul>
        </div>
        Our team is ready to assist you!`,
    
    "default": `I'm not sure I have the information you're looking for, but you can ask me about:<br>
        <ul>
            <li>How to buy a car</li>
            <li>Financing options</li>
            <li>Trade-in process</li>
            <li>Electric vehicles</li>
            <li>Best selling cars</li>
            <li>Test drive</li>
            <li>Warranty</li>
            <li>Sell my car</li>
            <li>Business hours</li>
        </ul>
        Or type 'representative' if you'd like to speak to a CarTech representative!`
};

// Chat widget logic
const chatToggle = document.getElementById('chatToggle');
const chatContainer = document.getElementById('chatContainer');
const closeChat = document.getElementById('closeChat');
const sendMessageBtn = document.getElementById('sendMessage');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');
const quickReplies = document.querySelectorAll('.quick-reply');
const themeToggle = document.getElementById('themeToggle');

if (chatToggle && chatContainer) {
    chatToggle.addEventListener('click', function() {
        chatContainer.classList.toggle('open');
        chatToggle.querySelector('.notification-badge').style.display = 'none';
    });
}
if (closeChat && chatContainer) {
    closeChat.addEventListener('click', function() {
        chatContainer.classList.remove('open');
    });
}
if (sendMessageBtn && chatInput) {
    sendMessageBtn.addEventListener('click', sendUserMessage);
    chatInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') sendUserMessage();
    });
}
if (quickReplies) {
    quickReplies.forEach(qr => {
        qr.addEventListener('click', function() {
            chatInput.value = this.textContent.trim();
            sendUserMessage();
        });
    });
}
if (themeToggle) {
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        themeToggle.querySelector('i').classList.toggle('fa-moon');
        themeToggle.querySelector('i').classList.toggle('fa-sun');
    });
}

function sendUserMessage() {
    const msg = chatInput.value.trim();
    if (!msg) return;
    // Remove initial bot message and quick replies if present
    const botInitial = chatMessages.querySelector('.bot-initial');
    if (botInitial) botInitial.remove();
    const quickRepliesDiv = chatMessages.querySelector('.quick-replies');
    if (quickRepliesDiv) quickRepliesDiv.remove();
    appendMessage(msg, 'user');
    chatInput.value = '';
    setTimeout(() => {
        appendMessage(getBotResponse(msg), 'bot');
    }, 500);
    chatContainer.classList.add('open');
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
function appendMessage(message, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'message ' + (sender === 'user' ? 'user-message' : 'bot-message');
    msgDiv.innerHTML = message;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    // Show quick replies after every bot message
    if (sender === 'bot') renderQuickReplies();
}

function renderQuickReplies() {
    // Remove existing quick replies
    const oldQuick = chatMessages.querySelector('.quick-replies');
    if (oldQuick) oldQuick.remove();
    // Create new quick replies
    const quickDiv = document.createElement('div');
    quickDiv.className = 'quick-replies';
    quickReplyOptions.forEach(opt => {
        const btn = document.createElement('div');
        btn.className = 'quick-reply';
        btn.textContent = opt.text;
        btn.onclick = function() {
            chatInput.value = opt.text;
            sendUserMessage();
        };
        quickDiv.appendChild(btn);
    });
    chatMessages.appendChild(quickDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(msg) {
    const key = msg.toLowerCase();
    // Try exact match first
    if (chatResponses[key]) return chatResponses[key];
    // Substring/keyword matching for more natural responses
    if (key.includes('buy')) return chatResponses['how to buy a car'];
    if (key.includes('finance')) return chatResponses['financing options'];
    if (key.includes('trade')) return chatResponses['trade-in process'];
    if (key.includes('electric') || key.includes('ev')) return chatResponses['electric vehicles'];
    if (key.includes('warranty')) return chatResponses['warranty'];
    if (key.includes('best') && key.includes('sell')) return chatResponses['best selling cars'];
    if (key.includes('test drive')) return chatResponses['test drive'];
    if (key.includes('insurance')) return chatResponses['car insurance'];
    if (key.includes('sell my car') || (key.includes('sell') && key.includes('car'))) return chatResponses['sell my car'];
    if (key.includes('business hours') || key.includes('open')) return chatResponses['business hours'];
    if (key.includes('contact') || key.includes('representative')) {
        return `📱 You can reach us at:
        <div class=\"bot-card\">
            <ul>
                <li><strong>Phone:</strong> (555) 123-4567</li>
                <li><strong>Email:</strong> info@cartech.com</li>
                <li><strong>Contact page:</strong> <a href='/contact/contact.html' target='_blank'>Contact Us</a></li>
            </ul>
        </div>
        Our team is ready to assist you!`;
    }
    if (key.includes('hello') || key.includes('hi') || key.includes('hey')) return chatResponses['hello'];
    return chatResponses['default'];
} 