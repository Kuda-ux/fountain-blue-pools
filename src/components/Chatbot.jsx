import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'

const faqData = [
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
    response: "Hello! Welcome to Fountain Blue Pools. I'm here to help you with any questions about our pool services. How can I assist you today?"
  },
  {
    keywords: ['services', 'what do you do', 'what services', 'offer'],
    response: "We offer a wide range of pool services:\n\n• New Swimming Pool Construction\n• Pool Repairs & Maintenance\n• Fibreglass Relining\n• Marblelite Finishes\n• Pump Repairs & Servicing\n• Sand Changes\n• Pool Renovations\n• Weekend & Monthly Maintenance Plans\n\nWould you like more details about any specific service?"
  },
  {
    keywords: ['price', 'cost', 'how much', 'pricing', 'quote', 'estimate'],
    response: "Pricing varies depending on the scope of work, pool size, and materials required. For an accurate quote, I recommend speaking directly with our team.\n\nWould you like me to connect you with our team on WhatsApp for a free quote?"
  },
  {
    keywords: ['location', 'where', 'address', 'based', 'area', 'zimbabwe'],
    response: "We are based in Maphisa, Zimbabwe, and we serve clients across the region. We're happy to discuss your project location and travel requirements.\n\nContact us:\n📞 +263 780 292 970\n📞 +263 777 776 088"
  },
  {
    keywords: ['contact', 'phone', 'call', 'reach', 'number'],
    response: "You can reach us through:\n\n📞 Phone: +263 780 292 970\n📞 Alternative: +263 777 776 088\n💬 WhatsApp: +263 780 292 970\n📍 Location: Maphisa, Zimbabwe\n\nWe're available to answer your questions and provide free quotes!"
  },
  {
    keywords: ['new pool', 'build pool', 'construct', 'construction', 'new swimming'],
    response: "We specialize in building custom swimming pools tailored to your space and preferences. Our construction process includes:\n\n• Site assessment & design consultation\n• Excavation & structural work\n• Plumbing & filtration installation\n• Finishing (tiles, marblelite, etc.)\n• Final inspection & handover\n\nWould you like a free consultation? I can connect you with our team on WhatsApp."
  },
  {
    keywords: ['repair', 'fix', 'leak', 'crack', 'damage', 'broken'],
    response: "We handle all types of pool repairs including:\n\n• Leak detection & repair\n• Crack repairs\n• Surface restoration\n• Tile replacement\n• Structural repairs\n\nFor an assessment of your pool issue, please contact us directly so we can understand the problem better."
  },
  {
    keywords: ['fibreglass', 'fiberglass', 'relining', 'reline'],
    response: "Fibreglass relining is a durable solution that provides:\n\n• Waterproof seal\n• Smooth, easy-to-clean surface\n• Long-lasting protection (15-25 years)\n• Resistance to chemicals & UV\n\nIt's ideal for older pools that need resurfacing. Would you like more information or a quote?"
  },
  {
    keywords: ['marblelite', 'marble', 'finish', 'surface', 'plaster'],
    response: "Marblelite is a premium pool finish that offers:\n\n• Beautiful, smooth appearance\n• Durable & long-lasting\n• Available in various colors\n• Comfortable on feet\n\nWe're experts in marblelite application. Contact us for a quote!"
  },
  {
    keywords: ['pump', 'filter', 'filtration', 'motor'],
    response: "Our pump services include:\n\n• Pump repairs & servicing\n• Motor replacements\n• Filter maintenance\n• Sand changes\n• System upgrades\n\nA well-maintained pump is essential for clean, healthy pool water. Let us know if you need assistance!"
  },
  {
    keywords: ['maintenance', 'clean', 'cleaning', 'maintain', 'weekly', 'monthly'],
    response: "We offer flexible maintenance plans:\n\n• Weekend maintenance visits\n• Monthly maintenance packages\n• Chemical balancing\n• Equipment checks\n• Cleaning services\n\nRegular maintenance keeps your pool safe and extends its lifespan. Want to discuss a maintenance plan?"
  },
  {
    keywords: ['time', 'how long', 'duration', 'days', 'weeks'],
    response: "Project timelines vary:\n\n• New pool construction: 4-8 weeks\n• Fibreglass relining: 1-2 weeks\n• Repairs: 1-7 days (depending on scope)\n• Marblelite finishing: 1-2 weeks\n\nFor a specific timeline, please share your project details with our team."
  },
  {
    keywords: ['thank', 'thanks', 'appreciate'],
    response: "You're welcome! If you have any more questions, feel free to ask. We're here to help you with all your pool needs. 🏊‍♂️"
  },
  {
    keywords: ['whatsapp', 'chat', 'message'],
    response: "You can reach us directly on WhatsApp at +263 780 292 970. Click the button below to start a conversation with our team!"
  },
  {
    keywords: ['bye', 'goodbye', 'see you'],
    response: "Thank you for chatting with us! If you need any help in the future, we're just a message away. Have a great day! 🌊"
  }
]

const defaultResponse = "I appreciate your question! For more detailed information or specific inquiries, I recommend speaking directly with our team who can provide personalized assistance.\n\nWould you like me to connect you with our team on WhatsApp?"

function findResponse(message) {
  const lowerMessage = message.toLowerCase()
  
  for (const faq of faqData) {
    for (const keyword of faq.keywords) {
      if (lowerMessage.includes(keyword)) {
        return faq.response
      }
    }
  }
  
  return defaultResponse
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hello! 👋 Welcome to Fountain Blue Pools. I'm your virtual assistant. How can I help you today?\n\nYou can ask me about:\n• Our services\n• Pricing & quotes\n• Contact information\n• Pool construction\n• Repairs & maintenance"
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!inputValue.trim()) return

    const userMessage = inputValue.trim()
    setMessages(prev => [...prev, { type: 'user', text: userMessage }])
    setInputValue('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const response = findResponse(userMessage)
      setMessages(prev => [...prev, { type: 'bot', text: response }])
      setIsTyping(false)
    }, 800)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const connectToWhatsApp = () => {
    window.open(
      'https://wa.me/263780292970?text=Hello%2C%20I%20was%20chatting%20with%20your%20website%20assistant%20and%20would%20like%20more%20information.',
      '_blank'
    )
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-24 right-6 z-40 flex items-center justify-center w-14 h-14 bg-deep-blue hover:bg-deep-blue/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
        aria-label="Open chat"
      >
        <MessageCircle size={26} />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 transform ${
          isOpen
            ? 'scale-100 opacity-100 translate-y-0'
            : 'scale-95 opacity-0 translate-y-4 pointer-events-none'
        }`}
        style={{ maxHeight: 'calc(100vh - 6rem)' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-deep-blue to-deep-blue/90 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot size={22} />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Fountain Blue Assistant</h3>
              <p className="text-xs text-white/70">Online • Ready to help</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close chat"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex gap-2 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.type === 'bot' && (
                <div className="w-8 h-8 bg-deep-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot size={16} className="text-deep-blue" />
                </div>
              )}
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm whitespace-pre-line ${
                  msg.type === 'user'
                    ? 'bg-deep-blue text-white rounded-br-md'
                    : 'bg-white text-charcoal shadow-sm border border-gray-100 rounded-bl-md'
                }`}
              >
                {msg.text}
              </div>
              {msg.type === 'user' && (
                <div className="w-8 h-8 bg-pool-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <User size={16} className="text-pool-blue" />
                </div>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-2 justify-start">
              <div className="w-8 h-8 bg-deep-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot size={16} className="text-deep-blue" />
              </div>
              <div className="bg-white p-3 rounded-2xl rounded-bl-md shadow-sm border border-gray-100">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* WhatsApp Connect Button */}
        <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
          <button
            onClick={connectToWhatsApp}
            className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-xl text-sm font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat with us on WhatsApp
          </button>
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2.5 bg-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-deep-blue/20 transition-all"
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className="p-2.5 bg-deep-blue hover:bg-deep-blue/90 disabled:bg-gray-300 text-white rounded-xl transition-colors disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
