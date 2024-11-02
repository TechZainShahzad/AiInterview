'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-4 shadow-lg">
        <h2 className="text-lg font-semibold">Are you sure?</h2>
        <div className="mt-4 flex justify-end space-x-2">
          <button className="px-4 py-2 text-red-600" onClick={onConfirm}>
            Yes
          </button>
          <button className="px-4 py-2 text-gray-600" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const InterviewPage = () => {
  const [code, setCode] = useState("public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello world!\");\n  }\n}");
  const [output, setOutput] = useState("Output will appear here...");
  const [messages, setMessages] = useState([
    { sender: "AI", text: "Hello! 👋 Today, I will be conducting your technical interview..." },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  useEffect(() => {
    const getMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        if (videoRef.current) {
          (videoRef.current as HTMLVideoElement).srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing webcam and microphone:", err);
      }
    };
    getMedia();
  }, []);

  const compileCode = async () => {
    const response = await fetch('/api/compile', {
      method: 'POST',
      body: JSON.stringify({ code }),
    });
    const data = await response.json();
    setOutput(data.output);
  };

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "Candidate", text: newMessage }]);
      setNewMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleSubmit = () => {
    setModalOpen(true);
  };

  const handleConfirm = () => {
    setModalOpen(false);
    router.push('/candidate/Review');
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col bg-background text-foreground font-inter">
      <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-4 p-4 overflow-y-auto">
        {/* Top-Left: Chat Section */}
        <div className="flex flex-col bg-white shadow-lg rounded-lg row-span-1 h-full">
          <div className="flex-1 bg-gray-50 rounded-t-lg p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <p key={index} className={`${msg.sender === "AI" ? "bg-foreground text-background text-left" : "bg-gray-200 text-gray-800 text-right"} p-2 rounded-md mb-2`}>
                <strong>{msg.sender}:</strong> {msg.text}
              </p>
            ))}
          </div>

          <div className="flex mt-2 rounded-b-lg border-t">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 p-2 border-gray-300 rounded-l-lg outline-none"
              placeholder="Type a message..."
            />
            <button onClick={sendMessage} className="p-2 bg-foreground text-background rounded-r-lg">Send</button>
          </div>
        </div>

        {/* Top-Right: Code Editor */}
        <div className="flex flex-col bg-white shadow-lg rounded-lg row-span-1 h-full">
          <div className="flex items-center justify-between mb-2 p-4 border-b">
            <h3 className="text-lg font-semibold">Java Compiler</h3>
            <div className="flex space-x-2">
              <button onClick={handleSubmit} className="text-sm px-2 py-1 rounded bg-foreground text-background">
                Submit
              </button>
              <button onClick={compileCode} className="text-sm px-2 py-1 border rounded text-foreground border-foreground">
                Compile
              </button>
            </div>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-full bg-gray-900 text-white p-2 font-mono"
          />
        </div>

        {/* Bottom-Left: Webcam Display */}
        <div className="bg-gray-200 rounded-md flex items-center justify-center overflow-hidden h-full">
          <video ref={videoRef} autoPlay className="w-full h-full object-cover" />
        </div>

        {/* Bottom-Right: Code Output */}
        <div className="relative bg-white shadow-lg rounded-lg p-4 h-full overflow-hidden">
          <h4 className="text-lg font-semibold">Output</h4>
          <div className="mt-2 bg-gray-100 p-2 rounded-md h-full overflow-y-auto">
            <p>{output}</p>
          </div>
        </div>
      </div>

      {/* Render the Modal */}
      <Modal isOpen={modalOpen} onClose={handleCancel} onConfirm={handleConfirm} />
    </div>
  );
};

export default InterviewPage;
