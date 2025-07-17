# CarTech - Vehicle Trading Platform

CarTech is a modern, responsive web application for buying, selling, and exploring vehicles. Built with HTML, CSS (Bootstrap), and JavaScript, it offers a seamless experience for users to browse listings, manage their cart, chat with a virtual assistant, and more.

---

## 🚗 Features
- **Home Page:** Hero carousel, categories, featured listings, and FAQ.
- **Listings:** Filter cars by New, Used, Electric; view details in a modal; add to cart.
- **Cart:** View, update, and remove cars; multi-step checkout with order summary.
- **Sell:** Guided form to sell your car, including simulated AI photo analysis.
- **About & Contact:** Company info and contact form.
- **Chatbot:** Virtual assistant for instant help, with smart responses and quick replies.
- **Responsive Design:** Works on desktop and mobile.
- **Accessible:** Keyboard navigation and ARIA labels for modals and forms.

---

## 📸 Screenshots
> _Add your own screenshots here for a better GitHub presentation!_

- **Home Page:** ![Home Page](img/screenshots/home.png)
- **Listings:** ![Listings](img/screenshots/listings.png)
- **Cart & Checkout:** ![Cart](img/screenshots/cart.png)
- **Chatbot:** ![Chatbot](img/screenshots/chatbot.png)

---

## 🗂️ Folder Structure (In-Depth)
```
Sem4 - Project - bootstrap Vehicle/
│
├── about/
│   ├── about.html         # About Us page
│   ├── about.css          # About page styles
│   └── about.js           # About page scripts (if any)
├── cart/
│   ├── cart.html          # Cart and checkout page
│   ├── cart.css           # Cart page styles
│   ├── cart.js            # Cart logic (add/remove, summary)
│   └── cart-inline.js     # Multi-step checkout logic
├── contact/
│   ├── contact.html       # Contact form page
│   ├── contact.css        # Contact page styles
│   └── contact.js         # Contact form validation
├── index/
│   ├── index.html         # Home page
│   ├── index.css          # Home page styles, chatbot styles
│   └── index.js           # Home page logic, chatbot logic
├── listing/
│   ├── listing.html       # Car listings page
│   ├── listing.css        # Listings page styles
│   └── listing.js         # Filtering, info modal, add to cart
├── sell/
│   ├── sell.html          # Sell your car page
│   ├── sell.css           # Sell page styles
│   └── sell.js            # Sell form logic, AI photo analysis
├── img/
│   ├── ...                # Images for all pages (cars, banners, etc.)
├── style.css              # Shared global styles
└── README.md              # Project documentation
```

---

## 🏠 Page-by-Page Overview

### 1. Home (`index/index.html`)
- Hero carousel with featured images
- Browse by category (All, New, Used, Electric)
- Featured listings section
- FAQ accordion
- Chatbot widget (bottom right)

### 2. Listings (`listing/listing.html`)
- Grid of car cards with images, badges, and info
- Filter by New, Used, Electric via navbar or dropdown
- **Info button**: Opens modal with car specs, history, and features
- **Add to Cart**: Adds car to cart and updates navbar badge

### 3. Cart & Checkout (`cart/cart.html`)
- List of cars in cart with quantity and price
- Remove items from cart
- Multi-step checkout (Personal Info → Address → Payment → Confirm)
- Order summary and total
- Place order (simulated)

### 4. Sell (`sell/sell.html`)
- Step-by-step form to submit car details
- Upload photos (with simulated AI analysis)
- Get instant offer (simulated)

### 5. About (`about/about.html`)
- Company mission, team, and values
- Why choose CarTech?

### 6. Contact (`contact/contact.html`)
- Contact form (name, email, message)
- Company contact info
- Embedded map (if desired)

---

## 🤖 Chatbot (Virtual Assistant)
- **Smart responses**: Answers questions about buying, financing, trade-ins, EVs, warranty, and more.
- **Quick replies**: Suggested questions after every bot message for easy navigation.
- **Fallback**: If the bot doesn't know, it suggests topics or offers to connect to a representative.
- **Contact info**: Type "representative" or "contact" to get company contact details.
- **Theme toggle**: Switch between light and dark mode in the chat.
- **Accessible**: Keyboard and screen reader friendly.

**How it works:**
- All logic is in `index/index.js`.
- Uses a `chatResponses` object for answers and keyword matching for flexibility.
- Quick replies are rendered dynamically after each bot message.

---

## 🛠️ Setup & Usage
1. **Clone the repository:**
   ```
   git clone <your-repo-url>
   ```
2. **Open the project folder:**
   - Use VS Code or your favorite editor.
3. **Run locally:**
   - Open `index/index.html` in your browser (or use a local server for best results).
   - All features work client-side; no backend required.
4. **Explore:**
   - Browse listings, add to cart, use the chatbot, and try the checkout flow!

---

## 🧩 Customization & Tips
- **Add more cars:** Edit `listing/listing.html` and `listing/listing.js` (for modal details).
- **Change chatbot answers:** Update `chatResponses` in `index/index.js`.
- **Update images:** Place new images in the `img/` folder and update HTML as needed.
- **Styling:** Edit `style.css` or page-specific CSS files.
- **Accessibility:** All modals and forms use ARIA labels; test with keyboard navigation for best results.

---

## 🐞 Troubleshooting
- **Modal not opening?** Make sure Bootstrap JS is loaded and there are no JS errors in the console.
- **Cart not updating?** Check localStorage permissions and that JS is enabled.
- **Chatbot not responding?** Ensure `index.js` is loaded and there are no syntax errors.
- **Images not showing?** Confirm the image paths and file names are correct.

---

## 📦 Dependencies
- [Bootstrap 5](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- [Animate.css](https://animate.style/)

---

## ♿ Accessibility
- All interactive elements are keyboard accessible.
- Modals and forms use ARIA labels for screen readers.
- Sufficient color contrast for readability.

---

## 🤝 Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to your fork and open a Pull Request

---

## 📣 Credits
- Project for LPU Semester 4 - Front-End Web UI (CAP916)
- Images and icons are for educational/demo use only.

---

**Enjoy exploring CarTech!** 