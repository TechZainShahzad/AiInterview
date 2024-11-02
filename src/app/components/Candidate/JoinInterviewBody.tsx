import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faMicrophoneSlash, faVideo, faVideoSlash } from '@fortawesome/free-solid-svg-icons';

const JoinInterviewBody: React.FC = () => {
  const router = useRouter();
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isMicOn, setIsMicOn] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);


  const handleCameraToggle = async () => {
    if (isCameraOn) {
      if (mediaStream) {
        mediaStream.getVideoTracks().forEach((track) => track.stop());
      }
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
      setIsCameraOn(false);
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: isMicOn });
        setMediaStream(stream);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setIsCameraOn(true);
      } catch (error) {
        console.error("Error accessing webcam:", error);
      }
    }
  };

  const handleMicToggle = async () => {
    if (isMicOn) {
      if (mediaStream) {
        mediaStream.getAudioTracks().forEach((track) => track.stop());
      }
      setIsMicOn(false);
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: isCameraOn,
          audio: true
        });
        setMediaStream(stream);
        if (isCameraOn && videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setIsMicOn(true);
      } catch (error) {
        console.error("Error accessing microphone:", error);
      }
    }
  };

  const handleJoinClick = () => {
    router.push('/candidate/Interview'); // Adjust the path as needed for your interview screen
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[var(--background)] p-4">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-6 gap-8">
        
        {/* Left Side - Webcam Display */}
        <div className="flex flex-col items-center">
          <div className="w-64 h-48 bg-gray-300 rounded-lg flex items-center justify-center">
            {isCameraOn ? (
              <video ref={videoRef} className="rounded-lg" autoPlay playsInline /> // Display webcam stream
            ) : (
              <span className="text-sm text-gray-500">Camera Off</span>
            )}
          </div>

          {/* Camera and Mic Control Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleMicToggle}
              className={`p-3 rounded-full ${isMicOn ? 'bg-[var(--foreground)] text-white' : 'bg-gray-200'}`}
              aria-label="Toggle Microphone"
            >
              <FontAwesomeIcon icon={isMicOn ? faMicrophone : faMicrophoneSlash} />
            </button>
            <button
              onClick={handleCameraToggle}
              className={`p-3 rounded-full ${isCameraOn ? 'bg-[var(--foreground)] text-white' : 'bg-gray-200'}`}
              aria-label="Toggle Camera"
            >
              <FontAwesomeIcon icon={isCameraOn ? faVideo : faVideoSlash} />
            </button>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-2 text-[var(--foreground)]">Join Interview</h2>
          <p className="text-sm text-gray-500 mb-4">Required fields are marked with <span className="text-red-500">*</span></p>
          
          {/* Interview ID Input */}
          <div className="mb-4">
            <label htmlFor="interviewId" className="block text-sm font-medium text-gray-700">Interview ID <span className="text-red-500">*</span></label>
            <input
              type="text"
              id="interviewId"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--foreground)]"
              placeholder="yutx-ywok-ahsc"
            />
          </div>
          
          {/* Resume Upload */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Upload your resume <span className="text-red-500">*</span></label>
            <input type="file" className="block w-full mt-2" />
          </div>
          
          {/* Join Button */}
          <button
            onClick={handleJoinClick}
            type="button"
            className="w-full bg-[var(--foreground)] text-white py-2 rounded-md font-medium hover:bg-gray-800 transition-colors"
          >
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinInterviewBody;
