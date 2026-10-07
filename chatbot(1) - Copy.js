/* ==============================
   FRESHBOT CHATBOT
   Add this file to every page:
   <script src="chatbot.js"></script>
================================= */


/* ==============================
   CHATBOT CSS
================================= */

const chatbotStyle = document.createElement("style");

chatbotStyle.innerHTML = `

/* Floating Button */

#freshbot-button {

    position: fixed;

    right: 25px;
    bottom: 25px;

    width: 60px;
    height: 60px;

    border: none;

    border-radius: 50%;

    background: #198754;

    color: white;

    font-size: 27px;

    cursor: pointer;

    box-shadow: 0 8px 25px rgba(0,0,0,.20);

    z-index: 99999;

    transition: .3s;
}

#freshbot-button:hover {

    transform: scale(1.08);

    background: #126b42;
}


/* Chat Window */

#freshbot-box {

    position: fixed;

    right: 25px;
    bottom: 95px;

    width: 350px;
    height: 500px;

    background: white;

    border-radius: 18px;

    overflow: hidden;

    box-shadow: 0 15px 50px rgba(0,0,0,.20);

    border: 1px solid #dfe9e3;

    display: none;

    flex-direction: column;

    z-index: 99999;
}


/* Open */

#freshbot-box.open {

    display: flex;
}


/* Header */

.freshbot-header {

    background: #198754;

    color: white;

    padding: 15px;

    display: flex;

    justify-content: space-between;

    align-items: center;
}

.freshbot-title {

    display: flex;

    align-items: center;

    gap: 10px;
}

.freshbot-avatar {

    width: 40px;
    height: 40px;

    border-radius: 50%;

    background: white;

    display: grid;

    place-items: center;

    font-size: 21px;
}

.freshbot-title h3 {

    margin: 0;

    font-size: 15px;
}

.freshbot-title span {

    font-size: 11px;

    color: #d9f6e4;
}

#freshbot-close {

    border: none;

    background: transparent;

    color: white;

    font-size: 27px;

    cursor: pointer;
}


/* Messages */

#freshbot-messages {

    flex: 1;

    padding: 15px;

    overflow-y: auto;

    background: #f7faf8;

    display: flex;

    flex-direction: column;

    gap: 10px;
}


/* Message */

.freshbot-message {

    max-width: 80%;

    padding: 10px 13px;

    border-radius: 12px;

    font-size: 13px;

    line-height: 1.5;
}

.freshbot-bot {

    align-self: flex-start;

    background: white;

    color: #294238;

    border: 1px solid #e0ebe4;
}

.freshbot-user {

    align-self: flex-end;

    background: #198754;

    color: white;
}


/* Quick Buttons */

.freshbot-quick {

    display: flex;

    gap: 6px;

    padding: 8px;

    overflow-x: auto;

    background: white;

    border-top: 1px solid #eee;
}

.freshbot-quick button {

    white-space: nowrap;

    border: 1px solid #cce3d5;

    background: #f0f9f3;

    color: #198754;

    border-radius: 20px;

    padding: 7px 10px;

    font-size: 10px;

    cursor: pointer;
}


/* Input */

.freshbot-input {

    display: flex;

    padding: 10px;

    background: white;

    border-top: 1px solid #eee;
}

#freshbot-input {

    flex: 1;

    border: 1px solid #d5dfd9;

    outline: none;

    border-radius: 20px;

    padding: 10px 13px;

    font-size: 12px;
}

#freshbot-send {

    width: 40px;
    height: 40px;

    margin-left: 7px;

    border: none;

    border-radius: 50%;

    background: #198754;

    color: white;

    cursor: pointer;
}


/* Mobile */

@media(max-width:500px) {

    #freshbot-box {

        right: 15px;

        bottom: 85px;

        width: calc(100vw - 30px);

        height: 470px;
    }

    #freshbot-button {

        right: 15px;

        bottom: 15px;
    }
}

`;

document.head.appendChild(chatbotStyle);


/* ==============================
   CHATBOT HTML
================================= */

const chatbotHTML = `

<!-- Floating Button -->

<button id="freshbot-button">
    🤖
</button>


<!-- Chat Window -->

<div id="freshbot-box">

    <!-- Header -->

    <div class="freshbot-header">

        <div class="freshbot-title">

            <div class="freshbot-avatar">
                🤖
            </div>

            <div>

                <h3>FreshBot</h3>

                <span>● Online</span>

            </div>

        </div>

        <button id="freshbot-close">
            ×
        </button>

    </div>


    <!-- Messages -->

    <div id="freshbot-messages">

        <div class="freshbot-message freshbot-bot">

            👋 Hi! I'm FreshBot.

            <br><br>

            I can help you find
            fruits, vegetables,
            markets and seasonal produce.

        </div>

    </div>


    <!-- Quick Questions -->

    <div class="freshbot-quick">

        <button onclick="freshbotQuick('seasonal vegetables')">
            🥕 Vegetables
        </button>

        <button onclick="freshbotQuick('fruits')">
            🍎 Fruits
        </button>

        <button onclick="freshbotQuick('market')">
            📍 Market
        </button>

        <button onclick="freshbotQuick('prices')">
            💰 Prices
        </button>

    </div>


    <!-- Input -->

    <div class="freshbot-input">

        <input
            type="text"
            id="freshbot-input"
            placeholder="Ask FreshBot..."
        >

        <button id="freshbot-send">
            ➤
        </button>

    </div>

</div>

`;


/* Add chatbot to page */

document.body.insertAdjacentHTML(
    "beforeend",
    chatbotHTML
);


/* ==============================
   ELEMENTS
================================= */

const freshbotButton =
    document.getElementById("freshbot-button");

const freshbotBox =
    document.getElementById("freshbot-box");

const freshbotClose =
    document.getElementById("freshbot-close");

const freshbotInput =
    document.getElementById("freshbot-input");

const freshbotSend =
    document.getElementById("freshbot-send");

const freshbotMessages =
    document.getElementById("freshbot-messages");


/* ==============================
   OPEN CHAT
================================= */

freshbotButton.addEventListener(
    "click",
    function () {

        freshbotBox.classList.add("open");

        freshbotInput.focus();

    }
);


/* ==============================
   CLOSE CHAT
================================= */

freshbotClose.addEventListener(
    "click",
    function () {

        freshbotBox.classList.remove("open");

    }
);


/* ==============================
   SEND MESSAGE
================================= */

freshbotSend.addEventListener(
    "click",
    freshbotSendMessage
);


freshbotInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            freshbotSendMessage();

        }

    }
);


/* ==============================
   SEND FUNCTION
================================= */

function freshbotSendMessage() {

    const text =
        freshbotInput.value.trim();

    if (!text) return;


    /* User message */

    freshbotAddMessage(
        text,
        "freshbot-user"
    );


    freshbotInput.value = "";


    /* Bot reply */

    setTimeout(function() {

        const reply =
            freshbotReply(text);

        freshbotAddMessage(
            reply,
            "freshbot-bot"
        );

    }, 500);

}


/* ==============================
   ADD MESSAGE
================================= */

function freshbotAddMessage(
    text,
    className
) {

    const div =
        document.createElement("div");

    div.className =
        "freshbot-message " +
        className;

    div.innerHTML = text;

    freshbotMessages.appendChild(div);

    freshbotMessages.scrollTop =
        freshbotMessages.scrollHeight;
}


/* ==============================
   QUICK QUESTION
================================= */

function freshbotQuick(text) {

    freshbotInput.value = text;

    freshbotSendMessage();

}


/* ==============================
   BOT REPLIES
================================= */

function freshbotReply(message) {

    const text =
        message.toLowerCase();


    /* Vegetables */

    if (
        text.includes("vegetable") ||
        text.includes("sabzi") ||
        text.includes("seasonal")
    ) {

        return `
            🥕 <b>Seasonal Vegetables</b>

            <br><br>

            You can explore:
            <br>
            • Carrots 🥕
            <br>
            • Tomatoes 🍅
            <br>
            • Spinach 🌿
            <br>
            • Pumpkin 🎃
            <br>
            • Broccoli 🥦
        `;

    }


    /* Fruits */

    if (
        text.includes("fruit") ||
        text.includes("fruits")
    ) {

        return `
            🍎 <b>Fresh Fruits</b>

            <br><br>

            Try:
            <br>
            • Apples 🍎
            <br>
            • Oranges 🍊
            <br>
            • Pomegranate
            <br>
            • Mangoes 🥭
            <br>
            • Watermelon 🍉
        `;

    }


    /* Market */

    if (
        text.includes("market") ||
        text.includes("shop")
    ) {

        return `
            📍 You can visit our
            <b>Find a Market</b> page
            to discover fresh fruit
            and vegetable shops.
        `;

    }


    /* Price */

    if (
        text.includes("price") ||
        text.includes("prices") ||
        text.includes("cost")
    ) {

        return `
            💰 Prices depend on the
            vegetable, fruit, market
            and season.

            <br><br>

            Open a shop page to
            check individual prices.
        `;

    }


    /* Greeting */

    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {

        return `
            👋 Hello!

            <br><br>

            How can I help you
            with fresh produce?
        `;

    }


    /* Thanks */

    if (
        text.includes("thank")
    ) {

        return `
            😊 You're welcome!

            <br>

            Happy fresh shopping! 🥬🍎
        `;

    }


    /* Default */

    return `
        🤖 I'm FreshBot!

        <br><br>

        You can ask me about:

        <br>
        🥕 Vegetables

        <br>
        🍎 Fruits

        <br>
        📍 Markets

        <br>
        💰 Prices

        <br>
        🌱 Seasonal produce
    `;

}
