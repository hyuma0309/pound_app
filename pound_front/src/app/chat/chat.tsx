'use client';

import React, { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';
import { ChatMessage } from '../types/chat';

const SOCKET_SERVER_URL = 'http://localhost:3000'; // バックエンドのURLに合わせて変更

export const Chat: React.FC = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    // ソケット接続の初期化
    const newSocket = io(SOCKET_SERVER_URL, {
      transports: ['websocket'],
      withCredentials: true
    });

    setSocket(newSocket);

    // クリーンアップ関数
    return () => {
      newSocket.close();
    };
  }, []);

  useEffect(() => {
    if (!socket) return;

    // メッセージ受信のイベントリスナー
    socket.on('message', (msg: string) => {
      const newMessage: ChatMessage = {
        message: msg,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newMessage]);
    });

    // クリーンアップ関数
    return () => {
      socket.off('message');
    };
  }, [socket]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && socket) {
      socket.emit('message', message);
      setMessage('');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">リアルタイムチャット</h1>
      
      <div className="bg-white rounded-lg shadow p-4 mb-4 h-96 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <span className="text-gray-600 text-sm">
              {msg.timestamp.toLocaleTimeString()}:
            </span>
            <span className="ml-2">{msg.message}</span>
          </div>
        ))}
      </div>

      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="メッセージを入力..."
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          送信
        </button>
      </form>
    </div>
  );
};