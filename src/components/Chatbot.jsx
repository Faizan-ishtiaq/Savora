import { useState } from "react";

function Chatbot() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!message.trim()) return;

    setLoading(true);
    setReply("");

    try {
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();
      setReply(data.reply);
    } catch (error) {
      setReply("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-chat" className="bg-savora-dark text-savora-cream h-screen py-20 px-6 scroll-mt-8">
      <div className="max-w-3xl mx-auto text-center">
        
        <p className="font-body text-savora-gold uppercase tracking-widest text-sm mb-3">
          Ask Us Anything
        </p>
        <h2 className="font-heading text-4xl md:text-5xl mb-10">
          Savora Assistant
        </h2>
        <div className="flex flex-wrap gap-3 justify-center mb-8 mt-6">
  {["What are your hours?", "Do you have vegan options?", "Where are you located?", "What's your most popular dish?","Can I make a reservation?","What's good for a date night?"].map((q) => (
    <button
      key={q}
      onClick={() => setMessage(q)}
      className="bg-savora-border hover:bg-savora-gold hover:text-savora-dark text-sm font-body px-4 py-2 rounded-full transition"
    >
      {q}
    </button>
  ))}
</div>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask about our menu, hours, or location..."
            className="flex-1 p-3 rounded bg-savora-cream text-savora-dark outline-none font-body"
          />
          <button
            onClick={handleSend}
            disabled={loading}
            className="bg-savora-gold hover:bg-savora-gold-hover px-6 py-3 rounded font-body font-semibold text-savora-dark transition disabled:opacity-50"
          >
            {loading ? "..." : "Ask"}
          </button>
        </div>

        {loading && (
          <p className="text-gray-400 font-body">Thinking...</p>
        )}

        {reply && (
          <div className="bg-savora-border rounded-lg p-6 text-left font-body whitespace-pre-line">
            {reply}
          </div>
        )}

      </div>
    </section>
  );
}

export default Chatbot;