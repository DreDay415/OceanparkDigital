import { useState } from 'react';

interface EmailCollectorProps {
  placeholder?: string;
  buttonText?: string;
  showName?: boolean;
}

export default function EmailCollector({
  placeholder = "Enter your email",
  buttonText = "Join Waitlist",
  showName = false
}: EmailCollectorProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || (showName && !name)) {
      setStatus('error');
      setMessage('Please fill in all fields');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/submit-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name: showName ? name : null,
          source: 'contact_form'
        }),
      });

      if (!response.ok) throw new Error('Failed to submit');

      setStatus('success');
      setMessage('🎉 Thanks for joining! We\'ll be in touch soon.');
      setEmail('');
      setName('');

      // Reset after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);

    } catch (error) {
      console.error('Error adding email:', error);
      setStatus('error');
      setMessage('Something went wrong. Please try again.');

      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="email-collector">
      <div className="form-fields">
        {showName && (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="email-input"
            disabled={status === 'loading'}
          />
        )}

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className="email-input"
          disabled={status === 'loading'}
          required
        />

        <button
          type="submit"
          className="submit-btn"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? (
            <>
              <span className="spinner"></span>
              Submitting...
            </>
          ) : (
            buttonText
          )}
        </button>
      </div>

      {message && (
        <div className={`message ${status === 'success' ? 'success' : 'error'}`}>
          {message}
        </div>
      )}

      <style>{`
        .email-collector {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
        }

        .form-fields {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .email-input {
          width: 100%;
          padding: 1rem 1.5rem;
          background: rgba(15, 23, 42, 0.5);
          border: 2px solid rgba(6, 182, 212, 0.3);
          border-radius: 0.75rem;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .email-input:focus {
          outline: none;
          border-color: rgb(6, 182, 212);
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
        }

        .email-input::placeholder {
          color: rgba(148, 163, 184, 0.6);
        }

        .email-input:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .submit-btn {
          width: 100%;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, rgb(6, 182, 212), rgb(59, 130, 246));
          color: white;
          font-weight: 700;
          font-size: 1.1rem;
          border: none;
          border-radius: 0.75rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(6, 182, 212, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(6, 182, 212, 0.5);
        }

        .submit-btn:active:not(:disabled) {
          transform: translateY(0);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .message {
          margin-top: 1rem;
          padding: 1rem;
          border-radius: 0.5rem;
          font-weight: 500;
          text-align: center;
          animation: slideIn 0.3s ease-out;
        }

        .message.success {
          background: rgba(34, 197, 94, 0.2);
          border: 1px solid rgba(34, 197, 94, 0.5);
          color: rgb(134, 239, 172);
        }

        .message.error {
          background: rgba(239, 68, 68, 0.2);
          border: 1px solid rgba(239, 68, 68, 0.5);
          color: rgb(252, 165, 165);
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (min-width: 640px) {
          .form-fields {
            flex-direction: row;
          }

          .email-input {
            flex: 1;
          }

          .submit-btn {
            width: auto;
            white-space: nowrap;
          }
        }
      `}</style>
    </form>
  );
}
